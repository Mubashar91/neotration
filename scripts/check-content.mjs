import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { articles, paths, render } from '../dist-ssr/prerender.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const expected = ['glp-1-friendly-meal-plan', 'fibermaxxing-meal-plan', 'high-protein-breakfast-meal-prep', 'dense-bean-salad-meal-prep', 'budget-high-protein-meal-prep', 'ninja-creami-protein-ice-cream', 'air-fryer-high-protein-dinners', 'anti-inflammatory-high-protein-meal-plan', 'chicken-potato-meal-prep-bowls', 'no-reheat-high-protein-lunches', 'rotisserie-chicken-meal-prep', 'freezer-meal-prep-weight-loss', 'five-ingredient-high-protein-dinners', 'january-reset-dinner-rotation', 'high-protein-high-fiber-snack-boxes'];
const catalog = new Set(articles.map(article => article.slug));
assert.equal(catalog.size, articles.length, 'Article slugs must be unique');
const site = 'https://neotration.vercel.app';
const sitemap = await readFile(path.join(root, 'dist/sitemap.xml'), 'utf8');
const feed = await readFile(path.join(root, 'dist/feed.xml'), 'utf8');
const validPaths = new Set(paths);
const unescape = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

for (const slug of expected) {
  const article = articles.find(item => item.slug === slug);
  assert(article, `Missing research topic: ${slug}`);
  assert(article.content.includes('## Sources'), `Missing visible sources: ${slug}`);
  for (const match of article.content.matchAll(/\]\((\/[^)]+)\)/g)) {
    assert(validPaths.has(match[1].split(/[?#]/)[0]), `Broken internal content link: ${slug} -> ${match[1]}`);
  }
}

for (const article of articles) {
  const route = `/blog/${article.slug}`;
  const html = await readFile(path.join(root, 'dist', route, 'index.html'), 'utf8');
  const head = html.split('</head>')[0];
  assert.equal((head.match(/rel="canonical"/g) ?? []).length, 1, `Duplicate canonical: ${route}`);
  assert(head.includes(`href="${site}${route}"`), `Wrong canonical: ${route}`);
  assert(head.includes('property="og:type" content="article"'), `Wrong OG type: ${route}`);
  assert(head.includes('property="article:published_time"'), `Missing Rich Pin article metadata: ${route}`);
  assert.equal((head.match(/<title[ >]/g) ?? []).length, 1, `Duplicate title: ${route}`);
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, `Missing or duplicate H1: ${route}`);
  assert(html.includes('Save to Pinterest'), `Missing Save link: ${route}`);
  assert(!html.includes('<!--app-head-start-->'), `Unprocessed template: ${route}`);
  assert(!html.includes('/src/assets/'), `Unbuilt asset path: ${route}`);
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(match => {
    const value = JSON.parse(match[1]);
    return Array.isArray(value) ? value : [value];
  });
  assert.equal(schemas.filter(schema => schema['@type'] === 'BlogPosting').length, 1, `Article schema: ${route}`);
  assert.equal(schemas.filter(schema => schema['@type'] === 'Organization').length, 1, `Duplicate global organization: ${route}`);
  for (const schema of schemas) {
    if (schema['@type'] === 'FAQPage') {
      for (const question of schema.mainEntity) {
        assert(unescape(html).includes(question.name), `Hidden FAQ question: ${route}`);
        assert(unescape(html).includes(question.acceptedAnswer.text), `Hidden FAQ answer: ${route}`);
      }
    }
    if (schema['@type'] === 'Recipe') assert(schema.image?.length, `Recipe needs a finished-dish photo: ${route}`);
  }
  assert(sitemap.includes(`${site}${route}</loc>`), `Missing sitemap URL: ${route}`);
  assert(feed.includes(`${site}${route}</link>`), `Missing feed URL: ${route}`);
  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)(?:[?#][^"]*)?"/g)) await access(path.join(root, 'dist', match[1]));
}

const missing = render('/blog/this-article-does-not-exist');
assert(missing.head.includes('noindex'), 'Unknown article should be noindex');
assert(missing.html.includes('Page Not Found'), 'Unknown article should render a useful 404, without throwing');
const notFound = await readFile(path.join(root, 'dist/404.html'), 'utf8');
assert(notFound.includes('noindex'), 'Static 404 must be noindex');
assert(!feed.includes('ultimate-health-journey-2025'), 'Feed must not advertise an unregistered article');
console.log(`Passed: 15 research topics, ${articles.length} static article pages, metadata/schema parity, internal article links, sitemap/feed, assets, and unknown-article handling.`);

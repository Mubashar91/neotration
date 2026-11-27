import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { articles, paths, render, articleDate } from '../dist-ssr/prerender.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const site = 'https://neotration.vercel.app';
const template = await readFile(path.join(root, 'dist/index.html'), 'utf8');
const escapeXml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]);

if (new Set(paths).size !== paths.length) throw new Error('Duplicate output route');
for (const route of paths) {
  const { html, head } = render(route);
  if (!head.includes('<title') || !html.includes('<main')) throw new Error(`Empty rendered page: ${route}`);
  const output = template
    .replace(/<!--app-head-start-->[\s\S]*?<!--app-head-end-->/, () => head)
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  const directory = path.join(root, 'dist', route);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), output);
}
const missing = render('/page-not-found');
await writeFile(path.join(root, 'dist/404.html'), template
  .replace(/<!--app-head-start-->[\s\S]*?<!--app-head-end-->/, () => missing.head)
  .replace('<div id="root"></div>', () => `<div id="root">${missing.html}</div>`));

// Keep committed discovery files and deployment output in sync with the catalog.
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(route => {
  const article = articles.find(item => route === `/blog/${item.slug}`);
  const modified = article ? `\n    <lastmod>${articleDate(article.updatedAt ?? article.date).toISOString().slice(0, 10)}</lastmod>` : '';
  return `  <url>\n    <loc>${escapeXml(site + route)}</loc>${modified}\n  </url>`;
}).join('\n')}\n</urlset>\n`;
const newest = Math.max(...articles.map(article => articleDate(article.updatedAt ?? article.date).getTime()));
const feed = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>
  <title>FitJourney USA Blog</title><link>${site}/blog</link>
  <description>Practical nutrition, recipes, and meal-planning guides</description><language>en-us</language>
  <lastBuildDate>${new Date(newest).toUTCString()}</lastBuildDate>
${[...articles].sort((a, b) => articleDate(b.date) - articleDate(a.date)).map(article => `  <item>
    <title>${escapeXml(article.title)}</title>
    <link>${site}/blog/${article.slug}</link><guid isPermaLink="true">${site}/blog/${article.slug}</guid>
    <pubDate>${articleDate(article.date).toUTCString()}</pubDate>
    <description>${escapeXml(article.excerpt)}</description>
  </item>`).join('\n')}
</channel></rss>\n`;
for (const directory of ['public', 'dist']) {
  await writeFile(path.join(root, directory, 'sitemap.xml'), sitemap);
  await writeFile(path.join(root, directory, 'feed.xml'), feed);
}
console.log(`Prerendered ${paths.length} pages, including ${articles.length} articles; synchronized sitemap and feed.`);

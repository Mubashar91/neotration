import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import NotFound from '@/pages/NotFound';
import ArticleRecipes from '@/components/ArticleRecipes';
import { renderArticleContent } from '@/components/ArticleContent';
import { blogArticles, type BlogArticle } from '@/data/blogArticles';
import { articleRecipes } from '@/data/articleRecipes';
import { getArticleSchemas, SITE_URL, absoluteUrl } from '@/lib/articleSchema';
import { ArrowLeft, Clock, Link as LinkIcon, Share2 } from 'lucide-react';

function ArticlePage({ article }: { article: BlogArticle }) {
  const [progress, setProgress] = useState(0);
  const [copyStatus, setCopyStatus] = useState('');
  const url = `${SITE_URL}/blog/${article.slug}`;
  const image = absoluteUrl(article.image);
  const recipes = articleRecipes[article.slug] ?? [];
  const { elements, headings } = useMemo(() => renderArticleContent(article.content), [article.content]);
  const related = useMemo(() => blogArticles
    .filter(a => a.slug !== article.slug && a.categorySlug === article.categorySlug)
    .map((a, index) => ({ article: a, index, score: (a.tags ?? []).filter(tag => article.tags?.includes(tag)).length }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 4).map(a => a.article), [article]);
  const index = blogArticles.findIndex(a => a.slug === article.slug);
  const previous = blogArticles[index - 1];
  const next = blogArticles[index + 1];

  useEffect(() => {
    setCopyStatus('');
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(total > 0 ? Math.min(100, Math.max(0, window.scrollY / total * 100)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [article.slug]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopyStatus('Link copied');
    } catch {
      setCopyStatus('Copy is unavailable. Use your browser address bar to copy the link.');
    }
  }

  return <div className="min-h-screen bg-background">
    <SEO title={article.title} description={article.seoDescription ?? article.excerpt}
      keywords={article.keywords} canonicalUrl={`/blog/${article.slug}`} ogType="article"
      ogImage={article.image} author={article.author === 'FitJourney Team' ? 'FitJourney USA' : article.author}
      structuredData={getArticleSchemas(article)} />
    <Helmet>
      <meta property="article:published_time" content={new Date(article.date).toISOString()} />
      <meta property="article:modified_time" content={new Date(article.updatedAt ?? article.date).toISOString()} />
      <meta property="article:author" content={article.author === 'FitJourney Team' ? 'FitJourney USA' : article.author} />
      <meta property="article:section" content={article.category} />
      {previous && <link rel="prev" href={`${SITE_URL}/blog/${previous.slug}`} />}
      {next && <link rel="next" href={`${SITE_URL}/blog/${next.slug}`} />}
    </Helmet>
    <div aria-hidden="true" className="fixed top-0 left-0 right-0 h-1 z-[60] print:hidden">
      <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
    </div>
    <Navbar />
    <main className="py-10 sm:py-14">
      <article className="container mx-auto px-4 max-w-5xl">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground flex flex-wrap gap-2 print:hidden">
          <Link to="/">Home</Link><span>/</span><Link to="/blog">Blog</Link><span>/</span><span>{article.title}</span>
        </nav>
        <Link to="/blog" className="inline-flex gap-2 items-center text-primary mb-6 print:hidden"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
        <div className="rounded-2xl border shadow-card overflow-hidden">
          <img src={article.image} alt={article.imageAlt ?? article.title} width={1200} height={630}
            fetchPriority="high" decoding="async" className="w-full max-h-[26rem] object-cover print:hidden"
            onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = '/placeholder.svg'; }} />
          <header className="p-5 sm:p-8 space-y-4">
            <p className="text-sm text-muted-foreground">{article.category} · <time dateTime={new Date(article.date).toISOString()}>{article.date}</time></p>
            <h1 className="font-poppins text-2xl sm:text-4xl font-bold leading-tight">{article.title}</h1>
            <p className="text-sm text-muted-foreground">
              By <Link to="/about" className="text-primary underline">{article.author === 'FitJourney Team' ? 'FitJourney editorial team' : article.author}</Link>
              {article.updatedAt && <> · Updated <time dateTime={new Date(article.updatedAt).toISOString()}>{article.updatedAt}</time></>}
              <span className="inline-flex items-center gap-1 ml-3"><Clock className="w-4 h-4" />{article.readTime}</span>
            </p>
            <div className="flex flex-wrap gap-2 print:hidden">
              {article.tags?.map(tag => <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`} className="rounded-full border px-3 py-2 text-sm hover:text-primary">{tag}</Link>)}
            </div>
            <div className="flex flex-wrap items-center gap-3 print:hidden">
              <span className="inline-flex gap-1 items-center text-sm"><Share2 className="w-4 h-4" /> Share</span>
              <a className="rounded-lg bg-[#bd081c] text-white px-4 py-2 text-sm font-semibold"
                href={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(image)}&description=${encodeURIComponent(article.title + ' — ' + article.excerpt)}`}
                target="_blank" rel="noopener noreferrer">Save to Pinterest</a>
              <a className="text-primary underline" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer">X</a>
              <a className="text-primary underline" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a className="text-primary underline" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <button type="button" onClick={copyLink} className="inline-flex gap-2 items-center rounded-lg border px-3 py-2 text-sm"><LinkIcon className="w-4 h-4" />Copy link</button>
            </div>
            <p role="status" className="text-sm text-muted-foreground print:hidden">{copyStatus}</p>
            {recipes.length > 0 && <a href="#recipe-cards" className="inline-block rounded-lg border px-4 py-2 font-semibold text-primary print:hidden">Jump to printable recipes</a>}
          </header>
          <div className="px-5 pb-8 sm:px-8 space-y-8">
            <section aria-label="Quick summary" className="rounded-xl border bg-muted/30 p-5">
              <h2 className="font-poppins text-lg font-semibold mb-2">Quick summary</h2>
              <p>{article.seoDescription ?? article.excerpt}</p>
            </section>
            <aside className="rounded-xl border p-5 text-sm space-y-2">
              <p><strong>General information:</strong> Meal ideas and nutrition estimates are educational and do not replace individual medical or dietary advice. Adjust portions to your needs.</p>
              <p>Clinical review is not claimed for this article. <Link to="/disclaimer" className="text-primary underline">Read our health disclaimer</Link> and <Link to="/about" className="text-primary underline">about the site</Link>.</p>
              {recipes.length > 0 && <p>Cover photography is illustrative. These recipes do not claim first-hand kitchen testing; calculated nutrition and current store prices should be checked against your ingredients.</p>}
            </aside>
            <div className="grid lg:grid-cols-12 gap-7 items-start">
              {headings.length > 0 && <aside className="lg:col-span-4 lg:sticky lg:top-24 print:hidden">
                <nav aria-label="Table of contents" className="rounded-xl border bg-muted/20 p-4">
                  <h2 className="font-semibold mb-3">In this article</h2>
                  <ul className="space-y-2 max-h-[60vh] overflow-auto">
                    {headings.map(heading => <li key={heading.id} className={heading.level === 3 ? 'ml-3' : ''}>
                      <a href={`#${heading.id}`} className="text-sm text-primary hover:underline">{heading.text.replace(/\*\*/g, '')}</a>
                    </li>)}
                    {recipes.length > 0 && <li><a href="#recipe-cards" className="text-sm text-primary hover:underline">Printable recipes</a></li>}
                  </ul>
                </nav>
              </aside>}
              <div className={headings.length ? 'lg:col-span-8 min-w-0 space-y-4' : 'lg:col-span-12 min-w-0 space-y-4'}>{elements}</div>
            </div>
            {recipes.length > 0 && <ArticleRecipes recipes={recipes} />}
            {!!article.faqs?.length && <section className="space-y-4" aria-label="More questions and answers">
              <h2 className="font-poppins text-xl font-semibold">More questions and answers</h2>
              {article.faqs.map(faq => <div key={faq.question}><h3 className="font-semibold">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>)}
            </section>}
            <div className="grid sm:grid-cols-2 gap-4 print:hidden">
              <Link to="/calculator" className="rounded-xl border p-4 text-primary font-semibold">Estimate your daily calorie needs</Link>
              <Link to="/food" className="rounded-xl border p-4 text-primary font-semibold">Explore food nutrition facts</Link>
            </div>
            <section className="border-t pt-6 print:hidden">
              <h2 className="font-poppins text-xl font-semibold mb-4">Related articles</h2>
              <div className="grid sm:grid-cols-2 gap-4">{related.map(item => <Link key={item.slug} to={`/blog/${item.slug}`} className="rounded-xl border overflow-hidden hover:border-primary">
                <img src={item.image} alt={item.imageAlt ?? item.title} width={600} height={315} loading="lazy" decoding="async" className="h-32 w-full object-cover" />
                <div className="p-4 font-semibold">{item.title}</div>
              </Link>)}</div>
            </section>
            <nav aria-label="Article navigation" className="grid sm:grid-cols-2 gap-4 border-t pt-6 print:hidden">
              <div>{previous && <Link to={`/blog/${previous.slug}`} className="text-primary">Previous: {previous.title}</Link>}</div>
              <div>{next && <Link to={`/blog/${next.slug}`} className="text-primary">Next: {next.title}</Link>}</div>
            </nav>
            <section className="rounded-xl border p-5 bg-primary/5 print:hidden">
              <h2 className="font-poppins text-xl font-semibold mb-2">Get weekly nutrition & workout tips</h2>
              <p className="mb-3">One practical email to help you stay consistent.</p>
              <form action="https://formspree.io/f/xbldqrkg" method="POST" className="flex flex-col sm:flex-row gap-2">
                <label className="flex-1"><span className="sr-only">Email address</span><input type="email" name="email" required placeholder="Your email" className="w-full border rounded-lg px-3 py-2" /></label>
                <button type="submit" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold">Subscribe</button>
              </form>
            </section>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </div>;
}

export default function BlogDetail() {
  const { slug } = useParams();
  const article = blogArticles.find(item => item.slug === slug);
  return article ? <ArticlePage key={article.slug} article={article} /> : <NotFound />;
}

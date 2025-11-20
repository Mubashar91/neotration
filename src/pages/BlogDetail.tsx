import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";

const BlogDetail = () => {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug);

  // Note: do NOT early-return before hooks are declared to avoid conditional hook calls.

  const siteUrl = "https://neotration.vercel.app";
  const fullUrl = `${siteUrl}/blog/${article.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    url: fullUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': fullUrl },
    image: article.image,
    author: { '@type': 'Organization', name: 'FitJourney USA' }
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: '/blog' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `/blog/${article.slug}` }
    ]
  };

  // slugify helper for heading anchors
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  // Basic markdown-ish renderer for headings and lists (returns elements and heading anchors)
  const renderContent = (content: string) => {
    const lines = content.split(/\r?\n/);
    const elements: JSX.Element[] = [];
    const headings: { id: string; text: string; level: 2 | 3 }[] = [];
    let listBuffer: string[] = [];
    let isOrdered = false;

    const flushList = () => {
      if (listBuffer.length === 0) return;
      const items = listBuffer.map((item, idx) => (
        <li key={`li-${elements.length}-${idx}`} className="ml-6 list-disc marker:text-primary">
          {item}
        </li>
      ));
      elements.push(
        <ul key={`ul-${elements.length}`} className="space-y-1 my-2">
          {items}
        </ul>
      );
      listBuffer = [];
      isOrdered = false;
    };

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed === "") {
        flushList();
        elements.push(<div key={`sp-${elements.length}`} className="h-2" />);
        continue;
      }

      if (trimmed.startsWith("## ")) {
        flushList();
        const text = trimmed.replace(/^##\s+/, "");
        const id = slugify(text);
        headings.push({ id, text, level: 2 });
        elements.push(
          <h2 id={id} key={`h2-${elements.length}`} className="font-poppins text-xl sm:text-2xl font-bold text-foreground mt-6 mb-3 scroll-mt-24">
            {text}
          </h2>
        );
        continue;
      }

      if (trimmed.startsWith("### ")) {
        flushList();
        const text = trimmed.replace(/^###\s+/, "");
        const id = slugify(text);
        headings.push({ id, text, level: 3 });
        elements.push(
          <h3 id={id} key={`h3-${elements.length}`} className="font-poppins text-lg sm:text-xl font-semibold text-foreground mt-4 mb-2 scroll-mt-24">
            {text}
          </h3>
        );
        continue;
      }

      if (/^\d+\./.test(trimmed)) {
        // ordered list -> treat as bullets for simplicity
        listBuffer.push(trimmed.replace(/^\d+\.\s*/, ""));
        isOrdered = true;
        continue;
      }

      if (trimmed.startsWith("- ")) {
        listBuffer.push(trimmed.slice(2));
        continue;
      }

      // paragraph
      flushList();
      elements.push(
        <p key={`p-${elements.length}`} className="font-lato text-base text-muted-foreground leading-relaxed">
          {trimmed}
        </p>
      );
    }
    flushList();
    return { elements, headings };
  };

  // Build FAQ schema if content contains an H2 "FAQs" and bullet lines
  const faqSchema = useMemo(() => {
    const contentStr = article?.content ?? "";
    const lines = contentStr.split(/\r?\n/);
    const faqs: { question: string; answer: string }[] = [];
    let inFaq = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith("## ") && line.replace(/^##\s+/, "").toLowerCase().includes("faq")) {
        inFaq = true;
        continue;
      }
      if (inFaq && line.startsWith("## ")) break; // next section ends FAQ
      if (inFaq && (line.startsWith("-") || /^\d+\./.test(line))) {
        const q = line.replace(/^(-|\d+\.)\s*/, "");
        const parts = q.split("?");
        if (parts.length > 1) {
          const question = parts[0].trim() + "?";
          const answer = parts.slice(1).join("?").trim() || "";
          faqs.push({ question, answer: answer || "See article section for details." });
        }
      }
    }
    if (faqs.length === 0) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
    } as const;
  }, [article?.content]);

  // Reading progress bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const scrolled = window.scrollY;
      setProgress(total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${article.title} | ${article.category} Tips`}
        description={article.seoDescription ?? article.excerpt}
        keywords={article.keywords}
        canonicalUrl={`/blog/${article.slug}`}
        ogType="article"
        ogImage={article.image}
        structuredData={[articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]}
      />
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-40 bg-transparent">
        <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Visual breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:underline">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{article.title}</span>
          </nav>
          <Link to="/blog" className="inline-flex items-center gap-2 font-lato text-base font-medium text-primary hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <Card className="overflow-hidden border-2 border-border shadow-card">
            <div className="h-56 sm:h-72 md:h-96 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover"
                width={1200}
                height={630}
              />
            </div>
            
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="font-poppins text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="font-lato text-xs text-muted-foreground">{article.date}</span>
              </div>
              <h1 className="font-poppins text-2xl sm:text-3xl font-bold text-foreground mt-4">
                {article.title}
              </h1>
              <div className="font-lato text-xs sm:text-sm text-muted-foreground mt-1">
                <span>By {article.author ?? 'FitJourney USA'}</span>
                {article.updatedAt && <span> • Updated {article.updatedAt}</span>}
              </div>
              <div className="font-lato text-sm text-muted-foreground flex items-center gap-2 mt-2">
                <Clock className="h-4 w-4" /> {article.readTime}
              </div>
              {/* Tag chips */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {article.tags.map((t) => (
                    <Link key={t} to={`/blog?tag=${encodeURIComponent(t)}`} className="text-xs px-2 py-1 border rounded-full hover:border-primary hover:text-primary">
                      #{t}
                    </Link>
                  ))}
                </div>
              )}

              {/* Share buttons */}
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><Share2 className="h-4 w-4" /> Share:</span>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://neotration.vercel.app/blog/${article.slug}`)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1"><Twitter className="h-4 w-4" /> X</a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://neotration.vercel.app/blog/${article.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1"><Facebook className="h-4 w-4" /> Facebook</a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://neotration.vercel.app/blog/${article.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                <button type="button" onClick={() => navigator.clipboard.writeText(`https://neotration.vercel.app/blog/${article.slug}`)} className="text-primary hover:underline inline-flex items-center gap-1"><LinkIcon className="h-4 w-4" /> Copy link</button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Summary box */}
              <div className="rounded-md border bg-muted/30 p-4">
                <h2 className="font-poppins text-base sm:text-lg font-semibold mb-2">Summary</h2>
                <p className="font-lato text-sm text-muted-foreground">{article.seoDescription ?? article.excerpt}</p>
              </div>

              {/* Author bio */}
              <div className="flex items-start gap-3 p-4 border rounded-md">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-poppins text-sm font-bold text-primary">
                  {article.author?.split(' ').map(w => w[0]).join('').slice(0,2)}
                </div>
                <div>
                  <div className="font-poppins font-semibold text-foreground">{article.author ?? 'FitJourney USA'}</div>
                  <p className="font-lato text-sm text-muted-foreground">
                    {(() => {
                      switch (article.author) {
                        case 'Coach Alex':
                          return 'Strength & fat-loss coach focused on simple, evidence-based strategies for busy people.';
                        case 'Coach Mia':
                          return 'Behavior and habit coach helping clients build sustainable routines without burnout.';
                        case 'Chef Leo':
                          return 'Recipe creator specializing in quick, high-protein meals that taste great.';
                        default:
                          return 'The FitJourney editorial team brings practical, science-backed guidance for everyday Americans.';
                      }
                    })()}
                  </p>
                </div>
              </div>
              {/* Table of contents */}
              {(() => {
                const { elements, headings } = renderContent(article.content);
                return (
                  <>
                    {headings.length > 0 && (
                      <div className="rounded-md border p-4 bg-muted/30">
                        <h2 className="font-poppins text-base sm:text-lg font-semibold mb-2">Table of contents</h2>
                        <ul className="space-y-1">
                          {headings.map((h, idx) => (
                            <li key={`toc-${idx}`} className={h.level === 3 ? 'ml-4' : ''}>
                              <a href={`#${h.id}`} className="text-primary hover:underline">
                                {h.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Content */}
                    <div className="space-y-3">{elements}</div>
                  </>
                );
              })()}

              {/* Inline tool CTAs */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link to="/calculator" className="block group border rounded-md p-4 hover:border-primary transition">
                  <div className="font-poppins font-semibold text-foreground group-hover:text-primary">Calculate Your Daily Calories</div>
                  <p className="text-sm text-muted-foreground">Use our free calorie calculator to set your target in minutes.</p>
                </Link>
                <Link to="/food" className="block group border rounded-md p-4 hover:border-primary transition">
                  <div className="font-poppins font-semibold text-foreground group-hover:text-primary">Explore the Food Guide</div>
                  <p className="text-sm text-muted-foreground">Find protein-rich foods and meal ideas to hit your goals.</p>
                </Link>
              </div>
              {/* Related Articles */}
              <div className="mt-8 pt-6 border-t">
                <h2 className="font-poppins text-xl font-semibold mb-3">Related Articles</h2>
                <ul className="list-disc ml-6 space-y-2">
                  {blogArticles
                    .filter((a) => a.slug !== article.slug && a.categorySlug === article.categorySlug)
                    .slice(0, 3)
                    .map((a) => (
                      <li key={a.slug}>
                        <Link to={`/blog/${a.slug}`} className="text-primary hover:underline">
                          {a.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* External Helpful Resources */}
              <div className="mt-6">
                <h2 className="font-poppins text-xl font-semibold mb-3">Helpful Resources</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    <a href="https://www.cdc.gov/healthyweight/index.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      CDC Healthy Weight
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/index.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      NIH Weight Management
                    </a>
                  </li>
                  <li>
                    <a href="https://ods.od.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      NIH Office of Dietary Supplements
                    </a>
                  </li>
                </ul>
              </div>

              {/* Next/Previous navigation */}
              <div className="mt-8 pt-6 border-t grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(() => {
                  const idx = blogArticles.findIndex((a) => a.slug === article.slug);
                  const prev = idx > 0 ? blogArticles[idx - 1] : undefined;
                  const next = idx < blogArticles.length - 1 ? blogArticles[idx + 1] : undefined;
                  return (
                    <>
                      <div>
                        {prev && (
                          <Link to={`/blog/${prev.slug}`} className="block group">
                            <span className="text-xs text-muted-foreground">Previous</span>
                            <div className="font-poppins font-semibold text-foreground group-hover:text-primary">{prev.title}</div>
                          </Link>
                        )}
                      </div>
                      <div className="text-right">
                        {next && (
                          <Link to={`/blog/${next.slug}`} className="block group">
                            <span className="text-xs text-muted-foreground">Next</span>
                            <div className="font-poppins font-semibold text-foreground group-hover:text-primary">{next.title}</div>
                          </Link>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Newsletter CTA */}
              <div className="mt-8 border rounded-lg p-5 bg-primary/5">
                <h2 className="font-poppins text-xl font-semibold mb-2">Get weekly nutrition & workout tips</h2>
                <p className="font-lato text-sm text-muted-foreground mb-3">No spam. One practical email to keep you consistent.</p>
                <form action="https://formspree.io/f/xbldqrkg" method="POST" className="flex flex-col sm:flex-row gap-2">
                  <input type="email" name="email" required placeholder="Your email" className="flex-1 border rounded-md px-3 py-2" />
                  <button type="submit" className="px-4 py-2 rounded-md bg-primary text-white font-semibold">Subscribe</button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;

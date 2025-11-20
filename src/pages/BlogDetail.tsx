import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";

const BlogDetail = () => {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-poppins text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog" className="inline-flex items-center gap-2 font-lato text-base font-semibold text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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

  // Basic markdown-ish renderer for headings and lists
  const renderContent = (content: string) => {
    const lines = content.split(/\r?\n/);
    const elements: JSX.Element[] = [];
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
        elements.push(
          <h2 key={`h2-${elements.length}`} className="font-poppins text-xl sm:text-2xl font-bold text-foreground mt-6 mb-3">
            {trimmed.replace(/^##\s+/, "")}
          </h2>
        );
        continue;
      }

      if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={`h3-${elements.length}`} className="font-poppins text-lg sm:text-xl font-semibold text-foreground mt-4 mb-2">
            {trimmed.replace(/^###\s+/, "")}
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
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${article.title} - FitJourney USA`}
        description={article.excerpt}
        keywords={article.keywords}
        canonicalUrl={`/blog/${article.slug}`}
        ogImage={article.image}
        structuredData={[articleSchema, breadcrumbSchema]}
      />
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
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
              <CardTitle className="font-poppins text-2xl sm:text-3xl font-bold text-foreground mt-4">
                {article.title}
              </CardTitle>
              <div className="font-lato text-sm text-muted-foreground flex items-center gap-2 mt-2">
                <Clock className="h-4 w-4" /> {article.readTime}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {renderContent(article.content)}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;

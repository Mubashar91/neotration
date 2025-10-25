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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: new Date(article.date).toISOString(),
    image: article.image,
    author: { '@type': 'Organization', name: 'FitJourney USA' }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${article.title} - FitJourney USA`}
        description={article.excerpt}
        keywords={article.keywords}
        canonicalUrl={`/blog/${article.slug}`}
        structuredData={[articleSchema]}
      />
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 font-lato text-base font-medium text-primary hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <Card className="overflow-hidden border-2 border-border shadow-card">
            <div className="h-56 sm:h-72 md:h-96 overflow-hidden">
              <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
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
            <CardContent className="space-y-4">
              <p className="font-lato text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {article.content}
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;

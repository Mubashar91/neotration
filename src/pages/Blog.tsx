import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";

const Blog = () => {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'FitJourney USA Blog',
    description: 'Expert advice on nutrition, weight loss, and healthy living',
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: '/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: '/blog'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Nutrition & Calorie Tracker Blog - FitJourney USA"
        description="Explore expert articles on using a calorie calculator, nutrition tracker app, and nutrition calculator to support your healthy lifestyle, meal planning, and weight loss journey."
        keywords="calorie calculator, nutrition app, nutrition calculator, calorie counting app, nutrition tracker app, healthy eating, meal planning, weight loss tips"
        canonicalUrl="/blog"
        structuredData={[blogSchema, breadcrumbSchema]}
      />
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4 animate-fade-in">
            <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-foreground md:text-5xl">
              Health &{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">Nutrition Tracker Blog</span>
            </h1>
            <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Expert advice and practical tips on using a <strong>calorie calculator</strong>, <strong>nutrition app</strong>, and <strong>nutrition calculator</strong> to track meals, improve your diet, and support your healthy lifestyle and weight loss journey.
            </p>
          </div>

          {/* Featured Post */}
          <Card className="mb-8 sm:mb-12 overflow-hidden border-2 border-primary shadow-hover animate-scale-in">
            <div className="grid md:grid-cols-2 gap-0 md:gap-6">
              <Link to={`/blog/${blogArticles[0].slug}`} className="h-48 sm:h-64 md:h-auto overflow-hidden block">
                <img
                  src={blogArticles[0].image}
                  alt={blogArticles[0].title}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </Link>
              <CardContent className="p-6 sm:p-8 flex flex-col justify-center space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-poppins text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="font-lato text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    8 min read
                  </span>
                </div>
                <Link to={`/blog/${blogArticles[0].slug}`} className="group inline-block">
                  <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {blogArticles[0].title}
                  </h2>
                </Link>
                <p className="font-lato text-sm sm:text-base text-muted-foreground">
                  {blogArticles[0].excerpt}
                </p>
                <Link to={`/blog/${blogArticles[0].slug}`} className="inline-flex items-center gap-2 font-lato text-sm sm:text-base font-semibold text-primary hover:gap-3 transition-all">
                  Read Full Article
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.slice(1).map((article, index) => (
              <Card key={index} className="group overflow-hidden border-2 border-border bg-card shadow-card transition-all hover:shadow-hover hover:-translate-y-2 hover:border-primary">
                <Link to={`/blog/${article.slug}`} className="h-40 sm:h-48 overflow-hidden block">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
                <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-poppins text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="font-lato text-xs text-muted-foreground">
                      {article.date}
                    </span>
                  </div>
                  <Link to={`/blog/${article.slug}`} className="group inline-block">
                    <h3 className="font-poppins text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="font-lato text-sm text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-lato text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                    <Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-2 font-lato text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

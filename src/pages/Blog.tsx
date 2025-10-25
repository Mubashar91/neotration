import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";

const blogArticles = [
  {
    title: "How to Eat Healthy on a Budget in 2025",
    excerpt: "Discover practical tips and strategies for maintaining a nutritious diet without breaking the bank. Learn about affordable superfoods and meal planning techniques.",
    category: "Nutrition Tips",
    readTime: "5 min read",
    date: "Jan 15, 2025"
  },
  {
    title: "Top 10 U.S. Superfoods You Should Be Eating",
    excerpt: "Learn about nutrient-dense foods that are easily available across America and how to incorporate them into your daily meals for maximum health benefits.",
    category: "Food Guide",
    readTime: "7 min read",
    date: "Jan 12, 2025"
  },
  {
    title: "How to Lose Weight Safely and Sustainably",
    excerpt: "Evidence-based strategies for healthy, long-term weight management that actually work. Avoid fad diets and learn the science of sustainable weight loss.",
    category: "Weight Loss",
    readTime: "8 min read",
    date: "Jan 10, 2025"
  },
  {
    title: "The Complete Guide to Meal Prepping for Beginners",
    excerpt: "Master the art of meal preparation with our step-by-step guide. Save time, money, and stay on track with your nutrition goals effortlessly.",
    category: "Meal Planning",
    readTime: "10 min read",
    date: "Jan 8, 2025"
  },
  {
    title: "Understanding Macros: Protein, Carbs, and Fats Explained",
    excerpt: "Demystify macronutrients and learn how to balance your diet for optimal health and performance. Get the facts without the complicated science jargon.",
    category: "Nutrition Science",
    readTime: "6 min read",
    date: "Jan 5, 2025"
  },
  {
    title: "Best Pre and Post-Workout Nutrition Strategies",
    excerpt: "Maximize your workout results with proper nutrition timing. Learn what to eat before and after exercise for better performance and recovery.",
    category: "Fitness Nutrition",
    readTime: "7 min read",
    date: "Jan 3, 2025"
  }
];

const Blog = () => {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Neotration Blog',
    description: 'AI-powered nutrition, optimization insights, and healthy habits',
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Neotration Blog | AI Nutrition Insights"
        description="Evidence-based articles on AI-powered nutrition, optimization, and healthy habits."
        keywords="AI nutrition blog, personalized diet insights, nutrition analytics, smart meal planning"
        canonicalUrl="/blog"
        structuredData={[blogSchema]}
      />
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4 animate-fade-in">
            <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-foreground md:text-5xl">
              Health &{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Nutrition Blog
              </span>
            </h1>
            <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Expert advice, nutrition tips, and the latest health trends to support your fitness journey
            </p>
          </div>

          {/* Featured Post */}
          <Card className="mb-8 sm:mb-12 overflow-hidden border-2 border-primary shadow-hover animate-scale-in">
            <div className="grid md:grid-cols-2 gap-0 md:gap-6">
              <div className="h-48 sm:h-64 md:h-auto bg-gradient-to-br from-primary-light to-primary/30 flex items-center justify-center">
                <p className="font-poppins text-4xl sm:text-5xl md:text-6xl font-bold text-primary">Featured</p>
              </div>
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
                <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-foreground">
                  The Ultimate Guide to Starting Your Health Journey in 2025
                </h2>
                <p className="font-lato text-sm sm:text-base text-muted-foreground">
                  Everything you need to know about setting realistic health goals, creating sustainable habits, and staying motivated throughout your fitness transformation.
                </p>
                <button className="inline-flex items-center gap-2 font-lato text-sm sm:text-base font-semibold text-primary hover:gap-3 transition-all">
                  Read Full Article
                  <ArrowRight className="h-5 w-5" />
                </button>
              </CardContent>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article, index) => (
              <Card key={index} className="group overflow-hidden border-2 border-border bg-card shadow-card transition-all hover:shadow-hover hover:-translate-y-2 hover:border-primary">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-primary-light via-primary/10 to-secondary/10 flex items-center justify-center">
                  <p className="font-poppins text-4xl sm:text-5xl font-bold text-primary/40">
                    {article.category.charAt(0)}
                  </p>
                </div>
                <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-poppins text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="font-lato text-xs text-muted-foreground">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-poppins text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-lato text-sm text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-lato text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                    <button className="inline-flex items-center gap-2 font-lato text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </button>
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

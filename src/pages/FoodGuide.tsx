import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { foodData } from "@/data/foodData";

const FoodGuide = () => {
  const [filter, setFilter] = useState("all");
  
  const foodGuideSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Healthy Food Guide',
    description: 'Comprehensive guide to healthy foods with nutritional information',
    numberOfItems: foodData.length,
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I choose foods for weight loss vs. gain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use the filters. For weight loss, favor high-protein, lower-calorie foods. For gain, include energy-dense options with healthy fats and carbs.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where do the nutrition values come from?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Values are typical averages for common serving sizes; your brand/package may vary. Always check labels when available.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I track these foods?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use the FitJourney calorie calculator to set targets and log meals. Start with simple repeating meals for consistency.'
        }
      }
    ]
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Food', item: '/food' }
    ]
  };

  const filteredFoods = filter === "all" 
    ? foodData 
    : foodData.filter(food => food.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Healthy Food Guide - FitJourney USA"
        description="Browse our comprehensive database of healthy foods with detailed nutritional information. Learn about calories, proteins, carbs, and fats for hundreds of foods."
        keywords="healthy food guide, nutrition database, nutrition app, calorie calculator, calorie counting app, nutrition tracker app, food calories, protein foods, healthy eating, nutritional information"
        canonicalUrl="/food"
        structuredData={[foodGuideSchema, faqSchema, breadcrumbSchema]}
      />
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4 animate-fade-in">
            <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-foreground md:text-5xl">
              Food{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">Guide & Nutrition Tracker</span>
            </h1>
            <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Discover nutritious foods, track your calories, and optimize your diet with our <strong>calorie calculator</strong> and <strong>nutrition tracker app</strong>.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-2">
            <Button
              onClick={() => setFilter("all")}
              variant={filter === "all" ? "default" : "outline"}
              className={`text-sm sm:text-base ${filter === "all" ? "bg-gradient-hero" : "border-2"}`}
            >
              All Foods
            </Button>
            <Button
              onClick={() => setFilter("lose")}
              variant={filter === "lose" ? "default" : "outline"}
              className={`text-sm sm:text-base ${filter === "lose" ? "bg-gradient-hero" : "border-2"}`}
            >
              Lose Weight (Use Calorie Calculator)
            </Button>
            <Button
              onClick={() => setFilter("maintain")}
              variant={filter === "maintain" ? "default" : "outline"}
              className={`text-sm sm:text-base ${filter === "maintain" ? "bg-gradient-hero" : "border-2"}`}
            >
              Maintain Weight (Nutrition Tracker)
            </Button>
            <Button
              onClick={() => setFilter("gain")}
              variant={filter === "gain" ? "default" : "outline"}
              className={`text-sm sm:text-base ${filter === "gain" ? "bg-gradient-hero" : "border-2"}`}
            >
              Gain Weight
            </Button>
          </div>

          {/* Food Grid */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredFoods.map((food, index) => (
              <Card key={index} className="overflow-hidden border-2 border-border shadow-card transition-all hover:shadow-hover hover:-translate-y-2 hover:border-primary animate-scale-in">
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img
                    src={food.image}
                    alt={`${food.name} - nutrition info, calories, protein, carbs, fat`}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                    width={600}
                    height={400}
                  />
                </div>
                <CardContent className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="font-poppins text-lg sm:text-xl font-bold text-foreground mb-2">
                      {food.name}
                    </h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      {food.benefits} Use our <strong>calorie calculator</strong> and <strong>nutrition tracker app</strong> to track daily intake and reach your fitness goals.
                    </p>
                  </div>
                  
                  <div className="space-y-2 pt-2 border-t border-border">
                    <div className="flex justify-between">
                      <span className="font-lato text-sm text-muted-foreground">Calories:</span>
                      <span className="font-poppins font-semibold text-primary">{food.calories} kcal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-lato text-sm text-muted-foreground">Protein:</span>
                      <span className="font-lato font-semibold">{food.protein}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-lato text-sm text-muted-foreground">Carbs:</span>
                      <span className="font-lato font-semibold">{food.carbs}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-lato text-sm text-muted-foreground">Fat:</span>
                      <span className="font-lato font-semibold">{food.fat}g</span>
                    </div>
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

export default FoodGuide;

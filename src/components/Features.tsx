import { Calculator, Utensils, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Free stock images from Unsplash
const calculatorImg = "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80";
const foodImg = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80";
const successImg = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80";

const features = [
  {
    icon: Calculator,
    title: "Personalized Calorie Calculator",
    description: "Get accurate daily calorie recommendations based on your goals, activity level, and body metrics.",
    image: calculatorImg,
    link: "/calculator"
  },
  {
    icon: Utensils,
    title: "Smart Food Suggestions",
    description: "Discover the perfect foods for your nutrition plan with detailed calorie breakdowns and health benefits.",
    image: foodImg,
    link: "/food"
  },
  {
    icon: Star,
    title: "Real Success Stories",
    description: "Get inspired by real Americans who transformed their health using FitJourney's personalized approach.",
    image: successImg,
    link: "/success-stories"
  }
];

const Features = () => {
  return (
    <section className="py-6 sm:py-10 md:py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 space-y-2 sm:space-y-3">
          <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Simple, effective tools to help you reach your health and fitness goals
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.link}
              className="group block"
            >
              <Card className="h-full overflow-hidden border-2 border-border bg-card shadow-card transition-all hover:shadow-hover hover:-translate-y-2 hover:border-primary">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary-light p-2.5">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-poppins text-base sm:text-lg font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-lato text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

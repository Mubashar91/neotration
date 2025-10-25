import { Calculator, Utensils, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Free stock images from Unsplash
const calculatorImg = "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80";
const foodImg = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80";
const successImg = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80";

const features = [
  {
    icon: Calculator,
    title: "Custom Nutrition Calculator",
    description: (
      <>
        Use our <strong>calorie calculator</strong> and <strong>nutrition calculator</strong> to get tailored daily nutrition targets that match your lifestyle and wellness goals.
      </>
    ),
    image: calculatorImg,
    link: "/calculator"
  },
  {
    icon: Utensils,
    title: "Intelligent Meal Planning",
    description: "Access curated food recommendations with comprehensive nutritional insights designed for your specific needs.",
    image: foodImg,
    link: "/food"
  },
  {
    icon: Star,
    title: "Community Transformations",
    description: "Draw motivation from authentic stories of individuals who achieved lasting wellness through our platform.",
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
            Simple and effective tools including a <strong>calorie calculator</strong>, <strong>nutrition calculator</strong>, and <strong>calorie tracker app</strong> to help you reach your health and fitness goals.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

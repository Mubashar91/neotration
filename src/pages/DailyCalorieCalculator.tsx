import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator as CalcIcon, Calendar, Utensils, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DailyCalorieCalculator = () => {
  const { toast } = useToast();
  
  const calculatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Daily Calorie Calculator - FitJourney USA',
    applicationCategory: 'HealthApplication',
    description: 'Calculate your daily calorie needs based on age, gender, weight, height, activity level, and fitness goals. Free and accurate.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many calories should I eat per day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Daily calorie needs vary based on age, gender, weight, height, and activity level. Most adults need 1,600-3,000 calories per day. Use our calculator for personalized results.'
        }
      },
      {
        '@type': 'Question',
        name: 'What factors affect daily calorie needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Age, gender, weight, height, activity level, and fitness goals all affect your daily calorie needs. Muscle mass and metabolism also play important roles.'
        }
      },
      {
        '@type': 'Question',
        name: 'Should I eat the same calories every day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your weekly average matters most. You can eat slightly more on active days and less on rest days, as long as your weekly total aligns with your goals.'
        }
      }
    ]
  };

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
    activity: "",
    goal: ""
  });

  const [result, setResult] = useState<{
    dailyCalories: number;
    bmr: number;
    protein: number;
    carbs: number;
    fats: number;
    mealSuggestions: Array<{ meal: string; calories: number }>;
  } | null>(null);

  const calculateDailyCalories = () => {
    const { age, gender, weight, height, activity, goal } = formData;
    
    if (!age || !gender || !weight || !height || !activity || !goal) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your daily calorie needs.",
        variant: "destructive"
      });
      return;
    }

    // BMR calculation using Mifflin-St Jeor Equation
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);

    let bmr;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    // Activity multiplier
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };

    const tdee = bmr * activityMultipliers[activity];
    let dailyCalories = tdee;

    // Adjust for goal
    if (goal === "lose") {
      dailyCalories -= 500;
    } else if (goal === "gain") {
      dailyCalories += 500;
    }

    dailyCalories = Math.round(dailyCalories);

    // Macros
    let proteinPercent = 0.30;
    let carbsPercent = 0.40;
    let fatsPercent = 0.30;

    if (goal === "lose") {
      proteinPercent = 0.35;
      carbsPercent = 0.35;
      fatsPercent = 0.30;
    } else if (goal === "gain") {
      proteinPercent = 0.30;
      carbsPercent = 0.45;
      fatsPercent = 0.25;
    }

    const protein = Math.round(dailyCalories * proteinPercent / 4);
    const carbs = Math.round(dailyCalories * carbsPercent / 4);
    const fats = Math.round(dailyCalories * fatsPercent / 9);

    // Meal suggestions based on goal
    let mealSuggestions: Array<{ meal: string; calories: number }> = [];
    
    if (goal === "lose") {
      const breakfastCal = Math.round(dailyCalories * 0.25);
      const lunchCal = Math.round(dailyCalories * 0.35);
      const snackCal = Math.round(dailyCalories * 0.10);
      const dinnerCal = Math.round(dailyCalories * 0.30);
      
      mealSuggestions = [
        { meal: "Breakfast", calories: breakfastCal },
        { meal: "Lunch", calories: lunchCal },
        { meal: "Snack", calories: snackCal },
        { meal: "Dinner", calories: dinnerCal }
      ];
    } else if (goal === "gain") {
      const breakfastCal = Math.round(dailyCalories * 0.25);
      const snack1Cal = Math.round(dailyCalories * 0.10);
      const lunchCal = Math.round(dailyCalories * 0.30);
      const snack2Cal = Math.round(dailyCalories * 0.10);
      const dinnerCal = Math.round(dailyCalories * 0.25);
      
      mealSuggestions = [
        { meal: "Breakfast", calories: breakfastCal },
        { meal: "Mid-Morning Snack", calories: snack1Cal },
        { meal: "Lunch", calories: lunchCal },
        { meal: "Afternoon Snack", calories: snack2Cal },
        { meal: "Dinner", calories: dinnerCal }
      ];
    } else {
      const breakfastCal = Math.round(dailyCalories * 0.25);
      const lunchCal = Math.round(dailyCalories * 0.35);
      const snackCal = Math.round(dailyCalories * 0.10);
      const dinnerCal = Math.round(dailyCalories * 0.30);
      
      mealSuggestions = [
        { meal: "Breakfast", calories: breakfastCal },
        { meal: "Lunch", calories: lunchCal },
        { meal: "Snack", calories: snackCal },
        { meal: "Dinner", calories: dinnerCal }
      ];
    }

    setResult({
      dailyCalories,
      bmr: Math.round(bmr),
      protein,
      carbs,
      fats,
      mealSuggestions
    });

    toast({
      title: "Daily Calories Calculated!",
      description: `You need ${dailyCalories} calories per day for your goal.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Daily Calorie Calculator - How Many Calories Do You Need? | FitJourney USA"
        description="Find out how many calories you need per day based on your age, gender, weight, height, and activity level. Free and accurate daily calorie calculator."
        keywords="daily calorie calculator, how many calories per day, daily calorie needs, calories per day calculator, daily caloric intake, how many calories should i eat"
        canonicalUrl="/daily-calorie-calculator"
        structuredData={[calculatorSchema, faqSchema]}
      />
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="h-10 w-10 text-primary" />
                <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-foreground md:text-5xl">
                  Daily Calorie{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Calculator
                  </span>
                </h1>
              </div>
              <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Calculate exactly how many calories you need per day based on your personal stats and fitness goals. 
                Get a complete meal breakdown to hit your target.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Personalized Results</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Meal Breakdown</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Macro Targets</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {/* Calculator Form */}
              <Card className="border-2 border-border shadow-card animate-scale-in">
                <CardHeader>
                  <CardTitle className="font-poppins text-2xl flex items-center gap-2">
                    <CalcIcon className="h-6 w-6 text-primary" />
                    Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="age" className="font-lato font-semibold">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Enter your age"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender" className="font-lato font-semibold">Gender</Label>
                    <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                      <SelectTrigger className="border-2">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight" className="font-lato font-semibold">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Enter your weight"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="height" className="font-lato font-semibold">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="Enter your height"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="activity" className="font-lato font-semibold">Activity Level</Label>
                    <Select value={formData.activity} onValueChange={(value) => setFormData({ ...formData, activity: value })}>
                      <SelectTrigger className="border-2">
                        <SelectValue placeholder="Select activity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                        <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
                        <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                        <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
                        <SelectItem value="veryActive">Very Active (intense exercise daily)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goal" className="font-lato font-semibold">Fitness Goal</Label>
                    <Select value={formData.goal} onValueChange={(value) => setFormData({ ...formData, goal: value })}>
                      <SelectTrigger className="border-2">
                        <SelectValue placeholder="Select your goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lose">Lose Weight 🔥</SelectItem>
                        <SelectItem value="maintain">Maintain Weight ⚖️</SelectItem>
                        <SelectItem value="gain">Gain Weight 💪</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={calculateDailyCalories}
                    className="w-full bg-gradient-hero font-lato text-lg font-semibold shadow-card transition-all hover:shadow-hover"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Calculate Daily Calories
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                {result !== null && (
                  <>
                    <Card className="border-2 border-primary shadow-hover animate-scale-in bg-primary-light">
                      <CardHeader>
                        <CardTitle className="font-poppins text-2xl">Your Daily Calorie Target</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="text-center py-6 sm:py-8">
                          <p className="font-poppins text-5xl sm:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                            {result.dailyCalories}
                          </p>
                          <p className="font-lato text-lg sm:text-xl text-muted-foreground mt-2">
                            calories per day
                          </p>
                        </div>

                        {/* Meal Breakdown */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-4 sm:p-6">
                          <h3 className="font-poppins text-lg font-bold text-purple-700 dark:text-purple-400 mb-4 flex items-center gap-2">
                            <Utensils className="w-5 h-5" />
                            Daily Meal Breakdown
                          </h3>
                          <div className="space-y-2">
                            {result.mealSuggestions.map((meal, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-background/80 rounded-lg">
                                <span className="font-lato text-sm font-semibold text-foreground">{meal.meal}</span>
                                <span className="font-poppins text-base font-bold text-primary">
                                  {meal.calories} cal
                                </span>
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground mt-3">
                            💡 Adjust meal sizes based on your preferences and schedule
                          </p>
                        </div>

                        {/* Macros */}
                        <div className="space-y-3 bg-background/50 rounded-lg p-3 sm:p-4">
                          <p className="font-lato text-xs sm:text-sm text-muted-foreground">
                            <strong className="text-foreground">Daily Macronutrient Targets:</strong>
                          </p>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-lato text-sm">Protein:</span>
                              <span className="font-semibold text-sm">{result.protein}g</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-lato text-sm">Carbs:</span>
                              <span className="font-semibold text-sm">{result.carbs}g</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-lato text-sm">Fats:</span>
                              <span className="font-semibold text-sm">{result.fats}g</span>
                            </div>
                          </div>
                        </div>

                        {/* BMR Info */}
                        <div className="p-4 bg-background/50 rounded-lg border-l-4 border-primary">
                          <p className="font-lato text-sm text-foreground">
                            <strong>Your BMR:</strong> {result.bmr} calories/day
                          </p>
                          <p className="font-lato text-xs text-muted-foreground mt-1">
                            This is what your body burns at rest. Your total daily needs include activity.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Tips */}
                    <Card className="border-2 border-border shadow-card">
                      <CardHeader>
                        <CardTitle className="font-poppins text-xl">Daily Nutrition Tips</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <ul className="font-lato text-sm text-muted-foreground space-y-2 list-disc pl-5">
                          <li><strong>Track your intake:</strong> Use a food diary or app to monitor calories</li>
                          <li><strong>Eat protein with every meal:</strong> Keeps you full and preserves muscle</li>
                          <li><strong>Stay hydrated:</strong> Drink water throughout the day</li>
                          <li><strong>Plan ahead:</strong> Prep meals to avoid impulsive food choices</li>
                          <li><strong>Be flexible:</strong> It's okay to adjust based on hunger and activity</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </>
                )}

                {/* Info Card */}
                {!result && (
                  <Card className="border-2 border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="font-poppins text-xl">How It Works</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="font-lato text-sm text-muted-foreground">
                        This calculator determines your daily calorie needs using the Mifflin-St Jeor equation, 
                        the most accurate formula for estimating metabolic rate.
                      </p>
                      <div className="bg-primary-light/30 p-4 rounded-lg">
                        <p className="font-lato text-sm font-semibold text-foreground mb-2">
                          What We Calculate:
                        </p>
                        <ul className="font-lato text-sm text-muted-foreground space-y-1 list-disc pl-5">
                          <li><strong>BMR:</strong> Your resting metabolic rate</li>
                          <li><strong>Activity adjustment:</strong> Calories burned through movement</li>
                          <li><strong>Goal adjustment:</strong> Deficit or surplus for your target</li>
                          <li><strong>Meal breakdown:</strong> How to distribute calories throughout the day</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Related Tools */}
            <div className="mt-12">
              <h2 className="font-poppins text-2xl font-bold text-center mb-6">Related Calculators</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link to="/weight-loss-calorie-calculator">
                  <Card className="border-2 border-border hover:border-primary transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-poppins text-lg font-bold mb-2">Weight Loss Calculator</h3>
                      <p className="font-lato text-sm text-muted-foreground">
                        Get a detailed weight loss plan with timeline
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/maintenance-calorie-calculator">
                  <Card className="border-2 border-border hover:border-primary transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-poppins text-lg font-bold mb-2">Maintenance Calculator</h3>
                      <p className="font-lato text-sm text-muted-foreground">
                        Find your TDEE to maintain current weight
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/food">
                  <Card className="border-2 border-border hover:border-primary transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-poppins text-lg font-bold mb-2">Food Guide</h3>
                      <p className="font-lato text-sm text-muted-foreground">
                        Discover nutritious foods for your daily calories
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <Card className="border-2 border-border shadow-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-2xl">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-poppins text-base font-bold mb-2">How many calories should I eat per day?</h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      Daily calorie needs vary based on age, gender, weight, height, and activity level. Most adults 
                      need 1,600-3,000 calories per day. Use our calculator for personalized results.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-base font-bold mb-2">What factors affect daily calorie needs?</h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      Age, gender, weight, height, activity level, and fitness goals all affect your daily calorie needs. 
                      Muscle mass and metabolism also play important roles.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-base font-bold mb-2">Should I eat the same calories every day?</h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      Your weekly average matters most. You can eat slightly more on active days and less on rest days, 
                      as long as your weekly total aligns with your goals.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-base font-bold mb-2">How do I track my daily calories?</h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      Use a food tracking app like MyFitnessPal, read nutrition labels, weigh portions, and log everything 
                      you eat. Consistency is key for accurate tracking.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DailyCalorieCalculator;

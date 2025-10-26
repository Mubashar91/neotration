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
import { Calculator as CalcIcon, TrendingDown, Target, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WeightLossCalculator = () => {
  const { toast } = useToast();
  
  const calculatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Weight Loss Calorie Calculator - FitJourney USA',
    applicationCategory: 'HealthApplication',
    description: 'Free weight loss calorie calculator to determine your daily caloric needs for safe and sustainable weight loss based on your goals.',
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
        name: 'How many calories should I eat to lose weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For safe weight loss, aim for a 500-calorie deficit per day, which leads to approximately 0.5-1 kg (1-2 lbs) of weight loss per week. This calculator provides personalized recommendations based on your stats.'
        }
      },
      {
        '@type': 'Question',
        name: 'How fast can I lose weight safely?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Safe weight loss is 0.5-1 kg (1-2 lbs) per week. Losing weight too quickly can lead to muscle loss, nutritional deficiencies, and metabolic slowdown.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will I lose muscle on a calorie deficit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'With a moderate deficit (500 cal/day), adequate protein (0.7-1g per lb bodyweight), and strength training, you can minimize muscle loss while losing fat.'
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
    targetWeight: ""
  });

  const [result, setResult] = useState<{
    dailyCalories: number;
    weeklyLoss: number;
    timeline: { weeks: number; months: number };
    protein: number;
    carbs: number;
    fats: number;
  } | null>(null);

  const calculateWeightLoss = () => {
    const { age, gender, weight, height, activity, targetWeight } = formData;
    
    if (!age || !gender || !weight || !height || !activity || !targetWeight) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your weight loss plan.",
        variant: "destructive"
      });
      return;
    }

    // BMR calculation using Mifflin-St Jeor Equation
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    const targetKg = parseFloat(targetWeight);

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
    
    // Safe deficit: 500 cal/day = ~0.5kg/week
    const dailyCalories = Math.round(tdee - 500);
    
    // Calculate timeline
    // 1 kg fat = ~7700 calories
    const totalCaloriesNeeded = targetKg * 7700;
    const daysNeeded = Math.ceil(totalCaloriesNeeded / 500);
    const weeksNeeded = Math.ceil(daysNeeded / 7);
    const monthsNeeded = Math.ceil(weeksNeeded / 4);
    
    // Weekly loss rate
    const weeklyLoss = 0.5; // kg per week with 500 cal deficit

    // Macros for weight loss (higher protein)
    const protein = Math.round(dailyCalories * 0.35 / 4); // 35% protein
    const carbs = Math.round(dailyCalories * 0.35 / 4);   // 35% carbs
    const fats = Math.round(dailyCalories * 0.30 / 9);    // 30% fats

    setResult({
      dailyCalories,
      weeklyLoss,
      timeline: { weeks: weeksNeeded, months: monthsNeeded },
      protein,
      carbs,
      fats
    });

    toast({
      title: "Weight Loss Plan Calculated!",
      description: `Your personalized plan is ready. You'll reach your goal in ${weeksNeeded} weeks.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Weight Loss Calorie Calculator - Lose Weight Safely | FitJourney USA"
        description="Calculate exactly how many calories you need to lose weight safely. Get a personalized weight loss plan with timeline and daily calorie targets."
        keywords="weight loss calorie calculator, calorie calculator for weight loss, weight loss calculator, how many calories to lose weight, weight loss diet plan, calorie deficit calculator"
        canonicalUrl="/weight-loss-calorie-calculator"
        structuredData={[calculatorSchema, faqSchema]}
      />
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingDown className="h-10 w-10 text-primary" />
                <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-foreground md:text-5xl">
                  Weight Loss{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Calorie Calculator
                  </span>
                </h1>
              </div>
              <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Calculate your personalized daily calorie target for safe, sustainable weight loss. 
                Get a complete timeline and meal plan to reach your goal weight.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Science-Based Formula</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Personalized Timeline</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Safe & Sustainable</span>
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
                    <Label htmlFor="weight" className="font-lato font-semibold">Current Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Enter your current weight"
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

                  <div className="space-y-3 p-5 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-lg border-2 border-red-200 dark:border-red-800 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Target className="h-6 w-6 text-red-600" />
                      <Label htmlFor="targetWeight" className="font-poppins text-lg font-bold text-red-700 dark:text-red-400">
                        How Much Weight Do You Want to Lose?
                      </Label>
                    </div>
                    <Input
                      id="targetWeight"
                      type="number"
                      placeholder="Enter kg to lose (e.g., 5, 10, 15)"
                      value={formData.targetWeight}
                      onChange={(e) => setFormData({ ...formData, targetWeight: e.target.value })}
                      className="border-2 border-red-300 dark:border-red-700 text-lg font-semibold"
                    />
                    <div className="flex items-start gap-2 p-3 bg-background/80 rounded-md">
                      <span className="text-lg">💡</span>
                      <p className="text-sm text-foreground">
                        <strong>Safe weight loss:</strong> 0.5-1 kg per week. We'll calculate your exact timeline and daily calories!
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={calculateWeightLoss}
                    className="w-full bg-gradient-hero font-lato text-lg font-semibold shadow-card transition-all hover:shadow-hover"
                  >
                    <TrendingDown className="h-5 w-5 mr-2" />
                    Calculate My Weight Loss Plan
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                {result !== null && (
                  <>
                    <Card className="border-2 border-primary shadow-hover animate-scale-in bg-primary-light">
                      <CardHeader>
                        <CardTitle className="font-poppins text-2xl">Your Weight Loss Plan</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="text-center py-6 sm:py-8">
                          <p className="font-lato text-sm text-muted-foreground mb-2">Daily Calorie Target</p>
                          <p className="font-poppins text-5xl sm:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                            {result.dailyCalories}
                          </p>
                          <p className="font-lato text-lg sm:text-xl text-muted-foreground mt-2">
                            calories per day
                          </p>
                        </div>

                        {/* Timeline */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-4 sm:p-6">
                          <h3 className="font-poppins text-xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                            <Clock className="w-6 h-6" />
                            Your Timeline to Success
                          </h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-background/80 rounded-lg">
                              <span className="font-lato text-sm text-muted-foreground">Weight to Lose:</span>
                              <span className="font-poppins text-lg font-bold text-foreground">
                                {formData.targetWeight} kg
                              </span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-background/80 rounded-lg">
                              <span className="font-lato text-sm text-muted-foreground">Weekly Loss Rate:</span>
                              <span className="font-poppins text-lg font-bold text-green-600">
                                ~{result.weeklyLoss} kg/week
                              </span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-background/80 rounded-lg">
                              <span className="font-lato text-sm text-muted-foreground">Estimated Time:</span>
                              <span className="font-poppins text-lg font-bold text-primary">
                                {result.timeline.weeks} weeks ({result.timeline.months} months)
                              </span>
                            </div>
                            <div className="p-4 bg-background/80 rounded-lg border-l-4 border-green-600">
                              <p className="font-lato text-sm text-foreground">
                                <strong>Safe & Sustainable:</strong> By maintaining a 500-calorie daily deficit, 
                                you'll lose weight at a healthy pace while preserving muscle mass and energy levels.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Macros */}
                        <div className="space-y-3 bg-background/50 rounded-lg p-3 sm:p-4">
                          <p className="font-lato text-xs sm:text-sm text-muted-foreground">
                            <strong className="text-foreground">Recommended Macros for Weight Loss:</strong>
                          </p>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-lato text-sm">Protein (35%):</span>
                              <span className="font-semibold text-sm text-green-600">{result.protein}g</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-lato text-sm">Carbs (35%):</span>
                              <span className="font-semibold text-sm">{result.carbs}g</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-lato text-sm">Fats (30%):</span>
                              <span className="font-semibold text-sm">{result.fats}g</span>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground pt-2">
                            💪 Higher protein helps preserve muscle during weight loss
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Tips */}
                    <Card className="border-2 border-border shadow-card">
                      <CardHeader>
                        <CardTitle className="font-poppins text-xl">Weight Loss Success Tips</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <ul className="font-lato text-sm text-muted-foreground space-y-2 list-disc pl-5">
                          <li><strong>Track consistently:</strong> Log your meals daily to stay on target</li>
                          <li><strong>Prioritize protein:</strong> Aim for {result.protein}g daily to preserve muscle</li>
                          <li><strong>Stay hydrated:</strong> Drink 8-10 glasses of water per day</li>
                          <li><strong>Exercise regularly:</strong> Combine cardio and strength training 3-5x/week</li>
                          <li><strong>Sleep well:</strong> Get 7-9 hours of quality sleep for optimal results</li>
                          <li><strong>Be patient:</strong> Sustainable weight loss takes time but lasts forever</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </>
                )}

                {/* Info Card */}
                {!result && (
                  <Card className="border-2 border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="font-poppins text-xl">Why This Calculator Works</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="font-lato text-sm text-muted-foreground">
                        Our weight loss calculator uses the scientifically-validated Mifflin-St Jeor equation 
                        to calculate your metabolism, then applies a safe 500-calorie deficit.
                      </p>
                      <div className="bg-primary-light/30 p-4 rounded-lg">
                        <p className="font-lato text-sm font-semibold text-foreground mb-2">
                          The Science Behind Safe Weight Loss:
                        </p>
                        <ul className="font-lato text-sm text-muted-foreground space-y-1 list-disc pl-5">
                          <li>1 kg of fat = ~7,700 calories</li>
                          <li>500 cal/day deficit = 3,500 cal/week = 0.5 kg lost</li>
                          <li>Sustainable rate: 0.5-1 kg per week</li>
                          <li>Preserves muscle mass and metabolism</li>
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
                <Link to="/calculator">
                  <Card className="border-2 border-border hover:border-primary transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-poppins text-lg font-bold mb-2">General Calorie Calculator</h3>
                      <p className="font-lato text-sm text-muted-foreground">
                        Calculate calories for any goal: lose, maintain, or gain weight
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/maintenance-calorie-calculator">
                  <Card className="border-2 border-border hover:border-primary transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-poppins text-lg font-bold mb-2">Maintenance Calculator</h3>
                      <p className="font-lato text-sm text-muted-foreground">
                        Find your TDEE to maintain your current weight
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/food">
                  <Card className="border-2 border-border hover:border-primary transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-poppins text-lg font-bold mb-2">Food Guide</h3>
                      <p className="font-lato text-sm text-muted-foreground">
                        Browse healthy foods perfect for weight loss
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
                    <h3 className="font-poppins text-base font-bold mb-2">How many calories should I eat to lose weight?</h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      For safe weight loss, aim for a 500-calorie deficit per day, which leads to approximately 
                      0.5-1 kg (1-2 lbs) of weight loss per week. This calculator provides personalized recommendations 
                      based on your stats.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-base font-bold mb-2">How fast can I lose weight safely?</h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      Safe weight loss is 0.5-1 kg (1-2 lbs) per week. Losing weight too quickly can lead to 
                      muscle loss, nutritional deficiencies, and metabolic slowdown.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-base font-bold mb-2">Will I lose muscle on a calorie deficit?</h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      With a moderate deficit (500 cal/day), adequate protein (0.7-1g per lb bodyweight), and 
                      strength training, you can minimize muscle loss while losing fat.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-base font-bold mb-2">Should I eat back exercise calories?</h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      Your activity level already accounts for regular exercise. Only eat back calories from 
                      extra-intense or long-duration workouts (50-75% of calories burned).
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

export default WeightLossCalculator;

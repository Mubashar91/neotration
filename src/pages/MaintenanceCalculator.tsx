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
import { Calculator as CalcIcon, Scale, Activity, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MaintenanceCalculator = () => {
  const { toast } = useToast();
  
  const calculatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Maintenance Calorie Calculator - FitJourney USA',
    applicationCategory: 'HealthApplication',
    description: 'Calculate your TDEE (Total Daily Energy Expenditure) and maintenance calories to maintain your current weight based on activity level.',
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
        name: 'What are maintenance calories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Maintenance calories (TDEE) are the number of calories you need to consume daily to maintain your current weight. It includes your BMR plus calories burned through activity.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between BMR and TDEE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BMR (Basal Metabolic Rate) is calories burned at rest. TDEE (Total Daily Energy Expenditure) is BMR multiplied by your activity level, representing total daily calorie burn.'
        }
      },
      {
        '@type': 'Question',
        name: 'How accurate is the maintenance calorie calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator uses the Mifflin-St Jeor equation, which is accurate for most people. However, individual metabolism varies. Track your weight for 2-3 weeks and adjust as needed.'
        }
      }
    ]
  };

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
    activity: ""
  });

  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
    protein: number;
    carbs: number;
    fats: number;
    activityDescription: string;
  } | null>(null);

  const activityDescriptions: { [key: string]: string } = {
    sedentary: "Little or no exercise, desk job",
    light: "Light exercise 1-3 days/week",
    moderate: "Moderate exercise 3-5 days/week",
    active: "Heavy exercise 6-7 days/week",
    veryActive: "Very intense exercise, physical job, or training twice per day"
  };

  const calculateMaintenance = () => {
    const { age, gender, weight, height, activity } = formData;
    
    if (!age || !gender || !weight || !height || !activity) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your maintenance calories.",
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

    const tdee = Math.round(bmr * activityMultipliers[activity]);

    // Balanced macros for maintenance
    const protein = Math.round(tdee * 0.30 / 4); // 30% protein
    const carbs = Math.round(tdee * 0.40 / 4);   // 40% carbs
    const fats = Math.round(tdee * 0.30 / 9);    // 30% fats

    setResult({
      bmr: Math.round(bmr),
      tdee,
      protein,
      carbs,
      fats,
      activityDescription: activityDescriptions[activity]
    });

    toast({
      title: "Maintenance Calories Calculated!",
      description: `Your TDEE is ${tdee} calories per day.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Maintenance Calorie Calculator USA - Find Your TDEE | FitJourney USA"
        description="Calculate your maintenance calories (TDEE) to stay at your current weight. Free, accurate TDEE calculator for Americans based on your age, weight, height and activity level."
        keywords="maintenance calorie calculator USA, TDEE calculator, total daily energy expenditure, how many calories to maintain weight, maintenance calories, BMR vs TDEE, calorie maintenance calculator, TDEE calculator for women, TDEE calculator for men"
        canonicalUrl="/maintenance-calorie-calculator"
        structuredData={[calculatorSchema, faqSchema]}
      />
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Scale className="h-10 w-10 text-primary" />
                <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-foreground md:text-5xl">
                  Maintenance Calorie{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Calculator
                  </span>
                </h1>
              </div>
              <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Calculate your TDEE (Total Daily Energy Expenditure) to find out exactly how many 
                calories you need to maintain your current weight.
              </p>
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

                  <Button
                    onClick={calculateMaintenance}
                    className="w-full bg-gradient-hero font-lato text-lg font-semibold shadow-card transition-all hover:shadow-hover"
                  >
                    <Activity className="h-5 w-5 mr-2" />
                    Calculate My TDEE
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                {result !== null && (
                  <>
                    <Card className="border-2 border-primary shadow-hover animate-scale-in bg-primary-light">
                      <CardHeader>
                        <CardTitle className="font-poppins text-2xl">Your Maintenance Calories</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="text-center py-6 sm:py-8">
                          <p className="font-lato text-sm text-muted-foreground mb-2">TDEE (Total Daily Energy Expenditure)</p>
                          <p className="font-poppins text-5xl sm:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                            {result.tdee}
                          </p>
                          <p className="font-lato text-lg sm:text-xl text-muted-foreground mt-2">
                            calories per day
                          </p>
                        </div>

                        {/* BMR vs TDEE */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6">
                          <h3 className="font-poppins text-lg font-bold text-blue-700 dark:text-blue-400 mb-4 flex items-center gap-2">
                            <Info className="w-5 h-5" />
                            Understanding Your Results
                          </h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-background/80 rounded-lg">
                              <div>
                                <p className="font-lato text-sm font-semibold text-foreground">BMR (Basal Metabolic Rate)</p>
                                <p className="font-lato text-xs text-muted-foreground">Calories burned at rest</p>
                              </div>
                              <span className="font-poppins text-lg font-bold text-foreground">
                                {result.bmr} cal
                              </span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-background/80 rounded-lg">
                              <div>
                                <p className="font-lato text-sm font-semibold text-foreground">Activity Multiplier</p>
                                <p className="font-lato text-xs text-muted-foreground">{result.activityDescription}</p>
                              </div>
                              <span className="font-poppins text-lg font-bold text-primary">
                                {result.tdee} cal
                              </span>
                            </div>
                            <div className="p-3 bg-background/80 rounded-lg border-l-4 border-blue-600">
                              <p className="font-lato text-sm text-foreground">
                                <strong>Your TDEE ({result.tdee} cal)</strong> is the total calories you burn daily, 
                                including exercise and daily activities. Eat this amount to maintain your current weight.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Macros */}
                        <div className="space-y-3 bg-background/50 rounded-lg p-3 sm:p-4">
                          <p className="font-lato text-xs sm:text-sm text-muted-foreground">
                            <strong className="text-foreground">Recommended Macros for Maintenance:</strong>
                          </p>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-lato text-sm">Protein (30%):</span>
                              <span className="font-semibold text-sm">{result.protein}g</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-lato text-sm">Carbs (40%):</span>
                              <span className="font-semibold text-sm">{result.carbs}g</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-lato text-sm">Fats (30%):</span>
                              <span className="font-semibold text-sm">{result.fats}g</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Tips */}
                    <Card className="border-2 border-border shadow-card">
                      <CardHeader>
                        <CardTitle className="font-poppins text-xl">Maintenance Tips</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <ul className="font-lato text-sm text-muted-foreground space-y-2 list-disc pl-5">
                          <li><strong>Track for 2-3 weeks:</strong> Monitor your weight to verify accuracy</li>
                          <li><strong>Adjust as needed:</strong> If weight changes, adjust calories by 100-200</li>
                          <li><strong>Stay consistent:</strong> Eat roughly the same calories daily</li>
                          <li><strong>Focus on quality:</strong> Choose whole, nutrient-dense foods</li>
                          <li><strong>Stay active:</strong> Regular exercise improves body composition</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </>
                )}

                {/* Info Card */}
                {!result && (
                  <Card className="border-2 border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="font-poppins text-xl">What is TDEE?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="font-lato text-sm text-muted-foreground">
                        TDEE (Total Daily Energy Expenditure) is the total number of calories you burn in a day, 
                        including your basal metabolic rate (BMR) and calories burned through activity.
                      </p>
                      <div className="bg-primary-light/30 p-4 rounded-lg">
                        <p className="font-lato text-sm font-semibold text-foreground mb-2">
                          TDEE = BMR × Activity Level
                        </p>
                        <ul className="font-lato text-sm text-muted-foreground space-y-1 list-disc pl-5">
                          <li><strong>BMR:</strong> Calories burned at complete rest</li>
                          <li><strong>Activity multiplier:</strong> Accounts for daily movement and exercise</li>
                          <li><strong>Result:</strong> Total calories needed to maintain weight</li>
                        </ul>
                      </div>
                      <p className="font-lato text-sm text-primary font-semibold pt-2">
                        💡 Use your TDEE as a baseline for weight loss or gain goals
                      </p>
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
                        Calculate calories needed to lose weight safely with timeline
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/calculator">
                  <Card className="border-2 border-border hover:border-primary transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-poppins text-lg font-bold mb-2">General Calculator</h3>
                      <p className="font-lato text-sm text-muted-foreground">
                        All-in-one calculator for any fitness goal
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/food">
                  <Card className="border-2 border-border hover:border-primary transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-poppins text-lg font-bold mb-2">Food Guide</h3>
                      <p className="font-lato text-sm text-muted-foreground">
                        Discover nutritious foods to hit your calorie target
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
                    <h3 className="font-poppins text-base font-bold mb-2">What are maintenance calories?</h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      Maintenance calories (TDEE) are the number of calories you need to consume daily to maintain 
                      your current weight. It includes your BMR plus calories burned through activity.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-base font-bold mb-2">What is the difference between BMR and TDEE?</h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      BMR (Basal Metabolic Rate) is calories burned at rest. TDEE (Total Daily Energy Expenditure) 
                      is BMR multiplied by your activity level, representing total daily calorie burn.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-base font-bold mb-2">How accurate is the maintenance calorie calculator?</h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      This calculator uses the Mifflin-St Jeor equation, which is accurate for most people. However, 
                      individual metabolism varies. Track your weight for 2-3 weeks and adjust as needed.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-base font-bold mb-2">Should I eat the same calories every day?</h3>
                    <p className="font-lato text-sm text-muted-foreground">
                      For maintenance, aim for consistency. Your weekly average matters most. It's fine to eat slightly 
                      more on workout days and less on rest days, as long as the weekly total matches your TDEE.
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

export default MaintenanceCalculator;

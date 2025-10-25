import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
// import AdSense from "@/components/AdSense"; // Uncomment when AdSense is approved
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator as CalcIcon, Utensils, Plus, Trash2, Download, FileText, Edit, Sparkles, Search, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { foodData } from "@/data/foodData";
import jsPDF from 'jspdf';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Calculator = () => {
  const { toast } = useToast();
  
  const calculatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Calorie Calculator - FitJourney USA',
    applicationCategory: 'HealthApplication',
    description: 'Free calorie calculator to determine your daily caloric needs based on your age, weight, height, activity level, and goals.',
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
        name: 'How accurate is the calorie calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It uses the Mifflin-St Jeor equation with your activity level. It is an evidence-based estimate; adjust based on weekly trends.'
        }
      },
      {
        '@type': 'Question',
        name: 'Should I choose lose, maintain, or gain weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pick the option matching your goal. The tool will set a safe daily calorie target for gradual progress.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much protein should I eat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A common target is 0.7–1.0 grams per pound of bodyweight per day, adjusted for your preferences and training.'
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
    goal: "",
    targetWeight: ""
  });
  const [result, setResult] = useState<number | null>(null);
  const [timeline, setTimeline] = useState<{ weeks: number; months: number; targetCalories: number } | null>(null);
  const [meals, setMeals] = useState<Array<{ name: string; calories: number }>>([]);
  const [currentMeal, setCurrentMeal] = useState({ name: "", calories: "" });
  const [editingMealIndex, setEditingMealIndex] = useState<number | null>(null);
  const [editMealData, setEditMealData] = useState({ name: "", calories: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [suggestedMealsAdded, setSuggestedMealsAdded] = useState(false);

  // Common foods database with calorie information
  const commonFoods = [
    { name: "Chicken Breast (100g)", calories: 165 },
    { name: "Salmon (100g)", calories: 208 },
    { name: "Brown Rice (1 cup cooked)", calories: 216 },
    { name: "White Rice (1 cup cooked)", calories: 205 },
    { name: "Eggs (2 large)", calories: 140 },
    { name: "Greek Yogurt (1 cup)", calories: 130 },
    { name: "Banana (1 medium)", calories: 105 },
    { name: "Apple (1 medium)", calories: 95 },
    { name: "Avocado (1 whole)", calories: 240 },
    { name: "Almonds (1 oz)", calories: 164 },
    { name: "Oatmeal (1 cup cooked)", calories: 154 },
    { name: "Sweet Potato (1 medium)", calories: 103 },
    { name: "Broccoli (1 cup)", calories: 55 },
    { name: "Spinach (1 cup raw)", calories: 7 },
    { name: "Beef (100g lean)", calories: 250 },
    { name: "Tuna (100g)", calories: 132 },
    { name: "Whole Wheat Bread (2 slices)", calories: 160 },
    { name: "Peanut Butter (2 tbsp)", calories: 188 },
    { name: "Protein Shake", calories: 120 },
    { name: "Pizza (1 slice)", calories: 285 },
    { name: "Pasta (1 cup cooked)", calories: 220 },
    { name: "Quinoa (1 cup cooked)", calories: 222 },
  ];

  const calculateCalories = () => {
    const { age, gender, weight, height, activity, goal, targetWeight } = formData;
    
    if (!age || !gender || !weight || !height || !activity || !goal) {
      return;
    }

    // BMR calculation using Mifflin-St Jeor Equation
    let bmr;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);

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
    let adjustedCalories = tdee;

    // Calculate timeline if target weight is provided
    if (targetWeight && parseFloat(targetWeight) > 0) {
      const targetKg = parseFloat(targetWeight);
      // 1 kg = ~7700 calories
      const totalCaloriesNeeded = targetKg * 7700;
      
      // Safe deficit/surplus per day
      const dailyChange = (goal === "lose" || goal === "gain") ? 500 : 0;
      
      if (goal === "lose") {
        adjustedCalories = tdee - dailyChange;
        const daysNeeded = Math.ceil(totalCaloriesNeeded / dailyChange);
        const weeksNeeded = Math.ceil(daysNeeded / 7);
        const monthsNeeded = Math.ceil(weeksNeeded / 4);
        
        setTimeline({
          weeks: weeksNeeded,
          months: monthsNeeded,
          targetCalories: Math.round(adjustedCalories)
        });
      } else if (goal === "gain") {
        adjustedCalories = tdee + dailyChange;
        const daysNeeded = Math.ceil(totalCaloriesNeeded / dailyChange);
        const weeksNeeded = Math.ceil(daysNeeded / 7);
        const monthsNeeded = Math.ceil(weeksNeeded / 4);
        
        setTimeline({
          weeks: weeksNeeded,
          months: monthsNeeded,
          targetCalories: Math.round(adjustedCalories)
        });
      } else {
        setTimeline(null);
      }
      
      setResult(Math.round(adjustedCalories));
    } else {
      // Default adjustment without specific target
      if (goal === "lose") {
        adjustedCalories -= 500;
      } else if (goal === "gain") {
        adjustedCalories += 500;
      }
      
      setResult(Math.round(adjustedCalories));
      setTimeline(null);
    }
  };

  // Get recommended foods based on goal
  const getRecommendedFoods = () => {
    if (!formData.goal) return [];
    return foodData.filter(food => food.category === formData.goal).slice(0, 4);
  };

  // Add meal to tracking
  const addMeal = () => {
    if (!currentMeal.name || !currentMeal.calories) {
      toast({
        title: "Missing Information",
        description: "Please enter both meal name and calories.",
        variant: "destructive"
      });
      return;
    }
    setMeals([...meals, { name: currentMeal.name, calories: parseInt(currentMeal.calories) }]);
    setCurrentMeal({ name: "", calories: "" });
    toast({
      title: "Meal Added",
      description: `${currentMeal.name} has been added to your tracking.`,
    });
  };

  // Remove meal from tracking
  const removeMeal = (index: number) => {
    setMeals(meals.filter((_, i) => i !== index));
    toast({
      title: "Meal Removed",
      description: "Meal has been removed from tracking.",
    });
  };

  // Calculate total consumed calories
  const getTotalConsumed = () => {
    return meals.reduce((total, meal) => total + meal.calories, 0);
  };

  // Get filtered foods for search
  const getFilteredFoods = () => {
    if (!searchTerm) return commonFoods;
    return commonFoods.filter(food => 
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Auto add meal from search
  const autoAddMeal = (food: { name: string; calories: number }) => {
    setMeals([...meals, food]);
    setSearchTerm("");
    toast({
      title: "Meal Added",
      description: `${food.name} has been added automatically.`,
    });
  };

  // Auto-suggest meals based on goal
  const getSuggestedMeals = () => {
    if (!formData.goal) return [];
    
    if (formData.goal === 'lose') {
      return [
        { name: "Breakfast: Oatmeal with Berries", calories: 250 },
        { name: "Lunch: Grilled Chicken Salad", calories: 350 },
        { name: "Snack: Greek Yogurt", calories: 130 },
        { name: "Dinner: Salmon with Vegetables", calories: 400 },
      ];
    } else if (formData.goal === 'gain') {
      return [
        { name: "Breakfast: Eggs & Whole Wheat Toast", calories: 400 },
        { name: "Lunch: Chicken Breast with Rice", calories: 550 },
        { name: "Snack: Protein Shake & Banana", calories: 250 },
        { name: "Dinner: Lean Beef with Sweet Potato", calories: 600 },
        { name: "Evening Snack: Peanut Butter on Toast", calories: 300 },
      ];
    } else {
      return [
        { name: "Breakfast: Greek Yogurt & Fruits", calories: 300 },
        { name: "Lunch: Tuna Sandwich", calories: 400 },
        { name: "Snack: Almonds", calories: 164 },
        { name: "Dinner: Grilled Chicken with Quinoa", calories: 500 },
      ];
    }
  };

  // Add all suggested meals
  const addAllSuggestedMeals = () => {
    const suggested = getSuggestedMeals();
    setMeals([...meals, ...suggested]);
    setSuggestedMealsAdded(true);
    toast({
      title: "Meals Added",
      description: `${suggested.length} suggested meals have been added to your plan.`,
    });
  };

  // Edit meal
  const startEditMeal = (index: number) => {
    setEditingMealIndex(index);
    setEditMealData({
      name: meals[index].name,
      calories: meals[index].calories.toString()
    });
    setIsEditDialogOpen(true);
  };

  const saveEditMeal = () => {
    if (editingMealIndex === null) return;
    
    if (!editMealData.name || !editMealData.calories) {
      toast({
        title: "Missing Information",
        description: "Please enter both meal name and calories.",
        variant: "destructive"
      });
      return;
    }

    const updatedMeals = [...meals];
    updatedMeals[editingMealIndex] = {
      name: editMealData.name,
      calories: parseInt(editMealData.calories)
    };
    setMeals(updatedMeals);
    setIsEditDialogOpen(false);
    setEditingMealIndex(null);
    toast({
      title: "Meal Updated",
      description: "Your meal has been updated successfully.",
    });
  };

  // Download prescription as PDF with design
  const downloadPrescription = () => {
    if (!result) {
      toast({
        title: "Calculate First",
        description: "Please calculate your calorie target first.",
        variant: "destructive"
      });
      return;
    }

    const protein = Math.round(result * 0.3 / 4);
    const carbs = Math.round(result * 0.4 / 4);
    const fats = Math.round(result * 0.3 / 9);

    // Create simple & attractive PDF
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 25;
    let yPos = 0;

    // Simple Modern Header
    doc.setFillColor(99, 102, 241);
    doc.rect(0, 0, pageWidth, 50, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text('FitJourney', pageWidth / 2, 22, { align: 'center' });
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text('Your Personalized Nutrition Plan', pageWidth / 2, 34, { align: 'center' });
    
    doc.setFontSize(9);
    doc.text(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), pageWidth / 2, 43, { align: 'center' });

    yPos = 65;

    // Simple Profile Section
    doc.setTextColor(99, 102, 241);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Your Profile', margin, yPos);
    yPos += 12;
    
    // Simple list format
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    
    const leftCol = margin;
    const rightCol = pageWidth / 2;
    
    doc.text(`Age: ${formData.age} years`, leftCol, yPos);
    doc.text(`Gender: ${formData.gender}`, rightCol, yPos);
    yPos += 8;
    
    doc.text(`Weight: ${formData.weight} kg`, leftCol, yPos);
    doc.text(`Height: ${formData.height} cm`, rightCol, yPos);
    yPos += 8;
    
    doc.text(`Activity: ${formData.activity}`, leftCol, yPos);
    const displayGoal = formData.goal === 'lose' ? 'Lose Weight' : formData.goal === 'gain' ? 'Gain Weight' : 'Maintain';
    doc.text(`Goal: ${displayGoal}`, rightCol, yPos);
    yPos += 18;

    // Big Calorie Number - Attractive Focus
    doc.setFillColor(240, 253, 244);
    doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 40, 8, 8, 'F');
    
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Daily Target', pageWidth / 2, yPos + 10, { align: 'center' });
    
    doc.setTextColor(22, 163, 74);
    doc.setFontSize(36);
    doc.setFont('helvetica', 'bold');
    doc.text(`${result}`, pageWidth / 2, yPos + 25, { align: 'center' });
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text('calories per day', pageWidth / 2, yPos + 34, { align: 'center' });
    
    yPos += 50;

    // Timeline section if available
    if (timeline && formData.targetWeight) {
      doc.setFillColor(254, 215, 170);
      doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 38, 4, 4, 'F');
      
      doc.setFillColor(245, 158, 11);
      doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 12, 4, 4, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('YOUR GOAL TIMELINE', margin + 5, yPos + 8);
      
      yPos += 18;
      
      doc.setTextColor(15, 23, 42);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(`Target: ${formData.goal === 'lose' ? 'Lose' : 'Gain'} ${formData.targetWeight} kg`, margin + 8, yPos);
      
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(245, 158, 11);
      doc.text(`Estimated: ${timeline.weeks} weeks (${timeline.months} months)`, pageWidth - margin - 8, yPos, { align: 'right' });
      
      yPos += 8;
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 116, 139);
      doc.text(`Safe rate: ~0.5-1 kg per week at ${timeline.targetCalories} cal/day`, margin + 8, yPos);
      
      yPos += 14;
    }

    // Simple Macros Section
    doc.setTextColor(99, 102, 241);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Daily Macros', margin, yPos);
    yPos += 12;
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(50, 50, 50);
    
    doc.text(`Protein: `, margin, yPos);
    doc.setFont('helvetica', 'bold');
    doc.text(`${protein}g`, margin + 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(120, 120, 120);
    doc.setFontSize(9);
    doc.text('(30%)', margin + 35, yPos);
    
    doc.setFontSize(11);
    doc.setTextColor(50, 50, 50);
    doc.setFont('helvetica', 'normal');
    doc.text(`Carbs: `, pageWidth / 2, yPos);
    doc.setFont('helvetica', 'bold');
    doc.text(`${carbs}g`, pageWidth / 2 + 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(120, 120, 120);
    doc.setFontSize(9);
    doc.text('(40%)', pageWidth / 2 + 35, yPos);
    
    yPos += 10;
    doc.setFontSize(11);
    doc.setTextColor(50, 50, 50);
    doc.setFont('helvetica', 'normal');
    doc.text(`Fats: `, margin, yPos);
    doc.setFont('helvetica', 'bold');
    doc.text(`${fats}g`, margin + 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(120, 120, 120);
    doc.setFontSize(9);
    doc.text('(30%)', margin + 35, yPos);
    
    yPos += 18;

    // Simple Progress Section
    const consumed = getTotalConsumed();
    const remaining = result - consumed;
    
    doc.setTextColor(99, 102, 241);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Today\'s Intake', margin, yPos);
    yPos += 12;
    
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Consumed: `, margin, yPos);
    doc.setFont('helvetica', 'bold');
    if (consumed > result) {
      doc.setTextColor(239, 68, 68);
    } else {
      doc.setTextColor(22, 163, 74);
    }
    doc.text(`${consumed} cal`, margin + 30, yPos);
    
    doc.setTextColor(50, 50, 50);
    doc.setFont('helvetica', 'normal');
    doc.text(`Remaining: `, pageWidth / 2, yPos);
    doc.setFont('helvetica', 'bold');
    doc.text(`${remaining} cal`, pageWidth / 2 + 30, yPos);
    
    yPos += 16;

    // Simple Meals List
    if (meals.length > 0) {
      if (yPos > pageHeight - 80) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setTextColor(99, 102, 241);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Your Meals', margin, yPos);
      yPos += 12;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      meals.forEach((meal, index) => {
        if (yPos > pageHeight - 30) {
          doc.addPage();
          yPos = 20;
        }
        
        doc.setTextColor(50, 50, 50);
        doc.text(`${index + 1}. ${meal.name}`, margin, yPos);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(22, 163, 74);
        doc.text(`${meal.calories} cal`, pageWidth - margin - 5, yPos, { align: 'right' });
        doc.setFont('helvetica', 'normal');
        
        yPos += 8;
      });
      yPos += 10;
    }

    // Recommended Foods
    if (yPos > pageHeight - 60) {
      doc.addPage();
      yPos = 20;
    }

    doc.setTextColor(99, 102, 241);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Recommended Foods', margin, yPos);
    yPos += 12;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    getRecommendedFoods().forEach((food, index) => {
      if (yPos > pageHeight - 30) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setTextColor(50, 50, 50);
      doc.text(`${index + 1}. ${food.name}`, margin, yPos);
      doc.setTextColor(22, 163, 74);
      doc.setFont('helvetica', 'bold');
      doc.text(`${food.calories} cal`, pageWidth - margin - 5, yPos, { align: 'right' });
      
      yPos += 6;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(120, 120, 120);
      const benefitText = food.benefits.length > 80 ? food.benefits.substring(0, 80) + '...' : food.benefits;
      doc.text(benefitText, margin + 5, yPos);
      doc.setFontSize(10);
      
      yPos += 10;
    });

    // Guidelines
    if (yPos > pageHeight - 60) {
      doc.addPage();
      yPos = 20;
    }

    yPos += 10;
    doc.setTextColor(99, 102, 241);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Tips for Success', margin, yPos);
    yPos += 12;

    const guidelines = formData.goal === 'lose' 
      ? ['Maintain a 500 calorie deficit daily', 'Focus on protein and vegetables', 'Stay hydrated (8-10 glasses/day)', 'Exercise 3-5 times per week']
      : formData.goal === 'gain'
      ? ['Maintain a 500 calorie surplus daily', 'Eat protein with every meal', 'Strength train 4-5 times per week', 'Be consistent with meal timing']
      : ['Maintain your current intake', 'Eat balanced, nutritious meals', 'Exercise regularly', 'Monitor progress weekly'];

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(50, 50, 50);
    
    guidelines.forEach((guideline) => {
      doc.text(`• ${guideline}`, margin + 2, yPos);
      yPos += 8;
    });

    // Simple Footer
    const footerY = pageHeight - 18;
    doc.setFillColor(99, 102, 241);
    doc.rect(0, footerY, pageWidth, 18, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('FitJourney USA', pageWidth / 2, footerY + 8, { align: 'center' });
    
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Your Partner in Health', pageWidth / 2, footerY + 14, { align: 'center' });

    // Save PDF
    doc.save(`FitJourney_Nutrition_Plan_${new Date().toISOString().split('T')[0]}.pdf`);

    toast({
      title: "Downloaded Successfully",
      description: "Your nutrition plan PDF has been downloaded.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Calorie Calculator - FitJourney USA"
        description="Calculate your daily calorie needs based on your age, weight, height, activity level, and goals. Get personalized meal plans and track your nutrition."
        keywords="calorie calculator, daily calorie needs, BMR calculator, TDEE calculator, nutrition calculator, meal planner, healthy eating, weight loss, weight gain, fitness tracker, macros calculator"
        canonicalUrl="/calculator"
        structuredData={[calculatorSchema, faqSchema]}
      />
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4 animate-fade-in">
              <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-foreground md:text-5xl">
                Calorie{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Calculator
                </span>
              </h1>
              <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Get your personalized daily calorie recommendation based on your goals and activity level
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

                  {(formData.goal === "lose" || formData.goal === "gain") && (
                    <div className="space-y-3 p-5 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-lg border-2 border-secondary shadow-lg animate-scale-in">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🎯</span>
                        <Label htmlFor="targetWeight" className="font-poppins text-lg font-bold text-secondary">
                          How Much Do You Want to {formData.goal === "lose" ? "Lose" : "Gain"}?
                        </Label>
                      </div>
                      <Input
                        id="targetWeight"
                        type="number"
                        placeholder={`Enter kg amount (e.g., 5, 10, 15)`}
                        value={formData.targetWeight}
                        onChange={(e) => setFormData({ ...formData, targetWeight: e.target.value })}
                        className="border-2 border-secondary text-lg font-semibold"
                      />
                      <div className="flex items-start gap-2 p-3 bg-background/80 rounded-md">
                        <span className="text-lg">💡</span>
                        <p className="text-sm text-foreground">
                          <strong>We'll calculate:</strong> How long it will take and your exact daily calories to reach your goal safely!
                        </p>
                      </div>
                    </div>
                  )}

                  <Button
                    onClick={calculateCalories}
                    className="w-full bg-gradient-hero font-lato text-lg font-semibold shadow-card transition-all hover:shadow-hover"
                  >
                    Calculate My Calories
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                {result !== null && (
                  <Card className="border-2 border-primary shadow-hover animate-scale-in bg-primary-light">
                    <CardHeader>
                      <CardTitle className="font-poppins text-2xl">Your Daily Calorie Target</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center py-6 sm:py-8">
                        <p className="font-poppins text-5xl sm:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                          {result}
                        </p>
                        <p className="font-lato text-lg sm:text-xl text-muted-foreground mt-2">
                          calories per day
                        </p>
                      </div>

                      {/* Timeline Display */}
                      {timeline && (
                        <div className="bg-secondary/10 border-2 border-secondary rounded-lg p-4 sm:p-6">
                          <h3 className="font-poppins text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Your Goal Timeline
                          </h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-background/80 rounded-lg">
                              <span className="font-lato text-sm text-muted-foreground">Target Weight Change:</span>
                              <span className="font-poppins text-lg font-bold text-foreground">
                                {formData.targetWeight} kg
                              </span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-background/80 rounded-lg">
                              <span className="font-lato text-sm text-muted-foreground">Estimated Time:</span>
                              <span className="font-poppins text-lg font-bold text-secondary">
                                {timeline.weeks} weeks ({timeline.months} months)
                              </span>
                            </div>
                            <div className="p-4 bg-background/80 rounded-lg border-l-4 border-secondary">
                              <p className="font-lato text-sm text-foreground">
                                <strong>Safe Progress:</strong> By consuming <strong>{timeline.targetCalories}</strong> calories daily, 
                                you'll {formData.goal} weight at a healthy rate of approximately <strong>0.5-1 kg per week</strong>.
                              </p>
                            </div>
                            <div className="text-xs text-muted-foreground bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
                              <strong>⚠️ Note:</strong> This is an estimate. Individual results may vary based on metabolism, genetics, and adherence to the plan. 
                              Consult with a healthcare professional before starting any weight change program.
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="space-y-3 bg-background/50 rounded-lg p-3 sm:p-4">
                        <p className="font-lato text-xs sm:text-sm text-muted-foreground">
                          <strong className="text-foreground">Macronutrient Breakdown:</strong>
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-lato text-sm">Protein (30%):</span>
                            <span className="font-semibold text-sm">{Math.round(result * 0.3 / 4)}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-lato text-sm">Carbs (40%):</span>
                            <span className="font-semibold text-sm">{Math.round(result * 0.4 / 4)}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-lato text-sm">Fats (30%):</span>
                            <span className="font-semibold text-sm">{Math.round(result * 0.3 / 9)}g</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="border-2 border-border shadow-card">
                  <CardHeader>
                    <CardTitle className="font-poppins text-xl">Understanding Your Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="font-lato text-sm text-muted-foreground">
                      Your calorie target is calculated using the Mifflin-St Jeor equation, which considers your age, gender, weight, height, and activity level.
                    </p>
                    <ul className="font-lato text-sm text-muted-foreground space-y-2 list-disc pl-5">
                      <li>For weight loss: 500 calorie deficit per day (≈1 lb/week)</li>
                      <li>For maintenance: No adjustment needed</li>
                      <li>For weight gain: 500 calorie surplus per day (≈1 lb/week)</li>
                    </ul>
                    <p className="font-lato text-sm text-primary font-semibold pt-2">
                      Remember: Individual results may vary. Consult with a healthcare professional before starting any new diet plan.
                    </p>
                  </CardContent>
                </Card>

                {/* Recommended Foods */}
                {result !== null && getRecommendedFoods().length > 0 && (
                  <Card className="border-2 border-primary shadow-card bg-primary-light/30">
                    <CardHeader>
                      <CardTitle className="font-poppins text-xl flex items-center gap-2">
                        <Utensils className="h-5 w-5 text-primary" />
                        Recommended Foods for Your Goal
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-lato text-xs sm:text-sm text-muted-foreground mb-4">
                        These foods will help you reach your {result} daily calorie target:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {getRecommendedFoods().map((food, index) => (
                          <div key={index} className="bg-background rounded-lg p-3 sm:p-4 border border-border">
                            <p className="font-poppins text-sm sm:text-base font-bold text-foreground mb-1">
                              {food.name}
                            </p>
                            <p className="font-lato text-xs sm:text-sm text-primary font-semibold">
                              {food.calories} cal/100g
                            </p>
                            <p className="font-lato text-xs sm:text-sm text-muted-foreground">
                              {food.benefits}
                            </p>
                          </div>
                        ))}
                      </div>
                      <Link to="/food" className="block mt-4">
                        <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          View Full Food Guide
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* AdSense Ad - After Results (uncomment after AdSense approval) */}
            {/* {result !== null && (
              <div className="mt-8">
                <AdSense adSlot="1122334455" adFormat="auto" />
              </div>
            )} */}

            {/* Calorie Tracking Section */}
            {result !== null && (
              <div className="mt-8 sm:mt-12">
                <Card className="border-2 border-primary shadow-hover">
                  <CardHeader>
                    <CardTitle className="font-poppins text-2xl flex items-center gap-2">
                      <Utensils className="h-6 w-6 text-primary" />
                      Track Your Meals Today
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Auto-Suggest Meals */}
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg border-2 border-secondary/30">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-poppins text-lg font-bold text-foreground flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-secondary" />
                            Auto-Suggest Meals
                          </h3>
                          <p className="font-lato text-sm text-muted-foreground mt-1">
                            Get personalized meal suggestions based on your {formData.goal} goal
                          </p>
                        </div>
                        {!suggestedMealsAdded ? (
                          <Button
                            onClick={addAllSuggestedMeals}
                            variant="outline"
                            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                          >
                            <Sparkles className="h-4 w-4 mr-2" />
                            Add All
                          </Button>
                        ) : (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="h-5 w-5" />
                            <span className="font-lato text-sm font-semibold">Added!</span>
                          </div>
                        )}
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {getSuggestedMeals().map((meal, index) => (
                          <div key={index} className="p-3 bg-background/80 rounded-lg border border-border">
                            <p className="font-poppins text-sm font-semibold text-foreground">{meal.name}</p>
                            <p className="font-lato text-xs text-secondary font-semibold">{meal.calories} calories</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Food Search & Auto-Add */}
                    <div className="space-y-4 p-4 sm:p-6 bg-primary-light/30 rounded-lg">
                      <h3 className="font-poppins text-lg font-bold text-foreground flex items-center gap-2">
                        <Search className="h-5 w-5 text-primary" />
                        Search Common Foods
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="food-search" className="font-lato font-semibold">Search by name</Label>
                        <Input
                          id="food-search"
                          type="text"
                          placeholder="Search for foods (e.g., chicken, rice, banana)"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="border-2"
                        />
                        {searchTerm && getFilteredFoods().length > 0 && (
                          <div className="max-h-48 overflow-y-auto border-2 border-border rounded-lg bg-background">
                            {getFilteredFoods().slice(0, 5).map((food, index) => (
                              <button
                                key={index}
                                onClick={() => autoAddMeal(food)}
                                className="w-full p-3 text-left hover:bg-primary-light/50 transition-colors border-b border-border last:border-b-0"
                              >
                                <p className="font-poppins text-sm font-semibold text-foreground">{food.name}</p>
                                <p className="font-lato text-xs text-primary font-semibold">{food.calories} calories</p>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Add Meal Form */}
                    <div className="space-y-4 p-4 sm:p-6 bg-muted/30 rounded-lg">
                      <h3 className="font-poppins text-lg font-bold text-foreground">Add Custom Meal</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="meal-name" className="font-lato font-semibold">Meal Name</Label>
                          <Input
                            id="meal-name"
                            type="text"
                            placeholder="e.g., Breakfast, Chicken Salad"
                            value={currentMeal.name}
                            onChange={(e) => setCurrentMeal({ ...currentMeal, name: e.target.value })}
                            className="border-2"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="meal-calories" className="font-lato font-semibold">Calories</Label>
                          <Input
                            id="meal-calories"
                            type="number"
                            placeholder="e.g., 500"
                            value={currentMeal.calories}
                            onChange={(e) => setCurrentMeal({ ...currentMeal, calories: e.target.value })}
                            className="border-2"
                          />
                        </div>
                      </div>
                      <Button
                        onClick={addMeal}
                        className="w-full sm:w-auto bg-gradient-hero font-lato font-semibold"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Meal
                      </Button>
                    </div>

                    {/* Current Consumption Display */}
                    <div className="p-4 sm:p-6 bg-background/50 rounded-lg border-2 border-border">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-poppins text-lg font-bold text-foreground">Today's Consumption</h3>
                        <div className="text-right">
                          <p className="font-poppins text-3xl font-bold text-primary">{getTotalConsumed()}</p>
                          <p className="font-lato text-sm text-muted-foreground">calories consumed</p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-lato text-muted-foreground">Progress to Goal</span>
                          <span className="font-lato font-semibold">
                            {result - getTotalConsumed()} cal remaining
                          </span>
                        </div>
                        <div className="h-4 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all ${
                              getTotalConsumed() > result ? 'bg-red-500' : 'bg-gradient-hero'
                            }`}
                            style={{ width: `${Math.min((getTotalConsumed() / result) * 100, 100)}%` }}
                          />
                        </div>
                        {getTotalConsumed() > result && (
                          <p className="text-sm text-red-500 font-lato">
                            ⚠️ You've exceeded your daily calorie target
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Meals List */}
                    {meals.length > 0 && (
                      <div className="space-y-3">
                        <h3 className="font-poppins text-lg font-bold text-foreground">Logged Meals</h3>
                        <div className="space-y-2">
                          {meals.map((meal, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 sm:p-4 bg-background rounded-lg border border-border"
                            >
                              <div className="flex-1">
                                <p className="font-poppins text-base font-semibold text-foreground">
                                  {meal.name}
                                </p>
                                <p className="font-lato text-sm text-primary font-semibold">
                                  {meal.calories} calories
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  onClick={() => startEditMeal(index)}
                                  variant="outline"
                                  size="sm"
                                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  onClick={() => removeMeal(index)}
                                  variant="outline"
                                  size="sm"
                                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Download Prescription Button */}
                    <div className="pt-6 border-t border-border">
                      <Button
                        onClick={downloadPrescription}
                        className="w-full bg-secondary text-secondary-foreground font-lato text-lg font-semibold shadow-card transition-all hover:shadow-hover"
                      >
                        <Download className="h-5 w-5 mr-2" />
                        Download PDF Prescription
                      </Button>
                      <p className="text-xs sm:text-sm text-muted-foreground text-center mt-3">
                        <FileText className="h-4 w-4 inline mr-1" />
                        Professional PDF with your personalized plan, meal tracking, and recommendations
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Edit Meal Dialog */}
                <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-poppins text-2xl">Edit Meal</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="edit-meal-name" className="font-lato font-semibold">Meal Name</Label>
                        <Input
                          id="edit-meal-name"
                          type="text"
                          value={editMealData.name}
                          onChange={(e) => setEditMealData({ ...editMealData, name: e.target.value })}
                          className="border-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="edit-meal-calories" className="font-lato font-semibold">Calories</Label>
                        <Input
                          id="edit-meal-calories"
                          type="number"
                          value={editMealData.calories}
                          onChange={(e) => setEditMealData({ ...editMealData, calories: e.target.value })}
                          className="border-2"
                        />
                      </div>
                      <div className="flex gap-3 pt-4">
                        <Button
                          onClick={saveEditMeal}
                          className="flex-1 bg-gradient-hero font-lato font-semibold"
                        >
                          Save Changes
                        </Button>
                        <Button
                          onClick={() => setIsEditDialogOpen(false)}
                          variant="outline"
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;

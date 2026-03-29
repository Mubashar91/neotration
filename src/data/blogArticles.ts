import calorieDeficit from "@/content/blog/calorie-deficit-weight-loss.txt?raw";
import macroCalculator from "@/content/blog/macro-calculator-weight-loss-muscle-gain.txt?raw";
import mealPlans from "@/content/blog/1200-1500-calorie-meal-plan-weight-loss.txt?raw";
import ketoVsLowCalorie from "@/content/blog/keto-vs-low-calorie-diet.txt?raw";
import bestExercisesWeightLossHome from "@/content/blog/best-exercises-weight-loss-home.txt?raw";
import highProteinFoodsList from "@/content/blog/high-protein-foods-list.txt?raw";
import howManyCaloriesShouldIEat from "@/content/blog/how-many-calories-should-i-eat.txt?raw";
import howToBuildMuscleBeginners from "@/content/blog/how-to-build-muscle-beginners.txt?raw";
import howToStartRunningWeightLoss from "@/content/blog/how-to-start-running-weight-loss.txt?raw";
import howToStayMotivatedWeightLoss from "@/content/blog/how-to-stay-motivated-weight-loss.txt?raw";
import mealPrepBeginnersGuide from "@/content/blog/meal-prep-beginners-guide.txt?raw";
import weightLossMindsetPsychology from "@/content/blog/weight-loss-mindset-psychology.txt?raw";
import weightLossTips2025 from "@/content/blog/weight-loss-tips-2025.txt?raw";
import whyAmINotLosingWeight from "@/content/blog/why-am-i-not-losing-weight.txt?raw";

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
  keywords: string;
  author: string;
  updatedAt?: string;
  tags?: string[];
  difficulty?: "beginner" | "intermediate" | "advanced";
  seoDescription?: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export const blogCategories = [
  { name: 'All', slug: 'all', description: 'All blog articles' },
  { name: 'Weight Loss', slug: 'weight-loss', description: 'Tips and guides for safe, sustainable weight loss' },
  { name: 'Nutrition', slug: 'nutrition', description: 'Nutrition science and meal planning' },
] as const;

export const blogArticles: BlogArticle[] = [
  {
    slug: "calorie-deficit-weight-loss",
    title: "What Is a Calorie Deficit and How Does It Help You Lose Weight?",
    excerpt: "Learn what a calorie deficit is, how to calculate yours, and why it's the #1 science-backed method for weight loss in the USA.",
    category: "Weight Loss",
    categorySlug: "weight-loss",
    readTime: "7 min read",
    date: "Jan 10, 2025",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&h=600&q=80",
    content: calorieDeficit,
    keywords: "calorie deficit for weight loss, calorie deficit calculator, how to lose weight calorie deficit, weight loss calories USA, calorie deficit diet, what is a calorie deficit",
    author: "FitJourney Team",
    tags: ["calorie deficit", "weight loss", "TDEE"],
    difficulty: "beginner",
    seoDescription: "Learn what a calorie deficit is, how to calculate yours, and why it's the #1 science-backed method for weight loss in the USA. Use our free calorie calculator to get started.",
    faqs: [
      { question: "What is a calorie deficit?", answer: "A calorie deficit occurs when you consume fewer calories than your body burns in a day. Your body then uses stored fat for energy, resulting in weight loss." },
      { question: "How many calories should I cut to lose weight?", answer: "A moderate deficit of 400–600 calories per day is recommended for most people, resulting in 0.5–1 pound of weight loss per week." },
      { question: "How do I calculate my calorie deficit?", answer: "First find your TDEE (Total Daily Energy Expenditure) using our free calorie calculator, then subtract 300–500 calories to create a healthy deficit." },
      { question: "Is a 1,000 calorie deficit safe?", answer: "A 1,000-calorie deficit is generally too aggressive for most people and can cause muscle loss, fatigue, and nutrient deficiencies. Stick to 400–600 calories for sustainable results." }
    ]
  },
  {
    slug: "macro-calculator-weight-loss-muscle-gain",
    title: "Macro Calculator: How to Count Macros for Weight Loss and Muscle Gain",
    excerpt: "Learn how to use a macro calculator to set your protein, carb, and fat targets for weight loss or muscle gain.",
    category: "Nutrition",
    categorySlug: "nutrition",
    readTime: "8 min read",
    date: "Jan 15, 2025",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&h=600&q=80",
    content: macroCalculator,
    keywords: "macro calculator for weight loss, how to count macros, protein calculator USA, macros for muscle gain, IIFYM, macronutrients for weight loss, macro diet plan",
    author: "FitJourney Team",
    tags: ["macros", "protein", "nutrition", "muscle gain"],
    difficulty: "beginner",
    seoDescription: "Learn how to use a macro calculator to set your protein, carb, and fat targets for weight loss or muscle gain. Find your perfect macros with FitJourney USA's free tool.",
    faqs: [
      { question: "What are macros in nutrition?", answer: "Macros (macronutrients) are the three main nutrients: protein (4 cal/g), carbohydrates (4 cal/g), and fat (9 cal/g). Every food is made up of some combination of these three." },
      { question: "What is the best macro split for weight loss?", answer: "A 35% protein / 35% carbs / 30% fat split works well for most people trying to lose weight while preserving muscle mass." },
      { question: "How much protein do I need per day?", answer: "Most fitness experts recommend 0.7–1 gram of protein per pound of body weight for active Americans. For a 160 lb person, that's 112–160g per day." },
      { question: "What is IIFYM?", answer: "IIFYM stands for 'If It Fits Your Macros' — a flexible dieting approach where you can eat any food as long as it fits within your daily macro targets." }
    ]
  },
  {
    slug: "1200-1500-calorie-meal-plan-weight-loss",
    title: "1200 and 1500 Calorie Meal Plans for Weight Loss (Full Day Guide)",
    excerpt: "Complete 1200 and 1500 calorie meal plans for weight loss, designed for US women and men with full daily menus.",
    category: "Weight Loss",
    categorySlug: "weight-loss",
    readTime: "9 min read",
    date: "Jan 20, 2025",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&h=600&q=80",
    content: mealPlans,
    keywords: "1200 calorie meal plan for weight loss, 1500 calorie meal plan, low calorie meal plan USA, weight loss meal plan for women, daily calorie meal plan, calorie deficit meal plan",
    author: "FitJourney Team",
    tags: ["meal plan", "1200 calories", "1500 calories", "weight loss"],
    difficulty: "beginner",
    seoDescription: "Looking for a calorie meal plan that actually works? Here are complete 1200 and 1500 calorie meal plans for weight loss, designed for US women and men.",
    faqs: [
      { question: "Is a 1,200 calorie diet safe?", answer: "A 1,200-calorie diet can be safe for smaller, less active women but is generally too low for men or active individuals. Always consult a healthcare provider before starting a very low calorie diet." },
      { question: "Who should use a 1,500 calorie meal plan?", answer: "A 1,500-calorie plan suits most moderately active women and smaller men. It creates a healthy deficit without feeling overly restrictive." },
      { question: "How much weight can I lose on a 1,200 calorie diet?", answer: "Most people lose 0.5–1.5 pounds per week on a 1,200-calorie diet, depending on their starting weight and activity level." },
      { question: "Can I customize these meal plans?", answer: "Yes — swap any ingredient with a similar calorie equivalent. The key is hitting your daily calorie and protein targets, not following the exact foods listed." }
    ]
  },
  {
    slug: "keto-vs-low-calorie-diet",
    title: "Keto vs Low Calorie Diet: Which Is Better for Weight Loss in 2025?",
    excerpt: "Keto vs low calorie diet — which one actually works better for weight loss? We break down the science, pros, cons, and what US nutritionists recommend.",
    category: "Nutrition",
    categorySlug: "nutrition",
    readTime: "8 min read",
    date: "Jan 25, 2025",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9d5db?auto=format&fit=crop&w=800&h=600&q=80",
    content: ketoVsLowCalorie,
    keywords: "keto vs low calorie diet, keto diet vs calorie counting, is keto better than calorie deficit, best diet for weight loss USA 2025, low carb vs low calorie, keto vs calorie deficit",
    author: "FitJourney Team",
    tags: ["keto", "low calorie", "diet comparison", "weight loss"],
    difficulty: "beginner",
    seoDescription: "Keto vs low calorie diet — which one actually works better for weight loss? We break down the science, pros, cons, and what US nutritionists recommend.",
    faqs: [
      { question: "Is keto better than a low calorie diet for weight loss?", answer: "Studies show both produce similar fat loss results over 6–12 months when calories are controlled. Keto may produce faster initial results due to water weight loss, but long-term outcomes are comparable." },
      { question: "Why do people lose weight faster on keto initially?", answer: "The initial rapid weight loss on keto is mostly water weight. Carbohydrates cause your body to retain water, so cutting carbs leads to quick water loss in the first 1–2 weeks." },
      { question: "What is the keto flu?", answer: "The keto flu refers to symptoms like fatigue, headaches, and irritability that some people experience in the first 1–2 weeks of starting keto as the body adapts to burning fat for fuel." },
      { question: "Which diet is easier to maintain long-term?", answer: "Most research and dietitians agree that a flexible low-calorie diet is easier to maintain long-term because it allows all food groups and fits better into social situations." }
    ]
  },
  {
    slug: "weight-loss-tips-2025",
    title: "Weight Loss Tips 2025: 10 Proven Strategies That Actually Work",
    excerpt: "Discover practical, science-backed weight loss tips for 2025 to help you stay consistent and lose fat sustainably.",
    category: "Weight Loss",
    categorySlug: "weight-loss",
    readTime: "8 min read",
    date: "Feb 02, 2025",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&h=600&q=80",
    content: weightLossTips2025,
    keywords: "weight loss tips 2025, how to lose weight fast and safely, best weight loss advice, fat loss strategies, sustainable weight loss",
    author: "FitJourney Team",
    tags: ["weight loss", "fat loss", "habits"],
    difficulty: "beginner",
    seoDescription: "Learn 10 practical weight loss tips for 2025 that help you lose fat safely, stay consistent, and build long-term healthy habits."
  },
  {
    slug: "how-many-calories-should-i-eat",
    title: "How Many Calories Should I Eat Per Day to Lose Weight?",
    excerpt: "Understand BMR, TDEE, and calorie deficits so you can set the right daily calorie target for steady fat loss.",
    category: "Weight Loss",
    categorySlug: "weight-loss",
    readTime: "7 min read",
    date: "Feb 04, 2025",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&h=600&q=80",
    content: howManyCaloriesShouldIEat,
    keywords: "how many calories should i eat, daily calories for weight loss, calorie calculator, tdee calculator, bmr vs tdee",
    author: "FitJourney Team",
    tags: ["calories", "TDEE", "weight loss"],
    difficulty: "beginner",
    seoDescription: "Find out how many calories you should eat per day based on your goals, activity level, and metabolism."
  },
  {
    slug: "high-protein-foods-list",
    title: "High-Protein Foods List: Best Protein Sources for Weight Loss and Muscle",
    excerpt: "A complete high-protein foods list to help you hit your daily protein goals using simple, affordable options.",
    category: "Nutrition",
    categorySlug: "nutrition",
    readTime: "7 min read",
    date: "Feb 06, 2025",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&h=600&q=80",
    content: highProteinFoodsList,
    keywords: "high protein foods list, protein rich foods, best protein foods for weight loss, protein foods for muscle gain",
    author: "FitJourney Team",
    tags: ["protein", "nutrition", "food list"],
    difficulty: "beginner",
    seoDescription: "Explore the best high-protein foods to support fat loss, muscle building, and better meal planning."
  },
  {
    slug: "meal-prep-beginners-guide",
    title: "Meal Prep for Beginners: Step-by-Step Guide for Busy Weeks",
    excerpt: "Learn how to meal prep with a simple system that saves time, controls calories, and makes healthy eating easier.",
    category: "Nutrition",
    categorySlug: "nutrition",
    readTime: "8 min read",
    date: "Feb 08, 2025",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&h=600&q=80",
    content: mealPrepBeginnersGuide,
    keywords: "meal prep for beginners, healthy meal prep guide, meal prep tips, weekly meal prep plan, beginner meal planning",
    author: "FitJourney Team",
    tags: ["meal prep", "nutrition", "planning"],
    difficulty: "beginner",
    seoDescription: "Start meal prepping the easy way with this beginner-friendly guide to planning, cooking, and storing meals."
  },
  {
    slug: "how-to-start-running-weight-loss",
    title: "How to Start Running for Weight Loss: Beginner Plan",
    excerpt: "A beginner-friendly run-walk approach to help you burn calories safely and build stamina for long-term fat loss.",
    category: "Weight Loss",
    categorySlug: "weight-loss",
    readTime: "6 min read",
    date: "Feb 10, 2025",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&h=600&q=80",
    content: howToStartRunningWeightLoss,
    keywords: "how to start running for weight loss, running plan for beginners, run walk method, calories burned running",
    author: "FitJourney Team",
    tags: ["running", "cardio", "weight loss"],
    difficulty: "beginner",
    seoDescription: "Use this beginner running plan to lose weight safely, improve fitness, and stay consistent."
  },
  {
    slug: "best-exercises-weight-loss-home",
    title: "Best Home Exercises for Weight Loss (No Gym Needed)",
    excerpt: "The best at-home fat-loss exercises you can do with little to no equipment for effective calorie burn.",
    category: "Weight Loss",
    categorySlug: "weight-loss",
    readTime: "7 min read",
    date: "Feb 12, 2025",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&h=600&q=80",
    content: bestExercisesWeightLossHome,
    keywords: "best exercises for weight loss at home, home workouts for fat loss, no equipment workout, beginner home workout",
    author: "FitJourney Team",
    tags: ["home workout", "exercise", "weight loss"],
    difficulty: "beginner",
    seoDescription: "Try these effective home exercises to burn fat, improve fitness, and lose weight without a gym."
  },
  {
    slug: "how-to-build-muscle-beginners",
    title: "How to Build Muscle for Beginners: Training and Nutrition Basics",
    excerpt: "Learn the key training and nutrition rules beginners need to build muscle while minimizing fat gain.",
    category: "Nutrition",
    categorySlug: "nutrition",
    readTime: "8 min read",
    date: "Feb 14, 2025",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&h=600&q=80",
    content: howToBuildMuscleBeginners,
    keywords: "how to build muscle for beginners, beginner muscle gain plan, muscle building nutrition, hypertrophy basics",
    author: "FitJourney Team",
    tags: ["muscle gain", "strength training", "protein"],
    difficulty: "beginner",
    seoDescription: "Build muscle the smart way with beginner-friendly training, calorie, and protein guidelines."
  },
  {
    slug: "how-to-stay-motivated-weight-loss",
    title: "How to Stay Motivated During Weight Loss (Even on Tough Days)",
    excerpt: "Use behavior-based strategies to stay on track with your weight loss goals when motivation drops.",
    category: "Weight Loss",
    categorySlug: "weight-loss",
    readTime: "7 min read",
    date: "Feb 16, 2025",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=800&h=600&q=80",
    content: howToStayMotivatedWeightLoss,
    keywords: "how to stay motivated to lose weight, weight loss motivation tips, build healthy habits, consistency mindset",
    author: "FitJourney Team",
    tags: ["motivation", "habits", "mindset"],
    difficulty: "beginner",
    seoDescription: "Stay consistent with your weight loss journey using practical motivation and habit-building techniques."
  },
  {
    slug: "why-am-i-not-losing-weight",
    title: "Why Am I Not Losing Weight? 10 Common Reasons and Fixes",
    excerpt: "If the scale is stuck, these common fat-loss mistakes and practical fixes can help you restart progress.",
    category: "Weight Loss",
    categorySlug: "weight-loss",
    readTime: "8 min read",
    date: "Feb 18, 2025",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&h=600&q=80",
    content: whyAmINotLosingWeight,
    keywords: "why am i not losing weight, weight loss plateau, fat loss mistakes, how to break a weight loss stall",
    author: "FitJourney Team",
    tags: ["plateau", "weight loss", "troubleshooting"],
    difficulty: "beginner",
    seoDescription: "Understand the top reasons weight loss stalls and what to change to get results again."
  },
  {
    slug: "weight-loss-mindset-psychology",
    title: "Weight Loss Mindset Psychology: How to Think for Long-Term Results",
    excerpt: "Master the mindset shifts that help you bounce back from setbacks and stay consistent over time.",
    category: "Weight Loss",
    categorySlug: "weight-loss",
    readTime: "7 min read",
    date: "Feb 20, 2025",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&h=600&q=80",
    content: weightLossMindsetPsychology,
    keywords: "weight loss mindset, psychology of weight loss, growth mindset for dieting, all or nothing thinking",
    author: "FitJourney Team",
    tags: ["mindset", "psychology", "weight loss"],
    difficulty: "beginner",
    seoDescription: "Improve your weight loss mindset with proven psychology strategies for consistency and resilience."
  },
];

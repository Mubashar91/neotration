import calorieDeficit from "@/content/blog/calorie-deficit-weight-loss.txt?raw";
import macroCalculator from "@/content/blog/macro-calculator-weight-loss-muscle-gain.txt?raw";
import mealPlans from "@/content/blog/1200-1500-calorie-meal-plan-weight-loss.txt?raw";
import ketoVsLowCalorie from "@/content/blog/keto-vs-low-calorie-diet.txt?raw";

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
];

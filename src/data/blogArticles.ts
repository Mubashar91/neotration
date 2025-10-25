import ultimateHealthJourney from "@/content/blog/ultimate-health-journey-2025.txt?raw";
import eatHealthyBudget from "@/content/blog/eat-healthy-on-a-budget-2025.txt?raw";
import topUsSuperfoods from "@/content/blog/top-us-superfoods.txt?raw";
import loseWeightSafely from "@/content/blog/lose-weight-safely-sustainably.txt?raw";
import mealPrepBeginners from "@/content/blog/meal-prep-for-beginners.txt?raw";
import macrosExplained from "@/content/blog/macros-explained.txt?raw";
import prePostWorkout from "@/content/blog/pre-post-workout-nutrition.txt?raw";
export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
  keywords: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "ultimate-health-journey-2025",
    title: "The Ultimate Guide to Starting Your Health Journey in 2025",
    excerpt:
      "Everything you need to know about setting realistic health goals, creating sustainable habits, and staying motivated throughout your fitness transformation.",
    category: "Featured",
    readTime: "8 min read",
    date: "Jan 18, 2025",
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=800&h=600&q=80",
    content: `${ultimateHealthJourney}\n\nAction checklist:\n- Define a clear goal (lose/gain/maintain).\n- Set daily calorie target with our calculator.\n- Choose three simple meals you enjoy and repeat.\n- Track steps and protein.\n\nPro tip: Treat each week like a small experiment—review and adjust.`,
    keywords: "health journey, fitness goals, sustainable habits, calorie calculator, nutrition planner, motivation, weight loss tips"
  },
  {
    slug: "eat-healthy-on-a-budget-2025",
    title: "How to Eat Healthy on a Budget in 2025",
    excerpt:
      "Discover practical tips and strategies for maintaining a nutritious diet using a calorie calculator or nutrition tracker app without breaking the bank.",
    category: "Nutrition Tips",
    readTime: "5 min read",
    date: "Jan 15, 2025",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&h=400&q=80",
    content: `${eatHealthyBudget}\n\nSample $40 grocery basket:\n- Oats, rice, beans, eggs\n- Frozen mixed veggies, bananas\n- Chicken thighs, Greek yogurt\n\nBatch cook once; portion and freeze for midweek ease.`,
    keywords: "healthy eating on a budget, cheap healthy meals, budget meal prep, grocery tips, calorie calculator, nutrition tracker app"
  },
  {
    slug: "top-us-superfoods",
    title: "Top 10 U.S. Superfoods You Should Be Eating",
    excerpt:
      "Learn about nutrient-dense foods that are easily available across America and how to incorporate them into your daily meals for maximum health benefits.",
    category: "Food Guide",
    readTime: "7 min read",
    date: "Jan 12, 2025",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&h=400&q=80",
    content: `${topUsSuperfoods}\n\n7‑day superfood rotation:\n- Mon: Salmon bowl\n- Tue: Greek yogurt parfait\n- Wed: Omelet + spinach\n- Thu: Chicken + broccoli\n- Fri: Quinoa salad\n- Sat: Sweet potato chili\n- Sun: Berry smoothie`,
    keywords: "superfoods, nutrient dense foods, blueberries, salmon, leafy greens, healthy eating, antioxidants"
  },
  {
    slug: "lose-weight-safely-sustainably",
    title: "How to Lose Weight Safely and Sustainably",
    excerpt:
      "Evidence-based strategies for healthy, long-term weight management that actually work. Avoid fad diets and learn the science of sustainable weight loss.",
    category: "Weight Loss",
    readTime: "8 min read",
    date: "Jan 10, 2025",
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&h=400&q=80",
    content: `${loseWeightSafely}\n\nPlate blueprint:\n- 1/2 veggies, 1/4 protein, 1/4 carbs, 1–2 tsp fats.\n\nStall troubleshooting (2+ weeks):\n- Verify logging accuracy\n- Increase steps by 2k/day\n- Adjust calories ±150`,
    keywords: "sustainable weight loss, calorie deficit, protein intake, strength training, TDEE, weight loss tips"
  },
  {
    slug: "meal-prep-for-beginners",
    title: "The Complete Guide to Meal Prepping for Beginners",
    excerpt:
      "Master the art of meal preparation with our step-by-step guide. Save time, money, and stay on track with your nutrition goals effortlessly.",
    category: "Meal Planning",
    readTime: "10 min read",
    date: "Jan 8, 2025",
    image:
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&h=400&q=80",
    content: `${mealPrepBeginners}\n\nStorage guide:\n- Fridge: up to 3–4 days (airtight)\n- Freezer: 2–3 months (label dates)\n\nFood safety: cool quickly; reheat to 165°F/74°C.`,
    keywords: "meal prep, beginner meal prep, batch cooking, weekly meal plan, healthy recipes"
  },
  {
    slug: "macros-explained",
    title: "Understanding Macros: Protein, Carbs, and Fats Explained",
    excerpt:
      "Demystify macronutrients and learn how to balance your diet for optimal health and performance.",
    category: "Nutrition Science",
    readTime: "6 min read",
    date: "Jan 5, 2025",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&h=400&q=80",
    content: `${macrosExplained}\n\nQuick targets (per lb bodyweight):\n- Protein: 0.7–1.0 g\n- Fats: 0.3–0.45 g\n- Carbs: remainder of calories\n\nIterate weekly based on performance and satiety.`,
    keywords: "macros, protein carbs fats, macro ratios, nutrition basics, macro tracking, calorie calculator"
  },
  {
    slug: "pre-post-workout-nutrition",
    title: "Best Pre and Post-Workout Nutrition Strategies",
    excerpt:
      "Maximize your workout results with proper nutrition timing. Learn what to eat before and after exercise for better performance and recovery.",
    category: "Fitness Nutrition",
    readTime: "7 min read",
    date: "Jan 3, 2025",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&h=400&q=80",
    content: `${prePostWorkout}\n\nSimple timing rules:\n- <60 min to train: small snack (fruit + whey)\n- >90 min: fuller meal (protein + carbs)\n\nRecovery add‑ons: chocolate milk, yogurt bowls, or rice + lean meat.\n\nTiming Tips:\n- Experiment with different timing strategies.\n- Listen to your body and adjust.\n- Prioritize post-workout nutrition for optimal recovery.`,
    keywords: "pre workout nutrition, post workout meal, workout fuel, recovery nutrition, protein after workout"
  }
];

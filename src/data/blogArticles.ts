import ultimateHealthJourney from "@/content/blog/ultimate-health-journey-2025.txt?raw";
import eatHealthyBudget from "@/content/blog/eat-healthy-on-a-budget-2025.txt?raw";
import topUsSuperfoods from "@/content/blog/top-us-superfoods.txt?raw";
import loseWeightSafely from "@/content/blog/lose-weight-safely-sustainably.txt?raw";
import mealPrepBeginners from "@/content/blog/meal-prep-for-beginners.txt?raw";
import macrosExplained from "@/content/blog/macros-explained.txt?raw";
import prePostWorkout from "@/content/blog/pre-post-workout-nutrition.txt?raw";
import hydrationMyths from "@/content/blog/hydration-myths-debunked.txt?raw";
import beginnerStrength4Weeks from "@/content/blog/beginner-strength-training-4-weeks.txt?raw";
import smartSnacking from "@/content/blog/smart-snacking-weight-loss.txt?raw";
import homeWorkouts20Min from "@/content/blog/20-minute-home-workouts-beginners.txt?raw";
export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string; // URL-friendly category for routing
  readTime: string;
  date: string;
  image: string;
  content: string;
  keywords: string;
}

// Blog categories for filtering and SEO
export const blogCategories = [
  { name: 'All', slug: 'all', description: 'All blog articles' },
  { name: 'Weight Loss', slug: 'weight-loss', description: 'Tips and guides for safe, sustainable weight loss' },
  { name: 'Weight Gain', slug: 'weight-gain', description: 'Muscle building and healthy weight gain strategies' },
  { name: 'Healthy Lifestyle', slug: 'healthy-lifestyle', description: 'General health and wellness tips' },
  { name: 'Exercise', slug: 'exercise', description: 'Workout guides and fitness tips' },
  { name: 'Nutrition', slug: 'nutrition', description: 'Nutrition science and meal planning' }
] as const;

export const blogArticles: BlogArticle[] = [
  {
    slug: "ultimate-health-journey-2025",
    title: "The Ultimate Guide to Starting Your Health Journey in 2025",
    excerpt:
      "Everything you need to know about setting realistic health goals, creating sustainable habits, and staying motivated throughout your fitness transformation.",
    category: "Healthy Lifestyle",
    categorySlug: "healthy-lifestyle",
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
    category: "Nutrition",
    categorySlug: "nutrition",
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
    category: "Nutrition",
    categorySlug: "nutrition",
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
    categorySlug: "weight-loss",
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
    category: "Nutrition",
    categorySlug: "nutrition",
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
    category: "Nutrition",
    categorySlug: "nutrition",
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
    category: "Exercise",
    categorySlug: "exercise",
    readTime: "7 min read",
    date: "Jan 3, 2025",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&h=400&q=80",
    content: `${prePostWorkout}\n\nSimple timing rules:\n- <60 min to train: small snack (fruit + whey)\n- >90 min: fuller meal (protein + carbs)\n\nRecovery add‑ons: chocolate milk, yogurt bowls, or rice + lean meat.\n\nTiming Tips:\n- Experiment with different timing strategies.\n- Listen to your body and adjust.\n- Prioritize post-workout nutrition for optimal recovery.`,
    keywords: "pre workout nutrition, post workout meal, workout fuel, recovery nutrition, protein after workout"
  }
  ,
  {
    slug: "hydration-myths-debunked",
    title: "Hydration Myths Debunked: How Much Water Do You Really Need?",
    excerpt:
      "Forget the one-size-fits-all 8 cups rule. Learn how to personalize hydration based on body size, climate, and training.",
    category: "Healthy Lifestyle",
    categorySlug: "healthy-lifestyle",
    readTime: "6 min read",
    date: "Jan 20, 2025",
    image:
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=600&h=400&q=80",
    content: `${hydrationMyths}\n\nCoach tip: Pair hydration with sodium and potassium when sweating heavily to maintain performance.`,
    keywords: "hydration, water intake, electrolytes, wellness, performance, sweat, urine color"
  },
  {
    slug: "beginner-strength-training-4-weeks",
    title: "Beginner Strength Training: A Simple 4‑Week Plan",
    excerpt:
      "Build confidence and momentum with three full-body sessions per week, progressive overload, and solid recovery.",
    category: "Exercise",
    categorySlug: "exercise",
    readTime: "9 min read",
    date: "Jan 22, 2025",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&h=400&q=80",
    content: `${beginnerStrength4Weeks}\n\nSafety first: master technique, control tempo, and progress gradually for sustainable strength.`,
    keywords: "beginner strength training, full body workout, progressive overload, gym routine, muscle, recovery"
  },
  {
    slug: "smart-snacking-weight-loss",
    title: "Smart Snacking for Weight Loss: Stay Full Between Meals",
    excerpt:
      "Build snacks around protein and fiber to curb cravings, control calories, and keep energy steady — no willpower contest required.",
    category: "Weight Loss",
    categorySlug: "weight-loss",
    readTime: "6 min read",
    date: "Jan 24, 2025",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&h=400&q=80",
    content: `${smartSnacking}\n\nCoach tip: Pair a protein (yogurt, turkey, whey) with a fiber source (fruit, veg, whole grains) for lasting fullness.`,
    keywords: "weight loss snacks, high protein snacks, fiber snacks, hunger management, calorie deficit tips"
  },
  {
    slug: "20-minute-home-workouts-beginners",
    title: "20‑Minute Home Workouts for Busy Beginners",
    excerpt:
      "No gym needed. Short, structured sessions you can repeat to build strength, cardio, and momentum at home.",
    category: "Exercise",
    categorySlug: "exercise",
    readTime: "7 min read",
    date: "Jan 27, 2025",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=600&h=400&q=80",
    content: `${homeWorkouts20Min}\n\nProgress idea: add 2–3 reps per set each week or reduce rest by 5 seconds to keep improving.`,
    keywords: "home workout, beginner workout, 20 minute workout, EMOM, no equipment training, bodyweight"
  }
];

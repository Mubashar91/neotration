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

  // New fields
  author: string;
  updatedAt?: string;
  tags?: string[];
  difficulty?: "beginner" | "intermediate" | "advanced";
  seoDescription?: string;
}

// Blog categories for filtering and SEO
export const blogCategories = [
  { name: 'All', slug: 'all', description: 'All blog articles' },
  { name: 'Weight Loss', slug: 'weight-loss', description: 'Tips and guides for safe, sustainable weight loss' },
  { name: 'Weight Gain', slug: 'weight-gain', description: 'Muscle building and healthy weight gain strategies' },
  { name: 'Healthy Lifestyle', slug: 'healthy-lifestyle', description: 'General health and wellness tips' },
  { name: 'Exercise', slug: 'exercise', description: 'Workout guides and fitness tips' },
  { name: 'Nutrition', slug: 'nutrition', description: 'Nutrition science and meal planning' },

  // NEW
  { name: 'Recipes', slug: 'recipes', description: 'Healthy, easy, and high-protein recipes' },
  { name: 'Mindset', slug: 'mindset', description: 'Motivation, psychology, and habit building' },
  { name: 'Supplements', slug: 'supplements', description: 'Science-based supplement guides' }
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
    keywords: "health journey, fitness goals, sustainable habits, calorie calculator, nutrition planner, motivation, weight loss tips",
    author: "FitJourney Team"
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
    keywords: "healthy eating on a budget, cheap healthy meals, budget meal prep, grocery tips, calorie calculator, nutrition tracker app",
    author: "FitJourney Team"
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
    keywords: "superfoods, nutrient dense foods, blueberries, salmon, leafy greens, healthy eating, antioxidants",
    author: "FitJourney Team"
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
    keywords: "sustainable weight loss, calorie deficit, protein intake, strength training, TDEE, weight loss tips",
    author: "FitJourney Team"
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
    keywords: "meal prep, beginner meal prep, batch cooking, weekly meal plan, healthy recipes",
    author: "FitJourney Team"
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
    keywords: "macros, protein carbs fats, macro ratios, nutrition basics, macro tracking, calorie calculator",
    author: "FitJourney Team"
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
    keywords: "pre workout nutrition, post workout meal, workout fuel, recovery nutrition, protein after workout",
    author: "FitJourney Team"
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
    keywords: "hydration, water intake, electrolytes, wellness, performance, sweat, urine color",
    author: "FitJourney Team"
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
    keywords: "beginner strength training, full body workout, progressive overload, gym routine, muscle, recovery",
    author: "FitJourney Team"
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
    keywords: "weight loss snacks, high protein snacks, fiber snacks, hunger management, calorie deficit tips",
    author: "FitJourney Team"
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
    keywords: "home workout, beginner workout, 20 minute workout, EMOM, no equipment training, bodyweight",
    author: "FitJourney Team"
  }
  ,
  // New posts
  {
    slug: "high-protein-breakfasts-2025",
    title: "10 High-Protein Breakfasts to Start Your Day Strong (2025 Edition)",
    excerpt: "Quick, affordable, muscle-friendly breakfasts you can prep in 5–10 minutes.",
    category: "Recipes",
    categorySlug: "recipes",
    readTime: "7 min read",
    date: "Feb 1, 2025",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    content: `\n## Why Protein in the Morning Matters\nEating protein early reduces cravings, stabilizes energy, and improves muscle retention — especially when you're in a calorie deficit. Aim for 25–40 g protein at breakfast.\n\n## Macro Targets (Quick Guide)\n- Protein: 25–40 g  \n- Carbs: 20–50 g (activity-dependent)  \n- Fats: 5–15 g  \n\n## Top 10 High-Protein Breakfasts\n1. Greek yogurt bowl (yogurt + whey + berries + granola)  \n2. Protein oats (oats + whey + chia + cinnamon)  \n3. Veggie omelet (3 eggs/egg whites + spinach + feta)  \n4. Cottage cheese fruit plate (cottage cheese + pineapple + almonds)  \n5. Protein smoothie (whey + banana + peanut butter + milk)  \n6. Turkey & egg wrap (tortilla + eggs + turkey + salsa)  \n7. Tofu scramble (tofu + turmeric + peppers + nutritional yeast)  \n8. Chia pudding + whey (chia + milk + whey + strawberries)  \n9. Overnight oats (oats + Greek yogurt + whey + blueberries)  \n10. High-protein pancakes (whey + oats + egg whites)  \n\n## Make-Ahead Breakfast Box (5 Minutes)\nPrepare a 3-day base: 6 boiled eggs, 3 yogurt cups, sliced fruit, measured whey. Mix-and-match each morning.\n\n## Grocery List (Budget-Friendly)\n- Eggs or egg whites  \n- Greek yogurt + whey  \n- Oats, chia seeds  \n- Frozen berries, bananas  \n- Whole-wheat tortillas  \n\n## Common Mistakes to Avoid\n- Skipping protein and overeating later  \n- Drinking only coffee (blood sugar crash)  \n- Ultra-low calories that backfire midday\n\n## FAQs\n- How much protein? 25–40 g works for most adults.  \n- Can I do dairy-free? Use soy yogurt or tofu scramble + plant protein.  \n- Weight loss tip? Keep breakfasts consistent on weekdays.\n`,
    author: "Coach Alex",
    keywords: "high protein breakfast, meal prep, morning meals",
    tags: ["protein", "breakfast", "recipes"],
    difficulty: "beginner",
    seoDescription: "Discover quick high-protein breakfasts for muscle building, fat loss, and busy mornings."
  },
  {
    slug: "beginner-supplement-guide-2025",
    title: "Beginner Supplement Guide: What Actually Works in 2025?",
    excerpt: "Evidence-based supplements for strength, fat loss, energy, and recovery.",
    category: "Supplements",
    categorySlug: "supplements",
    readTime: "9 min read",
    date: "Jan 30, 2025",
    image: "https://images.unsplash.com/photo-1609890440613-52d0a14d8ad5",
    content: `\n## TL;DR — What Works\nThe short list: whey protein (convenience), creatine monohydrate (strength), vitamin D (deficiency common), omega‑3 (heart/brain), magnesium (sleep).\n\n## Evidence-Based Picks + Doses\n- Whey protein: Helps hit daily protein; 20–40 g post‑workout or as needed.  \n- Creatine monohydrate: 3–5 g daily; improves strength and power. No cycling required.  \n- Vitamin D3: 1000–2000 IU daily (test levels if possible).  \n- Omega‑3: ~1–2 g combined EPA/DHA per day (check label).  \n- Magnesium (glycinate/citrate): 200–400 mg at night.\n\n## What to Skip\nDetox teas, fat burners, and BCAAs (if you already hit protein) — limited to no benefit.\n\n## Goal-Based Sample Stacks\n- Strength: Creatine + whey.  \n- Fat loss: Whey (satiety) + omega‑3.  \n- General health: Vitamin D + omega‑3 + magnesium.\n\n## Safety Notes\nCheck medications with your doctor; avoid mega-doses. Creatine is well‑studied and safe for healthy adults.\n\n## FAQs\n- Do I need a loading phase for creatine? No, daily 3–5 g saturates in ~3–4 weeks.  \n- Best time for whey? Whenever it helps you hit daily protein.  \n- Are multivitamins necessary? Not for most balanced diets.\n`,
    author: "Coach Alex",
    keywords: "creatine, whey protein, supplement stack",
    tags: ["creatine", "vitamins", "protein"],
    difficulty: "beginner",
    seoDescription: "Learn which supplements are science-backed and which to avoid."
  },
  {
    slug: "fitness-mindset-2025",
    title: "The Fitness Mindset: How to Stay Consistent in 2025",
    excerpt: "Motivation fades — systems, identity, and environment keep you consistent.",
    category: "Mindset",
    categorySlug: "mindset",
    readTime: "10 min read",
    date: "Feb 2, 2025",
    image: "https://images.unsplash.com/photo-1518611012118-f0c5d2f2d1da",
    content: `\n## Identity > Motivation\n“You become the type of person who…” — identity drives action when motivation fades.\nExamples:\n- Tracks steps  \n- Lifts 3 days/week  \n- Cooks at home  \n- Drinks water  \n- Avoids all‑or‑nothing thinking\n\n## Systems That Guarantee Momentum\n- Weekly meal routine (repeat 3–5 core meals)  \n- Fixed training days (Mon/Wed/Fri)  \n- 24‑hour reset rule after a slip  \n- Sunday planning ritual (groceries + workouts)\n\n## Mindset Tools\n- 80% rule (good enough beats perfect)  \n- Habit stacking (add 1 new habit to an existing one)  \n- Environment design (visible water bottle, prepped gym bag)  \n- 2‑minute rule (start tiny; remove friction)\n\n## 30‑Day Consistency Challenge\n- 8k steps/day  \n- 1 high‑protein meal/day  \n- 3 workouts/week  \n- Track 1 metric (not 10)\n\n## Common Traps\n- Waiting for motivation  \n- Changing plans weekly  \n- Tracking too many variables\n\n## FAQs\n- How do I restart after a break? Use the 2‑minute rule + 1 easy workout.  \n- How many habits at once? 1–2 until automatic.  \n- How to stay motivated? Measure small wins weekly.\n`,
    author: "Coach Mia",
    keywords: "fitness mindset, consistency, motivation",
    tags: ["mindset", "habits", "motivation"],
    difficulty: "beginner",
    seoDescription: "Stay consistent with simple psychological strategies and habit systems."
  },
  {
    slug: "15-minute-healthy-meals",
    title: "Healthy 15-Minute Meals for Busy People",
    excerpt: "Fast, nutritious meals requiring minimal ingredients and zero stress.",
    category: "Recipes",
    categorySlug: "recipes",
    readTime: "6 min read",
    date: "Feb 3, 2025",
    image: "https://images.unsplash.com/photo-1512058564366-c9e6d5a5bbf8",
    content: `\n## The 15-Minute Meal Framework\nChoose: 1 protein + 1 carb + 1 veggie. Cook everything in one pan or microwave + pan combo.\n\n## 15-Minute Meal Ideas\n1. Chicken stir fry (frozen veg + soy sauce + garlic)  \n2. Tuna rice bowl (microwave rice + tuna + mayo + cucumber)  \n3. Shrimp tacos (frozen shrimp + taco seasoning + coleslaw mix)  \n4. Egg fried rice (leftover rice + eggs + peas + scallions)  \n5. Turkey chili cup (canned beans + tomato + ground turkey)  \n6. Veggie omelet (eggs + spinach + mushrooms + cheese)  \n7. Tofu rice noodles (tofu + rice noodles + chili oil + bok choy)  \n8. Salmon wrap (canned salmon + yogurt sauce + lettuce)\n\n## Pantry & Freezer Staples\n- Frozen veggies, mixed greens  \n- Eggs or tofu  \n- Rice, tortillas, rice noodles  \n- Canned tuna/salmon/beans  \n- Rotisserie chicken\n\n## Portion & Macro Tips\n- Protein first (25–35 g)  \n- Fill plate with veggies  \n- Add fats last (olive oil, cheese)\n\n## FAQs\n- Can I make these high‑protein? Add Greek yogurt, whey, or extra lean meat.  \n- Meal prep option? Batch cook protein + rice for 3 days.  \n- Gluten‑free swaps? Use corn tortillas and rice noodles.\n`,
    author: "Chef Leo",
    keywords: "healthy fast meals, 15 minute recipes",
    tags: ["recipes", "quick meals"],
    difficulty: "beginner",
    seoDescription: "Easy, quick, healthy 15-minute meal ideas for busy people."
  },
  {
    slug: "cardio-guide-2025",
    title: "Cardio for Fat Loss & Heart Health: Complete 2025 Guide",
    excerpt: "Learn when, how much, and what type of cardio actually helps your goals.",
    category: "Exercise",
    categorySlug: "exercise",
    readTime: "8 min read",
    date: "Feb 5, 2025",
    image: "https://images.unsplash.com/photo-1558610284-f00d6b850d35",
    content: `\n## Cardio Types (Know the Difference)\n- LISS: Low intensity steady state (walking, easy cycling)  \n- MISS: Moderate intensity steady state (comfortable jog)  \n- HIIT: High‑intensity intervals (short bursts)  \n- Zone 2: Conversational pace that builds aerobic base\n\n## How Much Cardio Do You Need?\n- General health: 150 min/week moderate or 75 min vigorous  \n- Fat loss: Use cardio to increase expenditure; nutrition still leads\n\n## Weekly Templates\n- Beginner: 3 × 20‑minute walks  \n- Intermediate: 2 × Zone 2 + 1 × HIIT  \n- Advanced: 4 × sessions (mix Zone 2 + intervals)\n\n## Fat Loss Tips\n- Prioritize steps + strength training  \n- Keep HIIT short (quality > quantity)  \n- Avoid “earning food” mentality\n\n## Heart Health Markers\n- Resting HR < 75  \n- 7k–10k steps/day  \n- Consistent Zone 2 work\n\n## Mistakes to Avoid\n- Doing only HIIT  \n- Skipping strength training  \n- Inconsistent routine\n\n## FAQs\n- Best time for cardio? Whenever you’ll be consistent.  \n- Can I do cardio and weights together? Yes; separate by a few hours if possible.  \n- Is fasted cardio better? No meaningful difference for fat loss.\n`,
    author: "Coach Alex",
    keywords: "cardio workout, HIIT, Zone 2, fat loss cardio",
    tags: ["cardio", "fat loss", "heart health"],
    difficulty: "beginner",
    seoDescription: "Learn the best cardio strategies for fat loss and heart health."
  }
];

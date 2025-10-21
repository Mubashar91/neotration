export interface SuccessStory {
  id: string;
  name: string;
  location: string;
  result: string;
  quote: string;
  rating: number;
  age: number;
  startWeight: number;
  currentWeight: number;
  timeline: string;
  fullStory: string;
  challenges: string[];
  tips: string[];
  favoriteFoods: string[];
  exerciseRoutine: string;
}

export const successStories: SuccessStory[] = [
  {
    id: "sarah-thompson",
    name: "Sarah Thompson",
    location: "Austin, TX",
    result: "Lost 35 lbs in 4 months",
    quote: "FitJourney USA completely changed my relationship with food. The calorie calculator helped me understand my body's needs, and the food recommendations made healthy eating simple and enjoyable.",
    rating: 5,
    age: 32,
    startWeight: 185,
    currentWeight: 150,
    timeline: "4 months",
    fullStory: "I started my journey in January 2024 weighing 185 lbs. As a busy marketing manager, I always made excuses about not having time to eat healthy. FitJourney's calorie calculator showed me I was eating way more than I needed. The food guide helped me discover delicious, healthy alternatives to my usual fast food choices. The first month was challenging, but seeing the numbers drop kept me motivated. By month two, healthy eating became a habit. Now, four months later, I'm 35 lbs lighter and feel amazing!",
    challenges: [
      "Breaking fast food addiction",
      "Finding time to meal prep",
      "Dealing with social pressure at work lunches",
      "Staying motivated during plateau weeks"
    ],
    tips: [
      "Meal prep on Sundays - it's a game changer!",
      "Keep healthy snacks in your desk drawer",
      "Don't aim for perfection, aim for progress",
      "Take progress photos - the scale doesn't tell the whole story",
      "Join a supportive community or find an accountability partner"
    ],
    favoriteFoods: [
      "Greek yogurt with berries",
      "Grilled chicken salads",
      "Overnight oats",
      "Roasted vegetables"
    ],
    exerciseRoutine: "Started with 20-minute walks, now doing 45-minute HIIT workouts 4x per week"
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    location: "San Francisco, CA",
    result: "Gained 20 lbs of muscle in 6 months",
    quote: "As someone who struggled to gain weight, FitJourney's personalized approach was exactly what I needed. The nutrition guidance helped me fuel my workouts properly and see real results.",
    rating: 5,
    age: 28,
    startWeight: 145,
    currentWeight: 165,
    timeline: "6 months",
    fullStory: "I've always been the 'skinny guy' who couldn't gain weight no matter what I ate. FitJourney's calculator revealed I wasn't eating nearly enough calories. The platform taught me about calorie surplus and proper macros. I learned to focus on nutrient-dense, calorie-rich foods like nuts, avocados, and lean proteins. Combined with a structured weight training program, I finally started seeing gains. Six months later, I've put on 20 lbs of lean muscle and I'm stronger than ever.",
    challenges: [
      "Eating enough calories consistently",
      "Finding time to eat 5-6 meals per day",
      "Avoiding junk food calories",
      "Staying patient when progress was slow"
    ],
    tips: [
      "Track everything you eat - it's eye-opening",
      "Liquid calories (smoothies) are your friend",
      "Focus on compound exercises for muscle growth",
      "Don't skip meals, set reminders if needed",
      "Quality sleep is just as important as nutrition"
    ],
    favoriteFoods: [
      "Protein smoothies with peanut butter",
      "Salmon with quinoa",
      "Chicken and rice bowls",
      "Trail mix and almonds"
    ],
    exerciseRoutine: "Weight training 5 days per week, focusing on progressive overload"
  },
  {
    id: "jessica-martinez",
    name: "Jessica Martinez",
    location: "Miami, FL",
    result: "Maintained healthy weight for 1+ year",
    quote: "After years of yo-yo dieting, I finally found a sustainable approach. The educational content and practical tools made it easy to develop healthy habits that actually stick.",
    rating: 5,
    age: 38,
    startWeight: 175,
    currentWeight: 145,
    timeline: "Ongoing - 1+ year",
    fullStory: "I've tried every diet you can imagine - keto, paleo, juice cleanses, you name it. I'd lose weight quickly then gain it all back plus more. FitJourney taught me that sustainable weight loss isn't about restriction, it's about education and balance. I learned to calculate my maintenance calories and build a diet around foods I actually enjoy. The best part? I've maintained my 30 lb weight loss for over a year now without feeling deprived.",
    challenges: [
      "Breaking the diet mentality",
      "Learning to eat for maintenance, not weight loss",
      "Handling stress eating triggers",
      "Accepting that slower progress is better progress"
    ],
    tips: [
      "Focus on lifestyle change, not temporary diets",
      "Learn to cook - it's empowering and delicious",
      "Allow yourself treats in moderation",
      "Build exercise you actually enjoy into your routine",
      "Celebrate non-scale victories like energy and mood"
    ],
    favoriteFoods: [
      "Homemade veggie stir-fries",
      "Grilled fish tacos",
      "Fresh fruit smoothie bowls",
      "Dark chocolate (in moderation!)"
    ],
    exerciseRoutine: "Yoga 3x per week, walking daily, occasional Zumba classes"
  },
  {
    id: "david-johnson",
    name: "David Johnson",
    location: "Seattle, WA",
    result: "Lost 50 lbs and improved energy",
    quote: "I never thought I could lose this much weight. The calculator gave me clear targets, and the blog articles kept me motivated. I feel like a new person!",
    rating: 5,
    age: 45,
    startWeight: 240,
    currentWeight: 190,
    timeline: "8 months",
    fullStory: "At 45, I was pre-diabetic, exhausted all the time, and my doctor warned me about serious health risks. That was my wake-up call. FitJourney made the process simple - I started by just tracking my calories and was shocked to see I was eating 3000+ calories daily. I cut back to my recommended 2000 calories and started walking. The weight came off steadily. Eight months later, I'm 50 lbs lighter, my blood sugar is normal, and I have energy to play with my kids. Best decision of my life.",
    challenges: [
      "Changing 20+ years of unhealthy habits",
      "Dealing with emotional eating",
      "Overcoming knee pain to start exercising",
      "Managing social eating situations"
    ],
    tips: [
      "Start small - even 10 minutes of walking counts",
      "Find your 'why' and write it down",
      "Don't let one bad meal derail your whole day",
      "Get your family involved for support",
      "Regular health checkups keep you accountable"
    ],
    favoriteFoods: [
      "Grilled chicken with vegetables",
      "Egg white omelets",
      "Apple slices with almond butter",
      "Baked salmon"
    ],
    exerciseRoutine: "Walking 45 minutes daily, started swimming 2x per week"
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    location: "Chicago, IL",
    result: "Lost 28 lbs in 3 months",
    quote: "The best part about FitJourney is how simple it makes nutrition. No complicated meal plans or expensive supplements - just honest, practical advice that works.",
    rating: 5,
    age: 29,
    startWeight: 168,
    currentWeight: 140,
    timeline: "3 months",
    fullStory: "After having my first baby, I struggled to lose the pregnancy weight. I was overwhelmed with complicated diet plans and conflicting advice online. FitJourney cut through the noise with simple, science-based guidance. I learned about portion control, made healthier swaps for my favorite foods, and stayed consistent. Three months later, I'm back to my pre-pregnancy weight and feeling confident again. The best part is I did it while breastfeeding and caring for a newborn!",
    challenges: [
      "Finding time with a newborn",
      "Avoiding stress eating from sleep deprivation",
      "Balancing calorie needs while breastfeeding",
      "Staying motivated when progress was slow"
    ],
    tips: [
      "Prep healthy snacks for midnight feedings",
      "Baby nap time = your workout time",
      "Don't compare your journey to others",
      "Celebrate small wins along the way",
      "Be kind to yourself - you just had a baby!"
    ],
    favoriteFoods: [
      "Protein smoothies",
      "Veggie-packed pasta",
      "Chicken and sweet potato",
      "Greek yogurt parfaits"
    ],
    exerciseRoutine: "Stroller walks daily, online postpartum yoga 3x per week"
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    location: "Denver, CO",
    result: "Transformed health in 5 months",
    quote: "FitJourney helped me not just lose weight, but understand nutrition on a deeper level. The knowledge I gained here will benefit me for life.",
    rating: 5,
    age: 35,
    startWeight: 210,
    currentWeight: 175,
    timeline: "5 months",
    fullStory: "I'm a software engineer who spent 10+ hours a day sitting at a desk, living on pizza and energy drinks. I hit 210 lbs and realized I needed to change. FitJourney's educational approach really resonated with my analytical mind. I dove deep into understanding macros, micronutrients, and how food affects energy and focus. I restructured my entire diet and lifestyle. Five months later, I'm 35 lbs lighter, sleeping better, and my productivity at work has actually increased. Understanding the 'why' behind nutrition made all the difference.",
    challenges: [
      "Breaking caffeine and junk food dependency",
      "Meal planning with a busy work schedule",
      "Overcoming sedentary lifestyle",
      "Learning to cook from scratch"
    ],
    tips: [
      "Invest in quality food storage containers",
      "Set phone reminders to stand and stretch hourly",
      "Make your workspace healthy (standing desk, healthy snacks)",
      "Use your analytical skills to track and optimize",
      "Quality food = quality fuel for your brain"
    ],
    favoriteFoods: [
      "Overnight oats with protein powder",
      "Meal-prepped chicken bowls",
      "Homemade protein bars",
      "Green smoothies"
    ],
    exerciseRoutine: "Cycling to work, gym 4x per week, rock climbing on weekends"
  }
];

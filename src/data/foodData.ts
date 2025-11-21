export interface Food {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: "lose" | "gain" | "maintain";
  benefits: string;
  image: string;
  // SEO Enhancement Fields
  slug: string; // URL-friendly version for routing
  metaTitle: string; // SEO page title (50-60 chars)
  metaDescription: string; // SEO description (150-160 chars)
  keywords: string[]; // Target SEO keywords
  schema: {
    "@context": string;
    "@type": string;
    name: string;
    calories: string;
    protein: string;
    description: string;
  };
  // Existing fields
  servingSize?: string;
  description?: string;
  fiber?: number;
  sugar?: number;
  sodium?: number;
  ingredients?: string[];
  bestFor?: string;
  dietTags?: string[];
  potassium_mg?: number;
  vitaminA_IU?: number;
  vitaminC_mg?: number;
  vitaminD_IU?: number;
  vitaminB6_mg?: number;
  vitaminE_mg?: number;
  calcium_mg?: number;
  iron_mg?: number;
  magnesium_mg?: number;
  zinc_mg?: number;
  allergens?: string[];
  mealIdeas?: string[];
  substitutions?: string[];
  // Additional SEO fields
  healthBenefitsDetailed?: string; // Long-form content for SEO
  nutritionFacts?: string; // Detailed nutrition info
  preparationTips?: string[]; // Cooking/prep tips (content richness)
  relatedFoods?: string[]; // Internal linking opportunities
  faqs?: Array<{ question: string; answer: string }>; // FAQ schema
}

export const foodData: Food[] = [
  { 
    name: "Chicken Breast", 
    slug: "chicken-breast-nutrition",
    metaTitle: "Chicken Breast Nutrition Facts | High Protein Low Fat Food",
    metaDescription: "Discover chicken breast nutrition: 31g protein, 165 calories per 100g. Perfect for weight loss and muscle building. Get meal ideas, benefits & recipes.",
    keywords: ["chicken breast nutrition", "high protein food", "lean protein", "chicken breast calories", "weight loss protein", "muscle building food"],
    calories: 165, 
    protein: 31, 
    carbs: 0, 
    fat: 3.6, 
    category: "lose", 
    benefits: "High protein, low fat, supports muscle growth and weight loss",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80",
    servingSize: "100g cooked",
    description: "Lean, versatile protein ideal for muscle maintenance and weight loss. Skinless chicken breast is one of the most popular protein sources for fitness enthusiasts and health-conscious individuals.",
    sodium: 74,
    bestFor: "Weight loss & lean muscle",
    dietTags: ["high-protein","low-fat","keto-friendly","gluten-free"],
    potassium_mg: 256,
    calcium_mg: 15,
    iron_mg: 1,
    allergens: ["none"],
    mealIdeas: ["Grilled chicken salad","Chicken rice bowl","Chicken lettuce wraps","Baked lemon herb chicken"],
    substitutions: ["Turkey breast","Tofu (for vegetarian)","Lean pork tenderloin"],
    healthBenefitsDetailed: "Chicken breast is an excellent source of lean protein, making it ideal for weight management and muscle development. It contains all essential amino acids needed for muscle repair and growth. The low fat content makes it perfect for calorie-controlled diets, while the high protein helps maintain satiety and preserve lean muscle mass during weight loss. Rich in B vitamins, particularly niacin and B6, chicken breast supports energy metabolism and nervous system health.",
    nutritionFacts: "Per 100g cooked: Calories 165, Protein 31g, Carbs 0g, Fat 3.6g, Sodium 74mg, Potassium 256mg, Iron 1mg",
    preparationTips: [
      "Marinate for at least 30 minutes for better flavor and tenderness",
      "Cook to internal temperature of 165°F (74°C)",
      "Let rest 5 minutes after cooking to retain juices",
      "Slice against the grain for tender pieces"
    ],
    relatedFoods: ["Turkey breast", "Salmon", "Eggs", "Greek Yogurt"],
    faqs: [
      {
        question: "How much protein is in chicken breast?",
        answer: "A 100g serving of cooked chicken breast contains approximately 31g of protein, making it one of the highest protein foods per calorie."
      },
      {
        question: "Is chicken breast good for weight loss?",
        answer: "Yes, chicken breast is excellent for weight loss due to its high protein content (31g per 100g) and low fat content (3.6g), keeping you full longer with fewer calories."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "NutritionInformation",
      name: "Chicken Breast",
      calories: "165 calories",
      protein: "31g",
      description: "Lean protein source ideal for muscle maintenance and weight loss"
    }
  },
  { 
    name: "Salmon", 
    slug: "salmon-nutrition-omega3",
    metaTitle: "Salmon Nutrition Facts | Omega-3 Rich Fish for Weight Gain",
    metaDescription: "Salmon nutrition: 22g protein, 13g omega-3 fats, 206 calories. Perfect for healthy weight gain, heart health, and muscle building. Benefits & recipes.",
    keywords: ["salmon nutrition", "omega-3 fatty acids", "salmon benefits", "healthy weight gain", "fish protein", "salmon calories"],
    calories: 206, 
    protein: 22, 
    carbs: 0, 
    fat: 13, 
    category: "gain", 
    benefits: "Rich in omega-3 fatty acids, high-quality protein, supports heart and brain health",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&q=80",
    servingSize: "100g cooked",
    description: "Fatty fish packed with omega-3s that support heart, brain, and joint health. Wild-caught salmon provides superior nutritional benefits for overall wellness.",
    sodium: 59,
    bestFor: "Muscle gain & heart health",
    dietTags: ["high-protein","omega-3","paleo","gluten-free","keto-friendly"],
    potassium_mg: 363,
    calcium_mg: 9,
    iron_mg: 0.3,
    allergens: ["fish"],
    mealIdeas: ["Pan-seared salmon with broccoli","Salmon quinoa bowl","Grilled salmon tacos","Baked honey garlic salmon"],
    substitutions: ["Trout","Mackerel","Sardines"],
    healthBenefitsDetailed: "Salmon is renowned for its high omega-3 fatty acid content, particularly EPA and DHA, which reduce inflammation and support cardiovascular health. The protein in salmon contains all essential amino acids for muscle growth and repair. Regular salmon consumption has been linked to improved brain function, reduced risk of heart disease, and better mood regulation. It's also rich in vitamin D, selenium, and B vitamins.",
    nutritionFacts: "Per 100g cooked: Calories 206, Protein 22g, Carbs 0g, Fat 13g (omega-3 rich), Sodium 59mg, Potassium 363mg",
    preparationTips: [
      "Cook skin-side down first for crispy skin",
      "Don't overcook - aim for 145°F internal temperature",
      "Season with lemon, dill, or garlic for classic flavors",
      "Let salmon reach room temperature before cooking"
    ],
    relatedFoods: ["Lean Beef", "Eggs", "Avocado", "Almonds"],
    faqs: [
      {
        question: "How much omega-3 is in salmon?",
        answer: "A 100g serving of salmon contains approximately 2-3g of omega-3 fatty acids (EPA and DHA), making it one of the best sources of these essential fats."
      },
      {
        question: "Is salmon good for weight gain?",
        answer: "Yes, salmon is excellent for healthy weight gain with 206 calories per 100g, 22g protein, and 13g of healthy fats that support muscle growth."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "NutritionInformation",
      name: "Salmon",
      calories: "206 calories",
      protein: "22g",
      description: "Omega-3 rich fatty fish for heart health and muscle gain"
    }
  },
  { 
    name: "Brown Rice", 
    slug: "brown-rice-nutrition",
    metaTitle: "Brown Rice Nutrition Facts | Whole Grain Complex Carbs",
    metaDescription: "Brown rice nutrition: 112 calories, 24g complex carbs, high fiber. Perfect for sustained energy and balanced diet. Benefits, cooking tips & meal ideas.",
    keywords: ["brown rice nutrition", "complex carbohydrates", "whole grain rice", "brown rice calories", "healthy carbs", "fiber rich foods"],
    calories: 112, 
    protein: 2.6, 
    carbs: 24, 
    fat: 0.9, 
    category: "maintain", 
    benefits: "Complex carbohydrates, fiber-rich, supports steady energy and digestion",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
    servingSize: "1/2 cup cooked (100g)",
    description: "Slow-digesting whole grain for steady energy and better satiety. Brown rice retains its bran and germ layers, providing more nutrients than white rice.",
    fiber: 1.8,
    bestFor: "Balanced energy & digestion",
    dietTags: ["whole-grain","fiber","vegan","gluten-free"],
    potassium_mg: 43,
    magnesium_mg: 39,
    iron_mg: 0.4,
    allergens: [],
    mealIdeas: ["Brown rice stir fry","Rice and beans bowl","Chicken fried rice","Rice pilaf"],
    substitutions: ["Quinoa","White rice","Cauliflower rice"],
    healthBenefitsDetailed: "Brown rice is a whole grain that provides complex carbohydrates for sustained energy throughout the day. The fiber content aids in digestive health and helps maintain steady blood sugar levels. Rich in manganese, magnesium, and B vitamins, brown rice supports bone health, energy production, and nervous system function. Its low glycemic index makes it suitable for diabetes management.",
    nutritionFacts: "Per 100g cooked: Calories 112, Protein 2.6g, Carbs 24g, Fiber 1.8g, Fat 0.9g, Magnesium 39mg",
    preparationTips: [
      "Rinse before cooking to remove excess starch",
      "Use 2:1 water to rice ratio for fluffy texture",
      "Cook for 40-45 minutes until tender",
      "Let rest 10 minutes after cooking before serving"
    ],
    relatedFoods: ["Quinoa", "Sweet Potato", "Eggs", "Chicken Breast"],
    faqs: [
      {
        question: "Is brown rice better than white rice?",
        answer: "Brown rice is more nutritious than white rice, containing more fiber (1.8g vs 0.4g per 100g), vitamins, and minerals due to retaining its bran and germ layers."
      },
      {
        question: "How many calories in brown rice?",
        answer: "Brown rice contains 112 calories per 100g (1/2 cup cooked), with 24g of complex carbohydrates and 1.8g of fiber for sustained energy."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "NutritionInformation",
      name: "Brown Rice",
      calories: "112 calories",
      protein: "2.6g",
      description: "Whole grain complex carbohydrate for sustained energy"
    }
  },
  { 
    name: "Avocado", 
    slug: "avocado-nutrition-healthy-fats",
    metaTitle: "Avocado Nutrition Facts | Healthy Fats for Weight Gain",
    metaDescription: "Avocado nutrition: 160 calories, 14.7g healthy fats, 6.7g fiber. Perfect for heart health and healthy weight gain. Benefits, recipes & meal ideas.",
    keywords: ["avocado nutrition", "healthy fats", "avocado calories", "heart healthy food", "avocado benefits", "monounsaturated fats"],
    calories: 160, 
    protein: 2, 
    carbs: 8.5, 
    fat: 14.7, 
    category: "gain", 
    benefits: "Healthy monounsaturated fats, nutrient-dense, supports heart health and satiety",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80",
    servingSize: "1/2 medium (100g)",
    description: "Creamy fruit rich in monounsaturated fats, fiber, potassium, and vitamins. Avocados are one of the most nutrient-dense foods available.",
    fiber: 6.7,
    bestFor: "Healthy weight gain & heart health",
    dietTags: ["healthy-fats","keto-friendly","vegan","gluten-free","paleo"],
    potassium_mg: 485,
    vitaminC_mg: 10,
    vitaminA_IU: 146,
    calcium_mg: 12,
    iron_mg: 0.6,
    allergens: [],
    mealIdeas: ["Avocado toast","Guacamole with veggies","Avocado smoothie","Chicken avocado salad"],
    substitutions: ["Olive oil (for fats)","Nut butter","Tahini"],
    healthBenefitsDetailed: "Avocados are loaded with heart-healthy monounsaturated fats that help lower bad cholesterol and raise good cholesterol. They're exceptionally high in potassium (more than bananas), which supports blood pressure regulation. The healthy fats help your body absorb fat-soluble vitamins A, D, E, and K. Rich in fiber, avocados promote digestive health and help maintain stable blood sugar levels. They also contain lutein and zeaxanthin for eye health.",
    nutritionFacts: "Per 100g (1/2 avocado): Calories 160, Protein 2g, Carbs 8.5g, Fiber 6.7g, Fat 14.7g (mostly monounsaturated), Potassium 485mg",
    preparationTips: [
      "Ripen at room temperature, then refrigerate",
      "Add lemon juice to prevent browning",
      "Remove pit and scoop flesh with spoon",
      "Mash for guacamole or slice for salads"
    ],
    relatedFoods: ["Almonds", "Salmon", "Olive oil", "Eggs"],
    faqs: [
      {
        question: "Is avocado good for weight gain?",
        answer: "Yes, avocado is excellent for healthy weight gain with 160 calories and 14.7g of healthy fats per 100g, providing nutrient-dense calories without junk food."
      },
      {
        question: "How much fat is in an avocado?",
        answer: "Half a medium avocado (100g) contains 14.7g of fat, primarily heart-healthy monounsaturated fats that support cardiovascular health."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "NutritionInformation",
      name: "Avocado",
      calories: "160 calories",
      protein: "2g",
      description: "Nutrient-dense fruit rich in healthy fats and fiber"
    }
  },
  { 
    name: "Greek Yogurt", 
    slug: "greek-yogurt-nutrition",
    metaTitle: "Greek Yogurt Nutrition | High Protein Probiotic Food",
    metaDescription: "Greek yogurt nutrition: 10g protein, 59 calories, probiotic-rich. Perfect for weight loss and gut health. Benefits, recipes & meal ideas included.",
    keywords: ["greek yogurt nutrition", "high protein yogurt", "probiotic food", "greek yogurt calories", "protein yogurt", "gut health food"],
    calories: 59, 
    protein: 10, 
    carbs: 3.6, 
    fat: 0.4, 
    category: "lose", 
    benefits: "High protein, low fat, probiotic-rich for gut health and satiety",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
    servingSize: "100g",
    description: "Thick, tangy dairy packed with protein and gut-friendly probiotic cultures. Strained to remove whey, resulting in higher protein concentration.",
    sugar: 3.2,
    sodium: 36,
    bestFor: "Weight loss & gut health",
    dietTags: ["high-protein","low-fat","probiotic","vegetarian"],
    calcium_mg: 110,
    potassium_mg: 141,
    vitaminA_IU: 20,
    iron_mg: 0,
    allergens: ["dairy"],
    mealIdeas: ["Yogurt parfait","Yogurt + berry bowl","Protein smoothie base","Tzatziki sauce"],
    substitutions: ["Soy yogurt","Cottage cheese","Skyr"],
    healthBenefitsDetailed: "Greek yogurt is an excellent source of complete protein with all essential amino acids, making it perfect for muscle maintenance and weight loss. The probiotic cultures support gut health, improve digestion, and boost immune function. High in calcium for bone health and low in lactose compared to regular yogurt. The protein content promotes satiety, helping control appetite and reduce overall calorie intake.",
    nutritionFacts: "Per 100g: Calories 59, Protein 10g, Carbs 3.6g, Sugar 3.2g, Fat 0.4g, Calcium 110mg, Sodium 36mg",
    preparationTips: [
      "Choose plain varieties to avoid added sugars",
      "Add fresh fruits and nuts for balanced nutrition",
      "Use as sour cream substitute in recipes",
      "Make overnight oats with Greek yogurt base"
    ],
    relatedFoods: ["Cottage cheese", "Eggs", "Chicken Breast", "Almonds"],
    faqs: [
      {
        question: "How much protein is in Greek yogurt?",
        answer: "Greek yogurt contains approximately 10g of protein per 100g serving, nearly double the protein of regular yogurt, making it excellent for weight loss."
      },
      {
        question: "Is Greek yogurt good for weight loss?",
        answer: "Yes, Greek yogurt is excellent for weight loss with only 59 calories and 10g of protein per 100g, keeping you full longer and supporting lean muscle maintenance."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "NutritionInformation",
      name: "Greek Yogurt",
      calories: "59 calories",
      protein: "10g",
      description: "High-protein probiotic dairy for weight loss and gut health"
    }
  }
];

// SEO Helper Functions
export const generateFoodSchema = (food: Food) => {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: food.name,
    description: food.description,
    nutrition: {
      "@type": "NutritionInformation",
      calories: `${food.calories} calories`,
      proteinContent: `${food.protein}g`,
      carbohydrateContent: `${food.carbs}g`,
      fatContent: `${food.fat}g`,
      fiberContent: food.fiber ? `${food.fiber}g` : undefined,
      servingSize: food.servingSize
    },
    keywords: food.keywords?.join(", "),
    suitableForDiet: food.dietTags?.map(tag => `https://schema.org/${tag}`)
  };
};

export const generateBreadcrumbSchema = (food: Food) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yoursite.com/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Foods",
        item: "https://yoursite.com/foods"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: food.name,
        item: `https://yoursite.com/foods/${food.slug}`
      }
    ]
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
};
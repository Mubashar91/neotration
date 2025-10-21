export interface Food {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: "lose" | "gain" | "maintain";
  benefits: string;
  image: string;
}

export const foodData: Food[] = [
  { 
    name: "Chicken Breast", 
    calories: 165, 
    protein: 31, 
    carbs: 0, 
    fat: 3.6, 
    category: "lose", 
    benefits: "High protein, low fat",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80"
  },
  { 
    name: "Salmon", 
    calories: 206, 
    protein: 22, 
    carbs: 0, 
    fat: 13, 
    category: "gain", 
    benefits: "Rich in omega-3, high protein",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&q=80"
  },
  { 
    name: "Brown Rice", 
    calories: 112, 
    protein: 2.6, 
    carbs: 24, 
    fat: 0.9, 
    category: "maintain", 
    benefits: "Complex carbs, fiber-rich",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80"
  },
  { 
    name: "Avocado", 
    calories: 160, 
    protein: 2, 
    carbs: 8.5, 
    fat: 14.7, 
    category: "gain", 
    benefits: "Healthy fats, nutrient-dense",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80"
  },
  { 
    name: "Greek Yogurt", 
    calories: 59, 
    protein: 10, 
    carbs: 3.6, 
    fat: 0.4, 
    category: "lose", 
    benefits: "High protein, probiotic",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80"
  },
  { 
    name: "Sweet Potato", 
    calories: 86, 
    protein: 1.6, 
    carbs: 20, 
    fat: 0.1, 
    category: "maintain", 
    benefits: "Vitamins A & C, fiber",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&q=80"
  },
  { 
    name: "Eggs", 
    calories: 155, 
    protein: 13, 
    carbs: 1.1, 
    fat: 11, 
    category: "maintain", 
    benefits: "Complete protein, vitamins",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80"
  },
  { 
    name: "Spinach", 
    calories: 23, 
    protein: 2.9, 
    carbs: 3.6, 
    fat: 0.4, 
    category: "lose", 
    benefits: "Low calorie, iron-rich",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80"
  },
  { 
    name: "Almonds", 
    calories: 579, 
    protein: 21, 
    carbs: 22, 
    fat: 50, 
    category: "gain", 
    benefits: "Healthy fats, vitamin E",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&q=80"
  },
  { 
    name: "Quinoa", 
    calories: 120, 
    protein: 4.4, 
    carbs: 21, 
    fat: 1.9, 
    category: "maintain", 
    benefits: "Complete protein, gluten-free",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80"
  },
  { 
    name: "Broccoli", 
    calories: 34, 
    protein: 2.8, 
    carbs: 7, 
    fat: 0.4, 
    category: "lose", 
    benefits: "Fiber, vitamin C & K",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&q=80"
  },
  { 
    name: "Lean Beef", 
    calories: 250, 
    protein: 26, 
    carbs: 0, 
    fat: 15, 
    category: "gain", 
    benefits: "High protein, iron, B12",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80"
  }
];

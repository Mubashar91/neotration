import type { BlogArticle } from './blogArticles';
import glpPlan from '@/content/blog/glp-1-friendly-meal-plan.txt?raw';
import fiberPlan from '@/content/blog/fibermaxxing-meal-plan.txt?raw';
import beanSalads from '@/content/blog/dense-bean-salad-meal-prep.txt?raw';
import budgetPrep from '@/content/blog/budget-high-protein-meal-prep.txt?raw';
import proteinIceCream from '@/content/blog/ninja-creami-protein-ice-cream.txt?raw';
import airFryer from '@/content/blog/air-fryer-high-protein-dinners.txt?raw';
import antiInflammatory from '@/content/blog/anti-inflammatory-high-protein-meal-plan.txt?raw';
import chickenPotato from '@/content/blog/chicken-potato-meal-prep-bowls.txt?raw';
import coldLunches from '@/content/blog/no-reheat-high-protein-lunches.txt?raw';
import rotisserie from '@/content/blog/rotisserie-chicken-meal-prep.txt?raw';
import freezerBags from '@/content/blog/freezer-meal-prep-weight-loss.txt?raw';
import fiveIngredients from '@/content/blog/five-ingredient-high-protein-dinners.txt?raw';
import januaryReset from '@/content/blog/january-reset-dinner-rotation.txt?raw';
import snackBoxes from '@/content/blog/high-protein-high-fiber-snack-boxes.txt?raw';

const saladImage = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&h=630&q=80';
const mealImage = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80';
const produceImage = 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&h=630&q=80';

function article(slug: string, title: string, excerpt: string, content: string, keywords: string, tags: string[], image = mealImage): BlogArticle {
  return {
    slug, title, excerpt, content, keywords, tags, image,
    imageAlt: image === produceImage ? 'Assorted vegetables and ingredients arranged on a table' : 'An illustrative vegetable-rich meal; not a photograph of the recipes below',
    category: 'Nutrition', categorySlug: 'nutrition',
    readTime: `${Math.max(3, Math.ceil(content.split(/\s+/).length / 200))} min read`,
    date: 'Nov 27, 2026', updatedAt: 'Nov 27, 2026',
    author: 'FitJourney Team', difficulty: 'beginner', seoDescription: excerpt,
  };
}

// Fourteen new URLs; the existing breakfast article covers the fifteenth research topic.
export const researchArticles: BlogArticle[] = [
  article('glp-1-friendly-meal-plan', 'GLP-1-Friendly Meal Plan: 7 Days of Small, Protein-First Meals', 'A flexible seven-day menu of small meals, with a shopping list, prep guidance, and questions to discuss with your prescriber or dietitian.', glpPlan, 'glp-1 meal plan, glp-1 friendly meals, high protein small meals, small meals low appetite', ['meal plans', 'high protein', 'small meals']),
  article('fibermaxxing-meal-plan', 'Fibermaxxing Meal Plan: 7 Days of Protein and Fiber', 'Plan seven days of oats, lentils, beans, vegetables, and protein foods, with estimated fiber portions, a shopping list, and gradual swaps.', fiberPlan, 'fibermaxxing meal plan, high fiber meal plan, high protein high fiber meals, fiber meal prep', ['meal plans', 'high protein', 'fiber', 'fibermaxxing'], saladImage),
  article('dense-bean-salad-meal-prep', 'Dense Bean Salads: 5 No-Cook Lunches for Meal Prep', 'Five two-serving bean salads with measured ingredients, protein options, a shopping list, and a safe midweek prep schedule.', beanSalads, 'dense bean salad, bean salad meal prep, no cook lunch, high protein lunch meal prep', ['lunch', 'meal prep', 'fiber', 'high protein'], saladImage),
  article('budget-high-protein-meal-prep', 'Budget High-Protein Meal Prep: 7 Dinners and an Aldi-Style List', 'Seven dinners from one shared shopping basket, with an illustrative under-$5 budget, portion instructions, and a receipt-based cost worksheet.', budgetPrep, 'budget meal prep, cheap high protein meals, aldi meal prep, meal prep on a budget', ['meal plans', 'budget', 'dinner', 'high protein'], produceImage),
  article('ninja-creami-protein-ice-cream', 'Ninja Creami Protein Ice Cream: 10 Flavors + No-Creami Method', 'Ten milk-and-yogurt protein ice cream flavors, a shared pint base, a no-Creami freezer method, and label-based nutrition guidance.', proteinIceCream, 'ninja creami protein ice cream, protein ice cream, high protein desserts, no creami ice cream', ['dessert', 'high protein', 'meal prep'], produceImage),
  article('air-fryer-high-protein-dinners', '6 Air Fryer High-Protein Dinners with Simple Sides', 'Six portioned air fryer dinners with chicken, salmon, shrimp, turkey, and tofu, plus safe cooking temperatures and prep tips.', airFryer, 'high protein air fryer meals, air fryer chicken recipes, low calorie air fryer dinners', ['dinner', 'high protein', 'air fryer']),
  article('anti-inflammatory-high-protein-meal-plan', '7-Day Anti-Inflammatory, High-Protein Meal Plan', 'A Mediterranean-style week of protein foods, vegetables, whole grains, and beans, with no deliberately added sugar and flexible portions.', antiInflammatory, 'anti inflammatory meal plan, high protein anti inflammatory meals, no added sugar meal plan', ['meal plans', 'high protein', 'Mediterranean'], saladImage),
  article('chicken-potato-meal-prep-bowls', 'Chicken and Potato Meal Prep: 7 High-Protein Bowl Ideas', 'One two-serving chicken-and-potato method with seven sauces, measured portions, an adaptable shopping list, and safe storage guidance.', chickenPotato, 'chicken and potato meal prep, high protein meal prep bowls, chicken potato bowls', ['dinner', 'high protein', 'meal prep']),
  article('no-reheat-high-protein-lunches', 'No-Reheat High-Protein Lunches: 10 Work Lunch Boxes', 'Ten cold lunch boxes with chicken, tuna, tofu, eggs, and dairy, plus measured portions, shopping tips, and safe cold transport.', coldLunches, 'no reheat high protein lunches, cold lunch meal prep, protein lunch box, work lunch meal prep', ['lunch', 'high protein', 'meal prep'], saladImage),
  article('rotisserie-chicken-meal-prep', 'Rotisserie Chicken Meal Prep: 1 Chicken, 5 Different Meals', 'Turn at least 15 ounces of cooked rotisserie chicken into five meals, with a shared shopping list, cost guidance, and a freezer plan.', rotisserie, 'rotisserie chicken meal prep, rotisserie chicken recipes healthy, costco chicken meal prep', ['dinner', 'high protein', 'budget', 'meal prep']),
  article('freezer-meal-prep-weight-loss', 'Freezer Meal Prep: 10 Make-Ahead Dinner Bags', 'Ten two-serving freezer bags with ingredient quantities, thawing instructions, cooking methods, and safe temperatures for easy dinners.', freezerBags, 'freezer meal prep, healthy freezer meals, dump meals, make ahead meals for weight loss', ['dinner', 'meal prep', 'freezer', 'budget'], produceImage),
  article('five-ingredient-high-protein-dinners', '5-Ingredient High-Protein Dinners: 12 Simple Pantry Meals', 'Twelve single-serving dinners with five main ingredients each, using cooked grains, canned beans, poultry, fish, eggs, or tofu.', fiveIngredients, '5 ingredient dinners, easy high protein dinners, pantry meal prep, 30 minute high protein meals', ['dinner', 'high protein', 'budget']),
  article('january-reset-dinner-rotation', 'January Reset Without a Diet: 14 Days of Dinners', 'A flexible fourteen-day dinner rotation, week-one shopping list, midweek prep, and week-two top-up without detox or weight-loss promises.', januaryReset, 'new year meal plan, january healthy dinners, reset meal plan, healthy dinner rotation', ['meal plans', 'dinner', 'budget']),
  article('high-protein-high-fiber-snack-boxes', 'Protein and Fiber Snack Boxes: 12 Easy Bento Ideas', 'Twelve measured snack boxes with estimated calories and protein, a short shopping list, assembly tips, and safe storage for workdays.', snackBoxes, 'protein snack box, high protein snacks meal prep, high fiber snacks, bento box snacks', ['snacks', 'high protein', 'fiber', 'meal prep'], produceImage),
];

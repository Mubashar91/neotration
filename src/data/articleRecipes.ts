import type { ArticleRecipe } from './recipeTypes';

// Complete, visible recipes only. No invented nutrition analysis or ratings.
export const articleRecipes: Record<string, ArticleRecipe[]> = {
  'glp-1-friendly-meal-plan': [{
    name: 'Small chicken, rice, and carrot bowls', description: 'Two modest portions; add food according to your needs and care plan.', servings: 2, prepMinutes: 10, cookMinutes: 20,
    ingredients: ['8 oz raw boneless skinless chicken breast, diced', '1 cup cooked rice', '1 cup sliced carrots', '2 tsp olive oil', 'Water as needed; pepper to taste'],
    instructions: ['Steam carrots until tender, about 10 minutes.', 'Heat oil in a skillet. Add chicken and cook, stirring, until the thickest pieces reach 165°F; allow about 10–15 minutes.', 'Warm rice thoroughly, reheating leftover rice to 165°F. Divide chicken, rice, and carrots into two bowls.', 'Cool any leftovers promptly and use refrigerated portions within 3–4 days.'],
  }],
  'fibermaxxing-meal-plan': [{
    name: 'Lentil quinoa lunch bowls', description: 'A two-serving bean-and-grain base; add protein or other food as needed.', servings: 2, prepMinutes: 10, cookMinutes: 0,
    ingredients: ['1 1/2 cups cooked cooled lentils', '1 cup cooked cooled quinoa', '1 cup chopped cucumber', '1 cup chopped tomato', '2 tsp olive oil', '2 tbsp lemon juice', 'Pepper and parsley to taste'],
    instructions: ['Use cooked grains and lentils that have been cooled promptly and kept refrigerated.', 'Mix lentils, quinoa, cucumber, and tomato.', 'Toss with olive oil, lemon juice, and seasonings. Divide into two containers.', 'Keep cold and use within 3–4 days, counting time since the grains and lentils were cooked.'],
  }],
  'high-protein-breakfast-meal-prep': [{
    name: 'Cottage cheese egg bites with toast', description: 'Six bites make two breakfasts with toast.', servings: 2, prepMinutes: 10, cookMinutes: 24,
    ingredients: ['4 large eggs', '1/2 cup low-fat cottage cheese', '1 cup finely chopped spinach and bell pepper', '1 tsp oil to grease muffin cups', '2 slices whole-grain bread', 'Pepper to taste'],
    instructions: ['Heat oven to 350°F and grease six muffin cups with the oil.', 'Whisk eggs, cottage cheese, and pepper. Divide vegetables among cups and pour in eggs.', 'Bake approximately 18–24 minutes until the centers reach 160°F.', 'Serve three bites with one slice toast. Chill leftovers promptly; use within 3–4 days and reheat to 165°F.'],
  }, {
    name: 'Yogurt overnight oats', description: 'One refrigerated breakfast jar; four-hour soaking time is additional.', servings: 1, prepMinutes: 5, cookMinutes: 0, restMinutes: 240,
    ingredients: ['1/2 cup rolled oats', '3/4 cup plain nonfat Greek yogurt', '1/2 cup low-fat milk', '1 tbsp chia seeds', '1/2 cup berries'],
    instructions: ['Stir all ingredients together in a food-safe lidded jar.', 'Refrigerate for at least four hours.', 'Stir before eating; add milk if desired and count it separately in nutrition.', 'Keep refrigerated and use within 3–4 days or a shorter dairy-label limit.'],
  }, {
    name: 'Greek yogurt berry breakfast jar', description: 'A simple breakfast with a separate crunchy topping.', servings: 1, prepMinutes: 5, cookMinutes: 0,
    ingredients: ['1 cup plain Greek yogurt', '1/2 cup berries', '2 tbsp pumpkin seeds', '2 tbsp rolled oats or granola'],
    instructions: ['Layer yogurt and berries in a covered food-safe container.', 'Pack seeds and oats separately and add before eating.', 'Keep refrigerated; assemble the evening before for the best texture.'],
  }],
  'dense-bean-salad-meal-prep': [{
    name: 'Lemon chickpea chicken salad', description: 'Two cold lunches using already cooked chicken.', servings: 2, prepMinutes: 10, cookMinutes: 0,
    ingredients: ['1 cup drained chickpeas', '6 oz cooked chopped chicken', '1 cup chopped cucumber', '1 cup chopped tomato', '1 tbsp olive oil', '2 tbsp lemon juice', '2 tbsp parsley'],
    instructions: ['Use chicken that has been safely cooked and refrigerated.', 'Mix chickpeas, chicken, and vegetables.', 'Whisk lemon juice with oil; toss with salad and parsley.', 'Divide into two containers, keep cold, and use within 3–4 days counting the chicken storage time.'],
  }],
  'budget-high-protein-meal-prep': [{
    name: 'Budget chicken and rice dinner', description: 'One portion from the shared budget basket; prices depend on your store.', servings: 1, prepMinutes: 10, cookMinutes: 25,
    ingredients: ['5 oz raw boneless chicken', '1 cup mixed vegetables', '1/2 cup cooked rice', '1 tsp olive oil', 'Pepper and garlic powder to taste'],
    instructions: ['Heat oven to 425°F. Cut chicken and vegetables into even pieces.', 'Toss with oil and seasonings and spread on a baking tray.', 'Roast about 20–25 minutes until chicken reaches 165°F.', 'Serve with warmed rice; reheat leftover rice to 165°F.'],
  }],
  'ninja-creami-protein-ice-cream': [{
    name: 'Vanilla milk-and-yogurt frozen dessert', description: 'One standard-pint base divided into two servings. Follow your appliance fill line and manual.', servings: 2, prepMinutes: 5, cookMinutes: 0, restMinutes: 1440,
    ingredients: ['1 cup low-fat milk', '1/2 cup plain nonfat Greek yogurt', '1 tbsp maple syrup', '1/2 tsp vanilla extract'],
    instructions: ['Whisk or blend ingredients until smooth.', 'Pour below the maximum fill line in your approved container; reserve excess separately.', 'Freeze level for the period in your manual, commonly at least 24 hours.', 'Process using the manufacturer-recommended setting. Follow its instructions for reprocessing a crumbly result.', 'Without a machine, freeze in a shallow covered container, stirring during the first few hours; allow to soften before scooping.'],
  }],
  'air-fryer-high-protein-dinners': [{
    name: 'Air fryer lemon chicken and broccoli', description: 'One dinner with precooked rice; preheat according to your air fryer manual.', servings: 1, prepMinutes: 10, cookMinutes: 16,
    ingredients: ['5 oz raw chicken breast, diced', '1 1/2 cups broccoli', '1 tsp olive oil', '1/2 cup cooked rice', '1 tsp lemon zest', 'Pepper to taste'],
    instructions: ['Toss chicken and broccoli with oil, lemon zest, and pepper.', 'Arrange in a loose single layer and air fry at 380°F for about 12–16 minutes, shaking once.', 'Check several thick chicken pieces reach 165°F; continue cooking if necessary.', 'Serve with hot rice, reheating leftover rice to 165°F.'],
  }],
  'anti-inflammatory-high-protein-meal-plan': [{
    name: 'Chicken and white bean tomato skillet', description: 'A Mediterranean-style dinner without a disease-treatment claim.', servings: 1, prepMinutes: 10, cookMinutes: 20,
    ingredients: ['5 oz raw diced chicken breast', '1 tsp olive oil', '1/2 cup white beans', '1/2 cup canned tomatoes with no added sugar', '1 cup spinach', 'Pepper and dried herbs to taste'],
    instructions: ['Heat oil in a skillet and cook chicken, turning the pieces.', 'Add beans, tomatoes, spinach, and herbs with a splash of water.', 'Simmer until chicken reaches 165°F and spinach wilts.', 'Serve with a grain or other side if needed; the side is additional to this recipe.'],
  }],
  'chicken-potato-meal-prep-bowls': [{
    name: 'Chicken and potato bowl base', description: 'Two plain bowls; sauces in the article are optional additions.', servings: 2, prepMinutes: 10, cookMinutes: 35,
    ingredients: ['10 oz raw boneless skinless chicken breast', '12 oz potatoes', '2 cups broccoli or green beans', '2 tsp olive oil', 'Pepper to taste'],
    instructions: ['Heat oven to 425°F. Cut potatoes into 1/2-inch pieces and chicken into even bite-size pieces.', 'Toss potatoes with 1 tsp oil and roast for 15 minutes.', 'Add chicken and vegetables tossed with remaining oil. Roast 15–20 minutes more, turning once.', 'Check chicken reaches 165°F and potatoes are tender; divide into two bowls.'],
  }],
  'no-reheat-high-protein-lunches': [{
    name: 'Cold chicken chickpea lunch', description: 'One refrigerated work lunch; keep the pita separate.', servings: 1, prepMinutes: 10, cookMinutes: 0,
    ingredients: ['3 oz cooked chicken', '1/2 cup drained chickpeas', '1 cup cucumber and tomato', '1 tbsp lemon dressing', '1 small whole-grain pita'],
    instructions: ['Mix safely chilled chicken, chickpeas, and vegetables with dressing.', 'Pack pita separately.', 'Refrigerate until leaving and transport with cold packs. Keep at 40°F or below.', 'Use within the storage window of the oldest cooked ingredient.'],
  }],
  'rotisserie-chicken-meal-prep': [{
    name: 'Rotisserie chicken white bean soup', description: 'One dinner from a safely stored cooked chicken.', servings: 1, prepMinutes: 5, cookMinutes: 20,
    ingredients: ['3 oz cooked rotisserie chicken', '1/2 cup white beans', '1/2 cup canned tomatoes', '1/2 cup diced carrots', '1 cup low-sodium broth'],
    instructions: ['Simmer beans, tomatoes, carrots, and broth until carrots are tender.', 'Add chicken and heat the soup to 165°F.', 'Add water or broth if desired for consistency.', 'Count storage time from when the chicken was first cooked or purchased.'],
  }],
  'freezer-meal-prep-weight-loss': [{
    name: 'Make-ahead salsa chicken bag', description: 'Two servings. Freezing and refrigerator thawing time are additional and vary by bag thickness.', servings: 2, prepMinutes: 10, cookMinutes: 30,
    ingredients: ['12 oz raw chicken breast', '1 cup salsa', '1 cup sliced peppers', '1/2 tsp cumin', '1/2 cup water, added when cooking'],
    instructions: ['Put chicken, salsa, peppers, and cumin in a freezer-safe bag. Label with date, contents, and cooking instructions.', 'Freeze flat promptly. Thaw in the refrigerator on a tray before cooking.', 'Transfer to a saucepan, add water, and simmer covered until chicken reaches 165°F, allowing about 20–30 minutes or longer as needed.', 'Never put the frozen raw chicken block directly into a slow cooker.'],
  }],
  'five-ingredient-high-protein-dinners': [{
    name: 'Five-ingredient chicken broccoli rice', description: 'One quick dinner using already cooked chicken and rice.', servings: 1, prepMinutes: 5, cookMinutes: 15,
    ingredients: ['4 oz cooked chicken', '1/2 cup cooked rice', '1 cup broccoli', '1 tsp olive oil', '1 tbsp lemon juice'],
    instructions: ['Cook broccoli in oil with a splash of water until tender.', 'Add chicken and rice and heat leftovers to 165°F.', 'Finish with lemon juice and serve.'],
  }],
  'january-reset-dinner-rotation': [{
    name: 'Lentil tomato dinner soup', description: 'One flexible dinner portion; add bread or other food according to appetite.', servings: 1, prepMinutes: 5, cookMinutes: 20,
    ingredients: ['3/4 cup cooked lentils', '1/2 cup canned tomatoes', '1 cup low-sodium broth', '1/2 cup diced carrots', 'Pepper and dried herbs to taste'],
    instructions: ['Combine ingredients in a saucepan.', 'Simmer until carrots are tender, about 15–20 minutes.', 'If using previously cooked lentils, heat the mixture to 165°F.', 'Add water for a thinner soup and serve with additional food as needed.'],
  }],
  'high-protein-high-fiber-snack-boxes': [{
    name: 'Yogurt berry chia snack box', description: 'One small snack, not a complete meal.', servings: 1, prepMinutes: 5, cookMinutes: 0,
    ingredients: ['3/4 cup plain nonfat Greek yogurt', '1/2 cup raspberries', '1 tbsp chia seeds'],
    instructions: ['Put yogurt and washed raspberries in a lidded container.', 'Add chia seeds just before eating, or stir in earlier if you prefer a softer texture.', 'Keep refrigerated at 40°F or below, including during transport.'],
  }],
};

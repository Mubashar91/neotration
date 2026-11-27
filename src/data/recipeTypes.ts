export interface ArticleRecipe {
  name: string;
  description: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  restMinutes?: number;
  ingredients: string[];
  instructions: string[];
}

export interface ArticleRecipe {
  // A representative finished-dish photograph, added only when available.
  image?: string;
  name: string;
  description: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  restMinutes?: number;
  ingredients: string[];
  instructions: string[];
}

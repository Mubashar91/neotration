import type { ArticleRecipe } from '@/data/recipeTypes';

export default function ArticleRecipes({ recipes }: { recipes: ArticleRecipe[] }) {
  return <section id="recipe-cards" className="space-y-6 scroll-mt-24">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h2 className="font-poppins text-2xl font-bold">Printable recipe cards</h2>
      <button type="button" onClick={() => window.print()} className="rounded-lg border px-4 py-2 text-sm font-semibold">Print recipes & shopping list</button>
    </div>
    {recipes.map((recipe, i) => <div key={recipe.name} id={`recipe-${i + 1}`} className="rounded-xl border p-5 space-y-4 scroll-mt-24 break-inside-avoid">
      <h3 className="font-poppins text-xl font-semibold">{recipe.name}</h3>
      <p className="text-muted-foreground">{recipe.description}</p>
      <p className="text-sm">Makes {recipe.servings} {recipe.servings === 1 ? 'serving' : 'servings'} · Prep {recipe.prepMinutes} min · Cook {recipe.cookMinutes} min{recipe.restMinutes ? ` · Rest/freeze ${recipe.restMinutes} min` : ''}</p>
      <h4 className="font-semibold">Ingredients</h4>
      <ul className="list-disc pl-6 space-y-1">{recipe.ingredients.map(item => <li key={item}>{item}</li>)}</ul>
      <h4 className="font-semibold">Method</h4>
      <ol className="list-decimal pl-6 space-y-2">{recipe.instructions.map(item => <li key={item}>{item}</li>)}</ol>
    </div>)}
  </section>;
}

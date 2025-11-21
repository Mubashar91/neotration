import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { foodData } from "@/data/foodData";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const FoodDetail = () => {
  const { slug } = useParams();
  const food = foodData.find((f) => (f.slug ? f.slug : slugify(f.name)) === slug);

  if (!food) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-poppins text-4xl font-bold text-foreground mb-4">Food Not Found</h1>
          <Link to="/food">
            <Button className="bg-gradient-hero">Back to Food Guide</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const siteUrl = "https://neotration.vercel.app";
  const fullUrl = `${siteUrl}/food/${slugify(food.name)}`;

  const nutrition: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Food',
    name: food.name,
    description: food.description || food.benefits,
    image: food.image,
    category: food.category,
    nutrition: {
      '@type': 'NutritionInformation',
      servingSize: food.servingSize,
      calories: `${food.calories} kcal`,
      proteinContent: `${food.protein} g`,
      carbohydrateContent: `${food.carbs} g`,
      fatContent: `${food.fat} g`,
      ...(food.fiber !== undefined ? { fiberContent: `${food.fiber} g` } : {}),
      ...(food.sugar !== undefined ? { sugarContent: `${food.sugar} g` } : {}),
      ...(food.sodium !== undefined ? { sodiumContent: `${food.sodium} mg` } : {}),
    },
    mainEntityOfPage: fullUrl,
    url: fullUrl,
  };

  const faqSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Is ${food.name} good for ${food.category === 'lose' ? 'weight loss' : food.category === 'gain' ? 'weight gain' : 'weight maintenance'}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${food.name} is best for ${food.bestFor || (food.category === 'lose' ? 'weight loss' : food.category === 'gain' ? 'muscle gain' : 'balanced diets')}. A typical serving (${food.servingSize || 'per serving'}) has ${food.calories} calories, ${food.protein}g protein, ${food.carbs}g carbs, and ${food.fat}g fat.`
        }
      },
      {
        '@type': 'Question',
        name: `How much protein is in ${food.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${food.protein}g protein per ${food.servingSize || 'serving'}.`
        }
      },
      {
        '@type': 'Question',
        name: `What diet types is ${food.name} suitable for?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${food.dietTags?.join(', ') || 'General healthy diets'}.`
        }
      },
      ...(food.faqs ? food.faqs.map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: { '@type': 'Answer', text: q.answer }
      })) : [])
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Food', item: '/food' },
      { '@type': 'ListItem', position: 3, name: food.name, item: `/food/${slugify(food.name)}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={food.metaTitle || `${food.name} Nutrition Facts`}
        description={food.metaDescription || ((food.description || food.benefits) + ` Serving size: ${food.servingSize || 'per serving'}. Calories: ${food.calories} kcal. Protein: ${food.protein}g. Carbs: ${food.carbs}g. Fat: ${food.fat}g.`)}
        keywords={(food.keywords && food.keywords.join(', ')) || `${food.name} nutrition, calories in ${food.name}, ${food.name} protein carbs fat, nutrition facts, ${food.bestFor || ''}, ${(food.dietTags || []).join(', ')}`}
        canonicalUrl={`/food/${slugify(food.name)}`}
        ogType="article"
        ogImage={food.image}
        structuredData={[nutrition, breadcrumbSchema, faqSchema, ...(food.schema ? [food.schema] : [])]}
      />
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/food" className="inline-flex items-center gap-2 font-lato text-base font-medium text-primary hover:text-primary/80 transition-colors mb-8">
            ← Back to Food Guide
          </Link>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div className="overflow-hidden rounded-xl border-2 border-border">
              <img
                src={food.image}
                alt={`${food.name} nutrition facts`}
                className="w-full h-auto object-cover"
                width={900}
                height={600}
                loading="eager"
              />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">{food.name}</h1>
              {food.servingSize && (
                <p className="font-lato text-sm text-muted-foreground">Serving size: {food.servingSize}</p>
              )}
              <p className="font-lato text-base sm:text-lg text-muted-foreground">
                {food.description || food.benefits}
              </p>
              {food.healthBenefitsDetailed && (
                <p className="font-lato text-sm text-muted-foreground">
                  {food.healthBenefitsDetailed}
                </p>
              )}
              {(food.bestFor || (food.dietTags && food.dietTags.length > 0)) && (
                <div className="flex flex-wrap gap-2">
                  {food.bestFor && (
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-secondary/10 border border-secondary text-secondary">Best for: {food.bestFor}</span>
                  )}
                  {(food.dietTags || []).map((tag) => (
                    <span key={tag} className="inline-block text-xs px-2 py-1 rounded-full bg-background border border-border text-muted-foreground">{tag}</span>
                  ))}
                </div>
              )}

              <Card className="border-2 border-border">
                <CardContent className="p-4 sm:p-6 space-y-2">
                  <div className="flex justify-between"><span className="font-lato text-sm text-muted-foreground">Calories</span><span className="font-poppins font-semibold text-primary">{food.calories} kcal</span></div>
                  <div className="flex justify-between"><span className="font-lato text-sm text-muted-foreground">Protein</span><span className="font-lato font-semibold">{food.protein} g</span></div>
                  <div className="flex justify-between"><span className="font-lato text-sm text-muted-foreground">Carbs</span><span className="font-lato font-semibold">{food.carbs} g</span></div>
                  <div className="flex justify-between"><span className="font-lato text-sm text-muted-foreground">Fat</span><span className="font-lato font-semibold">{food.fat} g</span></div>
                  {food.fiber !== undefined && (
                    <div className="flex justify-between"><span className="font-lato text-sm text-muted-foreground">Fiber</span><span className="font-lato font-semibold">{food.fiber} g</span></div>
                  )}
                  {food.sugar !== undefined && (
                    <div className="flex justify-between"><span className="font-lato text-sm text-muted-foreground">Sugar</span><span className="font-lato font-semibold">{food.sugar} g</span></div>
                  )}
                  {food.sodium !== undefined && (
                    <div className="flex justify-between"><span className="font-lato text-sm text-muted-foreground">Sodium</span><span className="font-lato font-semibold">{food.sodium} mg</span></div>
                  )}
                </CardContent>
              </Card>

              {food.nutritionFacts && (
                <Card className="border-2 border-border">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="font-poppins text-xl font-bold mb-2">Nutrition Facts (Summary)</h2>
                    <p className="font-lato text-sm text-muted-foreground">{food.nutritionFacts}</p>
                  </CardContent>
                </Card>
              )}

              {(food.potassium_mg || food.calcium_mg || food.iron_mg || food.magnesium_mg || food.zinc_mg || food.vitaminA_IU || food.vitaminC_mg || food.vitaminD_IU || food.vitaminE_mg) && (
                <Card className="border-2 border-border">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="font-poppins text-xl font-bold mb-3">Micronutrients</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                      {food.potassium_mg !== undefined && (<div className="flex justify-between"><span className="text-muted-foreground">Potassium</span><span className="font-semibold">{food.potassium_mg} mg</span></div>)}
                      {food.calcium_mg !== undefined && (<div className="flex justify-between"><span className="text-muted-foreground">Calcium</span><span className="font-semibold">{food.calcium_mg} mg</span></div>)}
                      {food.iron_mg !== undefined && (<div className="flex justify-between"><span className="text-muted-foreground">Iron</span><span className="font-semibold">{food.iron_mg} mg</span></div>)}
                      {food.magnesium_mg !== undefined && (<div className="flex justify-between"><span className="text-muted-foreground">Magnesium</span><span className="font-semibold">{food.magnesium_mg} mg</span></div>)}
                      {food.zinc_mg !== undefined && (<div className="flex justify-between"><span className="text-muted-foreground">Zinc</span><span className="font-semibold">{food.zinc_mg} mg</span></div>)}
                      {food.vitaminA_IU !== undefined && (<div className="flex justify-between"><span className="text-muted-foreground">Vitamin A</span><span className="font-semibold">{food.vitaminA_IU} IU</span></div>)}
                      {food.vitaminC_mg !== undefined && (<div className="flex justify-between"><span className="text-muted-foreground">Vitamin C</span><span className="font-semibold">{food.vitaminC_mg} mg</span></div>)}
                      {food.vitaminD_IU !== undefined && (<div className="flex justify-between"><span className="text-muted-foreground">Vitamin D</span><span className="font-semibold">{food.vitaminD_IU} IU</span></div>)}
                      {food.vitaminE_mg !== undefined && (<div className="flex justify-between"><span className="text-muted-foreground">Vitamin E</span><span className="font-semibold">{food.vitaminE_mg} mg</span></div>)}
                    </div>
                  </CardContent>
                </Card>
              )}

              {food.ingredients && food.ingredients.length > 0 && (
                <Card className="border-2 border-border">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="font-poppins text-xl font-bold mb-2">Ingredients</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {food.ingredients.map((ing, i) => (
                        <li key={i} className="font-lato text-muted-foreground">{ing}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {food.allergens && food.allergens.length > 0 && (
                <Card className="border-2 border-border">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="font-poppins text-xl font-bold mb-2">Allergens</h2>
                    <div className="flex flex-wrap gap-2">
                      {food.allergens.map((a) => (
                        <span key={a} className="inline-block text-xs px-2 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300">{a}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {food.mealIdeas && food.mealIdeas.length > 0 && (
                <Card className="border-2 border-border">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="font-poppins text-xl font-bold mb-2">Meal Ideas</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {food.mealIdeas.map((idea, i) => (
                        <li key={i} className="font-lato text-muted-foreground">{idea}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {food.preparationTips && food.preparationTips.length > 0 && (
                <Card className="border-2 border-border">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="font-poppins text-xl font-bold mb-2">Preparation Tips</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {food.preparationTips.map((tip, i) => (
                        <li key={i} className="font-lato text-muted-foreground">{tip}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {food.substitutions && food.substitutions.length > 0 && (
                <Card className="border-2 border-border">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="font-poppins text-xl font-bold mb-2">Substitutions</h2>
                    <div className="flex flex-wrap gap-2">
                      {food.substitutions.map((sub) => (
                        <span key={sub} className="inline-block text-xs px-2 py-1 rounded-full bg-background border border-border text-muted-foreground">{sub}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {food.relatedFoods && food.relatedFoods.length > 0 && (
                <Card className="border-2 border-border">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="font-poppins text-xl font-bold mb-2">Related Foods</h2>
                    <div className="flex flex-wrap gap-2">
                      {food.relatedFoods.map((name) => {
                        const rel = foodData.find(f => f.name.toLowerCase() === name.toLowerCase());
                        const relSlug = rel?.slug || slugify(name);
                        return (
                          <Link key={name} to={`/food/${relSlug}`} className="inline-block text-xs px-2 py-1 rounded-full bg-secondary/10 border border-secondary text-secondary hover:bg-secondary/20">
                            {name}
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="pt-2">
                <Link to="/calculator">
                  <Button className="bg-gradient-hero">Add to Calorie Plan</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FoodDetail;

import type { BlogArticle } from '@/data/blogArticles';
import { articleRecipes } from '@/data/articleRecipes';

export const SITE_URL = 'https://neotration.vercel.app';
export const absoluteUrl = (path: string) => new URL(path, `${SITE_URL}/`).href;

export function getArticleSchemas(article: BlogArticle) {
  const url = `${SITE_URL}/blog/${article.slug}`;
  const author = article.author === 'FitJourney Team' || !article.author
    ? { '@type': 'Organization', name: 'FitJourney USA', url: `${SITE_URL}/about` }
    : { '@type': 'Person', name: article.author };
  const recipes = articleRecipes[article.slug] ?? [];
  return [
    {
      '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `${url}#article`,
      headline: article.title, description: article.seoDescription ?? article.excerpt,
      datePublished: new Date(article.date).toISOString(), dateModified: new Date(article.updatedAt ?? article.date).toISOString(),
      url, mainEntityOfPage: { '@type': 'WebPage', '@id': url }, image: [absoluteUrl(article.image)],
      keywords: article.keywords, articleSection: article.category, inLanguage: 'en-US',
      wordCount: article.content.split(/\s+/).filter(Boolean).length, author,
      publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'FitJourney USA', logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` } },
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    },
    ...recipes.flatMap((recipe, i) => recipe.image ? [{
      '@context': 'https://schema.org', '@type': 'Recipe', '@id': `${url}#recipe-${i + 1}`,
      name: recipe.name, description: recipe.description, url: `${url}#recipe-${i + 1}`,
      image: [absoluteUrl(recipe.image)],
      author, datePublished: new Date(article.date).toISOString(),
      // Nutrition and ratings are intentionally omitted without measured recipe data.
      // Add a representative finished-dish photograph before claiming rich-result eligibility.
      prepTime: `PT${recipe.prepMinutes}M`, cookTime: `PT${recipe.cookMinutes}M`,
      ...(!recipe.name.includes('freezer') && !article.slug.includes('freezer') ? { totalTime: `PT${recipe.prepMinutes + recipe.cookMinutes + (recipe.restMinutes ?? 0)}M` } : {}),
      recipeYield: `${recipe.servings} servings`, recipeCategory: article.tags?.includes('dessert') ? 'Dessert' : article.tags?.includes('snacks') ? 'Snack' : 'Meal',
      recipeIngredient: recipe.ingredients,
      recipeInstructions: recipe.instructions.map((text, index) => ({ '@type': 'HowToStep', position: index + 1, text })),
    }] : []),
    ...(recipes.filter(recipe => recipe.image).length > 1 ? [{
      '@context': 'https://schema.org', '@type': 'ItemList',
      itemListElement: recipes.map((recipe, i) => ({ recipe, index: i })).filter(item => item.recipe.image).map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.recipe.name, url: `${url}#recipe-${item.index + 1}` })),
    }] : []),
    ...(article.faqs?.length ? [{
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: article.faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
    }] : []),
  ];
}

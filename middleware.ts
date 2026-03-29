// Vercel Edge Middleware — injects correct OG/Twitter meta tags for bot/crawler requests
// Runs server-side before the response reaches the client, so social crawlers see real meta tags
// Docs: https://vercel.com/docs/functions/edge-middleware

const SITE_URL = 'https://neotration.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/placeholder.svg`;

const STATIC_ROUTES: Record<string, { title: string; description: string; image?: string }> = {
  '/': {
    title: 'Free Calorie Calculator & Nutrition Planner | FitJourney USA 2025',
    description: 'Free calorie calculator with personalized meal plans for Americans. Get custom nutrition recommendations, track daily calories, and achieve your weight loss goals in 2025.',
  },
  '/calculator': {
    title: 'Calorie Calculator | FitJourney USA',
    description: 'Calculate your daily calorie needs with our free, accurate calorie calculator. Get personalized nutrition targets for weight loss, maintenance, or muscle gain.',
  },
  '/weight-loss-calorie-calculator': {
    title: 'Weight Loss Calorie Calculator | FitJourney USA',
    description: 'Find your exact calorie deficit for safe, sustainable weight loss. Free weight loss calculator tailored for Americans.',
  },
  '/maintenance-calorie-calculator': {
    title: 'Maintenance Calorie Calculator | FitJourney USA',
    description: 'Calculate your maintenance calories to stay at your current weight. Free TDEE calculator.',
  },
  '/daily-calorie-calculator': {
    title: 'Daily Calorie Calculator | FitJourney USA',
    description: 'Find out exactly how many calories you need per day based on your age, weight, height, and activity level.',
  },
  '/food': {
    title: 'Healthy Food Guide & Nutrition Facts | FitJourney USA',
    description: 'Explore nutrition facts, calories, and health benefits for hundreds of foods. Find the best foods for your diet goals.',
  },
  '/blog': {
    title: 'Health & Nutrition Blog | FitJourney USA',
    description: 'Expert nutrition tips, workout guides, and healthy recipes from the FitJourney USA team.',
  },
  '/success-stories': {
    title: 'Weight Loss Success Stories | FitJourney USA',
    description: 'Real success stories from everyday Americans who transformed their health with FitJourney USA.',
  },
  '/about': {
    title: 'About FitJourney USA | Our Mission',
    description: 'Learn about FitJourney USA and our mission to help Americans achieve their health and nutrition goals.',
  },
  '/contact': {
    title: 'Contact FitJourney USA',
    description: 'Get in touch with the FitJourney USA team for support, feedback, or partnership inquiries.',
  },
};

const BLOG_META: Record<string, { title: string; description: string; image: string }> = {
  'calorie-deficit-weight-loss': { title: 'What Is a Calorie Deficit and How Does It Help You Lose Weight? | FitJourney USA', description: 'Learn what a calorie deficit is, how to calculate yours, and why it\'s the #1 science-backed method for weight loss in the USA.', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&h=630&q=80' },
  'macro-calculator-weight-loss-muscle-gain': { title: 'Macro Calculator: How to Count Macros for Weight Loss and Muscle Gain | FitJourney USA', description: 'Learn how to use a macro calculator to set your protein, carb, and fat targets for weight loss or muscle gain.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&h=630&q=80' },
  '1200-1500-calorie-meal-plan-weight-loss': { title: '1200 and 1500 Calorie Meal Plans for Weight Loss (Full Day Guide) | FitJourney USA', description: 'Complete 1200 and 1500 calorie meal plans for weight loss, designed for US women and men with full daily menus.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80' },
  'keto-vs-low-calorie-diet': { title: 'Keto vs Low Calorie Diet: Which Is Better for Weight Loss in 2025? | FitJourney USA', description: 'Keto vs low calorie diet — which one actually works better for weight loss? We break down the science, pros, cons, and what US nutritionists recommend.', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9d5db?auto=format&fit=crop&w=1200&h=630&q=80' },
};

const FOOD_META: Record<string, { title: string; description: string }> = {
  'chicken-breast': { title: 'Chicken Breast Nutrition Facts & Calories | FitJourney USA', description: 'Complete nutrition facts for chicken breast: calories, protein, carbs, fat, and health benefits.' },
  'salmon': { title: 'Salmon Nutrition Facts & Calories | FitJourney USA', description: 'Complete nutrition facts for salmon: omega-3s, protein, calories, and health benefits.' },
  'brown-rice': { title: 'Brown Rice Nutrition Facts & Calories | FitJourney USA', description: 'Complete nutrition facts for brown rice: calories, carbs, fiber, and health benefits.' },
  'avocado': { title: 'Avocado Nutrition Facts & Calories | FitJourney USA', description: 'Complete nutrition facts for avocado: healthy fats, calories, fiber, and vitamins.' },
  'greek-yogurt': { title: 'Greek Yogurt Nutrition Facts & Calories | FitJourney USA', description: 'Complete nutrition facts for Greek yogurt: protein, probiotics, calories, and health benefits.' },
  'sweet-potato': { title: 'Sweet Potato Nutrition Facts & Calories | FitJourney USA', description: 'Complete nutrition facts for sweet potato: calories, carbs, vitamin A, and health benefits.' },
  'eggs': { title: 'Eggs Nutrition Facts & Calories | FitJourney USA', description: 'Complete nutrition facts for eggs: protein, healthy fats, vitamins, and calories.' },
  'spinach': { title: 'Spinach Nutrition Facts & Calories | FitJourney USA', description: 'Complete nutrition facts for spinach: iron, vitamins, calories, and health benefits.' },
  'almonds': { title: 'Almonds Nutrition Facts & Calories | FitJourney USA', description: 'Complete nutrition facts for almonds: healthy fats, protein, calories, and vitamins.' },
  'quinoa': { title: 'Quinoa Nutrition Facts & Calories | FitJourney USA', description: 'Complete nutrition facts for quinoa: complete protein, carbs, fiber, and minerals.' },
  'broccoli': { title: 'Broccoli Nutrition Facts & Calories | FitJourney USA', description: 'Complete nutrition facts for broccoli: vitamins C & K, fiber, calories, and health benefits.' },
  'lean-beef': { title: 'Lean Beef Nutrition Facts & Calories | FitJourney USA', description: 'Complete nutrition facts for lean beef: protein, iron, zinc, calories, and health benefits.' },
};

function isBotRequest(userAgent: string): boolean {
  return /facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp|telegrambot|discordbot|googlebot|bingbot|applebot|pinterest|redditbot|embedly|quora|outbrain|W3C_Validator/i.test(userAgent);
}

function buildMetaHtml(title: string, description: string, image: string, url: string): string {
  return `<title>${title}</title>
    <meta name="description" content="${description.replace(/"/g, '&quot;')}" />
    <meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />
    <meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />
    <meta name="twitter:image" content="${image}" />`;
}

function injectIntoHtml(html: string, metaHtml: string): string {
  // Remove existing title and dynamic meta tags, then inject ours before </head>
  return html
    .replace(/<title>[^<]*<\/title>/, '')
    .replace(/<meta\s+(?:name="description"|property="og:[^"]*"|name="twitter:[^"]*")[^>]*\/?>/gi, '')
    .replace('</head>', `  ${metaHtml}\n  </head>`);
}

export default async function middleware(request: Request): Promise<Response> {
  const userAgent = request.headers.get('user-agent') ?? '';
  if (!isBotRequest(userAgent)) {
    return fetch(request);
  }

  const url = new URL(request.url);
  const pathname = url.pathname;
  const fullUrl = `${SITE_URL}${pathname}`;

  let title = 'FitJourney USA - Your Personal Nutrition & Calorie Calculator';
  let description = 'Find your perfect nutrition plan with our smart calorie calculator and personalized food recommendations.';
  let image = DEFAULT_IMAGE;

  // Static routes
  if (STATIC_ROUTES[pathname]) {
    const r = STATIC_ROUTES[pathname];
    title = r.title;
    description = r.description;
    image = r.image ?? DEFAULT_IMAGE;
  }

  // /blog/:slug
  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const b = BLOG_META[blogMatch[1]];
    if (b) { title = b.title; description = b.description; image = b.image; }
    else { title = 'Blog | FitJourney USA'; description = 'Health and nutrition articles from FitJourney USA.'; }
  }

  // /food/:slug
  const foodMatch = pathname.match(/^\/food\/([^/]+)$/);
  if (foodMatch) {
    const f = FOOD_META[foodMatch[1]];
    const name = foodMatch[1].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    if (f) { title = f.title; description = f.description; }
    else { title = `${name} Nutrition Facts | FitJourney USA`; description = `Nutrition facts, calories, and health benefits for ${name}.`; }
  }

  // /success-stories/:slug
  const storyMatch = pathname.match(/^\/success-stories\/([^/]+)$/);
  if (storyMatch) {
    const name = storyMatch[1].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    title = `${name}'s Weight Loss Story | FitJourney USA`;
    description = `Read ${name}'s real weight loss success story and transformation journey with FitJourney USA.`;
  }

  // Fetch the built index.html and inject meta
  const indexResponse = await fetch(new URL('/', request.url));
  const html = await indexResponse.text();
  const injectedHtml = injectIntoHtml(html, buildMetaHtml(title, description, image, fullUrl));

  return new Response(injectedHtml, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}

export const config = {
  matcher: ['/((?!_next|assets|.*\\..*).*)'],
};

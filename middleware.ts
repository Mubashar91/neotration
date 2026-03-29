// Vercel Edge Middleware — injects correct OG/Twitter meta tags for bot/crawler requests
// Runs server-side before the response reaches the client, so social crawlers see real meta tags
// Docs: https://vercel.com/docs/functions/edge-middleware

const SITE_URL = 'https://neotration.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/placeholder.svg`;

const STATIC_ROUTES: Record<string, { title: string; description: string; image?: string }> = {
  '/': {
    title: 'Free Calorie Calculator USA – Lose Weight & Track Nutrition | FitJourney USA 2025',
    description: "America's free calorie calculator. Get your personalized daily calorie target, macro breakdown, and weight loss plan in 60 seconds. Trusted by 50,000+ Americans.",
  },
  '/calculator': {
    title: 'Free Calorie Calculator USA - Get Your Daily Calorie Target | FitJourney USA',
    description: "Use America's most accurate free calorie calculator. Enter your age, weight, height and activity level to get your personalized daily calorie target for weight loss, maintenance, or muscle gain.",
  },
  '/weight-loss-calorie-calculator': {
    title: 'Weight Loss Calorie Calculator USA - How Many Calories to Lose Weight? | FitJourney USA',
    description: 'Find out exactly how many calories you need to lose weight safely. Our free weight loss calorie calculator gives you a personalized daily target and timeline — built for Americans.',
  },
  '/maintenance-calorie-calculator': {
    title: 'Maintenance Calorie Calculator USA - Find Your TDEE | FitJourney USA',
    description: 'Calculate your maintenance calories (TDEE) to stay at your current weight. Free, accurate TDEE calculator for Americans based on your age, weight, height and activity level.',
  },
  '/daily-calorie-calculator': {
    title: 'Daily Calorie Calculator USA - How Many Calories Do I Need Per Day? | FitJourney USA',
    description: 'How many calories should you eat per day? Our free daily calorie calculator gives Americans a personalized answer based on age, weight, height, activity level and fitness goal.',
  },
  '/food': {
    title: 'Healthy Food Guide & Nutrition Facts for Americans | FitJourney USA',
    description: 'Browse nutrition facts, calories, protein, carbs and fat for hundreds of foods. Find the best foods for weight loss, muscle gain, or a balanced American diet.',
  },
  '/blog': {
    title: 'Nutrition & Weight Loss Blog for Americans | FitJourney USA',
    description: 'Science-backed nutrition tips, calorie guides, and weight loss strategies written for everyday Americans. Updated regularly by the FitJourney USA team.',
  },
  '/success-stories': {
    title: 'Real Weight Loss Success Stories from Americans | FitJourney USA',
    description: 'Read real weight loss success stories from everyday Americans who used FitJourney USA to transform their health and hit their calorie goals.',
  },
  '/about': {
    title: 'About FitJourney USA - Free Nutrition & Calorie Tools for Americans',
    description: 'FitJourney USA helps 50,000+ Americans calculate daily calories, track macros, and reach their weight loss goals with free, science-backed nutrition tools.',
  },
  '/contact': {
    title: 'Contact FitJourney USA - Get Help With Your Nutrition & Calorie Goals',
    description: 'Contact the FitJourney USA team for support, questions, or feedback. We help Americans with calorie tracking, weight loss plans, and nutrition guidance.',
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

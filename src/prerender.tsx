import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AppRoutes } from './App';
import { blogArticles } from '@/data/blogArticles';
import { foodData } from '@/data/foodData';
import { successStories } from '@/data/successStories';

export const articles = blogArticles;
export { articleDate } from '@/lib/articleDate';
export const staticPaths = ['/', '/calculator', '/weight-loss-calorie-calculator', '/maintenance-calorie-calculator', '/daily-calorie-calculator', '/food', '/blog', '/success-stories', '/about', '/contact', '/privacy', '/terms', '/disclaimer'];
export const paths = [
  ...staticPaths,
  ...blogArticles.map(article => `/blog/${article.slug}`),
  ...foodData.map(food => `/food/${food.slug}`),
  ...successStories.map(story => `/success-stories/${story.id}`),
];

export function render(path: string) {
  const context: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={context}>
      <QueryClientProvider client={new QueryClient()}>
        <TooltipProvider>
          <StaticRouter location={path}><AppRoutes /></StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>,
  );
  const helmet = context.helmet!;
  const head = ['title', 'meta', 'link', 'script'].map(key => helmet[key].toString()).join('\n');
  return { html, head };
}

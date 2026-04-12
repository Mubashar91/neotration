import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  noindex?: boolean;
  structuredData?: object[];
}

const SEO = ({
  title = 'FitJourney USA - Your Personal Nutrition & Calorie Calculator',
  description = 'Find your perfect nutrition plan with our smart calorie calculator and personalized food recommendations. Real success stories from everyday Americans.',
  keywords = 'calorie calculator USA, healthy meal plan, weight loss calculator, nutrition calculator, American diet plan 2025',
  canonicalUrl,
  ogType = 'website',
  ogImage,
  twitterCard = 'summary_large_image',
  noindex = false,
  structuredData = [],
}: SEOProps) => {
  const siteUrl = 'https://neotration.vercel.app';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullTitle = title.includes('FitJourney USA') ? title : `${title} | FitJourney USA`;
  const resolvedOgImage = /^https?:\/\//.test(ogImage ?? "") ? ogImage! : `${siteUrl}${ogImage ?? '/og-image.svg'}`;

  // Default Organization Structured Data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FitJourney USA',
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    description: 'Your trusted partner for personalized nutrition and calorie tracking',
    sameAs: [
      'https://www.facebook.com/fitjourneyusa',
      'https://www.instagram.com/fitjourneyusa',
      'https://twitter.com/fitjourneyusa'
    ],
  };

  // Website Structured Data
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FitJourney USA',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/food?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const allStructuredData = [organizationSchema, websiteSchema, ...structuredData];

  return (
    <Helmet>
      {/* Feed discovery */}
      <link rel="alternate" type="application/rss+xml" title="FitJourney USA Blog RSS" href={`${siteUrl}/feed.xml`} />
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"} />
      <link rel="alternate" hrefLang="en-US" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="FitJourney USA" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@fitjourneyusa" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
      
      {/* Additional Meta */}
      <meta name="author" content="FitJourney USA" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="theme-color" content="#10b981" />
      <meta name="msapplication-TileColor" content="#10b981" />
      <meta name="google-adsense-account" content="ca-pub-8497285724891966" />
      
      {/* Structured Data */}
      {allStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;

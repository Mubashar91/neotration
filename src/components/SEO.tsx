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

  // Default Organization Structured Data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FitJourney USA',
    url: siteUrl,
    logo: `${siteUrl}/placeholder.svg`,
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
  const finalOgImage = ogImage ?? '/placeholder.svg';

  return (
    <Helmet>
      {/* Feed discovery */}
      <link rel="alternate" type="application/rss+xml" title="FitJourney USA Blog RSS" href={`${siteUrl}/feed.xml`} />
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="FitJourney USA" />
      {finalOgImage && (
        <meta
          property="og:image"
          content={/^https?:\/\//.test(finalOgImage) ? finalOgImage : `${siteUrl}${finalOgImage}`}
        />
      )}
      {finalOgImage && <meta property="og:image:width" content="1200" />}
      {finalOgImage && <meta property="og:image:height" content="630" />}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {finalOgImage && (
        <meta
          name="twitter:image"
          content={/^https?:\/\//.test(finalOgImage) ? finalOgImage : `${siteUrl}${finalOgImage}`}
        />
      )}
      
      {/* Additional Meta */}
      <meta name="author" content="FitJourney USA" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
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

import React from "react";
import { Helmet } from "react-helmet-async";

const GlobalSchema = () => {
  const siteUrl = "https://neotration.vercel.app";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FitJourney USA",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    sameAs: [
      "https://www.facebook.com/fitjourneyusa",
      "https://www.instagram.com/fitjourneyusa",
      "https://twitter.com/fitjourneyusa"
    ],
    contactPoint: [{
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "mmubasharshahzad40@gamil.com",
      telephone: "+1-800-348-5687",
      areaServed: "US"
    }]
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FitJourney USA",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify([organization, webSite])}</script>
    </Helmet>
  );
};

export default GlobalSchema;

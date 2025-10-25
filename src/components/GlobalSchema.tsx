import React from "react";
import { Helmet } from "react-helmet-async";

const GlobalSchema = () => {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://fitjourney.example";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FitJourney USA",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    sameAs: [
      // Add your real profiles here
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://x.com/",
      "https://www.linkedin.com/"
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

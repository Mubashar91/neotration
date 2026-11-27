import React from "react";
import { Helmet } from "react-helmet-async";

const GlobalSchema = () => {
  const siteUrl = "https://neotration.vercel.app";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FitJourney USA",
    url: siteUrl,
    '@id': `${siteUrl}/#organization`,
    logo: `${siteUrl}/favicon.svg`,
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FitJourney USA",
    url: siteUrl,
    '@id': `${siteUrl}/#website`,
    publisher: { '@id': `${siteUrl}/#organization` },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify([organization, webSite])}</script>
    </Helmet>
  );
};

export default GlobalSchema;

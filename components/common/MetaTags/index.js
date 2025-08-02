import Head from 'next/head';
import { formattedDate } from '../../../utils/formattedDate';
import { getCurrentDateTimeISOWithOffset } from '../../../utils/formatDateToISOWithOffset';
import { useState } from 'react';
import { appUrls } from '../../../utils/urls';
import { serwis } from '../../../utils/serwis';
import { localBusiness, siteNavigationElements } from '../../../utils/dataForMetaTags';
import { eachWeekOfInterval } from 'date-fns';

const MetaTags = ({ path, page, rating, ratingsTotal, reviews }) => {
  const {
    title,
    ogTitle,
    twitterTitle,
    canonical,
    description,
    ogDescription,
    twitterDescription,
    siteName,
    keywords,
    appleMobileWebAppTitle,
    type,
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    imageType,
  } = page.metaTags;
  const {
    localBusiness,
    organization,
    service,
    product,
    faqPage,
    place,
    webpage,
    website,
    imageObject,
    breadcrumbList,
    aboutPage,
    person,
    contactPage
  } = page.schema;

  const getReviews = () => {
    if (!reviews || !Array.isArray(reviews)) return null;

    return reviews.map((review) => {
      if (!review) return null;

      return (
        {
          "@type": "Review",
          "id": `${appUrls.home}opinie/#review${review.time}`,
          "itemReviewed": {
            "@type": "LocalBusiness",
            "@id": appUrls.home + "#localbusiness",
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
          },
          "author": {
            "@type": "Person",
            "name": review.author_name,
          },
          "datePublished": formattedDate(review.time),
          "reviewBody": review.text,
        }
      )
    })
  };


  const productSchema = {
    ...product,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (rating || serwis.rating).toString(),
      "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  const serviceSchema = {
    ...service,
    // "aggregateRating": {
    //   "@type": "AggregateRating",
    //   "ratingValue": (rating || serwis.rating).toString(),
    //   "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString(),
    //   "bestRating": "5",
    //   "worstRating": "1",
    // },
  };

  const localBusinessSchema = {
    ...localBusiness,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (rating || serwis.rating).toString(),
      "reviewCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      "bestRating": "5"
    },
    "review": getReviews(),
  };

  return (
    <Head>
      {/* Basic meta tags */}
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
      {keywords && <meta key="keywords" name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta key="og:title" property="og:title" content={ogTitle || title} />
      <meta key="og:description" property="og:description" content={ogDescription || description} />
      <meta key="og:type" property="og:type" content={type} />
      <meta key="og:url" property="og:url" content={canonical} />
      <meta key="og:locale" property="og:locale" content="pl_PL" />
      <meta key="og:site_name" property="og:site_name" content={siteName} />
      <meta key="og:image" property="og:image" content={image} />
      {imageAlt && <meta key="og:image:alt" property="og:image:alt" content={imageAlt} />}
      {imageWidth && <meta key="og:image:width" property="og:image:width" content={imageWidth} />}
      {imageHeight && <meta key="og:image:height" property="og:image:height" content={imageHeight} />}
      {imageType && <meta key="og:image:type" property="og:image:type" content={imageType} />}

      {/* test */}
      <link rel="image_src" href={image} />

      {/* Twitter Cards */}
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" name="twitter:title" content={twitterTitle || title} />
      <meta key="twitter:description" name="twitter:description" content={twitterDescription || description} />
      <meta key="twitter:image" name="twitter:image" content={image} />
      {imageAlt && <meta key="twitter:image:alt" name="twitter:image:alt" content={imageAlt} />}

      {/* Canonical URL */}
      <link key="canonical" rel="canonical" href={canonical} />

      {/* <meta property="og:updated_time" content={ogTime} /> */}
      {/* <meta property="og:image:secure_url" content={`${appUrls.home}images/share_1.webp`} /> */}
      {/* <meta name="apple-mobile-web-app-title" content={appleMobileWebAppTitle} /> */}

      {/* Structured Data */}
      {(path === "/naprawa-zmywarek/" || path === "/naprawa-pralek/" || path === "/naprawa-suszarek/" || path === "/naprawa-ekspresow/" || path === "/naprawa-telewizorow/") && (
        <>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [webpage, imageObject,
                  localBusinessSchema,
                  breadcrumbList, faqPage,
                  // serviceSchema,    // przywrócić jeśli Product przestanie wyświetlać gwiazdki
                  productSchema
                ]
              })
            }}
          />
        </>
      )}

      {path === "/" && (
        <>

          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [webpage, imageObject, localBusinessSchema, website, breadcrumbList]
              })
            }}
          />
        </>
      )}

      {path === "/kontakt/" && (
        <>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [contactPage, localBusinessSchema, breadcrumbList]
              })
            }}
          />
        </>
      )}

      {path === "/o-mnie/" && (
        <>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [aboutPage, person, localBusinessSchema, breadcrumbList]
              })
            }}
          />
        </>
      )}

      {path === "/opinie/" && (
        <>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [webpage, localBusinessSchema, getReviews(), breadcrumbList]
              })
            }}
          />
        </>
      )}

    </Head>
  );
};

export default MetaTags; 
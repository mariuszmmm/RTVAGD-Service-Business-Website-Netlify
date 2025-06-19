import Head from 'next/head';
import { formattedDate } from '../../../utils/formattedDate';
import { getCurrentDateTimeISOWithOffset } from '../../../utils/formatDateToISOWithOffset';
import { useState } from 'react';
import { appUrls } from '../../../utils/urls';
import { serwis } from '../../../utils/serwis';
import { localBusiness, siteNavigationElements } from '../../../utils/dataForMetaTags';

const MetaTags = ({ path, page, rating, ratingsTotal, reviews }) => {
  // const [ogTime, setOgTime] = useState(getCurrentDateTimeISOWithOffset());
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
  } = page.schema;


  // const selectedReviews = reviews?.filter((review, index) => index < 2);
  const getReviews = (selectedReviewNumber) => {
    if (!reviews) return null;

    const selectedReviews = !!selectedReviewNumber ? [reviews[selectedReviewNumber - 1]] : reviews;
    const reviewsArray = selectedReviews.map((review) => (
      {
        "@type": "Review",
        "name": "Polecam serwis RTV AGD w Przemyślu",
        "author": {
          "@type": "Person",
          "name": review.author_name,
        },
        "datePublished": formattedDate(review.time),
        "reviewBody": review.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5",
          "worstRating": "1",
        },
        "itemReviewed": {
          "@type": "Service",
          "name": "Naprawa sprzętu RTV i AGD",
          // "serviceType": "Naprawa sprzętu RTV i AGD",
          // "address": {
          //   "@type": "PostalAddress",
          //   "addressLocality": "Przemyśl",
          //   "addressCountry": "PL",
          // },

        },
      }
    ))

    return {
      "review": reviewsArray,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": (rating || serwis.rating).toString(),
        "reviewCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      },

    }
  };

  const getReview = (reveiwFor) => {
    const rewiwes = serwis.reviews
    if (!rewiwes) return null;

    const reviewSelected = () => {
      switch (reveiwFor) {
        case "telewizor":
          return rewiwes.find((review) => review.reveiwFor.includes("naprawa telewizora"));
        case "ekspres":
          return rewiwes.find((review) => review.reveiwFor.includes("naprawa ekspresu"));
        case "pralka":
          return rewiwes.find((review) => review.reveiwFor.includes("naprawa pralki"));
        case "suszarka":
          return rewiwes.find((review) => review.reveiwFor.includes("naprawa suszarki"));
        case "zmywarka":
          return rewiwes.find((review) => review.reveiwFor.includes("naprawa zmywarki"));
        default:
          return rewiwes[5];
      }
    }

    const review = reveiwFor ? reviewSelected(reveiwFor) : rewiwes[5];

    const reviewsArray = [
      {
        "@type": "Review",
        "name": "Polecam serwis RTV AGD w Przemyślu",
        "author": {
          "@type": "Person",
          "name": review.author_name,
        },
        "datePublished": formattedDate(review.time),
        "reviewBody": review.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5",
          "worstRating": "1",
        },
        "itemReviewed": {
          // "@type": "Service",
          "name": "Serwis RTV i AGD" + (reveiwFor ? ` - ${reveiwFor}` : ""),
          // "serviceType": "Naprawa sprzętu RTV i AGD",
          // "address": {
          //   "@type": "PostalAddress",
          //   "addressLocality": "Przemyśl",
          //   "addressCountry": "PL",
          // },

        },
      }
    ]

    return {
      "review": reviewsArray,
      // "aggregateRating": {
      //   "@type": "AggregateRating",
      //   "ratingValue": (rating || serwis.rating).toString(),
      //   "reviewCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      //   "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      //   "itemReviewed": {
      //     // "@type": "Service",
      //     "name": "Serwis RTV i AGD" + (reveiwFor ? ` - ${reveiwFor}` : ""),
      //   },
      // },

    }
  };

  const productSchema = {

    ...product,
    // ...(path === "/naprawa-telewizorow/" && getReview("naprawa telewizora")),
    // ...(path === "/naprawa-ekspresow/" && getReview("naprawa ekspresu")),
    // ...(path === "/naprawa-pralek/" && getReview("naprawa pralki")),
    // ...(path === "/naprawa-suszarek/" && getReview("naprawa suszarki")),
    // ...(path === "/naprawa-zmywarek/" && getReview("naprawa zmywarki")),
    // ...(path === "/" && getReview()),

    // ...(path === "/naprawa-telewizorow/" && getReviews()),
    // ...(path === "/naprawa-ekspresow/" && getReviews()),
    // ...(path === "/naprawa-pralek/" && getReviews()),
    // ...(path === "/naprawa-suszarek/" && getReviews()),
    // ...(path === "/naprawa-zmywarek/" && getReviews()),
    // ...(path === "/" && getReviews()),


    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (rating || serwis.rating).toString(),
      "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      "bestRating": "5",
      "worstRating": "1",
      // "itemReviewed": {
      //   // "@type": "Service",
      //   "name": "Serwis RTV i AGD Przemyśl",
      // },
    },


    // "aggregateRating": {
    //   ...(product?.["aggregateRating"]),
    //   "ratingValue": (rating || serwis.rating).toString(),
    //   "reviewCount": (ratingsTotal || serwis.ratingsTotal).toString(),
    //   // ...(path === "/" && { "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString() }),
    // }

    // test
  };

  const serviceSchema = {
    ...service,
    // "aggregateRating": {
    //   // ...(service?.["aggregateRating"]),
    //   "@type": "AggregateRating",
    //   "ratingValue": (rating || serwis.rating).toString(),
    //   "reviewCount": (ratingsTotal || serwis.ratingsTotal).toString(),
    //   // ...(path === "/" && { "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString() }),
    // }
  };

  const localBusinessSchema = {
    ...localBusiness,
    // ...getReviews(1),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (rating || serwis.rating).toString(),
      "reviewCount": (ratingsTotal || serwis.ratingsTotal).toString(),
    },

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
      {(path === "/naprawa-zmywarek/") && (
        <>
          {/* <script type="application/ld+json"           // wyłączone 15.05.2025      // dodane 14.05.2025
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(service)
              }}
            /> */}
          {/* <script type="application/ld+json"    // wyłączone 16.05.2025  // dodane 15.05.2025    
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(webpage)
              }}
            /> */}

          {/* <script type="application/ld+json"   // dodane 16.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbList)
            }}
          /> */}


          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusiness)
            }}
          /> */}
          <script type="application/ld+json"    // wyłączone 16.05.2025   // dodane 14.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [webpage, imageObject, breadcrumbList,
                  // website
                  //  localBusinessSchema, productSchema
                ]
              })
            }}
          />
          <script type="application/ld+json"    // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                ...faqPage
              })
            }}
          />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                ...productSchema
              })
            }}
          />
          {/* <script type="application/ld+json"   // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(imageObject)
            }}
          /> */}
        </>
      )}

      {(path === "/naprawa-pralek/") && (
        <>
          <script type="application/ld+json"    // wyłączone 16.05.2025   // dodane 14.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [webpage, imageObject, breadcrumbList,
                  // website
                  //  localBusinessSchema, productSchema
                ]
              })
            }}
          />
          <script type="application/ld+json"    // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                ...faqPage
              })
            }}
          />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                ...productSchema
              })
            }}
          />
        </>
      )}

      {(path === "/naprawa-suszarek/") && (
        <>
          {/* TEST */}
          <link rel="preload" as="image" href="https://naprawaprzemysl.pl/images/naprawa-suszarek-przemysl.webp" />
          <link rel="preload" as="image" href="https://naprawaprzemysl.pl/images/naprawa-suszarek-przemysl.jpg" />


          <script type="application/ld+json"    // wyłączone 16.05.2025   // dodane 14.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [webpage, imageObject, breadcrumbList,
                  // website
                  //  localBusinessSchema, productSchema
                ]
              })
            }}
          />
          <script type="application/ld+json"    // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                ...faqPage
              })
            }}
          />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                ...productSchema
              })
            }}
          />
          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Service",
                ...serviceSchema
              })
            }}
          /> */}

        </>
      )}

      {(path === "/naprawa-ekspresow/" || path === "/naprawa-telewizorow/") && (
        <>
          {/* <script type="application/ld+json"           // wyłączone 15.05.2025      // dodane 14.05.2025
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(service)
              }}
            /> */}
          {/* <script type="application/ld+json"    // wyłączone 16.05.2025  // dodane 15.05.2025    
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(webpage)
              }}
            /> */}

          <script type="application/ld+json"    // wyłączone 16.05.2025   // dodane 14.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [webpage, imageObject, breadcrumbList,
                  // website
                  //  localBusinessSchema, productSchema
                ]
              })
            }}
          />
          <script type="application/ld+json"    // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                ...faqPage
              })
            }}
          />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                ...productSchema
              })
            }}
          />
          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{ 
              __html: JSON.stringify(productSchema)
            }}
          /> */}
          {/* <script type="application/ld+json"   // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(imageObject)
            }}
          /> */}
        </>
      )}


      {path === "/" && (
        <>
          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(website)
            }}
          /> */}
          <script type="application/ld+json"    // wyłączone 16.05.2025   // dodane 14.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [breadcrumbList, imageObject, organization, localBusinessSchema, productSchema, website, webpage]
              })
            }}
          />
          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                ...productSchema
              })
            }}
          /> */}
          {/* <script type="application/ld+json"     // wyłączone 14.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organization)
            }}
          /> */}
          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(place)
            }}
          /> */}
          {/* <script type="application/ld+json"     // wyłączone 16.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(webpage)
            }}
          /> */}
          {/* <script type="application/ld+json"   // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(imageObject)
            }}
          /> */}
          {/* <script type="application/ld+json"     // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(productSchema)
            }}
          /> */}
          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbList)
            }}
          /> */}
        </>
      )}
      {(path === "/kontakt/" || path === "/o-mnie/" || path === "/opinie/") && (
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbList)
          }}
        />
      )}

    </Head>
  );
};

export default MetaTags; 
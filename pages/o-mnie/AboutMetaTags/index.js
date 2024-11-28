import Head from "next/head";

const AboutMetaTags = () => {
  return (
    <Head>
      <title>Informacje o serwisie RTV i AGD w Przemyślu, ul. Sowińskiego 2.</title>

      <link rel="canonical" href="https://naprawaprzemysl.pl/o-mnie/" />

      <meta
        name="description"
        content="Dowiedz się o moim doświadczeniu w naprawie sprzętu RTV i AGD oraz zaangażowaniu w najwyższej jakości usługi serwisowe w Przemyślu."
      />

      <meta property="og:locale" content="pl_PL" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Informacje o serwisie RTV i AGD w Przemyślu, ul. Sowińskiego 2."
      />
      <meta
        property="og:description"
        content="Dowiedz się o moim doświadczeniu w naprawie sprzętu RTV i AGD oraz zaangażowaniu w najwyższej jakości usługi serwisowe w Przemyślu."
      />
      <meta property="og:url" content="https://naprawaprzemysl.pl/o-mnie/" />
      <meta property="og:site_name" content="Serwis RTV i AGD - o mnie" />
      <meta property="og:updated_time" content="2024-11-27T03:38:11+01:00" />
      <meta property="og:image" content="https://naprawaprzemysl.pl/share.png" />
      <meta property="og:image:secure_url" content="https://naprawaprzemysl.pl/share.png" />
      <meta property="og:image:width" content="931" />
      <meta property="og:image:height" content="497" />
      <meta property="og:image:alt" content="Serwis RTV i AGD" />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Informacje o serwisie RTV i AGD w Przemyślu, ul. Sowińskiego 2." />
      <meta name="twitter:description" content="Dowiedz się o moim doświadczeniu w naprawie sprzętu RTV i AGD oraz zaangażowaniu w najwyższej jakości usługi serwisowe w Przemyślu." />
      <meta name="twitter:image" content="https://naprawaprzemysl.pl/share.png" />

      <meta name="keywords" content="naprawa AGD Przemyśl, serwis sprzętu RTV, doświadczenie w naprawie AGD, profesjonalna naprawa pralek, naprawa urządzeń domowych, naprawa sprzętu RTV, serwis pralek Przemyśl, naprawa telewizorów Przemyśl, serwis ekspresów do kawy" />

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Naprawa pralek i sprzętu RTV",
            "alternateName": "Serwis RTV i AGD - naprawa ekspresów do kawy, naprawa telewizorów, naprawa zmywarki, serwis agd,",
            "@id": "https://naprawaprzemysl.pl/",
            "url": "https://naprawaprzemysl.pl/",
            "telephone": "790258612",
            "email": "piotrek_serwis@wp.pl",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Generała Józefa Sowińskiego 2",
              "addressLocality": "Przemyśl",
              "postalCode": "37-700",
              "addressCountry": "PL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 49.782778,
              "longitude": 22.776028
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:30",
                "closes": "17:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=100063811592941"
            ],
            "logo": "https://naprawaprzemysl.pl/share.png",
            "image": { "@type": "ImageObject", "url": "https://naprawaprzemysl.pl/share.png", "width": 931, "height": 497 },
            "priceRange": "$$$",
            "description": "Dowiedz się o moim doświadczeniu w naprawie sprzętu RTV i AGD oraz zaangażowaniu w najwyższej jakości usługi serwisowe w Przemyślu.",
            "paymentAccepted": "Cash",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "62",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Strona Główna",
                "item": "https://naprawaprzemysl.pl/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "O mnie",
                "item": "https://naprawaprzemysl.pl/o-mnie/"
              }
            ]
          })
        }}
      />
    </Head>
  );
};

export default AboutMetaTags;
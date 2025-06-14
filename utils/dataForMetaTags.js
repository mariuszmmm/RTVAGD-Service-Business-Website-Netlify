import { serwis } from './serwis';
import { appUrls, imageUrls } from './urls';

const datePublished = new Date("2024-07-03").toISOString();
const date = new Date().toISOString().slice(0, 10);
const dateModified = process.env.NEXT_PUBLIC_BUILD_DATE || new Date(date).toISOString();

// const test = "Naprawa suszarek ✔️ Serwis Przemyśl ☎️ 790 258 612 | naprawaprzemysl.pl";


// const test = "Serwis i naprawa pralek w Przemyślu ✔️ | naprawaprzemysl.pl";
// console.log(test, test?.length);


const shortName = "Serwis RTV i AGD Przemyśl";

export const address = {
  "@type": "PostalAddress",
  "streetAddress": "ul. Generała Sowińskiego 2",
  "addressLocality": "Przemyśl",
  // "addressRegion": "Podkarpackie",
  "postalCode": "37-700",
  "addressCountry": "PL"
};

export const geo = {
  "@type": "GeoCoordinates",
  "latitude": "49.7827725",
  "longitude": "22.7760291"
};

export const openingHours = "Mo, Tu, We, Th, Fr, 09:30-17:00";

// const breadcrumbList = {
//   // wyłączone 15.05.2025
//   "@type": "BreadcrumbList",
//   "@id": appUrls.home + "#breadcrumb",
//   "itemListElement": [
//     {
//       "@type": "ListItem",
//       "position": 1,
//       "name": "Strona Główna",
//       // "item": appUrls.home,
//     }
//   ]
// };

export const localBusiness = {

  "@type": "LocalBusiness",
  // "name": shortName,  // "name": serwis.name,  // "name": "Naprawa Przemyśl",
  "name": "Piotr Matusiewicz Sklep-Komis Serwis RTV i AGD",   // zgodny z CEIDG
  "alternateName": "Naprawa pralek i sprzętu RTV - naprawa ekspresów do kawy, naprawa telewizorów, naprawa zmywarki, serwis agd,",  // zgodny z google maps
  "logo": imageUrls.logo,
  "image": [imageUrls.logo, imageUrls.serwis],  // "image": imageUrls.logo,
  "@id": "https://naprawaprzemysl.pl/#business",  // dodane 17.05.2025
  "url": appUrls.home,
  "telephone": serwis.phone.formatted,
  "priceRange": "$$",
  "address": address,
  // "review": {                   // dodane 17.05.2025
  //   "@type": "Review",
  //   "reviewRating": {
  //     "@type": "Rating",
  //     "bestRating": "5",
  //   },
  //   "author": {
  //     "@type": "Person",
  //     "name": " NaprawaPrzemyśl",
  //   },
  // },
  "geo": geo,
  "openingHoursSpecification": {    // dodane 17.05.2025
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
  },
  "sameAs": [serwis.url.mapaGoogle, serwis.url.facebook],    // dodane 17.05.2025
  // "openingHours": openingHours,
  "hasMap": "https://maps.google.com/?q=49.7827725,22.7760291",

  // "description": "Naprawa sprzętu AGD i RTV w Przemyślu. Serwis pogwarancyjny. Naprawa pralek, zmywarek, suszarek, ekspresów, telewizorów.",
  "description": "Serwis RTV i AGD w Przemyślu zajmuje się naprawą pralek, zmywarek, telewizorów i innego sprzętu domowego. Szybka diagnoza, oryginalne części, gwarancja jakości."

  // "email": serwis.email,
  // "hasMap": serwis.url.mapaGoogle,
  // "contactPoint": {
  //   "@type": "ContactPoint",
  //   "telephone": serwis.phone.formatted,
  //   "contactType": "office"
  // }
};

export const siteNavigationElements = [
  {
    "@type": "SiteNavigationElement",
    "name": "Strona główna",
    "url": "https://naprawaprzemysl.pl/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "O mnie",
    "url": "https://naprawaprzemysl.pl/o-mnie/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Naprawa pralek",
    "url": "https://naprawaprzemysl.pl/naprawa-pralek/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Naprawa suszarek",
    "url": "https://naprawaprzemysl.pl/naprawa-suszarek/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Naprawa zmywarek",
    "url": "https://naprawaprzemysl.pl/naprawa-zmywarek/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Naprawa ekspresów",
    "url": "https://naprawaprzemysl.pl/naprawa-ekspresow/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Naprawa telewizorów",
    "url": "https://naprawaprzemysl.pl/naprawa-telewizorow/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Opinie",
    "url": "https://naprawaprzemysl.pl/opinie/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Kontakt",
    "url": "https://naprawaprzemysl.pl/kontakt/"
  },
]

export const dataForMetaTags = {
  home: {
    metaTags: {
      title: "Serwis RTV i AGD Przemyśl – naprawa pralek, zmywarek, suszarek, ekspresów i telewizorów", // policz znaki: // 60
      ogTitle: "Serwis RTV-AGD Przemyśl – naprawa pralek, zmywarek, itp.",
      twitterTitle: "Serwis RTV i AGD Przemyśl – naprawa pralek, zmywarek, suszarek, ekspresów i telewizorów",
      description: "Profesjonalny serwis sprzętu RTV-AGD w Przemyślu. Szybka i fachowa naprawa pralek, zmywarek, suszarek, telewizorów i ekspresów do kawy. Zadzwoń: 790 258 612.", // policz znaki: // 160
      ogDescription: "Fachowa naprawa sprzętu domowego w Przemyślu – pralki, zmywarki, suszarki, telewizory, ekspresy.",
      twitterDescription: "Profesjonalny serwis sprzętu RTV-AGD w Przemyślu. Szybka i fachowa naprawa pralek, zmywarek, suszarek, telewizorów i ekspresów do kawy. Zadzwoń: 790 258 612.",
      imageAlt: "Serwis naprawy sprzętu RTV-AGD w Przemyślu",
      imageWidth: "931",
      imageHeight: "497",
      imageType: "image/webp",
      image: imageUrls.serwis,
      type: "website",
      siteName: "Serwis_RTV-AGD",
      canonical: appUrls.home,

      // keywords: "naprawa AGD, serwis sprzętu RTV, Przemyśl, naprawa sprzętu, serwis Przemyśl, naprawa urządzeń domowych, serwis AGD, serwis RTV, naprawa sprzętu AGD",
      // appleMobileWebAppTitle: serwis.shortName + " w Przemyślu ☎️ 790 258 612",
    },
    schema: {
      localBusiness,
      organization: {

        "@type": "Organization",
        "name": serwis.name,   //  "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      product: {
        "@id": appUrls.home + "#product",
        "name": "Serwis RTV-AGD Przemyśl",
        "description": "Profesjonalny serwis RTV-AGD w Przemyślu i okolicach. Specjalizuję się w naprawie pralek, suszarek, zmywarek, telewizorów i ekspresów do kawy różnych marek. Zapewniam szybką obsługę i gwarancję na wykonane usługi.",
        "image": [imageUrls.serwis, imageUrls.pralka, imageUrls.suszarka],
        "brand": {
          "@type": "Brand",
          "name": "Naprawa RTV-AGD Przemyśl"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          // "priceRange": "$$",
          "priceValidUntil": "2025-12-31",
          "priceCurrency": "PLN",
          "price": "150.00",
          "url": appUrls.home
        },
        "areaServed": [
          { "@type": "City", "name": "Przemyśl" },
          { "@type": "City", "name": "Bolestraszyce" },
          { "@type": "City", "name": "Duńkowiczki" },
          { "@type": "City", "name": "Krówniki" },
          { "@type": "City", "name": "Nehrybka" },
          { "@type": "City", "name": "Orzechowce" },
          { "@type": "City", "name": "Ostrów" },
          { "@type": "City", "name": "Pikulice" },
          { "@type": "City", "name": "Prałkowce" },
          { "@type": "City", "name": "Wyszatyce" },
          { "@type": "City", "name": "Żurawica" }
        ]

        // "provider": {
        //   "@type": "Organization",
        //   "name": "Naprawa RTV-AGD Przemyśl",
        //   "telephone": "+48790258612",
        //   address
        // }
        // "url": appUrls.home,

        // "sku": "SEO",
        // "mpn": "SEO-33",
        // "brand": {
        //   "@type": "Thing",
        //   "name": "NaprawaPrzemyśl",
        // },

        // "offers": {
        //   "@type": "Offer",
        //   "url": appUrls.home,
        //   // "url": appUrls.naprawa_telewizorow,
        //   "priceCurrency": "PLN",
        //   "price": "150",
        //   "priceValidUntil": "2026-05-16",
        //   //   "itemCondition": "https://schema.org/NewCondition",
        //   //       "availability": "https://schema.org/InStock",
        //   "shippingDetails": {
        //     "@type": "OfferShippingDetails",
        //     "shippingRate": {
        //       "@type": "MonetaryAmount",
        //       "value": "0",
        //       "currency": "PLN"
        //     },
        //     "shippingDestination": [
        //       {
        //         "@type": "DefinedRegion",
        //         "addressCountry": "PL",
        //         "addressRegion": ["Podkarpackie"],
        //         "name": "Przemyśl"
        //       }
        //     ],
        //     "deliveryTime": {
        //       "@type": "ShippingDeliveryTime",
        //       "handlingTime": {
        //         "@type": "QuantitativeValue",
        //         "minValue": 0,
        //         "maxValue": 1,
        //         "unitCode": "DAY"
        //       },
        //       "transitTime": {
        //         "@type": "QuantitativeValue",
        //         "minValue": 0,
        //         "maxValue": 1,
        //         "unitCode": "DAY"
        //       },
        //     }

        //   },
        //   "hasMerchantReturnPolicy": {
        //     "@type": "MerchantReturnPolicy",
        //     "applicableCountry": "PL",
        //     "returnPolicyCountry": "PL",
        //     "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        //     "merchantReturnDays": 14,
        //     "returnMethod": "https://schema.org/ReturnInStore",
        //     "returnFees": "https://schema.org/FreeReturn"
        //   },
        //   "shippingDetails": {
        //     "@type": "OfferShippingDetails",
        //     "shippingRate": {
        //       "@type": "MonetaryAmount",
        //       "value": "0",
        //       "currency": "PLN"
        //     },
        //     "shippingDestination": [
        //       {
        //         "@type": "DefinedRegion",
        //         "addressCountry": "PL",
        //         "addressRegion": ["Podkarpackie"],
        //         "name": "Przemyśl"
        //       }
        //     ],
        //     "deliveryTime": {
        //       "@type": "ShippingDeliveryTime",
        //       "handlingTime": {
        //         "@type": "QuantitativeValue",
        //         "minValue": 0,
        //         "maxValue": 1,
        //         "unitCode": "DAY"
        //       },
        //       "transitTime": {
        //         "@type": "QuantitativeValue",
        //         "minValue": 0,
        //         "maxValue": 1,
        //         "unitCode": "DAY"
        //       },
        //     }

        //   },
        //   "hasMerchantReturnPolicy": {
        //     "@type": "MerchantReturnPolicy",
        //     "applicableCountry": "PL",
        //     "returnPolicyCountry": "PL",
        //     "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        //     "merchantReturnDays": 14,
        //     "returnMethod": "https://schema.org/ReturnInStore",
        //     "returnFees": "https://schema.org/FreeReturn"
        //   },
        //   // "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        //   // "seller": {
        //   //   "@type": "LocalBusiness",  // "@type": "Organization",
        //   //   "name": "NaprawaPrzemyśl",
        //   // },
        // },
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,  // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },

      webpage: {
        "@type": "WebPage",
        "id": appUrls.home + "#webpage",
        "url": appUrls.home,
        "inLanguage": "pl-PL",
        "name": "Serwis pralek, suszarek, zmywarek - Serwis_RTV-AGD",
        "isPartOf": { "@id": appUrls.home + "#website" },
        "primaryImageOfPage": { "id": appUrls.home + "#primaryimage" },
        "image": { "@id": appUrls.home + "#primaryimage" },
        "thumbnailUrl": imageUrls.serwis,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "description": "Profesjonalny serwis RTV-AGD w Przemyślu. Naprawa pralek, suszarek, zmywarek, telewizorów i ekspresów. Szybko, rzetelnie, z gwarancją. ☎️ 790 258 612",
        "breadcrumb": { "@id": appUrls.home + "#breadcrumb" },
      },
      website: {
        "@type": "WebSite",
        "id": appUrls.home + "#website",
        "url": appUrls.home,
        "name": "Serwis_RTV-AGD",
        "inLanguage": "pl-PL",
        "description": "Serwisuję wszystkie marki telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy",
      },
      imageObject: {
        "@type": "ImageObject",
        "id": appUrls.home + "#primaryimage",
        "url": imageUrls.serwis,
        "inLanguage": "pl-PL",
        "contentUrl": imageUrls.serwis,
        "width": 931,
        "height": 497,
        "caption": "Naprawy sprzętu RTV-AGD w Przemyślu – naprawa pralek, zmywarek, telewizorów, ekspresów do kawy",
        "name": "Serwis RTV‑AGD w Przemyślu",
        "description": "Serwis i naprawa sprzętu RTV-AGD w Przemyślu – naprawa pralek, zmywarek, telewizorów, ekspresów do kawy"
      },
      breadcrumbList: {
        "@type": "BreadcrumbList",
        "@id": appUrls.home + "#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona Główna",
            // "item": appUrls.home,
          },

        ]
      },


    }
  },
  kontakt: {
    metaTags: {
      title: "Kontakt ✔️ Serwis RTV AGD w Przemyślu ☎️ 790 258 612",
      canonical: appUrls.kontakt,
      description: "Skontaktuj się pod numerem 790 258 612 lub odwiedź nas w Przemyślu, ul. Generała Sowińskiego 2. Szybkie, fachowe usługi naprawy sprzętu RTV i AGD.",
      type: "article",
      image: imageUrls.serwis,
      siteName: "naprawaprzemysl.pl",
      keywords: "kontakt naprawa AGD, kontakt serwis Przemyśl, naprawa sprzętu AGD kontakt, naprawa pralek kontakt, naprawa RTV kontakt, naprawa ekspresów kontakt, kontakt serwis RTV AGD",
      appleMobileWebAppTitle: `${shortName} - kontakt`,
    },
    schema: {

      website: {
        "@type": "WebSite",
        "id": appUrls.home + "#website",
        "url": appUrls.home,
        "name": "naprawaprzemysl.pl",
      },
      webpage: {
        "@type": "WebPage",
        "id": appUrls.kontakt,
        "url": appUrls.kontakt,
        "inLanguage": "pl-PL",
        "name": "Kontakt ✔️ Serwis RTV AGD w Przemyślu ☎️ 790 258 612 | naprawaprzemysl.pl",
        "isPartOf": { "@id": appUrls.home + "#website" },
        "datePublished": datePublished,
        "dateModified": dateModified,
        "description": "Skontaktuj się pod numerem 790 258 612 lub odwiedź nas w Przemyślu, ul. Generała Sowińskiego 2. Szybkie, fachowe usługi naprawy sprzętu RTV i AGD.",
      },


      breadcrumbList: {
        "@type": "BreadcrumbList",
        "@id": appUrls.home + "#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona Główna",
            "item": appUrls.home,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Kontakt",
          }
        ]
      },
    }
  },
  o_mnie: {
    metaTags: {
      title: "Informacje o serwisie RTV i AGD w Przemyślu, ul.Sowińskiego 2.",
      canonical: appUrls.o_mnie,
      description: "Dowiedz się o moim doświadczeniu w naprawie sprzętu RTV i AGD oraz zaangażowaniu w najwyższej jakości usługi serwisowe w Przemyślu.",
      type: "article",
      image: imageUrls.serwis,
      siteName: "naprawaprzemysl.pl",
      keywords: "naprawa AGD Przemyśl, serwis sprzętu RTV, doświadczenie w naprawie AGD, profesjonalna naprawa pralek, naprawa suszarek, naprawa urządzeń domowych, naprawa sprzętu RTV, serwis pralek Przemyśl, naprawa telewizorów Przemyśl, serwis ekspresów do kawy",
      appleMobileWebAppTitle: `${shortName} - o mnie`,
    },
    schema: {
      breadcrumbList: {
        "@type": "BreadcrumbList",
        "@id": appUrls.o_mnie + "#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona Główna",
            "item": appUrls.home,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "O mnie",
          }
        ]
      },
    }
  },
  opinie: {
    path: "/opinie/",
    metaTags: {
      title: "Poznaj opinie klientów ✔️ Serwis RTV AGD w Przemyślu",
      canonical: appUrls.opinie,
      description: "Sprawdź opinie klientów serwisu RTV i AGD w Przemyślu. Dowiedz się, dlaczego tak wielu poleca moje usługi.",
      type: "article",
      image: imageUrls.serwis,
      siteName: "naprawaprzemysl.pl",
      keywords: "opinie naprawa AGD, opinie serwis RTV, recenzje naprawy pralek, opinie naprawa zmywarek, opinie naprawa ekspresów, doświadczenia z naprawą AGD, opinie naprawa telewizorów",
      appleMobileWebAppTitle: `${shortName} - opinie`,
    },
    schema: {
      breadcrumbList: {
        "@type": "BreadcrumbList",
        "@id": appUrls.opinie + "#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona Główna",
            "item": appUrls.home,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Opinie",
          }
        ]
      },
    }
  },
  naprawa_pralek: {
    metaTags: {
      title: "Naprawa pralek Przemyśl – Serwis RTV-AGD",
      ogTitle: "Naprawa pralek Przemyśl – Serwis RTV-AGD",
      twitterTitle: "Naprawa pralek Przemyśl – Serwis RTV-AGD",
      description: "Szybka i rzetelna naprawa pralek wszystkich marek w Przemyślu. Profesjonalna diagnostyka usterki i wymiana części. Telefon: 790 258 612.",
      ogDescription: "Fachowa naprawa pralek marki Bosch, Siemens, LG i innych w Przemyślu. Gwarancja usługi.",
      twitterDescription: "Fachowa naprawa pralek marki Bosch, Siemens, LG i innych w Przemyślu. Gwarancja usługi.",
      imageType: "image/webp",
      image: imageUrls.pralka,
      imageAlt: "Naprawiona pralka w profesjonalnym serwisie w Przemyślu",
      imageWidth: "700",
      imageHeight: "700",
      type: "website",
      siteName: "Serwis_RTV-AGD",
      canonical: appUrls.naprawa_pralek,

      // keywords: "naprawa pralek, serwis pralek Przemyśl, naprawa pralek w Przemyślu, naprawa pralki Przemyśl, naprawa pralek Przemyśl, awaria pralki",
      // appleMobileWebAppTitle: "Naprawa pralek w Przemyślu ☎️ 790 258 612 – " + serwis.shortName,
    },
    schema: {
      organization: {

        "@type": "Organization",
        "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {
        "@type": "Service",
        "@id": appUrls.naprawa_pralek + "#service",
        "name": "Naprawa Pralek",  //  "name": "Naprawa Pralek",
        "serviceType": "Naprawa pralek wszystkich marek",
        "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        // "image": "https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png",
        "image": [
          {
            "@type": "ImageObject",
            "url": "https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png",
            "caption": "Pralka przed naprawą"
          },
          {
            "@type": "ImageObject",
            "url": "https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png",
            "caption": "Pralka po naprawie"
          }
        ],
        // "areaServed": {
        //   "@type": "Place",
        //   // "address": address,
        //   "name": "Przemyśl",
        // },
        "areaServed": ["Przemyśl", "Bolestraszyce", "Duńkowiczki", "Krówniki", "Nehrybka", "Orzechowce", "Ostrów", "Pikulice", "Prałkowce", "Wyszatyce", "Żurawica"],
        "audience": {
          "@type": "Audience",
          "audienceType": "klienci indywidualni"
        },
        // "aggregateRating": {
        //   "@type": "AggregateRating",
        //   "itemReviewed": {
        //     "@type": "Service",
        //     "name": "Naprawa Pralek"
        //   }
        // },
        // "provider": {                           // dodane 14.05.2025
        //   "@type": "LocalBusiness",
        //   "name": serwis.name,
        //   "url": appUrls.home,
        //   "telephone": serwis.phone.formatted,
        //   "address": address,
        //   //  "image": "https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png",
        // },
        "provider": {
          "@id": "https://twojadomena.pl/#business"
        },
      },
      product: {

        // "@type": "Product",
        "@id": appUrls.naprawa_pralek + "#product",
        "name": "Naprawa pralek Przemyśl",
        "description": "Szybka i rzetelna naprawa pralek w Przemyślu i okolicach. Oferuję kompleksową diagnostykę oraz naprawę pralek marek Bosch, Electrolux, Samsung, Whirlpool i innych. Korzystam z profesjonalnych narzędzi i oryginalnych części, zapewniając gwarancję na wykonaną usługę.",
        "image": [imageUrls.pralka],
        "brand": {
          "@type": "Brand",
          "name": "Serwis_RTV-AGD"
        },
        // "category": "Naprawa pralek",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          // "priceRange": "$$",
          "priceValidUntil": "2025-12-31",
          "priceCurrency": "PLN",
          "price": "150.00",
          "url": appUrls.naprawa_pralek
        },
        "areaServed": [
          { "@type": "City", "name": "Przemyśl" },
          { "@type": "City", "name": "Bolestraszyce" },
          { "@type": "City", "name": "Duńkowiczki" },
          { "@type": "City", "name": "Krówniki" },
          { "@type": "City", "name": "Nehrybka" },
          { "@type": "City", "name": "Orzechowce" },
          { "@type": "City", "name": "Ostrów" },
          { "@type": "City", "name": "Pikulice" },
          { "@type": "City", "name": "Prałkowce" },
          { "@type": "City", "name": "Wyszatyce" },
          { "@type": "City", "name": "Żurawica" }
        ]
        // "provider": {
        //   "@type": "Organization",
        //   "name": "Naprawa RTV-AGD Przemyśl",
        //   "telephone": "+48790258612",
        //   address
        // }
        // "image": "https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png",
        // "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        // "url": appUrls.naprawa_pralek,
        // "offers": {
        //   "@type": "Offer",



        //   "itemOffered": {          /// dodane PROBNIE  -->
        //     "@id": appUrls.naprawa_pralek + "#service"
        //   },
        //   "priceSpecification": {
        //     "@type": "UnitPriceSpecification",
        //     "price": "120.00",
        //     "priceCurrency": "PLN"
        //   },
        //   "validFrom": "2025-01-01",   /// dodane PROBNIE   <---




        //   "url": appUrls.naprawa_pralek,
        //   "priceCurrency": "PLN",
        //   "price": "150",
        //   "priceValidUntil": "2026-05-16",
        //   //   "itemCondition": "https://schema.org/NewCondition",
        //   //       "availability": "https://schema.org/InStock",
        //   "shippingDetails": {
        //     "@type": "OfferShippingDetails",
        //     "shippingRate": {
        //       "@type": "MonetaryAmount",
        //       "value": "0",
        //       "currency": "PLN"
        //     },
        //     "shippingDestination": [
        //       {
        //         "@type": "DefinedRegion",
        //         "addressCountry": "PL",
        //         "addressRegion": ["Podkarpackie"],
        //         "name": "Przemyśl"
        //       }
        //     ],
        //     "deliveryTime": {
        //       "@type": "ShippingDeliveryTime",
        //       "handlingTime": {
        //         "@type": "QuantitativeValue",
        //         "minValue": 0,
        //         "maxValue": 1,
        //         "unitCode": "DAY"
        //       },
        //       "transitTime": {
        //         "@type": "QuantitativeValue",
        //         "minValue": 0,
        //         "maxValue": 1,
        //         "unitCode": "DAY"
        //       },
        //     }

        //   },
        //   "hasMerchantReturnPolicy": {
        //     "@type": "MerchantReturnPolicy",
        //     "applicableCountry": "PL",
        //     "returnPolicyCountry": "PL",
        //     "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        //     "merchantReturnDays": 14,
        //     "returnMethod": "https://schema.org/ReturnInStore",
        //     "returnFees": "https://schema.org/FreeReturn"
        //   },
        //   // "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        // },
      },
      faqPage: {
        // "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Dlaczego pralka nie pobiera wody?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Najczęściej uszkodzony jest elektrozawór lub zatkany filtr. Dokładnie diagnozuję usterkę i wymieniam potrzebne elementy."
            }
          },
          {
            "@type": "Question",
            "name": "Czy naprawiane są pralki wszystkich marek, np. Bosch, Electrolux, Samsung?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak – mam doświadczenie w serwisowaniu pralek wszystkich popularnych producentów i modeli."
            }
          },
          {
            "@type": "Question",
            "name": "Czy po naprawie pralki udzielana jest gwarancja?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oczywiście – na wszystkie wykonane usługi udzielam gwarancji, a używane części pochodzą od renomowanych dostawców."
            }
          }]
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,   // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      website: {
        "@type": "WebSite",
        "id": appUrls.home + "#website",
        "url": appUrls.home,
        "name": "Serwis_RTV-AGD",
        "inLanguage": "pl-PL",
        "description": "Serwisuję wszystkie marki telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy",
      },
      imageObject: {
        "@type": "ImageObject",
        "id": appUrls.naprawa_pralek + "#primaryimage",
        "url": imageUrls.pralka,
        "inLanguage": "pl-PL",
        "contentUrl": imageUrls.pralka,
        "width": 700,
        "height": 700,
        "caption": "Pralka automatyczna naprawiona w serwisie w Przemyślu. Serwis_RTV-AGD",
      },
      webpage: {
        "@type": "WebPage",
        "id": appUrls.naprawa_pralek + "#webpage",
        "url": appUrls.naprawa_pralek,
        "inLanguage": "pl-PL",
        "name": "Serwis i naprawa pralek Przemyśl | Serwis_RTV-AGD",
        "isPartOf": { "@id": appUrls.home + "#website" },
        "primaryImageOfPage": { "id": appUrls.naprawa_pralek + "#primaryimage" },
        "image": { "@id": appUrls.naprawa_pralek + "#primaryimage" },
        "thumbnailUrl": imageUrls.pralka,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "description": "Profesjonalna naprawa pralek w Przemyślu i okolicach. Serwis pralek Bosch, Samsung, Electrolux, Whirlpool. Szybko, z gwarancją. ☎️ 790 258 612",
        "breadcrumb": { "@id": appUrls.naprawa_pralek + "#breadcrumb" },
      },
      breadcrumbList: {
        "@type": "BreadcrumbList",
        "@id": appUrls.naprawa_pralek + "#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona Główna",
            "item": appUrls.home,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa pralek",
          }
        ]
      },

    }
  },
  naprawa_suszarek: {
    metaTags: {
      title: "Naprawa suszarek Przemyśl – Serwis RTV-AGD",
      ogTitle: "Naprawa suszarek Przemyśl – Serwis RTV-AGD",
      twitterTitle: "Naprawa suszarek Przemyśl – Serwis RTV-AGD",
      description: "Profesjonalna naprawa suszarek do ubrań w Przemyślu i okolicach. Szybki dojazd, oryginalne części, gwarancja. Zadzwoń: 790 258 612.",
      ogDescription: "Fachowa naprawa suszarek marki Bosch, Siemens, Whirlpool i innych w Przemyślu. Gwarancja usługi.",
      twitterDescription: "Fachowa naprawa suszarek marki Bosch, Siemens, Whirlpool i innych w Przemyślu. Gwarancja usługi.",
      imageType: "image/webp",
      image: imageUrls.suszarka,
      imageAlt: "Naprawiona suszarka w serwisie AGD w Przemyślu",
      imageWidth: "700",
      imageHeight: "700",
      type: "website",
      siteName: "Serwis_RTV-AGD",
      canonical: appUrls.naprawa_suszarek,
      keywords: "naprawa suszarek, serwis suszarek Przemyśl, naprawa suszarek Przemyśl, mechanik suszarek",
      // appleMobileWebAppTitle: "Naprawa suszarek w Przemyślu ☎️ 790 258 612 ✔️ " + serwis.shortName,

    },
    schema: {
      organization: {

        "@type": "Organization",
        "name": "Naprawa Suszarek - " + serwis.name,  // "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {
        // "@type": "Service",
        "name": "Naprawa suszarek Przemyśl",
        "description": "Profesjonalna naprawa suszarek wszystkich marek w Przemyślu i okolicach",
        "provider": {
          "@type": "Organization",
          "name": "Serwis RTV-AGD Przemyśl",
          "telephone": "+48790258612",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Przemyśl",
            "addressCountry": "PL"
          }
        },
        "image": imageUrls.suszarka,
        "serviceType": "Naprawa suszarek",
        "areaServed": [
          "Przemyśl",
          "Bolestraszyce",
          "Duńkowiczki",
          "Krówniki",
          "Nehrybka",
          "Orzechowce",
          "Ostrów",
          "Pikulice",
          "Prałkowce",
          "Wyszatyce",
          "Żurawica"
        ],
      },
      product: {

        // "@type": "Product",
        "@id": appUrls.naprawa_suszarek + "#product",
        "name": "Naprawa suszarek Przemyśl",
        "description": "Fachowa naprawa suszarek w Przemyślu i okolicach. Oferuję kompleksową diagnostykę i naprawę suszarek wszystkich marek, takich jak Bosch, Siemens, Electrolux, Whirlpool czy Samsung. Korzystam z profesjonalnych narzędzi i oryginalnych części zamiennych, zapewniając gwarancję na usługę.",
        "image": {
          "@type": "ImageObject",
          "url": imageUrls.suszarka,
          "width": 700,
          "height": 700,
          "caption": "Naprawa suszarek Przemyśl - profesjonalny serwis suszarek"
        },
        "brand": {
          "@type": "Brand",
          "name": "Serwis RTV-AGD Przemyśl"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          // "priceRange": "$$",
          "priceValidUntil": "2025-12-31",
          "priceCurrency": "PLN",
          "price": "150.00",
          "url": appUrls.naprawa_suszarek,
          // "seller": {
          //   "@type": "Organization",
          //   "name": "Serwis RTV-AGD Przemyśl",
          //   "telephone": "+48790258612",
          //   "address": {
          //     "@type": "PostalAddress",
          //     "addressLocality": "Przemyśl",
          //     "addressCountry": "PL"
          //   }
          // }
        },
        "areaServed": [
          { "@type": "City", "name": "Przemyśl" },
          { "@type": "City", "name": "Bolestraszyce" },
          { "@type": "City", "name": "Duńkowiczki" },
          { "@type": "City", "name": "Krówniki" },
          { "@type": "City", "name": "Nehrybka" },
          { "@type": "City", "name": "Orzechowce" },
          { "@type": "City", "name": "Ostrów" },
          { "@type": "City", "name": "Pikulice" },
          { "@type": "City", "name": "Prałkowce" },
          { "@type": "City", "name": "Wyszatyce" },
          { "@type": "City", "name": "Żurawica" }
        ],
        // "category": "Naprawa suszarek",
        // "serviceArea": {
        //   "@type": "Place",
        //   "name": "Przemyśl i okolice"
        // }
        // "provider": {
        //   "@type": "Organization",
        //   "name": "Naprawa RTV-AGD Przemyśl",
        //   "telephone": "+48790258612",
        //   address
        // }
        // "image": ["https://naprawaprzemysl.pl/images/serwis-suszarek-przemysl-naprawa-suszarki.png"],
        // "description": "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        // "url": appUrls.naprawa_suszarek,
        // "offers": {
        //   "@type": "Offer",
        //   "url": appUrls.naprawa_suszarek,
        //   "priceCurrency": "PLN",
        //   "price": "150",
        //   "priceValidUntil": "2026-05-16",
        //   //   "itemCondition": "https://schema.org/NewCondition",
        //   //       "availability": "https://schema.org/InStock",
        //   "shippingDetails": {
        //     "@type": "OfferShippingDetails",
        //     "shippingRate": {
        //       "@type": "MonetaryAmount",
        //       "value": "0",
        //       "currency": "PLN"
        //     },
        //     "shippingDestination": [
        //       {
        //         "@type": "DefinedRegion",
        //         "addressCountry": "PL",
        //         "addressRegion": ["Podkarpackie"],
        //         "name": "Przemyśl"
        //       }
        //     ],
        //     "deliveryTime": {
        //       "@type": "ShippingDeliveryTime",
        //       "handlingTime": {
        //         "@type": "QuantitativeValue",
        //         "minValue": 0,
        //         "maxValue": 1,
        //         "unitCode": "DAY"
        //       },
        //       "transitTime": {
        //         "@type": "QuantitativeValue",
        //         "minValue": 0,
        //         "maxValue": 1,
        //         "unitCode": "DAY"
        //       },
        //     }

        //   },
        //   "hasMerchantReturnPolicy": {
        //     "@type": "MerchantReturnPolicy",
        //     "applicableCountry": "PL",
        //     "returnPolicyCountry": "PL",
        //     "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        //     "merchantReturnDays": 14,
        //     "returnMethod": "https://schema.org/ReturnInStore",
        //     "returnFees": "https://schema.org/FreeReturn"
        //   },
        //   // "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        // },
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,  // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      faqPage: {
        // "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Dlaczego suszarka nie pobiera powietrza lub wydłuża się czas suszenia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Najczęściej jest to efekt zatkanego filtra kłaczków lub niedrożnego kanału wentylacyjnego. W modelach kondensacyjnych problemem może być zabrudzony skraplacz lub przepełniony zbiornik na wodę. Pełna diagnostyka pozwala szybko zlokalizować przyczynę."
            }
          },
          {
            "@type": "Question",
            "name": "Czy serwisujemy suszarki z pompą ciepła oraz elektryczne grzałkowe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak. Posiadam doświadczenie zarówno w naprawie suszarek kondensacyjnych, z pompą ciepła, jak i tradycyjnych z grzałką elektryczną. Każdy rodzaj wymaga innego podejścia, ale dysponuję zestawem części dla obu technologii."
            }
          },
          {
            "@type": "Question",
            "name": "Ile kosztuje przeciętna naprawa suszarki?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Koszt naprawy zależy od rodzaju usterki, ceny części zamiennych i czasu pracy. Orientacyjnie: Proste czynności serwisowe (np. wymiana filtra, czyszczenie skraplacza) zaczynają się od ~100–150 zł. Wymiana grzałki lub silnika może kosztować od 300–500 zł w górę (w zależności od modelu). Dokładną wycenę przedstawiam po wstępnej diagnozie na miejscu"
            }
          },
          {
            "@type": "Question",
            "name": "Czy gwarantujecie jakość wykonania usługi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak. Na każdą naprawę udzielana jest pisemna gwarancja, a używane części pochodzą od renomowanych dostawców – gwarantuje to trwałość wykonanej usługi i bezawaryjne działanie urządzenia."
            }
          },
          {
            "@type": "Question",
            "name": "Czy serwis dojeżdża do klienta poza Przemyśl",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oczywiście. Obsługuję także okoliczne miejscowości: Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce oraz Żurawica. W razie dalszych lokalizacji proszę o kontakt – ustalimy dogodny termin wizyty."
            }
          }]
      },
      website: {
        "@type": "WebSite",
        "id": appUrls.home + "#website",
        "url": appUrls.home,
        "name": "Serwis_RTV-AGD",
        "inLanguage": "pl-PL",
        "description": "Serwisuję wszystkie marki telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy",
      },
      imageObject: {
        "@type": "ImageObject",
        "id": appUrls.naprawa_suszarek + "#primaryimage",
        "url": imageUrls.suszarka,
        "inLanguage": "pl-PL",
        "contentUrl": imageUrls.suszarka,
        "width": 700,
        "height": 700,
        "caption": "suszarka",
        "name": "Naprawa suszarek Przemyśl",
        "description": "Naprawiona suszarka w serwisie AGD w Przemyślu"
      },
      webpage: {
        "@type": "WebPage",
        "id": appUrls.naprawa_suszarek + "#webpage",
        "url": appUrls.naprawa_suszarek,
        "inLanguage": "pl-PL",
        "name": "Skuteczna naprawa suszarek w Przemyślu | Serwis_RTV-AGD",
        "isPartOf": { "@id": appUrls.home + "#website" },
        "primaryImageOfPage": { "id": appUrls.naprawa_suszarek + "#primaryimage" },
        "image": { "@id": appUrls.naprawa_suszarek + "#primaryimage" },
        "thumbnailUrl": imageUrls.suszarka,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "description": "Naprawa suszarek w Przemyślu – szybka diagnoza, oryginalne części, gwarancja. Zadzwoń: 790 258 612.",
        "breadcrumb": { "@id": appUrls.naprawa_suszarek + "#breadcrumb" },
      },
      breadcrumbList: {
        "@type": "BreadcrumbList",
        "@id": appUrls.naprawa_suszarek + "#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona Główna",
            "item": appUrls.home,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa suszarek",
          }
        ]
      },

    },
  },
  naprawa_zmywarek: {
    metaTags: {
      // title: "Naprawa zmywarek Przemyśl ✔️ Serwis RTV i AGD | Szybka diagnoza i gwarancja",
      // canonical: appUrls.naprawa_zmywarek,
      // description: "Profesjonalny serwis i naprawa zmywarek w Przemyślu i okolicach. Szybka diagnostyka, naprawa z dojazdem, gwarancja. Bosch, Electrolux, Beko. ☎ 790 258 612",
      // type: "article",
      // keywords: "naprawa zmywarek, serwis zmywarek Przemyśl, naprawa zmywarki Przemyśl, naprawa zmywarki w Przemyślu, naprawa zmywarek Przemyśl, awaria zmywarki",
      // appleMobileWebAppTitle: `${shortName} - naprawa zmywarek`,
      title: "Naprawa zmywarek Przemyśl – Serwis RTV-AGD",
      ogTitle: "Naprawa zmywarek Przemyśl – Serwis RTV-AGD",
      twitterTitle: "Naprawa zmywarek Przemyśl – Serwis RTV-AGD",
      description: "Szybka i profesjonalna naprawa zmywarek w Przemyślu. Diagnostyka na miejscu, oryginalne części i gwarancja. Telefon: 790 258 612.",
      ogDescription: "Fachowa naprawa zmywarek marki Bosch, Siemens, Whirlpool i innych w Przemyślu. Gwarancja usługi.",
      twitterDescription: "Fachowa naprawa zmywarek marki Bosch, Siemens, Whirlpool i innych w Przemyślu. Gwarancja usługi.",
      imageAlt: "Zmywarka naprawiona w profesjonalnym serwisie w Przemyślu",

      canonical: appUrls.naprawa_zmywarek,

      type: "article",
      image: imageUrls.zmywarka,
      siteName: "Serwis_RTV-AGD",
      keywords: "naprawa zmywarek, serwis zmywarek Przemyśl, naprawa zmywarki Przemyśl, naprawa zmywarki w Przemyślu, naprawa zmywarek Przemyśl, awaria zmywarki",
      appleMobileWebAppTitle: "Naprawa zmywarek w Przemyślu ☎️ 790 258 612 ✔️ | Serwis RTV-AGD",
    },
    schema: {
      organization: {

        "@type": "Organization",
        "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {
        "@type": "Service",
        // "name": "Naprawa Zmywarek - " + serwis.name,  //   "name": "Naprawa Zmywarek",
        "@id": appUrls.naprawa_zmywarek + "#service",
        "name": "Naprawa Zmywarek",
        "serviceType": "Naprawa zmywarek wszystkich marek",

        "description": "Profesjonalna naprawa zmywarek w Przemyślu – serwis u klienta lub w warsztacie, szybki dojazd, oryginalne części i gwarancja. Skontaktuj się i zamów usługę!",
        // "image": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.webp",
        "image": [
          {
            "@type": "ImageObject",
            "url": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.webp",
            "caption": "Pralka przed naprawą"
          },
          {
            "@type": "ImageObject",
            "url": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.webp",
            "caption": "Pralka po naprawie"
          }
        ],
        // "areaServed": {
        //   "@type": "Place",
        //   "address": address,
        // },
        "areaServed": ["Przemyśl", "Bolestraszyce", "Duńkowiczki", "Krówniki", "Nehrybka", "Orzechowce", "Ostrów", "Pikulice", "Prałkowce", "Wyszatyce", "Żurawica"],
        "audience": {
          "@type": "Audience",
          "audienceType": "klienci indywidualni"
        },
        // "provider": {                           // dodane 14.05.2025
        //   "@type": "LocalBusiness",
        //   "name": serwis.name,
        //   "url": appUrls.home,
        //   "telephone": serwis.phone.formatted,
        //   "address": address,
        //   //  "image": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.webp",
        // },
        "provider": {
          "@id": "https://twojadomena.pl/#business"
        },
      },
      product: {
        // "@type": "Product",
        // "@id": appUrls.naprawa_zmywarek + "#product",
        "name": "Naprawa zmywarek Przemyśl",  // "name": "Naprawa zmywarek Przemyśl",
        "description": "Szybka i profesjonalna naprawa zmywarek w Przemyślu i okolicach. Oferuję kompleksową diagnostykę oraz naprawę zmywarek wszystkich marek (Bosch, Electrolux, Beko i inne). Korzystam z profesjonalnych narzędzi i oryginalnych części, zapewniając gwarancję na usługę.",
        "image": imageUrls.zmywarka,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PLN",
          "price": "100.00",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "url": appUrls.naprawa_zmywarek,
        },
        "areaServed": [
          { "@type": "City", "name": "Przemyśl" },
          { "@type": "City", "name": "Bolestraszyce" },
          { "@type": "City", "name": "Duńkowiczki" },
          { "@type": "City", "name": "Krówniki" },
          { "@type": "City", "name": "Nehrybka" },
          { "@type": "City", "name": "Orzechowce" },
          { "@type": "City", "name": "Ostrów" },
          { "@type": "City", "name": "Pikulice" },
          { "@type": "City", "name": "Prałkowce" },
          { "@type": "City", "name": "Wyszatyce" },
          { "@type": "City", "name": "Żurawica" }
        ]
        // "description": "Naprawa zmywarek w Przemyślu i okolicach. Szybka diagnostyka, naprawa z dojazdem, gwarancja. Bosch, Electrolux, Beko. ☎ 790 258 612",
        // "url": appUrls.naprawa_zmywarek,
        // "offers": {
        //   "@type": "Offer",
        //   "url": appUrls.naprawa_zmywarek,
        //   "priceCurrency": "PLN",
        //   "price": 130,
        //   "priceValidUntil": "2026-05-16",
        //   //   "itemCondition": "https://schema.org/NewCondition",
        //   //       "availability": "https://schema.org/InStock",
        //   // "shippingDetails": {
        //   //   "@type": "OfferShippingDetails",
        //   //   "shippingRate": {
        //   //     "@type": "MonetaryAmount",
        //   //     "value": "0",
        //   //     "currency": "PLN"
        //   //   },
        //   //   "shippingDestination": [
        //   //     {
        //   //       "@type": "DefinedRegion",
        //   //       "addressCountry": "PL",
        //   //       "addressRegion": ["Podkarpackie"],
        //   //       "name": "Przemyśl"
        //   //     }
        //   //   ],
        //   //   "deliveryTime": {
        //   //     "@type": "ShippingDeliveryTime",
        //   //     "handlingTime": {
        //   //       "@type": "QuantitativeValue",
        //   //       "minValue": 0,
        //   //       "maxValue": 1,
        //   //       "unitCode": "DAY"
        //   //     },
        //   //     "transitTime": {
        //   //       "@type": "QuantitativeValue",
        //   //       "minValue": 0,
        //   //       "maxValue": 1,
        //   //       "unitCode": "DAY"
        //   //     },
        //   //   }

        //   // },
        //   // "hasMerchantReturnPolicy": {
        //   //   "@type": "MerchantReturnPolicy",
        //   //   "applicableCountry": "PL",
        //   //   "returnPolicyCountry": "PL",
        //   //   "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        //   //   "merchantReturnDays": 14,
        //   //   "returnMethod": "https://schema.org/ReturnInStore",
        //   //   "returnFees": "https://schema.org/FreeReturn"
        //   // },
        //   // "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        // },
      },
      faqPage: {
        // "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Co może być przyczyną problemu, gdy zmywarka nie pobiera wody?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Najczęściej jest to uszkodzenie zaworu dopływu wody, zatkany filtr lub awaria czujnika. Serwis diagnozuje przyczynę usterki i wymienia uszkodzone elementy szybko i profesjonalnie."
            }
          },
          {
            "@type": "Question",
            "name": "Czy serwis naprawia zmywarki wszystkich marek, np. Bosch, Electrolux, Beko?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, posiadam duże doświadczenie w serwisowaniu zmywarek popularnych marek takich jak Bosch, Electrolux, Beko oraz innych. Gwarantuję fachową naprawę niezależnie od modelu urządzenia."
            }
          },
          {
            "@type": "Question",
            "name": "Czy serwis udziela gwarancji na naprawę zmywarki?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Na każdą wykonaną naprawę udzielana jest gwarancja. Używam oryginalnych lub wysokiej jakości zamienników części, dzięki czemu usługi są niezawodne i objęte gwarancją."
            }
          }]
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,   // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },


      website: {
        "@type": "WebSite",
        "id": appUrls.home + "#website",
        "url": appUrls.home,
        "name": "Serwis_RTV-AGD",
        "inLanguage": "pl-PL",
        "description": "Serwisuję wszystkie marki telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy",
      },
      imageObject: {
        "@type": "ImageObject",
        "id": appUrls.naprawa_zmywarek + "#primaryimage",
        "url": imageUrls.zmywarka,
        "inLanguage": "pl-PL",
        "contentUrl": imageUrls.zmywarka,
        "width": 700,
        "height": 700,
        "caption": "zmywarka"
      },
      webpage: {
        "@type": "WebPage",
        "id": appUrls.naprawa_zmywarek + "#webpage",
        "url": appUrls.naprawa_zmywarek,
        "inLanguage": "pl-PL",
        "name": "Naprawa zmywarek w Przemyślu ☎️ 790 258 612 ✔️ | Serwis RTV-AGD",
        "isPartOf": { "@id": appUrls.home + "#website" },
        "primaryImageOfPage": { "id": appUrls.naprawa_zmywarek + "#primaryimage" },
        "image": { "@id": appUrls.naprawa_zmywarek + "#primaryimage" },
        "thumbnailUrl": imageUrls.zmywarka,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "description": "Serwis zmywarek w Przemyślu. Oferuje kompleksową diagnostykę zmywarek oraz profesjonalną naprawę zmywarek w Przemyślu.",
        "breadcrumb": { "@id": appUrls.naprawa_zmywarek + "#breadcrumb" },
      },
      breadcrumbList: {
        "@type": "BreadcrumbList",
        "@id": appUrls.naprawa_zmywarek + "#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona Główna",
            "item": appUrls.home,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa zmywarek",
          }
        ]
      },
    }
  },
  naprawa_ekspresow: {
    metaTags: {
      title: "Naprawa ekspresów do kawy Przemyśl – Serwis RTV-AGD",
      ogTitle: "Naprawa ekspresów do kawy Przemyśl – Serwis RTV-AGD",
      twitterTitle: "Naprawa ekspresów do kawy Przemyśl – Serwis RTV-AGD",
      description: "Profesjonalna naprawa ekspresów do kawy w Przemyślu – domowych i gastronomicznych. Szybka diagnoza, oryginalne części, gwarancja. Telefon: 790 258 612.",
      ogDescription: "Fachowa naprawa ekspresów marki De’Longhi, Jura, Siemens i innych w Przemyślu. Gwarancja usługi.",
      twitterDescription: "Fachowa naprawa ekspresów marki De’Longhi, Jura, Siemens i innych w Przemyślu. Gwarancja usługi.",
      imageAlt: "Naprawa ekspresów do kawy - profesjonalny serwis ekspresów w Przemyślu",
      canonical: appUrls.naprawa_ekspresow,
      type: "article",
      image: imageUrls.ekspres,
      siteName: "naprawaprzemysl.pl",
      keywords: "naprawa ekspresów do kawy, serwis ekspresów Przemyśl, naprawa ekspresu do kawy Przemyśl, naprawa ekspresów w Przemyślu, naprawa ekspresu Przemyśl, awaria ekspresu do kawy",
      appleMobileWebAppTitle: `${shortName} - naprawa ekspresów`,
    },
    schema: {
      organization: {

        "@type": "Organization",
        "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {

        "@type": "Service",
        "name": "Naprawa Ekspresów - " + shortName,   //   "name": "Naprawa Ekspresów",
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części. Skontaktuj się ze mną już dziś.",
        "image": "https://naprawaprzemysl.pl/images/serwis-ekspresow-przemysl-naprawa-ekspresu.png",
        "areaServed": {
          "@type": "Place",
          "address": address,
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "itemReviewed": {
            "@type": "Service",
            "name": "Naprawa Ekspresów"
          }
        },
        "provider": {                           // dodane 14.05.2025
          "@type": "LocalBusiness",
          "name": serwis.name,
          "url": appUrls.home,
          "telephone": serwis.phone.formatted,
          "address": address,
          //  "image": "https://naprawaprzemysl.pl/images/serwis-ekspresow-przemysl-naprawa-ekspresu.png",
        },
      },
      product: {
        "@id": appUrls.naprawa_ekspresow + "#product",
        "name": "Naprawa ekspresów do kawy Przemyśl",
        "image": imageUrls.ekspres,
        "description": "Profesjonalna naprawa ekspresów do kawy wszystkich marek w Przemyślu i okolicach. Specjalizuję się w kompleksowej naprawie domowych i profesjonalnych ekspresów, oferując szybką diagnozę i oryginalne części. Zapewniam gwarancję i pełne zadowolenie klientów.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PLN",
          "price": "100.00",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "url": appUrls.naprawa_ekspresow,
        },
        "areaServed": [
          { "@type": "City", "name": "Przemyśl" },
          { "@type": "City", "name": "Bolestraszyce" },
          { "@type": "City", "name": "Duńkowiczki" },
          { "@type": "City", "name": "Krówniki" },
          { "@type": "City", "name": "Nehrybka" },
          { "@type": "City", "name": "Orzechowce" },
          { "@type": "City", "name": "Ostrów" },
          { "@type": "City", "name": "Pikulice" },
          { "@type": "City", "name": "Prałkowce" },
          { "@type": "City", "name": "Wyszatyce" },
          { "@type": "City", "name": "Żurawica" }
        ]
        // "businessFunction": "http://purl.org/goodrelations/v1#Repair",
      },
    },
    place: {

      "@type": "Place",
      "geo": geo,
      "name": serwis.name,    //  "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
    },
    webpage: {

      "@type": "WebPage",
      "name": "Naprawa Ekspresów - " + shortName,   // "name": "Naprawa Ekspresów",
      "alternateName": "Naprawa ekspresów do kawy w Przemyślu",
      "url": appUrls.naprawa_ekspresow,
      // "breadcrumb": {
      //   ...breadcrumbList,
      //   "itemListElement": [
      //     ...breadcrumbList["itemListElement"],
      //     {
      //       "@type": "ListItem",
      //       "position": 2,
      //       "name": "Naprawa Ekspresów - " + shortName,
      //       "item": appUrls.naprawa_ekspresow,
      //     }
      //   ]
      // },
      "image": {
        // 
        "@type": "ImageObject",
        "author": {
          "@type": "LocalBusiness",  // "@type": "Organization",
          "name": serwis.name,    //  "name": "Serwis RTV i AGD NaprawaPrzemyśl"
          address,
          "image": imageUrls.serwis,
          "telephone": serwis.phone.formatted,
          "priceRange": "$$",
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": "https://naprawaprzemysl.pl/images/serwis-ekspresow-przemysl-naprawa-ekspresu.png",
        "datePublished": "2025-05-16",
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części.",
        "name": "Naprawa Ekspresów - " + shortName,   //   "name": "Naprawa ekspresów w Przemyślu",
      },
      "mainEntity": {
        "@type": "Service",
        "name": "Naprawa ekspresów",
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części. Skontaktuj się ze mną już dziś.",
        "provider": {
          "@type": "LocalBusiness",
          "name": serwis.name,
          "url": appUrls.home,
          "telephone": serwis.phone.formatted,
          address,
        }
      }
    },
    imageObject: {

      "@type": "ImageObject",
      "author": {
        "@type": "LocalBusiness",  // "@type": "Organization",
        "name": serwis.name,    //  "name": "Serwis RTV i AGD NaprawaPrzemyśl"
      },
      "contentLocation": {
        "@type": "Place",
        "name": "Przemyśl"
      },
      "contentUrl": "https://naprawaprzemysl.pl/images/serwis-ekspresow-przemysl-naprawa-ekspresu.png",
      "datePublished": "2025-05-16",
      "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części.",
      "name": "Naprawa Ekspresów - " + serwis.name,    //   "name": "Naprawa ekspresów w Przemyślu",
    },
    breadcrumbList: {
      "@type": "BreadcrumbList",
      "@id": appUrls.naprawa_ekspresow + "#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Strona Główna",
          "item": appUrls.home,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Naprawa ekspresów",
        }
      ]
    },
  },
  naprawa_telewizorow: {
    metaTags: {
      title: "Naprawa telewizorów Przemyśl – Serwis RTV-AGD",
      ogTitle: "Naprawa telewizorów Przemyśl – Serwis RTV-AGD",
      twitterTitle: "Naprawa telewizorów Przemyśl – Serwis RTV-AGD",
      description: "Fachowa naprawa telewizorów LCD, LED, OLED i Smart TV w Przemyślu. Dojeżdżam do klienta, diagnoza w razie potrzeby. Telefon: 790 258 612.",
      ogDescription: "Fachowa naprawa telewizorów marki LG, Samsung, Sony i innych w Przemyślu. Gwarancja usługi.",
      twitterDescription: "Szybka i rzetelna naprawa telewizorów wszystkich marek w Przemyślu. Profesjonalna diagnostyka usterki i wymiana części. Telefon: 790 258 612.",
      imageAlt: "Naprawa telewizorów w Przemyślu - serwis telewizorów",
      canonical: appUrls.naprawa_telewizorow,
      type: "article",
      image: imageUrls.telewizor,
      siteName: "naprawaprzemysl.pl",
      keywords: "naprawa telewizorów, serwis telewizorów Przemyśl, naprawa telewizora w Przemyślu, naprawa telewizorów LCD, naprawa telewizorów LED, serwis telewizora Przemyśl",
      appleMobileWebAppTitle: `${shortName} - naprawa telewizorów`,
    },
    schema: {
      organization: {

        "@type": "Organization",
        "name": "Naprawa Telewizorów - " + serwis.name,    //   "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {

        "@type": "Service",
        "name": "Naprawa Telewizorów",    //   "name": "Naprawa Telewizorów",
        "serviceType": "Naprawa telewizorów wszystkich marek",

        // "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś!",
        "image": ["https://naprawaprzemysl.pl/images/serwis-telewizorow-przemysl-naprawa-telewizora.png"],
        "areaServed": {
          "@type": "Place",
          "address": address,
        },
        // "aggregateRating": {
        //   "@type": "AggregateRating",
        //   "itemReviewed": {
        //     "@type": "Service",
        //     "name": "Naprawa Telewizorów"
        //   }
        // },
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://naprawaprzemysl.pl/#service",
          "name": shortName,  // "name": serwis.name,  // "name": "Naprawa Przemyśl",
          "image": [imageUrls.serwis],  // "image": imageUrls.logo,
          "telephone": serwis.phone.formatted,
          "priceRange": "$$",
          "address": address,
        },
        "areaServed": [
          { "@type": "City", "name": "Przemyśl" },
          { "@type": "City", "name": "Bolestraszyce" },
          { "@type": "City", "name": "Duńkowiczki" },
          { "@type": "City", "name": "Krówniki" },
          { "@type": "City", "name": "Nehrybka" },
          { "@type": "City", "name": "Orzechowce" },
          { "@type": "City", "name": "Ostrów" },
          { "@type": "City", "name": "Pikulice" },
          { "@type": "City", "name": "Prałkowce" },
          { "@type": "City", "name": "Wyszatyce" },
          { "@type": "City", "name": "Żurawica" }
        ],


        "offers": {
          "@type": "Offer",
          "priceCurrency": "PLN",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "od 100",
            "priceCurrency": "PLN"
          },
          "url": "https://naprawaprzemysl.pl/naprawa-telewizorow"
        },
        // "aggregateRating": {
        //   "@type": "AggregateRating",
        //   "ratingValue": "4.6",
        //   "reviewCount": "65"
        // },
        // "review": [
        //   {
        //     "@type": "Review",
        //     "author": { "@type": "Person", "name": "egon920" },
        //     "datePublished": "2025-02-11",
        //     "reviewBody": "Super fachowiec…",
        //     "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
        //   }
        // ]
      },
      product: {

        "@type": "Product",
        "@id": appUrls.naprawa_telewizorow + "#product",
        "name": "Naprawa telewizorów Przemyśl",
        "image": imageUrls.telewizor,
        "description": "Profesjonalna naprawa ekspresów do kawy wszystkich marek w Przemyślu i okolicach. Specjalizuję się w kompleksowej naprawie domowych i profesjonalnych ekspresów, oferując szybką diagnozę i oryginalne części. Zapewniam gwarancję i pełne zadowolenie klientów.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PLN",
          "price": "100.00",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "url": appUrls.naprawa_telewizorow,
        },
        "areaServed": [
          { "@type": "City", "name": "Przemyśl" },
          { "@type": "City", "name": "Bolestraszyce" },
          { "@type": "City", "name": "Duńkowiczki" },
          { "@type": "City", "name": "Krówniki" },
          { "@type": "City", "name": "Nehrybka" },
          { "@type": "City", "name": "Orzechowce" },
          { "@type": "City", "name": "Ostrów" },
          { "@type": "City", "name": "Pikulice" },
          { "@type": "City", "name": "Prałkowce" },
          { "@type": "City", "name": "Wyszatyce" },
          { "@type": "City", "name": "Żurawica" }
        ],
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,    //  "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {

        "@type": "WebPage",
        "name": "Naprawa Telewizorów - " + shortName,    //   "name": "Naprawa Telewizorów",
        "alternateName": "Naprawa telewizorów w Przemyślu",
        "url": appUrls.naprawa_telewizorow,
        // "breadcrumb": {
        //   ...breadcrumbList,
        //   "itemListElement": [
        //     ...breadcrumbList["itemListElement"],
        //     {
        //       "@type": "ListItem",
        //       "position": 2,
        //       "name": "Naprawa Telewizorów - " + shortName,
        //       "item": appUrls.naprawa_telewizorow,
        //     }
        //   ]
        // },
        "image": {
          // 
          "@type": "ImageObject",
          "author": {
            "@type": "LocalBusiness",  // "@type": "Organization",
            "name": serwis.name,    //   "name": "Serwis RTV i AGD NaprawaPrzemyśl"
            address,
            "image": imageUrls.serwis,
            "telephone": serwis.phone.formatted,
            "priceRange": "$$",
          },
          "contentLocation": {
            "@type": "Place",
            "name": "Przemyśl"
          },
          "contentUrl": "https://naprawaprzemysl.pl/images/serwis-telewizorow-przemysl-naprawa-telewizora.png",
          "datePublished": "2025-05-16",
          "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części.",
          "name": "Naprawa Telewizorów - " + shortName,    // "name": "Naprawa telewizorów w Przemyślu",
        },
        "mainEntity": {
          "@type": "Service",
          "name": "Naprawa telewizorów",
          "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś!",
          "provider": {
            "@type": "LocalBusiness",
            "name": serwis.name,
            "url": appUrls.home,
            "telephone": serwis.phone.formatted,
            address,
          }
        }
      },
      imageObject: {

        "@type": "ImageObject",
        "author": {
          "@type": "LocalBusiness",  // "@type": "Organization",
          "name": serwis.name,    //   "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": "https://naprawaprzemysl.pl/images/serwis-telewizorow-przemysl-naprawa-telewizora.png",
        "datePublished": "2025-05-16",
        "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części.",
        "name": "Naprawa Telewizorów - " + serwis.name,    // "name": "Naprawa telewizorów w Przemyślu",
      },
      breadcrumbList: {
        "@type": "BreadcrumbList",
        "@id": appUrls.naprawa_telewizorow + "#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona Główna",
            "item": appUrls.home,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa telewizorów",
          }
        ]
      },
    }
  },
};



import { serwis } from './serwis';
import { appUrls, baseUrl, imageUrls } from './urls';
import { routes } from '../public/scripts/generate-sitemap.js';

const datePublished = new Date("2024-07-03").toISOString();
const date = new Date().toISOString().slice(0, 10);
const dateModified = process.env.NEXT_PUBLIC_BUILD_DATE || new Date(date).toISOString();

console.log("routes", routes)

// const test = "Naprawa suszarek ✔️ Serwis Przemyśl ☎️ 790 258 612 | naprawaprzemysl.pl";


// const test = "Serwis i naprawa pralek w Przemyślu ✔️ | naprawaprzemysl.pl";
// console.log(test, test?.length);


const shortName = "Serwis RTV i AGD Przemyśl";

export const address = {
  "@type": "PostalAddress",
  "streetAddress": "Generała Józefa Sowińskiego 2",
  "addressLocality": "Przemyśl",
  "addressRegion": "podkarpackie",
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

export const website = {
  "@type": "WebSite",
  "@id": appUrls.home + "#website",
  "url": appUrls.home,
  "name": "Serwis_RTV-AGD",
  "inLanguage": "pl-PL",
  "description": "Serwisuję wszystkie marki telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy",
};

export const organization = {
  "@type": "Organization",
  "@id": appUrls.home + "#organization",
  "name": "Piotr Matusiewicz Sklep-Komis Serwis RTV i AGD",   //  "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
  "url": appUrls.home,
  "logo": imageUrls.logo,
  "description": "Profesjonalny serwis RTV i AGD w Przemyślu – naprawa pralek, suszarek, zmywarek, ekspresów do kawy i telewizorów.",
  address,
  "sameAs": [
    serwis.url.facebook,
    serwis.url.mapaGoogle
  ],
};

export const localBusiness = {
  "@type": "LocalBusiness",
  "@id": appUrls.home + "#localbusiness",  // dodane 17.05.2025
  "name": "Piotr Matusiewicz Sklep-Komis Serwis RTV i AGD",   // zgodny z CEIDG
  "image": imageUrls.serwis,  // "image": imageUrls.logo,
  "telephone": serwis.phone.formatted,
  "email": serwis.email,
  "url": appUrls.home,
  "address": address,
  "geo": geo,
  "areaServed": [
    { "@type": "Place", "name": "Przemyśl" },
    { "@type": "Place", "name": "Bolestraszyce" },
    { "@type": "Place", "name": "Duńkowiczki" },
    { "@type": "Place", "name": "Krówniki" },
    { "@type": "Place", "name": "Nehrybka" },
    { "@type": "Place", "name": "Orzechowce" },
    { "@type": "Place", "name": "Ostrów" },
    { "@type": "Place", "name": "Pikulice" },
    { "@type": "Place", "name": "Prałkowce" },
    { "@type": "Place", "name": "Wyszatyce" },
    { "@type": "Place", "name": "Żurawica" }
  ],
  "openingHoursSpecification": {    // dodane 17.05.2025
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:30",
    "closes": "17:00"
  },
  "priceRange": "PLN",
  "description": "Wieloletni serwis AGD w Przemyślu: pralki, suszarki, zmywarki, ekspresy do kawy, telewizory. Diagnostyka i naprawa u klienta lub w warsztacie.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Usługi serwisowe AGD",
    "itemListElement": [
      {
        "@type": "Offer",
        "@id": appUrls.naprawa_pralek + "#offer",
        "itemOffered": {
          "@type": "Service",
          "@id": appUrls.naprawa_pralek + "#service",
          "name": "Naprawa Pralek",
          "serviceType": "Naprawa pralek",
          "description": "Diagnostyka i naprawa pralek wszystkich marek w Przemyślu i okolicach."
        }
      },
      {
        "@type": "Offer",
        "@id": appUrls.naprawa_suszarek + "#offer",
        "itemOffered": {
          "@type": "Service",
          "@id": appUrls.naprawa_suszarek + "#service",
          "name": "Naprawa Suszarek",
          "serviceType": "Naprawa suszarek",
          "description": "Serwis suszarek kondensacyjnych, z pompą ciepła i tradycyjnych w Przemyślu."
        }
      },
      {
        "@type": "Offer",
        "@id": appUrls.naprawa_zmywarek + "#offer",
        "itemOffered": {
          "@type": "Service",
          "@id": appUrls.naprawa_zmywarek + "#service",
          "name": "Naprawa Zmywarek",
          "serviceType": "Naprawa zmywarek",
          "description": "Kompleksowa diagnostyka i naprawa zmywarek różnych marek w Przemyślu."
        }
      },
      {
        "@type": "Offer",
        "@id": appUrls.naprawa_ekspresow + "#offer",
        "itemOffered": {
          "@type": "Service",
          "@id": appUrls.naprawa_ekspresow + "#service",
          "name": "Naprawa Ekspresów",
          "serviceType": "Naprawa ekspresów",
          "description": "Fachowa naprawa ekspresów domowych i profesjonalnych w Przemyślu."
        }
      },
      {
        "@type": "Offer",
        "@id": appUrls.naprawa_telewizorow + "#offer",
        "itemOffered": {
          "@type": "Service",
          "@id": appUrls.naprawa_telewizorow + "#service",
          "name": "Naprawa Telewizorów",
          "serviceType": "Naprawa telewizorów",
          "description": "Profesjonalna naprawa telewizorów LCD, LED, OLED i Smart TV w Przemyślu."
        }
      }
    ]
  }

  // "alternateName": "Naprawa pralek i sprzętu RTV - naprawa ekspresów do kawy, naprawa telewizorów, naprawa zmywarki, serwis agd,",  // zgodny z google maps
  // "logo": imageUrls.logo,
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
  // "sameAs": [serwis.url.mapaGoogle, serwis.url.facebook],    // dodane 17.05.2025
  // "openingHours": openingHours,
  // "hasMap": "https://maps.google.com/?q=49.7827725,22.7760291",
  // "description": "Naprawa sprzętu AGD i RTV w Przemyślu. Serwis pogwarancyjny. Naprawa pralek, zmywarek, suszarek, ekspresów, telewizorów.",
  // "description": "Serwis RTV i AGD w Przemyślu zajmuje się naprawą pralek, zmywarek, telewizorów i innego sprzętu domowego. Szybka diagnoza, oryginalne części, gwarancja jakości."
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
      title: "Serwis RTV-AGD Przemyśl – Naprawa pralek, zmywarek, telewizorów", // policz znaki:
      ogTitle: "Serwis RTV-AGD Przemyśl – Naprawa pralek, zmywarek, telewizorów",
      twitterTitle: "Serwis RTV-AGD Przemyśl – Naprawa pralek, zmywarek, telewizorów",
      description: "Profesjonalny serwis RTV i AGD w Przemyślu. Naprawiamy pralki, zmywarki, suszarki, telewizory oraz ekspresy do kawy. ☎️ 790 258 612", // policz znaki: // 160
      ogDescription: "Profesjonalny serwis RTV i AGD w Przemyślu. Naprawiamy pralki, zmywarki, suszarki, telewizory oraz ekspresy do kawy. ☎️ 790 258 612",
      twitterDescription: "Profesjonalny serwis RTV i AGD w Przemyślu. Naprawiamy pralki, zmywarki, suszarki, telewizory oraz ekspresy do kawy. ☎️ 790 258 612",
      imageAlt: "Technik serwisu AGD i RTV przy pracy nad urządzeniem",
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
      organization,
      localBusiness,

      product: {
        "@type": "Product",
        "@id": appUrls.home + "#product",
        "name": "Usługa naprawy sprzętu RTV-AGD w Przemyślu",
        "description": "Diagnostyka i naprawa sprzętu RTV-AGD w Przemyślu, z zachowaniem najwyższej staranności.",
        "image": { "@id": appUrls.home + "#primaryimage", },
        "brand": {
          "@type": "Brand",
          "name": "Serwis_RTV-AGD"
        },
        "offers": {
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31",
          "priceCurrency": "PLN",
          "price": "150.00",
          "url": appUrls.home,
          "seller": {
            // "@type": "LocalBusiness",
            "@id": appUrls.home + "#localbusiness"
          }
        },

        // "areaServed": [
        //   { "@type": "City", "name": "Przemyśl" },
        //   { "@type": "City", "name": "Bolestraszyce" },
        //   { "@type": "City", "name": "Duńkowiczki" },
        //   { "@type": "City", "name": "Krówniki" },
        //   { "@type": "City", "name": "Nehrybka" },
        //   { "@type": "City", "name": "Orzechowce" },
        //   { "@type": "City", "name": "Ostrów" },
        //   { "@type": "City", "name": "Pikulice" },
        //   { "@type": "City", "name": "Prałkowce" },
        //   { "@type": "City", "name": "Wyszatyce" },
        //   { "@type": "City", "name": "Żurawica" }
        // ]

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
      website,
      webpage: {
        "@type": "WebPage",
        "@id": appUrls.home + "#webpage",
        "url": appUrls.home,
        "inLanguage": "pl-PL",
        "name": "Serwis RTV-AGD Przemyśl – Naprawa pralek, zmywarek, telewizorów",
        "isPartOf": { "@id": appUrls.home + "#website" },
        "primaryImageOfPage": { "@id": appUrls.home + "#primaryimage" },
        "image": { "@id": appUrls.home + "#primaryimage" },
        "thumbnailUrl": imageUrls.serwis,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "description": "Profesjonalny serwis RTV i AGD w Przemyślu. Naprawiamy pralki, zmywarki, suszarki, telewizory oraz ekspresy do kawy. ☎️ 790 258 612",
        "breadcrumb": { "@id": appUrls.home + "#breadcrumb" },
      },
      imageObject: {
        "@type": "ImageObject",
        "@id": appUrls.home + "#primaryimage",
        "url": imageUrls.serwis,
        "inLanguage": "pl-PL",
        "contentUrl": imageUrls.serwis,
        "width": 931,
        "height": 497,
        "name": "Serwis RTV-AGD Przemyśl",
        "description": "Warsztat serwisowy RTV i AGD w Przemyślu z technikiem przy naprawie urządzenia",
        "caption": "Technik serwisu AGD i RTV przy pracy nad urządzeniem",
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
      siteName: "Serwis_RTV-AGD",
      // keywords: "kontakt naprawa AGD, kontakt serwis Przemyśl, naprawa sprzętu AGD kontakt, naprawa pralek kontakt, naprawa RTV kontakt, naprawa ekspresów kontakt, kontakt serwis RTV AGD",
      // appleMobileWebAppTitle: `${shortName} - kontakt`,
    },
    schema: {

      // website: {
      //   "@type": "WebSite",
      //   "@id": appUrls.home + "#website",
      //   "url": appUrls.home,
      //   "name": "naprawaprzemysl.pl",
      // },
      website,
      webpage: {
        "@type": "WebPage",
        "@id": appUrls.kontakt,
        "url": appUrls.kontakt,
        "inLanguage": "pl-PL",
        "name": "Kontakt ✔️ Serwis RTV AGD w Przemyślu ☎️ 790 258 612 | Serwis_RTV-AGD",
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
            "item": appUrls.kontakt,
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
      siteName: "Serwis_RTV-AGD",
      // keywords: "naprawa AGD Przemyśl, serwis sprzętu RTV, doświadczenie w naprawie AGD, profesjonalna naprawa pralek, naprawa suszarek, naprawa urządzeń domowych, naprawa sprzętu RTV, serwis pralek Przemyśl, naprawa telewizorów Przemyśl, serwis ekspresów do kawy",
      // appleMobileWebAppTitle: `${shortName} - o mnie`,
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
            "item": appUrls.o_mnie,
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
      siteName: "Serwis_RTV-AGD",
      // keywords: "opinie naprawa AGD, opinie serwis RTV, recenzje naprawy pralek, opinie naprawa zmywarek, opinie naprawa ekspresów, doświadczenia z naprawą AGD, opinie naprawa telewizorów",
      // appleMobileWebAppTitle: `${shortName} - opinie`,
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
            "item": appUrls.opinie,
          }
        ]
      },
    }
  },
  naprawa_pralek: {
    metaTags: {
      title: "Naprawa pralek Przemyśl – Serwis RTV-AGD ✔️",
      ogTitle: "Naprawa pralek Przemyśl – Serwis RTV-AGD ✔️",
      twitterTitle: "Naprawa pralek Przemyśl – Serwis RTV-AGD ✔️",
      description: "Profesjonalny serwis i naprawa pralek w Przemyślu. Szybka diagnoza i naprawa pralek wszystkich marek. ☎️ 790 258 612",
      ogDescription: "Profesjonalny serwis i naprawa pralek w Przemyślu. Szybka diagnoza i naprawa pralek wszystkich marek. ☎️ 790 258 612",
      twitterDescription: "Profesjonalny serwis i naprawa pralek w Przemyślu. Szybka diagnoza i naprawa pralek wszystkich marek. ☎️ 790 258 612",
      imageType: "image/webp",
      image: imageUrls.pralka,
      imageAlt: "Technik serwisu AGD naprawia pralkę automatyczną",
      imageWidth: "700",
      imageHeight: "700",
      type: "article",
      siteName: "Serwis_RTV-AGD",
      canonical: appUrls.naprawa_pralek,

      keywords: "naprawa pralek Przemyśl, serwis pralek Przemyśl",
      // appleMobileWebAppTitle: "Naprawa pralek w Przemyślu ☎️ 790 258 612 – " + serwis.shortName,
    },
    schema: {
      organization,
      localBusiness,
      service: {
        "@type": "Service",
        "@id": appUrls.naprawa_pralek + "#service",
        "name": "Naprawa Pralek",
        "serviceType": "Naprawa pralek",
        "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        "image": { "@id": appUrls.naprawa_pralek + "#primaryimage" },
        "provider": { "@id": appUrls.home + "#localbusiness" },
        "offers": { "@id": appUrls.naprawa_pralek + "#offer" }
      },
      product: {
        "@type": "Product",
        "@id": appUrls.naprawa_pralek + "#product",
        "name": "Usługa naprawy pralek w Przemyślu",
        "description": "Kompleksowa diagnostyka i naprawa pralek różnych marek w Przemyślu.",
        "image": { "@id": appUrls.naprawa_pralek + "#primaryimage" },
        "brand": {
          "@type": "Brand",
          "name": "Serwis_RTV-AGD"
        },
        "offers": {
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31",
          "priceCurrency": "PLN",
          "price": "150.00",
          "url": appUrls.naprawa_pralek,
          "seller": {
            "@type": "LocalBusiness",
            "@id": appUrls.home + "#localbusiness"
          }
        },
        // "areaServed": [
        //   { "@type": "City", "name": "Przemyśl" },
        //   { "@type": "City", "name": "Bolestraszyce" },
        //   { "@type": "City", "name": "Duńkowiczki" },
        //   { "@type": "City", "name": "Krówniki" },
        //   { "@type": "City", "name": "Nehrybka" },
        //   { "@type": "City", "name": "Orzechowce" },
        //   { "@type": "City", "name": "Ostrów" },
        //   { "@type": "City", "name": "Pikulice" },
        //   { "@type": "City", "name": "Prałkowce" },
        //   { "@type": "City", "name": "Wyszatyce" },
        //   { "@type": "City", "name": "Żurawica" }
        // ]
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
        "@type": "FAQPage",
        "@id": appUrls.naprawa_pralek + "#faq",
        "name": "Najczęściej zadawane pytania dotyczące naprawy pralek",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Dlaczego pralka nie pobiera wody?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Może to wynikać z uszkodzonego elektrozaworu, niedrożnego filtra czy problemu z dopływem wody. Dokładna diagnostyka pozwala ustalić, która część wymaga uwagi."
            }
          },
          {
            "@type": "Question",
            "name": "Czy serwis obsługuje pralki wszystkich marek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, naprawiam większość dostępnych na rynku modeli (Bosch, Electrolux, Samsung, Whirlpool, Beko, Amica, itp.). Każde urządzenie traktuję indywidualnie."
            }
          },
          {
            "@type": "Question",
            "name": "Jak szybko mogę liczyć na wizytę?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Staram się ustalić termin możliwie jak najszybciej, zwykle w ciągu kilku dni od zgłoszenia. Dokładny czas zależy od aktualnego obłożenia i dostępności części."
            }
          },
          {
            "@type": "Question",
            "name": "Jakiej jakości części są stosowane?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sięgam po części od zaufanych dostawców, odpowiadające specyfikacjom producentów albo spełniające równoważne parametry techniczne."
            }
          },
          {
            "@type": "Question",
            "name": "Gdzie naprawiam pralki?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "W większości przypadków naprawa odbywa się u Klienta. W razie konieczności zaawansowanej naprawy mogę zabrać pralkę do warsztatu, po wcześniejszym uzgodnieniu."
            }
          },]
      },
      place: {
        "@type": "Place",
        "geo": geo,
        "name": serwis.name,   // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      // website: {
      //   "@type": "WebSite",
      //   "@id": appUrls.home + "#website",
      //   "url": appUrls.home,
      //   "name": "Serwis_RTV-AGD",
      //   "inLanguage": "pl-PL",
      //   "description": "Serwisuję wszystkie marki telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy",
      // },
      imageObject: {
        "@type": "ImageObject",
        "@id": appUrls.naprawa_pralek + "#primaryimage",
        "url": imageUrls.pralka,
        "inLanguage": "pl-PL",
        "contentUrl": imageUrls.pralka,
        "width": 700,
        "height": 700,
        "name": "Naprawa pralek Przemyśl",
        "description": "Serwisant diagnozuje i naprawia uszkodzoną pralkę automatyczną",
        "caption": "Naprawa pralek automatycznych – serwis i naprawa pralek w Przemyślu",
      },
      website,
      webpage: {
        "@type": "WebPage",
        "@id": appUrls.naprawa_pralek + "#webpage",
        "url": appUrls.naprawa_pralek,
        "inLanguage": "pl-PL",
        "name": "Naprawa pralek Przemyśl – Serwis RTV-AGD ✔️",
        "isPartOf": { "@id": appUrls.home + "#website" },
        "primaryImageOfPage": { "@id": appUrls.naprawa_pralek + "#primaryimage" },
        "image": { "@id": appUrls.naprawa_pralek + "#primaryimage" },
        "thumbnailUrl": imageUrls.pralka,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "description": "Profesjonalny serwis i naprawa pralek w Przemyślu. Szybka diagnoza i naprawa pralek wszystkich marek. ☎️ 790 258 612",
        "breadcrumb": { "@id": appUrls.naprawa_pralek + "#breadcrumb" },
        "mainEntity": { "@id": appUrls.naprawa_pralek + "#service" }
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
            "item": appUrls.naprawa_pralek
          }
        ]
      },

    }
  },
  naprawa_suszarek: {
    metaTags: {
      title: "Naprawa suszarek Przemyśl – Serwis RTV-AGD ✔️",
      ogTitle: "Naprawa suszarek Przemyśl – Serwis RTV-AGD ✔️",
      twitterTitle: "Naprawa suszarek Przemyśl – Serwis RTV-AGD ✔️",
      description: "Profesjonalny serwis suszarek do ubrań w Przemyślu. Szybka naprawa suszarek kondensacyjnych, z pompą ciepła i elektrycznych. ☎️ 790 258 612",
      ogDescription: "Profesjonalny serwis suszarek do ubrań w Przemyślu. Szybka naprawa suszarek kondensacyjnych, z pompą ciepła i elektrycznych. ☎️ 790 258 612",
      twitterDescription: "Profesjonalny serwis suszarek do ubrań w Przemyślu. Szybka naprawa suszarek kondensacyjnych, z pompą ciepła i elektrycznych. ☎️ 790 258 612",
      imageType: "image/webp",
      image: imageUrls.suszarka,
      imageAlt: "Technik serwisu AGD naprawia suszarkę do ubrań",
      imageWidth: "869",
      imageHeight: "700",
      type: "article",
      siteName: "Serwis_RTV-AGD",
      canonical: appUrls.naprawa_suszarek,
      keywords: "naprawa suszarek Przemyśl, serwis suszarek Przemyśl",
      // appleMobileWebAppTitle: "Naprawa suszarek w Przemyślu ☎️ 790 258 612 ✔️ " + serwis.shortName,

    },
    schema: {
      organization,
      localBusiness,
      service: {
        "@type": "Service",
        "@id": appUrls.naprawa_suszarek + "#service",
        "name": "Naprawa suszarek",
        "serviceType": "Naprawa suszarek",
        "description": "Profesjonalna naprawa suszarek wszystkich marek w Przemyślu i okolicach",
        "image": { "@id": appUrls.naprawa_suszarek + "#primaryimage" },
        "provider": { "@id": appUrls.home + "#localbusiness" },
        "offers": { "@id": appUrls.naprawa_suszarek + "#offer" }
      },
      product: {
        "@type": "Product",
        "@id": appUrls.naprawa_suszarek + "#product",
        "name": "Usługa naprawy suszarek w Przemyślu",
        "description": "Diagnostyka i naprawa suszarek kondensacyjnych, z pompą ciepła i tradycyjnych, z zachowaniem najwyższej staranności.",
        "image": { "@id": appUrls.naprawa_suszarek + "#primaryimage" },
        "brand": {
          "@type": "Brand",
          "name": "Serwis_RTV-AGD"
        },
        "offers": {
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31",
          "priceCurrency": "PLN",
          "price": "150.00",
          "url": appUrls.naprawa_suszarek,
          "seller": {
            "@type": "LocalBusiness",
            "@id": appUrls.home + "#localbusiness"
          }
        },
        // "areaServed": [
        //   { "@type": "City", "name": "Przemyśl" },
        //   { "@type": "City", "name": "Bolestraszyce" },
        //   { "@type": "City", "name": "Duńkowiczki" },
        //   { "@type": "City", "name": "Krówniki" },
        //   { "@type": "City", "name": "Nehrybka" },
        //   { "@type": "City", "name": "Orzechowce" },
        //   { "@type": "City", "name": "Ostrów" },
        //   { "@type": "City", "name": "Pikulice" },
        //   { "@type": "City", "name": "Prałkowce" },
        //   { "@type": "City", "name": "Wyszatyce" },
        //   { "@type": "City", "name": "Żurawica" }
        // ],
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
        "@type": "FAQPage",
        "@id": appUrls.naprawa_suszarek + "#faq",
        "name": "Najczęściej zadawane pytania dotyczące naprawy suszarek",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Dlaczego suszarka dłużej suszy lub nie suszy wystarczająco?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Przyczyną często jest niedrożny filtr kłaczków, zanieczyszczony przewód wentylacyjny lub w suszarkach kondensacyjnych zabrudzony skraplacz. Pełna diagnostyka pozwala szybko ustalić źródło problemu."
            }
          },
          {
            "@type": "Question",
            "name": "Czy naprawia się suszarki z pompą ciepła i tradycyjne?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, mam doświadczenie w obu technologiach – różnice polegają na specyfice układów chłodniczych i sterowania, które uwzględniam w naprawie."
            }
          },
          {
            "@type": "Question",
            "name": "Ile może wynosić koszty naprawy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Koszt zależy od rodzaju usterki i ceny części. Po diagnozie na miejscu przedstawiam orientacyjną wycenę, aby uniknąć niespodzianek."
            }
          },
          {
            "@type": "Question",
            "name": "Jak szybko mogę umówić wizytę w Przemyślu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Termin ustalamy w zależności od bieżącego kalendarza i dostępności części, starając się reagować możliwie sprawnie."
            }
          },
          {
            "@type": "Question",
            "name": "Czy usługa obejmuje dojazd poza Przemyśl?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Obsługuję Przemyśl i okoliczne miejscowości. Jeśli jesteś poza podstawowym obszarem, proszę o kontakt – sprawdzimy możliwość wizyty."
            }
          }]
      },
      // website: {
      //   "@type": "WebSite",
      //   "@id": appUrls.home + "#website",
      //   "url": appUrls.home,
      //   "name": "Serwis_RTV-AGD",
      //   "inLanguage": "pl-PL",
      //   "description": "Serwisuję wszystkie marki telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy",
      // },
      imageObject: {
        "@type": "ImageObject",
        "@id": appUrls.naprawa_suszarek + "#primaryimage",
        "url": imageUrls.suszarka,
        "inLanguage": "pl-PL",
        "contentUrl": imageUrls.suszarka,
        "width": 700,
        "height": 700,
        "name": "Naprawa suszarek Przemyśl",
        "description": "Serwisant diagnozuje i naprawia uszkodzoną suszarkę do ubrań",
        "caption": "Naprawa suszarek do ubrań – serwis i naprawa suszarek w Przemyślu",
      },
      website,
      webpage: {
        "@type": "WebPage",
        "@id": appUrls.naprawa_suszarek + "#webpage",
        "url": appUrls.naprawa_suszarek,
        "inLanguage": "pl-PL",
        "name": "Naprawa suszarek Przemyśl – Serwis RTV-AGD ✔️",
        "isPartOf": { "@id": appUrls.home + "#website" },
        "primaryImageOfPage": { "@id": appUrls.naprawa_suszarek + "#primaryimage" },
        "image": { "@id": appUrls.naprawa_suszarek + "#primaryimage" },
        "thumbnailUrl": imageUrls.suszarka,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "description": "Profesjonalny serwis suszarek do ubrań w Przemyślu. Szybka naprawa suszarek kondensacyjnych, z pompą ciepła i elektrycznych. ☎️ 790 258 612",
        "breadcrumb": { "@id": appUrls.naprawa_suszarek + "#breadcrumb" },
        "mainEntity": { "@id": appUrls.naprawa_suszarek + "#service" }
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
            "item": appUrls.naprawa_suszarek,
          }
        ]
      },

    },
  },
  naprawa_zmywarek: {
    metaTags: {
      title: "Naprawa zmywarek Przemyśl – Serwis RTV-AGD ✔️",
      ogTitle: "Naprawa zmywarek Przemyśl – Serwis RTV-AGD ✔️",
      twitterTitle: "Naprawa zmywarek Przemyśl – Serwis RTV-AGD ✔️",
      description: "Profesjonalny serwis i naprawa zmywarek do naczyń w Przemyślu. Diagnostyka i usuwanie usterek zmywarek różnych marek. ☎️ 790 258 612",
      ogDescription: "Profesjonalny serwis i naprawa zmywarek do naczyń w Przemyślu. Diagnostyka i usuwanie usterek zmywarek różnych marek. ☎️ 790 258 612",
      twitterDescription: "Profesjonalny serwis i naprawa zmywarek do naczyń w Przemyślu. Diagnostyka i usuwanie usterek zmywarek różnych marek. ☎️ 790 258 612",
      imageType: "image/webp",
      image: imageUrls.zmywarka,
      imageAlt: "Serwisant diagnozuje usterkę zmywarki do naczyń",
      imageWidth: "700",
      imageHeight: "700",
      type: "article",
      siteName: "Serwis_RTV-AGD",
      canonical: appUrls.naprawa_zmywarek,

      keywords: "naprawa zmywarek Przemyśl, serwis zmywarek Przemyśl",
      // appleMobileWebAppTitle: "Naprawa zmywarek w Przemyślu ☎️ 790 258 612 ✔️ | Serwis RTV-AGD",
    },
    schema: {
      organization,
      localBusiness,
      service: {
        "@type": "Service",
        "@id": appUrls.naprawa_zmywarek + "#service",
        "name": "Naprawa Zmywarek",
        "serviceType": "Naprawa zmywarek",
        "description": "Profesjonalna naprawa zmywarek w Przemyślu – serwis u klienta lub w warsztacie, szybki dojazd, oryginalne części i gwarancja. Skontaktuj się i zamów usługę!",
        "image": { "@id": appUrls.naprawa_zmywarek + "#primaryimage" },
        "provider": { "@id": appUrls.home + "#localbusiness" },
        "offers": { "@id": appUrls.naprawa_zmywarek + "#offer" }
      },
      product: {
        "@type": "Product",
        "@id": appUrls.naprawa_zmywarek + "#product",
        "name": "Usługa naprawy zmywarek w Przemyślu",  // "name": "Naprawa zmywarek Przemyśl",
        "description": "Szybka i profesjonalna naprawa zmywarek w Przemyślu i okolicach. Oferuję kompleksową diagnostykę oraz naprawę zmywarek wszystkich marek (Bosch, Electrolux, Beko i inne). Korzystam z profesjonalnych narzędzi i oryginalnych części, zapewniając gwarancję na usługę.",
        "image": { "@id": appUrls.naprawa_zmywarek + "#primaryimage" },
        "brand": {
          "@type": "Brand",
          "name": "Serwis_RTV-AGD"
        },
        "offers": {
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31",
          "priceCurrency": "PLN",
          "price": "100.00",
          "url": appUrls.naprawa_zmywarek,
          "seller": {
            "@type": "LocalBusiness",
            "@id": appUrls.home + "#localbusiness"
          }
        },
        // "areaServed": [
        //   { "@type": "City", "name": "Przemyśl" },
        //   { "@type": "City", "name": "Bolestraszyce" },
        //   { "@type": "City", "name": "Duńkowiczki" },
        //   { "@type": "City", "name": "Krówniki" },
        //   { "@type": "City", "name": "Nehrybka" },
        //   { "@type": "City", "name": "Orzechowce" },
        //   { "@type": "City", "name": "Ostrów" },
        //   { "@type": "City", "name": "Pikulice" },
        //   { "@type": "City", "name": "Prałkowce" },
        //   { "@type": "City", "name": "Wyszatyce" },
        //   { "@type": "City", "name": "Żurawica" }
        // ]
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
        "@type": "FAQPage",
        "@id": appUrls.naprawa_zmywarek + "#faq",
        "name": "Najczęściej zadawane pytania dotyczące naprawy zmywarek",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Co powoduje brak pobierania wody przez zmywarkę?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Najczęściej problemem są zawór dopływu lub zatkany filtr. Diagnostyka pozwala ustalić, czy wystarczy czyszczenie czy też konieczna jest wymiana elementu."
            }
          },
          {
            "@type": "Question",
            "name": "Czy obsługiwane są zmywarki wszystkich marek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak – mam doświadczenie z wieloma markami: Bosch, Electrolux, Beko, Siemens, Whirlpool, itp. Każdy model traktuję indywidualnie."
            }
          },
          {
            "@type": "Question",
            "name": "Jakie są orientacyjne koszty?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Koszt zależy od rodzaju usterki i ceny części. Po diagnozie przedstawiam przybliżoną wycenę naprawy."
            }
          },
          {
            "@type": "Question",
            "name": "Czy naprawa odbywa się u mnie w domu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zwykle przeprowadzam naprawę na miejscu u Klienta. Jeśli konieczna jest bardziej zaawansowana interwencja, urządzenie może zostać przewiezione do warsztatu po uzgodnieniu szczegółów."
            }
          },
          {
            "@type": "Question",
            "name": "Jak szybko mogę liczyć na interwencję?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Termin ustalamy indywidualnie, starając się działać możliwie sprawnie, w zależności od dostępności części."
            }
          }]
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,   // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },


      // website: {
      //   "@type": "WebSite",
      //   "@id": appUrls.home + "#website",
      //   "url": appUrls.home,
      //   "name": "Serwis_RTV-AGD",
      //   "inLanguage": "pl-PL",
      //   "description": "Serwisuję wszystkie marki telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy",
      // },
      imageObject: {
        "@type": "ImageObject",
        "@id": appUrls.naprawa_zmywarek + "#primaryimage",
        "url": imageUrls.zmywarka,
        "inLanguage": "pl-PL",
        "contentUrl": imageUrls.zmywarka,
        "width": 700,
        "height": 700,
        "name": "Naprawa zmywarek Przemyśl",
        "description": "Serwisant serwisu naprawia usterkę zmywarki do naczyń",
        "caption": "Naprawa zmywarek do naczyń – serwis i naprawa zmywarek w Przemyślu"
      },
      website,
      webpage: {
        "@type": "WebPage",
        "@id": appUrls.naprawa_zmywarek + "#webpage",
        "url": appUrls.naprawa_zmywarek,
        "inLanguage": "pl-PL",
        "name": "Naprawa zmywarek Przemyśl – Serwis RTV-AGD ✔️",
        "isPartOf": { "@id": appUrls.home + "#website" },
        "primaryImageOfPage": { "@id": appUrls.naprawa_zmywarek + "#primaryimage" },
        "image": { "@id": appUrls.naprawa_zmywarek + "#primaryimage" },
        "thumbnailUrl": imageUrls.zmywarka,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "description": "Profesjonalny serwis i naprawa zmywarek do naczyń w Przemyślu. Diagnostyka i usuwanie usterek zmywarek różnych marek. ☎️ 790 258 612",
        "breadcrumb": { "@id": appUrls.naprawa_zmywarek + "#breadcrumb" },
        "mainEntity": { "@id": appUrls.naprawa_zmywarek + "#service" }

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
            "item": appUrls.naprawa_zmywarek,
          }
        ]
      },
    }
  },
  naprawa_ekspresow: {
    metaTags: {
      title: "Naprawa ekspresów Przemyśl – Serwis RTV-AGD ✔️",
      ogTitle: "Naprawa ekspresów Przemyśl – Serwis RTV-AGD ✔️",
      twitterTitle: "Naprawa ekspresów Przemyśl – Serwis RTV-AGD ✔️",
      description: "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Obsługa ekspresów automatycznych i gastronomicznych, szybka diagnoza, oryginalne części ☎️ 790 258 612",
      ogDescription: "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Obsługa ekspresów automatycznych i gastronomicznych, szybka diagnoza, oryginalne części ☎️ 790 258 612",
      twitterDescription: "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Obsługa ekspresów automatycznych i gastronomicznych, szybka diagnoza, oryginalne części ☎️ 790 258 612",
      imageType: "image/webp",
      image: imageUrls.ekspres,
      imageAlt: "Serwisant naprawia ekspres do kawy",
      imageWidth: "700",
      imageHeight: "700",
      type: "article",
      siteName: "Serwis_RTV-AGD",
      canonical: appUrls.naprawa_ekspresow,

      keywords: "naprawa ekspresów Przemyśl, serwis ekspresów Przemyśl",
      // appleMobileWebAppTitle: `${shortName} - naprawa ekspresów`,
    },
    schema: {
      organization,
      localBusiness,
      service: {
        "@type": "Service",
        "@id": appUrls.naprawa_ekspresow + "#service",
        "name": "Naprawa Ekspresów",
        "serviceType": "Naprawa ekspresów",
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części. Skontaktuj się ze mną już dziś.",
        "image": { "@id": appUrls.naprawa_ekspresow + "#primaryimage" },
        "provider": { "@id": appUrls.home + "#localbusiness" },
        "offers": { "@id": appUrls.naprawa_ekspresow + "#offer" }
      },
      product: {
        "@type": "Product",
        "@id": appUrls.naprawa_ekspresow + "#product",
        "name": "Usługa naprawy ekspresów w Przemyślu",
        "description": "Profesjonalna naprawa ekspresów do kawy wszystkich marek w Przemyślu i okolicach. Specjalizuję się w kompleksowej naprawie domowych i profesjonalnych ekspresów, oferując szybką diagnozę i oryginalne części. Zapewniam gwarancję i pełne zadowolenie klientów.",
        "image": { "@id": appUrls.naprawa_ekspresow + "#primaryimage" },
        "brand": {
          "@type": "Brand",
          "name": "Serwis_RTV-AGD"
        },
        "offers": {
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31",
          "priceCurrency": "PLN",
          "price": "100.00",
          "url": appUrls.naprawa_ekspresow,
          "seller": {
            "@type": "LocalBusiness",
            "@id": appUrls.home + "#localbusiness"
          }
        },
        // "areaServed": [
        //   { "@type": "City", "name": "Przemyśl" },
        //   { "@type": "City", "name": "Bolestraszyce" },
        //   { "@type": "City", "name": "Duńkowiczki" },
        //   { "@type": "City", "name": "Krówniki" },
        //   { "@type": "City", "name": "Nehrybka" },
        //   { "@type": "City", "name": "Orzechowce" },
        //   { "@type": "City", "name": "Ostrów" },
        //   { "@type": "City", "name": "Pikulice" },
        //   { "@type": "City", "name": "Prałkowce" },
        //   { "@type": "City", "name": "Wyszatyce" },
        //   { "@type": "City", "name": "Żurawica" }
        // ]
        // "businessFunction": "http://purl.org/goodrelations/v1#Repair",
      },
      faqPage: {
        "@type": "FAQPage",
        "@id": appUrls.naprawa_ekspresow + "#faq",
        "name": "Najczęściej zadawane pytania dotyczące naprawy ekspresów",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Dlaczego ekspres nie zaparza kawy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Problem może być w układzie ciśnieniowym (pompa), zatkanych dyszach czy uszkodzonym elemencie zaparzania. Diagnostyka odsłania, które części wymagają interwencji."
            }
          },
          {
            "@type": "Question",
            "name": "Czy obsługujecie ekspresy profesjonalne?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, zarówno ekspresy domowe automatyczne, jak i maszyny gastronomiczne. Każde urządzenie traktuję z uwzględnieniem specyfiki i wymagań serwisowych."
            }
          },
          {
            "@type": "Question",
            "name": "Jak często wykonywać konserwację?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zalecam regularne odkamienianie zgodnie z instrukcją producenta oraz wymianę filtrów wody co kilka miesięcy (w zależności od jakości wody). Pomaga to uniknąć częstych usterek."
            }
          },
          {
            "@type": "Question",
            "name": "Czy mogę liczyć na szybką naprawę?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Termin ustalamy indywidualnie, starając się zminimalizować przestój urządzenia. Dokładne terminy zależą od dostępności części i rodzaju usterki."
            }
          }]

      },

      place: {
        "@type": "Place",
        "geo": geo,
        "name": serwis.name,    //  "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      // website: {
      //   "@type": "WebSite",
      //   "@id": appUrls.home + "#website",
      //   "url": appUrls.home,
      //   "name": "Serwis_RTV-AGD",
      //   "inLanguage": "pl-PL",
      //   "description": "Serwisuję wszystkie marki telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy",
      // },
      imageObject: {
        "@type": "ImageObject",
        "@id": appUrls.naprawa_ekspresow + "#primaryimage",
        "url": imageUrls.ekspres,
        "inLanguage": "pl-PL",
        "contentUrl": imageUrls.ekspres,
        "width": 700,
        "height": 700,
        "name": "Naprawa ekspresów do kawy Przemyśl",
        "description": "Serwisant serwisu naprawia ekspres do kawy",
        "caption": "Naprawa ekspresów do kawy – serwis i naprawa ekspresów w Przemyślu",
      },
      website,
      webpage: {
        "@type": "WebPage",
        "@id": appUrls.naprawa_ekspresow + "#webpage",
        "url": appUrls.naprawa_ekspresow,
        "inLanguage": "pl-PL",
        "name": "Naprawa ekspresów Przemyśl – Serwis RTV-AGD ✔️",
        "isPartOf": { "@id": appUrls.home + "#website" },
        "primaryImageOfPage": { "@id": appUrls.naprawa_ekspresow + "#primaryimage" },
        "image": { "@id": appUrls.naprawa_ekspresow + "#primaryimage" },
        "thumbnailUrl": imageUrls.ekspres,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Obsługa ekspresów automatycznych i gastronomicznych, szybka diagnoza, oryginalne części ☎️ 790 258 612",
        "breadcrumb": { "@id": appUrls.naprawa_ekspresow + "#breadcrumb" },
        "mainEntity": { "@id": appUrls.naprawa_ekspresow + "#service" }
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
    }
  },
  naprawa_telewizorow: {
    metaTags: {
      title: "Naprawa telewizorów Przemyśl – Serwis RTV-AGD ✔️",
      ogTitle: "Naprawa telewizorów Przemyśl – Serwis RTV-AGD ✔️",
      twitterTitle: "Naprawa telewizorów Przemyśl – Serwis RTV-AGD ✔️",
      description: "Fachowa naprawa telewizorów LCD, LED, OLED i Smart TV w Przemyślu. Dojazd do klienta, szybka diagnoza i gwarancja usunięcia usterki. ☎️ 790 258 612",
      ogDescription: "Fachowa naprawa telewizorów LCD, LED, OLED i Smart TV w Przemyślu. Dojazd do klienta, szybka diagnoza i gwarancja usunięcia usterki. ☎️ 790 258 612",
      twitterDescription: "Fachowa naprawa telewizorów LCD, LED, OLED i Smart TV w Przemyślu. Dojazd do klienta, szybka diagnoza i gwarancja usunięcia usterki. ☎️ 790 258 612",
      imageType: "image/webp",
      image: imageUrls.telewizor,
      imageAlt: "Technik serwisu naprawia telewizor LED w serwisie RTV",
      imageWidth: "700",
      imageHeight: "700",
      type: "article",
      siteName: "Serwis_RTV-AGD",
      canonical: appUrls.naprawa_telewizorow,

      keywords: "naprawa telewizorów Przemyśl, serwis telewizorów Przemyśl",
      // appleMobileWebAppTitle: `${shortName} - naprawa telewizorów`,
    },
    schema: {
      organization,
      localBusiness,
      service: {
        "@type": "Service",
        "@id": appUrls.naprawa_telewizorow + "#service",
        "name": "Naprawa Telewizorów",
        "serviceType": "Naprawa telewizorów",
        "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś!",
        "image": { "@id": appUrls.naprawa_telewizorow + "#primaryimage" },
        "provider": { "@id": appUrls.home + "#localbusiness" },
        "offers": { "@id": appUrls.naprawa_telewizorow + "#offer" }
      },
      product: {
        "@type": "Product",
        "@id": appUrls.naprawa_telewizorow + "#product",
        "name": "Usługa naprawy telewizorów w Przemyślu",
        "description": "Fachowa naprawa telewizorów LCD, LED, OLED i Smart TV w Przemyślu",
        "image": { "@id": appUrls.naprawa_telewizorow + "#primaryimage" },
        "brand": {
          "@type": "Brand",
          "name": "Serwis_RTV-AGD"
        },
        "offers": {
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31",
          "priceCurrency": "PLN",
          "price": "150.00",
          "url": appUrls.naprawa_telewizorow,
          "seller": {
            "@type": "LocalBusiness",
            "@id": appUrls.home + "#localbusiness"
          }
        },
        // "areaServed": [
        //   { "@type": "City", "name": "Przemyśl" },
        //   { "@type": "City", "name": "Bolestraszyce" },
        //   { "@type": "City", "name": "Duńkowiczki" },
        //   { "@type": "City", "name": "Krówniki" },
        //   { "@type": "City", "name": "Nehrybka" },
        //   { "@type": "City", "name": "Orzechowce" },
        //   { "@type": "City", "name": "Ostrów" },
        //   { "@type": "City", "name": "Pikulice" },
        //   { "@type": "City", "name": "Prałkowce" },
        //   { "@type": "City", "name": "Wyszatyce" },
        //   { "@type": "City", "name": "Żurawica" }
        // ],
      },
      faqPage: {
        "@type": "FAQPage",
        "@id": appUrls.naprawa_telewizorow + "#faq",
        "name": "Najczęściej zadawane pytania dotyczące naprawy telewizorów",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Co zrobić, gdy telewizor nie włącza się?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sprawdzam zasilanie, listwę, panel sterowania i płyty wewnętrzne. Dokładna diagnoza wskaże, czy problem dotyczy zasilacza, panelu sterowania lub innego elementu."
            }
          },
          {
            "@type": "Question",
            "name": "Jak postępować przy braku obrazu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Diagnoza obejmuje kontrolę podświetlenia, matrycy oraz układów sterujących. Oceniam stan techniczny i doradzam rozwiązanie, uwzględniając opłacalność naprawy."
            }
          },
          {
            "@type": "Question",
            "name": "Czy naprawiacie Smart TV?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, weryfikuję problemy z oprogramowaniem, siecią i aplikacjami. Pomagam z konfiguracją i aktualizacjami systemu."
            }
          },
          {
            "@type": "Question",
            "name": "Ile trwa naprawa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Czas zależy od rodzaju usterki i dostępności części. Po diagnostyce informuję o przewidywanym czasie realizacji."
            }
          }]
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,    //  "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      // website: {
      //   "@type": "WebSite",
      //   "@id": appUrls.home + "#website",
      //   "url": appUrls.home,
      //   "name": "Serwis_RTV-AGD",
      //   "inLanguage": "pl-PL",
      //   "description": "Serwisuję wszystkie marki telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy",
      // },
      imageObject: {
        "@type": "ImageObject",
        "@id": appUrls.naprawa_telewizorow + "#primaryimage",
        "url": imageUrls.telewizor,
        "inLanguage": "pl-PL",
        "contentUrl": imageUrls.telewizor,
        "width": 700,
        "height": 700,
        "name": "Naprawa telewizorów Przemyśl",
        "description": "Serwisant naprawia telewizor LED w serwisie RTV",
        "caption": "Naprawa telewizorów – serwis i naprawa telewizorów w Przemyślu",
      },
      website,
      webpage: {
        "@type": "WebPage",
        "@id": appUrls.naprawa_telewizorow + "#webpage",
        "url": appUrls.naprawa_telewizorow,
        "inLanguage": "pl-PL",
        "name": "Naprawa telewizorów Przemyśl – Serwis RTV-AGD ✔️",
        "isPartOf": { "@id": appUrls.home + "#website" },
        "primaryImageOfPage": { "@id": appUrls.naprawa_telewizorow + "#primaryimage" },
        "image": { "@id": appUrls.naprawa_telewizorow + "#primaryimage" },
        "thumbnailUrl": imageUrls.telewizor,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "description": "Fachowa naprawa telewizorów LCD, LED, OLED i Smart TV w Przemyślu. Dojazd do klienta, szybka diagnoza i gwarancja usunięcia usterki. ☎️ 790 258 612",
        "breadcrumb": { "@id": appUrls.naprawa_telewizorow + "#breadcrumb" },
        "mainEntity": { "@id": appUrls.naprawa_telewizorow + "#service" }
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
            "item": appUrls.naprawa_telewizorow,
          }
        ]
      },
    }
  },
};



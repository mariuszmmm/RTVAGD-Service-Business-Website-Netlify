import { appUrls, imageUrls } from '../../../utils/urls';
import { serwis } from '../../../utils/serwis';
import { address, geo, openingHours } from '../../../utils/dataForMetaTags';

export const Schema = ({ page }) => {
  const { breadcrumbList } = page.schema;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": serwis.name,  // "name": "Naprawa Przemyśl",
    "url": appUrls.home,
    "logo": imageUrls.logo,
    "image": imageUrls.serwis,
    "description": "Naprawa sprzętu RTV i AGD w Przemyślu. Serwis pogwarancyjny. Naprawa pralek, zmywarek, suszarek, ekspresów, telewizorów.",
    "telephone": serwis.phone.formatted,
    "email": serwis.email,
    "priceRange": "$$",
    "address": address,
    "geo": geo,
    "hasMap": serwis.url.mapaGoogle,
    "openingHours": openingHours,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": serwis.phone.formatted,
      "contactType": "office"
    }
  };

  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness)
        }}
      />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbList)
        }}
      />
    </>
  )
};

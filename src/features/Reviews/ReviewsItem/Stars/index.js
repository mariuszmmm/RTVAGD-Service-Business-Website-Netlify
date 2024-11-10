import { Star, StarsWrapper } from "./styled";

export const Stars = ({ rating }) => {
  return (
    rating &&
    <>
      <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="ratingValue" content={rating} />
        <meta itemProp="bestRating" content="5" />
      </div>
      <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
        <meta itemProp="name" content="Serwis RTV i AGD" />
        <meta itemProp="description" content="Naprawa pralek, zmywarek, ekspresów do kawy oraz telewizorów" />

        <div itemProp="service" itemScope itemType="https://schema.org/Service">
          <meta itemProp="name" content="Naprawa pralek" />
          <meta itemProp="serviceType" content="Naprawa sprzętu AGD" />
        </div>
      </div>
      <StarsWrapper>
        <Star $active={rating >= 1} />
        <Star $active={rating >= 2} />
        <Star $active={rating >= 3} />
        <Star $active={rating >= 4} />
        <Star $active={rating >= 5} />
      </StarsWrapper>
    </>
  )
};
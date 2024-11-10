import { Star, StarsWrapper } from "./styled";

export const Stars = ({ rating }) => {
  return (
    rating &&
    <>
      <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="ratingValue" content={rating} />
        <meta itemProp="bestRating" content="5" />
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
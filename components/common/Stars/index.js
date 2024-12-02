import { Star, StarsWrapper } from "../../../styles/opinie/ReviewsItem/Stars/StarsStyled";

export const Stars = ({ rating, center }) => (
  rating &&
  <StarsWrapper $center={center}>
    <Star $active={rating >= 1} />
    <Star $active={rating >= 2} />
    <Star $active={rating >= 3} />
    <Star $active={rating >= 4} />
    <Star $active={rating >= 5} />
  </StarsWrapper>
);

import { Star, StarsWrapper } from "./styled";

const Stars = ({ rating, text }) => (
  rating &&
  <StarsWrapper>
    <Star $active={rating >= 1} />
    <Star $active={rating >= 2} />
    <Star $active={rating >= 3} />
    <Star $active={rating >= 4} />
    <Star $active={rating >= 5} />
  </StarsWrapper>
);

export default Stars;
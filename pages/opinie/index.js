import { Section } from "../../components/common/Section";
import { Title } from "../../components/common/Title";
import { ReviewsContainer } from "../../styles/opinie/OpinieStyled";
import { serwis } from "../../utils/serwis";
import { StyledButtonLink } from "../../components/common/Buttons";
import HelmetForReviews from "./HelmetForReviews";

const Reviews = () => (
  <Section>
    <HelmetForReviews />
    <ReviewsContainer>
      <Title>Opinie Klientów</Title>

    </ReviewsContainer>
    <StyledButtonLink href={serwis.url.addTestimonial}>
      Wystaw opinię
    </StyledButtonLink>
  </Section>
);

export default Reviews;
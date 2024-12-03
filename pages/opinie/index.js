import { Section } from "../../components/common/Section";
import { Title } from "../../components/common/Title";
import { ReviewsContainer } from "../../styles/opinie/OpinieStyled";
import ReviewsItem from "./ReviewsItem";
import { serwis } from "../../utils/serwis";
import { StyledButtonLink } from "../../components/common/Buttons";
import ReviewsMetaTags from "./ReviewsMetaTags";
import axios from 'axios';
import { reviewUrl } from "../../utils/urls";
import { getSharedStaticProps } from "../../utils/getSharedStaticProps";
import { GoogleRating } from "../../components/GoogleRating";

const Reviews = ({ status, reviews, rating }) => (
  <Section>
    <ReviewsMetaTags />
    <GoogleRating rating={rating} />
    <ReviewsContainer>
      <Title>Opinie Klientów</Title>
      {status === "loading" && <p>Ładowanie opinii z google...</p>}
      {status === "success" && reviews.map((item, index) => (
        <ReviewsItem
          item={item}
          key={index}
        />
      ))}
      {status === "error" &&
        <>
          <p>Wystąpił błąd podczas ładowania opinii.</p>
          <p> Proszę spróbować ponownie później.</p>
        </>
      }
    </ReviewsContainer>
    {status === "success" && <StyledButtonLink href={serwis.url.addTestimonial}>
      Wystaw opinię
    </StyledButtonLink>}
  </Section>
);

export async function getStaticProps() {
  const sharedProps = await getSharedStaticProps();

  try {
    const response = await axios(reviewUrl)
    const reviews = response.data?.reviews || [];

    if (!Array.isArray(reviews)) {
      throw new Error('Invalid response from Google Places API');
    };

    let newReviews = [...reviews];
    if (reviews.length < 5) {
      let reserveReviews = serwis.reviews.filter((item) =>
        !newReviews.find((review) => review.text === item.text));
      let reserveReviewsIndex = 0;

      while (newReviews.length < 5 && reserveReviewsIndex < reserveReviews.length) {
        newReviews = [...newReviews, reserveReviews[reserveReviewsIndex]];
        reserveReviewsIndex++;
      };
    }

    return {
      ...sharedProps,
      props: {
        ...sharedProps.props,
        status: 'success',
        reviews: newReviews,
      },
    };
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return {
      ...sharedProps,
      props: {
        ...sharedProps.props,
        status: 'error',
        reviews: [],
      },
    };
  }
}

export default Reviews;
import { Section } from "../../components/common/Section";
import { Title } from "../../components/common/Title";
import { ReviewsContainer } from "../../styles/opinie/OpinieStyled";
import ReviewsItem from "./ReviewsItem";
import { serwis } from "../../utils/serwis";
import { StyledButtonLink } from "../../components/common/Buttons";
import HelmetForReviews from "./HelmetForReviews";
import axios from 'axios';
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";

const Reviews = ({ reviews, status }) => (
  <Section>
    <HelmetForReviews />
    <ReviewsContainer>
      <Title>Opinie Klientów</Title>
      {status === "success" && reviews.map((item, index) => (
        <ReviewsItem
          item={item}
          key={index}
          api={status === "success"}
        />
      ))}
      {status === "error" && <p>Wystąpił błąd podczas ładowania opinii</p>}
      {status !== "success" && status !== "error" && <p>Ładowanie opinii z google...</p>}
    </ReviewsContainer>
    {status === "success" && <StyledButtonLink href={serwis.url.addTestimonial}>
      Wystaw opinię
    </StyledButtonLink>}
  </Section>
);

export async function getStaticProps() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_PLACE_ID;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&language=pl&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const reviews = response.data.result.reviews || [];

    if (!Array.isArray(reviews)) {
      throw new Error('Invalid response from Google Places API');
    };

    let newReviews = [];
    newReviews = reviews.map(item => ({
      rating: item.rating,
      text: item.text,
      author_name: item.author_name,
      profile_photo_url: item.profile_photo_url,
      time: item.time,
    })).filter((item) => item.rating > 3);


    if (newReviews.length < 5) {
      let reserveReviews = serwis.reviews.filter((item) =>
        !newReviews.find((review) => review.text === item.text));
      let reserveReviewsIndex = 0;
      while (newReviews.length < 5 && reserveReviewsIndex < reserveReviews.length) {
        newReviews = [...newReviews, reserveReviews[reserveReviewsIndex]];
        reserveReviewsIndex++;
      };
    }

    return {
      props: {
        status: 'success',
        reviews: newReviews,
      },
    };
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return {
      props: {
        status: 'error',
        reviews: [],
      },
      revalidate: 3600 * 24,
    };
  }
}

export default Reviews;
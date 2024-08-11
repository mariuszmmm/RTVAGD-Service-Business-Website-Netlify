import { ReviewsItem } from "./ReviewsItem";
import {
  ReviewsContainer,
  ReviewsSection,
  ReviewsTitle,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { useEffect, useState } from "react";
import { HemletForReviews } from "./HemletForReviews";
import { StyledLink } from "../../common/Buttons";

export const Reviews = () => {
  const [reviewsApi, setReviewsApi] = useState({
    status: "loading",
    reviews: [],
  });

  async function fetchReviews() {
    try {
      /* global google */
      const { Place } = await google.maps.importLibrary("places");
      const place = new Place({
        id: "ChIJrWDpGyR_O0cRpvj4OFLVPPw",
      });

      await place.fetchFields({
        fields: ["reviews"],
      });

      if (place.reviews && place.reviews.length > 0) {
        let reviews = place.reviews.map(item => ({
          rating: item.rating,
          text: item.text,
          author_name: item.authorAttribution?.displayName,
          profile_photo_url: item.authorAttribution?.photoURI,
          time: item.publishTime || null,
        }));

        reviews = reviews.filter((item) => item.rating > 3);

        if (reviews.length < 5) {
          const reviewsReserve = serwis.reviews.filter((item) =>
            !reviews.find((review) => review.text === item.text));
          reviews = [...reviews, ...reviewsReserve];
        }

        setReviewsApi({ status: "success", reviews: reviews });
      } else {
        throw new Error("Brak opinii");
      }
    } catch (err) {
      console.error("Błąd podczas ładowania opinii:", err);
      setReviewsApi({ status: "error", reviews: serwis.reviews || [] });
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <ReviewsSection $show={reviewsApi.status !== "loading"}>
      <HemletForReviews />
      <ReviewsContainer>
        <ReviewsTitle>Opinie Klientów</ReviewsTitle>
        {(reviewsApi.status === "loading" ? [] : reviewsApi.reviews).map((item, index) => (
          <ReviewsItem
            item={item}
            key={index}
            api={reviewsApi.status === "success"}
          />
        ))}
      </ReviewsContainer>
      <StyledLink href={serwis.url.addTestimonial}>
        Wystaw opinię
      </StyledLink>
    </ReviewsSection>
  );
};

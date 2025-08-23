import axios from 'axios';
import { imageDataUrl } from "./urls";
import { serwis } from './serwis';

export const getImageData = async () => {
  try {
    const response = await axios(imageDataUrl)

    console.log("response", response)


    // const reviews = response.data?.reviews || [];
    // const ratingsTotal = response.data?.user_ratings_total || null;
    // const rating = response.data?.rating || null;

    // if (!Array.isArray(reviews) || !ratingsTotal || !rating) {
    //   throw new Error('Invalid response from Google Places API');
    // };

    // let selectedReviews = [...reviews];
    // if (reviews.length < 5) {
    //   let reserveReviews = serwis.reviews.filter((item) =>
    //     !selectedReviews.find((review) => review.text === item.text));
    //   let reserveReviewsIndex = 0;

    //   while (selectedReviews.length < 5 && reserveReviewsIndex < reserveReviews.length) {
    //     selectedReviews = [...selectedReviews, reserveReviews[reserveReviewsIndex]];
    //     reserveReviewsIndex++;
    //   };
    // }

    return {
      response
    };
  } catch (error) {
    console.error('Error fetching ImagData , error');
    return {
      response: null
    };
  }
};
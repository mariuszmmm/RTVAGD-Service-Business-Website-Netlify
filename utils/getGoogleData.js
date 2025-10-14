import axios from 'axios';
import { dataUrl } from "./urls";
import { serwis } from './serwis';

import data from "../public/googleData.json";

export const getGoogleData = async () => {
  // try {
  // const response = await axios(dataUrl)
  // const reviews = response.data.reviews || [];
  // const ratingsTotal = response.data.user_ratings_total || null;
  // const rating = response.data.rating || null;

  const reviews = data.reviews || [];
  const ratingsTotal = data.user_ratings_total || null;
  const rating = data.rating || null;

  // console.log("response.data", response.data)
  // console.log("data", data)


  if (!Array.isArray(reviews) || !ratingsTotal || !rating) {
    throw new Error('Invalid response from Google Places API');
  };

  let selectedReviews = [...reviews];
  if (reviews.length < 5) {
    let reserveReviews = serwis.reviews.filter((item) =>
      !selectedReviews.find((review) => review.text === item.text));
    let reserveReviewsIndex = 0;

    while (selectedReviews.length < 5 && reserveReviewsIndex < reserveReviews.length) {
      selectedReviews = [...selectedReviews, reserveReviews[reserveReviewsIndex]];
      reserveReviewsIndex++;
    };
  }

  return {
    reviews: selectedReviews,
    ratingsTotal,
    rating
  };
  // } catch (error) {
  //   console.error('Error fetching data from Google Places API:', error);
  //   return {
  //     reviews: [],
  //     ratingsTotal: null,
  //     rating: null,
  //   };
  // }
};
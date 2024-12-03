import axios from 'axios';
import { reviewUrl } from "../utils/urls";
export const getSharedStaticProps = async () => {
  try {
    const response = await axios(reviewUrl)
    const rating = response.data?.rating || null;
    return {
      props: {
        status: 'success',
        rating
      },
    };
  } catch (error) {
    console.error('Error fetching rating:', error);
    return {
      props: {
        status: 'error',
        rating: null
      },
    };
  }
};
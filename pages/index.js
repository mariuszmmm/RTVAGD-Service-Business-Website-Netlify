import Home from './home';
import axios from 'axios';
import { reviewUrl } from "../utils/urls";

export async function getStaticProps() {
  try {
    const response = await axios(reviewUrl)
    const rating = response.data?.rating || null;
    console.log('rating:', rating);
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
}

export default Home;
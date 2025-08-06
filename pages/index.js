import Home from './home';
import { getData } from '../utils/getData';

export const getStaticProps = async () => {
  const data = await getData();

  return {
    props: data,
    revalidate: 86400
  };
};

export default Home;


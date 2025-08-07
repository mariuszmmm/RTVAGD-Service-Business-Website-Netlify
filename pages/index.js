import Home from './home';
import { getData } from '../utils/getData';

export const getStaticProps = async () => {
  const data = await getData();

  return { props: data };
};

export default Home;


import Home from './home';
import { getData } from '../utils/getData';

export const getStaticProps = async () => {
  const data = await getData();

  console.log("TEST", data)

  return { props: { ...data || null } };
};

export default Home;


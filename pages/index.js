import Home from './home';
import { getData } from '../utils/getData';
import { getDataForMetaTags } from '../utils/dataForMetaTags';
import { getImageParameters } from '../utils/imagesParametrs';

// export const getStaticProps = async () => {
//   const data = await getData();

//   console.log("TEST", data)

//   return { props: { ...data || null } };
// };

export const getStaticProps = async () => {
  const dataForMetaTags = await getDataForMetaTags();
  const imageParameters = await getImageParameters();
  const data = await getData();
  // console.log("dataForMetaTags in Background", dataForMetaTags)

  return {
    props: {
      ...(data || null),
      imageParameters: imageParameters || null,
      dataForMetaTags: dataForMetaTags || null,
    },
  };
};

export default Home;


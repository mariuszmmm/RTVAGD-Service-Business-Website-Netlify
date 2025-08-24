import Home from './home';
import { getGoogleData } from '../utils/getGoogleData';
import { getDataForMetaTags } from '../utils/dataForMetaTags';
import { getImageParameters } from '../utils/getImageParameters';

// export const getStaticProps = async () => {
//   const data = await getGoogleData();

//   console.log("TEST", data)

//   return { props: { ...data || null } };
// };

export const getStaticProps = async () => {
  const [googleData, imageParameters, dataForMetaTags] = await Promise.all([
    getGoogleData(),
    getImageParameters("home"),
    getDataForMetaTags("home")
  ]);

  return {
    props: {
      // ...(googleData || {}),
      ...googleData,
      // imageParameters: imageParameters || null,
      dataForMetaTags: dataForMetaTags || null,
    },
  };
};

export default Home;


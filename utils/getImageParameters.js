// import fs from 'fs';
// import path from 'path';
import { getCldImageUrl } from "next-cloudinary";
// import imageData from "../public/imageParameters.json" with { type: "json" };
// import { imageDataUrl } from "./urls.js";
// import axios from "axios";

import imageParameters from "../public/imageParameters.json";

const getImageUrl = ({ src, width, height, version }) => {
  return getCldImageUrl({
    src,
    width,
    height,
    crop: 'limit',
    quality: '70',
    fetchFormat: 'auto',
    version,
  }).split('?')[0];
};

export const getImageParameters = (pageKey) => {
  // const imageParametersPath = path.join(process.cwd(), 'public', 'imageParameters.json');
  // const imageParametersRaw = fs.readFileSync(imageParametersPath, 'utf-8');
  // const imageParametersData = JSON.parse(imageParametersRaw);
  // console.log("imageParametersData", imageParametersData)
  // console.log("imageParameters", imageParameters)


  const allImageParameters = {};
  const widths = [190, 284, 380, 425, 480, 520, 568, 760, 850, 1024];

  for (const key in imageParameters) {
    const params = imageParameters[key];
    allImageParameters[key] = {
      url: getImageUrl({
        src: params.public_id,
        width: params.width,
        height: params.height,
        version: params.version,
      }),
      width: params.width,
      height: params.height,
      srcSet: widths.map(w => `${getImageUrl({ src: params.public_id, width: w, version: params.version })} ${w}w`)
        .join(', '),
    };
  }

  if (pageKey) {
    return allImageParameters[pageKey] || null;
  }

  return allImageParameters;
};


// export const getImageParameters_ = async (key) => {



//   console.log("key", key)
//   console.log("imageParameters", imageParameters)
//   try {
//     // const response = await axios(imageDataUrl)
//     // console.log("TEST_", imageDataUrl)

//     // const imageData = response.data;
//     // console.log("imageData________________", imageData);
//     const getImageUrl = ({ src, width, version }) => getCldImageUrl({
//       src,
//       width,
//       crop: 'limit',
//       quality: '70',
//       fetchFormat: 'auto',
//       version,
//     }).split('?')[0];

//     const widths = [190, 284, 380, 425, 480, 520, 568, 760, 850, 1024];
//     const getSrcSet = ({ src, version }) => widths.map(width => `${getImageUrl({ src, width, version })} ${width}w`).join(', ');

//     // console.log(imageData)
//     const naprawa_zmywarek = imageParameters[key];

//     // export const imageParameters = {
//     //   zmywarka: {
//     //     url: getImageUrl({ src: naprawa_zmywarek.public_id, width: naprawa_zmywarek.width, version: naprawa_zmywarek.version }),
//     //     srcSet: getSrcSet({ src: naprawa_zmywarek.public_id, version: naprawa_zmywarek.version }),
//     //     width: naprawa_zmywarek.width,
//     //     height: naprawa_zmywarek.height,
//     //   },
//     // };


//     if (!naprawa_zmywarek) {
//       console.error(`Nie znaleziono danych obrazu dla klucza: ${key}`);
//       return null; // Zwróć null, jeśli dane obrazu nie istnieją
//     }


//     const parameters = {
//       zmywarka: {
//         url: getImageUrl({ src: naprawa_zmywarek.public_id, width: naprawa_zmywarek.width, version: naprawa_zmywarek.version }),
//         srcSet: getSrcSet({ src: naprawa_zmywarek.public_id, version: naprawa_zmywarek.version }),
//         width: naprawa_zmywarek.width,
//         height: naprawa_zmywarek.height,
//       },
//     }

//     return parameters;
//   } catch (error) {
//     console.error('Error fetching data from Google Places API:', error);
//     return null;
//   }
// };
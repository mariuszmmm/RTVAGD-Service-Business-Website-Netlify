import { getCldImageUrl } from "next-cloudinary";
import imageData from "../public/image-data.json" with { type: "json" };
import { imageDataUrl } from "./urls.js";
import axios from "axios";


export const getImageParameters = async () => {
  try {
    const response = await axios(imageDataUrl)
    // console.log("TEST_", imageDataUrl)

    const imageData = response.data;
    // console.log("imageData________________", imageData);
    const getImageUrl = ({ src, width, version }) => getCldImageUrl({
      src,
      width,
      crop: 'limit',
      quality: '70',
      fetchFormat: 'auto',
      version,
    }).split('?')[0];

    const widths = [190, 284, 380, 425, 480, 520, 568, 760, 850, 1024];
    const getSrcSet = ({ src, version }) => widths.map(width => `${getImageUrl({ src, width, version })} ${width}w`).join(', ');

    // console.log(imageData)
    const naprawa_zmywarek = imageData['naprawa_zmywarek'];

    // export const imageParameters = {
    //   zmywarka: {
    //     url: getImageUrl({ src: naprawa_zmywarek.public_id, width: naprawa_zmywarek.width, version: naprawa_zmywarek.version }),
    //     srcSet: getSrcSet({ src: naprawa_zmywarek.public_id, version: naprawa_zmywarek.version }),
    //     width: naprawa_zmywarek.width,
    //     height: naprawa_zmywarek.height,
    //   },
    // };


    if (!naprawa_zmywarek) {
      console.error("Nie znaleziono danych obrazu dla klucza 'naprawa_zmywarek'");
      return null; // Zwróć null, jeśli dane obrazu nie istnieją
    }


    const imageParameters = {
      zmywarka: {
        url: getImageUrl({ src: naprawa_zmywarek.public_id, width: naprawa_zmywarek.width, version: naprawa_zmywarek.version }),
        srcSet: getSrcSet({ src: naprawa_zmywarek.public_id, version: naprawa_zmywarek.version }),
        width: naprawa_zmywarek.width,
        height: naprawa_zmywarek.height,
      },
    }

    return imageParameters;
  } catch (error) {
    console.error('Error fetching data from Google Places API:', error);
    return null;
  }
};
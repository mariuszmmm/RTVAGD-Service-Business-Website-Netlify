import axios from 'axios';
import { getCldImageUrl } from "next-cloudinary";
import { imageDataUrl } from './urls';
import { imageParameters } from './imagesParametrs';

export const getImageData = async () => {
  try {
    const response = await axios(imageDataUrl);
    const { naprawa_zmywarek } = response.data || {};

    // const getImageUrl = ({ src, width, version }) => getCldImageUrl({
    //   src,
    //   width,
    //   crop: 'limit',
    //   quality: 'auto',
    //   fetchFormat: 'auto',
    //   version,
    // }).split('?')[0];

    // const widths = [190, 284, 380, 425, 480, 520, 568, 760, 850, 1024];
    // const getSrcSet = ({ src, version }) => widths.map(width => `${getImageUrl({ src, width, version })} ${width}w`).join(', ');

    // const imageParameters = {
    //   zmywarka: {
    //     url: getImageUrl({ src: naprawa_zmywarek.public_id, width: naprawa_zmywarek.width, version: naprawa_zmywarek.version }),
    //     srcSet: getSrcSet({ src: naprawa_zmywarek.public_id, version: naprawa_zmywarek.version }),
    //     width: naprawa_zmywarek.width,
    //     height: naprawa_zmywarek.height,
    //   },
    // };

    return {
      // imageParameters: imageParameters || null
      imageParameters
    };
  } catch (error) {
    console.error('Error fetching ImageData', error);
    return {
      imageParameters: null
    };
  }
};
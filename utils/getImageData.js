import axios from 'axios';
import { imageDataUrl } from "./urls";
import { getCldImageUrl } from "next-cloudinary";

export const getImageData = async () => {
  try {
    const response = await axios(imageDataUrl);
    const data = response.data || {};

    console.log("DATA !!!!!!", data)



    const getImageUrl = ({ src, width, version }) => getCldImageUrl({
      src,
      width,
      crop: 'limit',
      quality: 'auto',
      fetchFormat: 'auto',
      version,
    }).split('?')[0];

    const widths = [190, 284, 380, 425, 480, 520, 568, 760, 850, 1024];
    const getSrcSet = ({ src, version }) => widths.map(width => `${getImageUrl({ src, width, version })} ${width}w`).join(', ');

    // const zmywarkaData = imageData['naprawa-zmywarek'];

    const imageParameters = {
      zmywarka: {
        url: "getImageUrl({ src: data.naprawa_zmywarek.public_id, width: data.naprawa_zmywarek.width, version: data.naprawa_zmywarek.version })",
        srcSet: "getSrcSet({ src: data.naprawa_zmywarek.public_id, version: data.naprawa_zmywarek.version })",
        width: "data.naprawa_zmywarek.width",
        height: "data.naprawa_zmywarek.height,"
      },
    };

    return {
      imageParameters: imageParameters || null
    };
  } catch (error) {
    console.error('Error fetching ImageData', error);
    return {
      imageParameters: null
    };
  }
};
import { imageParameters } from './imagesParametrs';

export const getImageData = async () => {
  try {
    return imageParameters;
  } catch (error) {
    console.error('Error fetching ImageData', error);
    return null;
  }
};
import { getCldImageUrl } from "next-cloudinary";

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

export const imageParameters = {
  zmywarka: {
    url: "getImageUrl({ src: zmywarkaData.public_id, width: zmywarkaData.width, version: zmywarkaData.version })",
    srcSet: "getSrcSet({ src: zmywarkaData.public_id, version: zmywarkaData.version })",
    width: "zmywarkaData.width",
    height: "zmywarkaData.height",
  },
};

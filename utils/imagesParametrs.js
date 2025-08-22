import { getCldImageUrl } from "next-cloudinary";

const getImageUrl = ({ src, width, height, version }) => getCldImageUrl({
  src,
  width,
  height,
  crop: 'limit',
  quality: 'auto',
  fetchFormat: 'auto',
  version,
}).split('?')[0];

const src = "Serwis/naprawa-zmywarek";
const widths = [190, 284, 380, 425, 480, 520, 850, 960, 1040, 1560];
const getSrcSet = ({ version }) => widths.map(width => `${getImageUrl({ src, width, height: width, version })} ${width}w`).join(', ');

export const imagesParameters = {
  zmywarka: {
    url: getImageUrl({ src: "Serwis/naprawa-zmywarek", width: 1024, height: 1024, version: 'v1755748024_' }),
    photoSrcSet: getSrcSet({ version: 'v1755748024' }),
    width: 1024,
    height: 1024,
  },
};

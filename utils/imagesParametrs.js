import { getCldImageUrl } from "next-cloudinary";

const getImageUrl = ({ src, width, version }) => getCldImageUrl({
  src,
  width,
  crop: 'limit',
  quality: 'auto',
  fetchFormat: 'auto',
  version,
}).split('?')[0];

const src = "Serwis/naprawa-zmywarek";
const widths = [190, 284, 380, 425, 480, 520, 568, 760, 850, 1040, 1560];
const getSrcSet = ({ version }) => widths.map(width => `${getImageUrl({ src, width, version })} ${width}w`).join(', ');

export const imageParameters = {
  zmywarka: {
    url: getImageUrl({ src: "Serwis/naprawa-zmywarek", width: 1024, version: 'v1755867034' }),
    srcSet: getSrcSet({ version: 'v1755867034' }),
    width: 1024,
    height: 1024,
  },
};

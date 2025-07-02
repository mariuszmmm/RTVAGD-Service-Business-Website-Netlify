import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { StyledImage } from "../../../components/common/StyledImage";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import Image from "next/image";


const Dishwasher = ({ show, setHold }) => (
  <ImageWrapper
    $show={show}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    <Link
      href={appUrls.naprawa_zmywarek}
      title="Serwis zmywarek w Przemyślu"
    >
      <StyledImage>
        <Image
          src={imageUrls._zmywarka}
          alt="003"
          // loading='lazy'
          fill
          // srcSet={`${imageUrls.zmywarka_300} 500w,
          // ${imageUrls.zmywarka} 1000w`}
          sizes="(max-width: 500px) 500px, 1000px"
        />
      </StyledImage>
    </Link>
  </ImageWrapper>
);

export default Dishwasher;
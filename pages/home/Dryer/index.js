import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage } from "../../../components/common/StyledImage";
import Image from "next/image";

const Dryer = ({ show, left, setHold }) => {
  return (
    <ImageWrapper
      $show={show}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      $left={left}
    >
      <Link
        href="/naprawa-suszarek"
        title="Serwis suszarek w Przemyślu"
      >
        <StyledImage>
          <Image
            src={imageUrls.suszarka}
            alt="Suszarka naprawiona w profesionalnym serwisie w Przemyślu"
            // loading='lazy'
            fill
            // srcSet={`${imageUrls.suszarka_300} 500w,
            // ${imageUrls.suszarka} 1000w`}
            sizes="(max-width: 500px) 500px, 1000px"
          />
        </StyledImage>
      </Link>
    </ImageWrapper>
  );
};

export default Dryer;
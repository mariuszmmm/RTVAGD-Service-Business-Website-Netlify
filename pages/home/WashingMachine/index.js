import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage } from "../../../components/common/StyledImage";
import Image from "next/image";

const WashingMachine = ({ show, left, setHold }) => {
  return (
    <ImageWrapper
      $show={show}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      $left={left}
    >
      <Link
        href={appUrls.naprawa_pralek}
        title="Serwis pralek w Przemyślu"
      >
        <StyledImage>
          <Image
            src={imageUrls._pralka}
            alt="Pralki"
            // loading='lazy'
            fill
            // srcSet={`${imageUrls.pralka_300} 500w,
            // ${imageUrls.pralka} 1000w`}
            sizes="(max-width: 500px) 500px, 1000px"
          />
        </StyledImage>
      </Link>
    </ImageWrapper>
  );
};
export default WashingMachine
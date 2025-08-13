import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage } from "../../../components/common/StyledImage";

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
        <StyledImage
          src={imageUrls._pralka}
          alt="Pralki"
          width={700}
          height={700}
          srcSet={`
            ${imageUrls._pralka_284} 284w,
            ${imageUrls._pralka_520} 520w,
            ${imageUrls._pralka} 700w
          `}
          sizes="(orientation: portrait) clamp(30vw, 59vw, 520px), 30vw"
          loading="lazy"
        />
      </Link>
    </ImageWrapper>
  );
};
export default WashingMachine
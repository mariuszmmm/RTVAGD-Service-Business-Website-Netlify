import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage2 } from "../../../components/common/StyledImage";

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
        <StyledImage2
          src={imageUrls._pralka}
          alt="Pralki"
          width={700}
          height={700}
          style={{ width: "100%", height: "auto" }}
          srcSet={`
            ${imageUrls._pralka_284} 284w,
            ${imageUrls._pralka_520} 520w,
            ${imageUrls._pralka} 700w
          `}
          sizes="(orientation: portrait) clamp(30vw, 59vw, 520px), 30vw"
        />
      </Link>
    </ImageWrapper>
  );
};
export default WashingMachine
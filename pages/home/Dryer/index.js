import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage2 } from "../../../components/common/StyledImage";
// import Image from "next/image";

const Dryer = ({ show, left, setHold }) => {
  return (
    <ImageWrapper
      $show={show}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      $left={left}
    >
      <Link
        href={appUrls.naprawa_suszarek}
        title="Serwis suszarek w Przemyślu"
      >
        <StyledImage2
          src={imageUrls._suszarka}
          alt="Suszarki"
          width={700}
          height={700}
          style={{ width: "100%", height: "auto" }}
          srcSet={`
              ${imageUrls._suszarka_284} 284w,
              ${imageUrls._suszarka_520} 520w,
              ${imageUrls._suszarka} 700w
            `}
          sizes="(orientation: portrait) clamp(30vw, 59vw, 520px), 30vw"
        />
      </Link>
    </ImageWrapper>
  );
};

export default Dryer;
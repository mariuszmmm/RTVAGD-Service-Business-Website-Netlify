import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage2 } from "../../../components/common/StyledImage";

const Television = ({ show, left, setHold }) => (
  <ImageWrapper
    $show={show}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
    $left={left}
  >
    <Link
      href={appUrls.naprawa_telewizorow}
      title="Serwis telewizorów w Przemyślu"
    >
      <StyledImage2
        src={imageUrls._telewizor}
        alt="Telewizory"
        width={700}
        height={700}
        style={{ width: "100%", height: "auto" }}
        srcSet={`
          ${imageUrls._telewizor_284} 284w,
          ${imageUrls._telewizor_520} 520w,
          ${imageUrls._telewizor} 700w
        `}
        sizes="(orientation: portrait) clamp(30vw, 59vw, 520px), 30vw"
      />
    </Link>
  </ImageWrapper>
);

export default Television;
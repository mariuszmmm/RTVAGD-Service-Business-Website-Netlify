import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { StyledImage2 } from "../../../components/common/StyledImage";
import { ImageWrapper } from "../../../components/common/ImageWrapper";

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
      <StyledImage2
        src={imageUrls._zmywarka}
        alt="Zmywarki"
        width={700}
        height={700}
        style={{ width: "100%", height: "auto" }}
        srcSet={`
          ${imageUrls._zmywarka_284} 284w,
          ${imageUrls._zmywarka_520} 520w,
          ${imageUrls._zmywarka} 700w
        `}
        sizes="(orientation: portrait) clamp(30vw, 59vw, 520px), 30vw"
      />
    </Link>
  </ImageWrapper>
);

export default Dishwasher;
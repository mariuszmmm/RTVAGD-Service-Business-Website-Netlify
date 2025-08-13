import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { HeroImage } from "../../../styles/home/HomeStyled";

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
      <HeroImage
        src={imageUrls._zmywarka}
        alt="Zmywarki"
        width={700}
        height={700}
        srcSet={`
          ${imageUrls._zmywarka_284} 284w,
          ${imageUrls._zmywarka_520} 520w,
          ${imageUrls._zmywarka} 700w
        `}
        // sizes="(orientation: portrait) clamp(30vw, 59vw, 520px), 30vw"
        sizes="(orientation: portrait) clamp(30vw, 29vw, 520px), (max-width: 945px) 15vw, (max-width: 1730px) 15vw, 600px"
        loading="lazy"
      />
    </Link>
  </ImageWrapper>
);

export default Dishwasher;
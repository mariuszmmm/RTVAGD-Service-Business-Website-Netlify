import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { HeroImage } from "../../../styles/home/HomeStyled";

const Dryer = ({ show, left, setHold }) => (
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
      <HeroImage
        src={imageUrls._suszarka}
        alt="Suszarki"
        width={700}
        height={700}
        srcSet={`
              ${imageUrls._suszarka_284} 284w,
              ${imageUrls._suszarka_520} 520w,
              ${imageUrls._suszarka} 700w
            `}
        sizes="(orientation: portrait) 30vw, (max-width: 1730px) 15vw, 600px"
        loading="lazy"
      />
    </Link>
  </ImageWrapper>
);

export default Dryer;
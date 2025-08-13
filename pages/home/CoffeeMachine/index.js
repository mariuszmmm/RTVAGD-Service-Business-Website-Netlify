import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { HeroImage } from "../../../styles/home/HomeStyled";

const CoffeeMachine = ({ show, setHold }) => (
  <ImageWrapper
    $show={show}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    <Link
      href={appUrls.naprawa_ekspresow}
      title="Naprawa ekspresów do kawy w Przemyślu"
    >
      <HeroImage
        src={imageUrls._ekspres}
        alt="Ekspresy"
        width={700}
        height={700}
        srcSet={`
          ${imageUrls._ekspres_284} 284w,
          ${imageUrls._ekspres_520} 520w,
          ${imageUrls._ekspres} 700w
        `}
        sizes="(orientation: portrait) clamp(30vw, 59vw, 520px), 30vw"
        loading="lazy"
      />
    </Link>
  </ImageWrapper>
);

export default CoffeeMachine;
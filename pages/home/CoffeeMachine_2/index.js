import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { HeroImage } from "../../../styles/home/HomeStyled";

const CoffeeMachine_2 = ({ show, setHold }) => (
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
        src={imageUrls._ekspres_2}
        alt="Ekspresy"
        width={700}
        height={700}
        srcSet={`
          ${imageUrls._ekspres_2_284} 284w,
          ${imageUrls._ekspres_2} 370w
        `}
        sizes="(orientation: portrait) 30vw, (max-width: 1730px) 15vw, 600px"
        loading="lazy"
      />
    </Link>
  </ImageWrapper>
);

export default CoffeeMachine_2;
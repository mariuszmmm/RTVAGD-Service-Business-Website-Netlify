import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { HeroImage } from "../../../styles/home/HomeStyled";

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
      <HeroImage
        src={imageUrls._telewizor}
        alt="Telewizory"
        width={700}
        height={700}
        srcSet={`
          ${imageUrls._telewizor_284} 284w,
          ${imageUrls._telewizor_520} 520w,
          ${imageUrls._telewizor} 700w
        `}
        // sizes="(orientation: portrait) clamp(30vw, 59vw, 520px), 30vw"
        sizes="(orientation: portrait) clamp(30vw, 29vw, 520px), (max-width: 945px) 15vw, (max-width: 1730px) 15vw, 600px"
        loading="lazy"
      />
    </Link>
  </ImageWrapper>
);

export default Television;
import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage } from "../../../components/common/StyledImage";
import Image from "next/image";

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
      <StyledImage>
        <Image
          src={imageUrls._ekspres_2}
          alt="006"
          // loading='lazy'
          fill
          // srcSet={`${imageUrls.ekspres_2_300} 500w,
          // ${imageUrls.ekspres_2} 1000w`}
          sizes="(max-width: 500px) 500px, 1000px"
        />
      </StyledImage>
    </Link>
  </ImageWrapper>
);

export default CoffeeMachine_2;
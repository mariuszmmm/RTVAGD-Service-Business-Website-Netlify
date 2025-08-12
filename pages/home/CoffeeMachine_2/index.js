import Link from "next/link";
import { appUrls, imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage2 } from "../../../components/common/StyledImage";
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
      <StyledImage2
        src={imageUrls._ekspres_2}
        alt="Ekspresy"
        width={700}
        height={700}
        style={{ width: "100%", height: "auto" }}
        srcSet={`
          ${imageUrls._ekspres_2_284} 284w,
          ${imageUrls._ekspres_2} 370w
        `}
        sizes="(orientation: portrait) clamp(30vw, 59vw, 520px), 30vw"
      />
    </Link>
  </ImageWrapper>
);

export default CoffeeMachine_2;
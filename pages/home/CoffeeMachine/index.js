import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { Image } from "../../../components/common/Image";

const CoffeeMachine = ({ show, setHold }) => (
  <ImageWrapper
    $show={show}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    <Link href="/naprawa-ekspresow">
      <Image
        src={imageUrls.ekspres}
        alt="Naprawa ekspresów do kawy w Przemyślu"
        loading="lazy"
      />
    </Link>
  </ImageWrapper>
);

export default CoffeeMachine;
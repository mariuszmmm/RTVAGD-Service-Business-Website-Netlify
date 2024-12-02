import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { Image } from "../../../components/common/Image";

const Dryer = ({ show, left, setHold }) => {
  return (
    <ImageWrapper
      $show={show}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      $left={left}
    >
      <Link href="/naprawa-suszarek">
        <Image
          src={imageUrls.suszarka}
          alt="Naprawa suszarek w Przemyślu"
          loading="lazy"
        />
      </Link>
    </ImageWrapper>
  );
};

export default Dryer;
import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { Image } from "../../../components/common/Image";

const Television = ({ show, left, setHold }) => (
  <ImageWrapper
    $show={show}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
    $left={left}
  >
    <Link href="/naprawa-telewizorow">
      <Image
        src={imageUrls.telewizor}
        alt="Serwis telewizorów w Przemyślu"
        loading="lazy"
      />
    </Link>
  </ImageWrapper>
);

export default Television;
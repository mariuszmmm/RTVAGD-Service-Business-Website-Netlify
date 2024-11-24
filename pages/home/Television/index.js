import { Image, TelevisionWrapper } from "../../../styles/home/Television/TelevisionStyled";
import Link from "next/link";
import { imageUrls } from "../../../utils/urls";

const Television = ({ show, center, setHold }) => (
  <TelevisionWrapper
    $show={show}
    $center={center}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    <Link href="/naprawa-telewizorow">
      <Image
        src={imageUrls.telewizor}
        alt="Serwis telewizorów w Przemyślu"
        $center={center}
        loading="lazy"
      />
    </Link>
  </TelevisionWrapper>
);

export default Television;
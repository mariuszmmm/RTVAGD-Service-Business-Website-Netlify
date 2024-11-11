// import telewizor from "../../../assets/images/serwis-telewizorow.webp";
import { imageUrls } from "../../../utils/urls";
import { Image, TelevisionWrapper } from "./styled";
import { HashLink as Link } from "react-router-hash-link";

const Television = ({ show, center, reset, setHold }) => (
  <TelevisionWrapper
    $show={show}
    $center={center}
    $noDisplay={reset}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    <Link to="/naprawa-telewizorow">
      <Image
        src={imageUrls.telewizor}
        alt="Serwis telewizorów w Przemyślu"
        $center={center}
      />
    </Link>
  </TelevisionWrapper>
);

export default Television;
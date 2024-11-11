import { DishwasherWrapper, Image } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
import { imageUrls } from "../../../utils/urls";

const Dishwasher = ({ show, center, reset, setHold }) => (
  <DishwasherWrapper
    $show={show}
    $center={center}
    $noDisplay={reset}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    {" "}
    <Link to="/naprawa-zmywarek">
      <Image
        src={imageUrls.zmywarka}
        alt="Serwis zmywarek w Przemyślu"
        $center={center}
      />
    </Link>
  </DishwasherWrapper>
);

export default Dishwasher;
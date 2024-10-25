import zmywarka from "../../../assets/images/serwis-zmywarek.webp";
import { DishwasherWrapper, Image } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
export const Dishwasher = ({ show, center, reset, setHold }) => (
  <DishwasherWrapper
    $show={show}
    $center={center}
    $noDisplay={reset}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    {" "}
    <Link to="/uslugi#naprawa-zmywarek">
      <Image
        src={zmywarka}
        alt="Serwis zmywarek w Przemyślu"
        $center={center}
      />
    </Link>
  </DishwasherWrapper>
);
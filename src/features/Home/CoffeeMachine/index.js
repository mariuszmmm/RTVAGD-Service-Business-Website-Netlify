import ekspres from "../../../assets/images/naprawa-ekspresow.webp";
import { CoffeeMachineWrapper, Image } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
export const CoffeeMachine = ({ show, center, reset, setHold }) => (
  <CoffeeMachineWrapper
    $show={show}
    $center={center}
    $noDisplay={reset}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    <Link to="/naprawa-ekspresow">
      <Image
        src={ekspres}
        alt="Naprawa ekspresów do kawy w Przemyślu"
        $center={center}
      />
    </Link>
  </CoffeeMachineWrapper>
);
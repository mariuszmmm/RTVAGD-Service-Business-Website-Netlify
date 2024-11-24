import { CoffeeMachineWrapper, Image } from "../../../styles/home/CoffeeMachine/CoffeeMachineStyled";
import Link from "next/link";
import { imageUrls } from "../../../utils/urls";

const CoffeeMachine = ({ show, center, setHold }) => (
  <CoffeeMachineWrapper
    $show={show}
    $center={center}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    <Link href="/naprawa-ekspresow">
      <Image
        src={imageUrls.ekspres}
        alt="Naprawa ekspresów do kawy w Przemyślu"
        $center={center}
        loading="lazy"
      />
    </Link>
  </CoffeeMachineWrapper>
);

export default CoffeeMachine;
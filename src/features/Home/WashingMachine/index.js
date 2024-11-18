import { Image, WashingMachineWrapper } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
import { imageUrls } from "../../../utils/urls";

const WashingMachine = ({ show, center, reset, setHold }) => {
  return (
    <WashingMachineWrapper
      $show={show}
      $center={center}
      $noDisplay={reset}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
    >
      <Link to="/naprawa-pralek">
        <Image
          src={imageUrls.pralka}
          alt="Naprawa pralek w Przemyślu"
          $center={center}
          $show={show}
        />
      </Link>
    </WashingMachineWrapper>
  );
};
export default WashingMachine
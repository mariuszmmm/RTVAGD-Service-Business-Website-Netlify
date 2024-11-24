import { Image, WashingMachineWrapper } from "../../../styles/home/WashingMachine/WashingMachineStyled";
import Link from "next/link";
import { imageUrls } from "../../../utils/urls";

const WashingMachine = ({ show, center, setHold }) => {
  return (
    <WashingMachineWrapper
      $show={show}
      $center={center}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
    >
      <Link href="/naprawa-pralek">
        <Image
          src={imageUrls.pralka}
          alt="Naprawa pralek w Przemyślu"
          $center={center}
          loading="lazy"
        />
      </Link>
    </WashingMachineWrapper>
  );
};
export default WashingMachine
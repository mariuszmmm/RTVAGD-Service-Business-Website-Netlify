import { DishwasherWrapper, Image } from "../../../styles/home/Dishwasher/DishwasherStyled";
import Link from "next/link";
import { imageUrls } from "../../../utils/urls";

const Dishwasher = ({ show, center, setHold }) => (
  <DishwasherWrapper
    $show={show}
    $center={center}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    {" "}
    <Link href="/naprawa-zmywarek">
      <Image
        src={imageUrls.zmywarka}
        alt="Serwis zmywarek w Przemyślu"
        $center={center}
        loading="lazy"
      />
    </Link>
  </DishwasherWrapper>
);

export default Dishwasher;
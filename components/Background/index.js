import { imageUrls } from "../../utils/urls.js";
import { serwis } from "../../utils/serwis.js";
import { BackgroundImage } from "../common/BackgroundImage/index.js";
import { BackgroundWrapper, Circle, Rotating } from "./styled.js";
import Image from "next/image";

const Background = () => {
  return (
    <BackgroundWrapper>
      <BackgroundImage>
        <Image
          src={imageUrls.serwis}
          alt={`Naprawa sprzętu RTV i AGD w Przemyślu ✔️ ${serwis.shortName}`}
          loading="lazy"
          fill
        />
      </BackgroundImage>
      <Rotating>
        <Circle $top={"0%"} $left={"40%"}></Circle>
        <Circle $top={"-70%"} $left={"10%"}></Circle>
        <Circle $top={"0%"} $left={"-30%"}></Circle>
      </Rotating>
    </BackgroundWrapper>
  );
};

export default Background;
import { imageUrls } from "../../utils/urls.js";
import { serwis } from "../../utils/serwis.js";
import { BackgroundImage } from "../common/BackgroundImage/index.js";
import { BackgroundWrapper, Circle, Rotating } from "./styled.js";
import Image from "next/image";
import { usePathname } from "next/navigation.js";

const Background = () => {
  const pathname = usePathname()
  const servicesPath = pathname.includes("naprawa-");

  return (
    <BackgroundWrapper>
      {!servicesPath && <BackgroundImage>
        <Image
          src={imageUrls.serwis}
          alt="Naprawa sprzętu RTV i AGD w Przemyśl – naprawa pralek, suszarek, zmywarek, telewizorów i ekspresów."
          // loading="lazy"
          // width="931" height="497"
          fill
        />
      </BackgroundImage>}
      <Rotating>
        <Circle $top={"0%"} $left={"40%"}></Circle>
        <Circle $top={"-70%"} $left={"10%"}></Circle>
        <Circle $top={"0%"} $left={"-30%"}></Circle>
      </Rotating>
    </BackgroundWrapper>
  );
};

export default Background;
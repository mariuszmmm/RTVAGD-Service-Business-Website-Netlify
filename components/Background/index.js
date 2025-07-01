import { imageUrls } from "../../utils/urls.js";
import { dataForMetaTags } from "../../utils/dataForMetaTags.js";
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
          title={dataForMetaTags.home.metaTags.imageTitle}
          alt={dataForMetaTags.home.metaTags.imageAlt}
          loading="lazy"
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
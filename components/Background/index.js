import { imageUrls } from "../../utils/urls";
import { dataForMetaTags } from "../../utils/dataForMetaTags";
import { BackgroundImage } from "../common/BackgroundImage";
import { BackgroundWrapper, Circle, Rotating } from "./styled";
import { usePathname } from "next/navigation.js";

const Background = () => {
  const pathname = usePathname()
  const servicesPath = pathname.includes("naprawa-");

  return (
    <BackgroundWrapper>
      {
        !servicesPath &&
        <BackgroundImage
          src={imageUrls.serwis}
          title={dataForMetaTags.home.metaTags.imageTitle}
          alt={dataForMetaTags.home.metaTags.imageAlt}
          srcSet={`
            ${imageUrls.serwis_480} 480w,
            ${imageUrls.serwis_768} 768w,
            ${imageUrls.serwis} 931w
          `}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 931px"
          width={931}
          height={497}
          loading="eager"
          fetchpriority="high"
        />
      }
      <Rotating>
        <Circle $top={"0%"} $left={"40%"}></Circle>
        <Circle $top={"-70%"} $left={"10%"}></Circle>
        <Circle $top={"0%"} $left={"-30%"}></Circle>
      </Rotating>
    </BackgroundWrapper>
  );
};

export default Background;
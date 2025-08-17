import { imageUrls } from "../../utils/urls";
import { dataForMetaTags } from "../../utils/dataForMetaTags";
import { BackgroundImage } from "../common/BackgroundImage";
import { BackgroundWrapper, Circle, Rotating } from "./styled";
import { usePathname } from "next/navigation";
import { getCldImageUrl } from "next-cloudinary";

const Background = () => {
  const pathname = usePathname() || "";
  const isServicesPath = pathname.includes("naprawa-");

  const getUrl = (width) => getCldImageUrl({
    src: 'Serwis/serwis-rtv-agd',
    width,
    quality: 'auto',
    fetchFormat: 'auto',
    dpr: 'auto'
  });

  return (
    <BackgroundWrapper>
      {
        !isServicesPath &&
        <BackgroundImage
          src={imageUrls.serwis}
          title={dataForMetaTags.home.metaTags.imageTitle}
          alt={dataForMetaTags.home.metaTags.imageAlt}
          srcSet={`${getUrl(320)} 320w, ${getUrl(480)} 480w, ${getUrl(768)} 768w, ${getUrl(931)} 931w`}
          width={931}
          height={497}
          loading="eager"
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
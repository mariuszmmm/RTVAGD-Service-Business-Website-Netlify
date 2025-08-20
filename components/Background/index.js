import { imageUrls } from "../../utils/urls";
import { dataForMetaTags } from "../../utils/dataForMetaTags";
import { BackgroundImage } from "../common/BackgroundImage";
import { BackgroundWrapper, Circle, Rotating } from "./styled";
import { usePathname } from "next/navigation";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

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
        // <BackgroundImage
        //   src={imageUrls.serwis}
        //   title={dataForMetaTags.home.metaTags.imageTitle}
        //   alt={dataForMetaTags.home.metaTags.imageAlt}
        //   srcSet={`${getUrl(320)} 320w, ${getUrl(480)} 480w, ${getUrl(768)} 768w, ${getUrl(931)} 931w`}
        //   width={931}
        //   height={497}
        //   loading="eager"
        // />
        <div style={{
          position: "absolute",
          width: "100vw",
          // height: "auto",
          aspectRatio: "931/497",
          // opacity: 0.0001,
          marginTop: "20px"
        }}>
          <Image

            src={imageUrls.serwis}
            title={dataForMetaTags.home.metaTags.imageTitle}
            alt={dataForMetaTags.home.metaTags.imageAlt}
            // srcSet={`${getUrl(320)} 320w, ${getUrl(480)} 480w, ${getUrl(768)} 768w, ${getUrl(931)} 931w`}
            // width={931}
            // height={497}
            fill
            loading="eager"
          />
        </div>
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
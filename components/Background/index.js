import { BackgroundWrapper, Circle, Image, Rotating } from "./styled.js";
import { imageUrls } from "../../utils/urls";

const Background = () => {
  return (
    <BackgroundWrapper>
      <Image
        src={imageUrls.serwis}
        alt="Background image"
        loading="lazy"
      />
      <Rotating>
        <Circle $top={"0"} $left={"0"}></Circle>
        <Circle $top={"-80%"} $left={"30%"}></Circle>
        <Circle $top={"-20%"} $left={"70%"}></Circle>
      </Rotating>
    </BackgroundWrapper>
  );
};

export default Background;
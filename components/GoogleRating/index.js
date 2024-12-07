import { Stars } from "../../components/common/Stars";
import { imageUrls } from "../../utils/urls";
import { ImageWrapper, StyledLink, Text, Wrpper } from "./styled";
import Image from "next/image";

export const GoogleRating = ({ rating, hidden }) => (
  <Wrpper $hidden={hidden}>
    <StyledLink href="/opinie/">
      <ImageWrapper>
        <Image
          src={imageUrls.google}
          alt="google logo"
          loading="lazy"
          fill
        />
      </ImageWrapper>
      <Text>Google Rating {rating}</Text >
      <Stars rating={5} center />
    </StyledLink>
  </Wrpper>
);

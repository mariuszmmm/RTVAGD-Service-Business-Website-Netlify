import { Stars } from "../../components/common/Stars";
import { ImageWrapper, RatingWrapper, Text } from "./styled";
import Image from "next/image";

export const GoogleRating = ({ rating }) => {
  return (
    <>
      <RatingWrapper>
        <ImageWrapper>
          <Image src="/images/logoGoogle.png"
            width={25}
            height={25}
            alt="google" />
        </ImageWrapper>
        <Text>Google Rating {rating}</Text >
        <Stars rating={5} center />
      </RatingWrapper>
    </>
  )
};

import { Stars } from "../common/Stars";
import { appUrls, imageUrls } from "../../utils/urls";
import { ImageWrapper, StyledLink, Text, Wrpper } from "./styled";
import Image from "next/image";
import { Emoticon } from "../common/Emoticon";
import { useEffect, useState } from "react";

export const QrCode = ({ hidden }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    if (isOpen) {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, [isOpen]);

  return (
    <>
      <Wrpper onClick={() => setIsOpen(!isOpen)} $show={!isOpen} $hidden={hidden}>
        <ImageWrapper $show={!isOpen}>
          <Image
            src={imageUrls.qrCode}
            alt="qr code"
            fill
            loading="lazy"
          />
        </ImageWrapper>
      </Wrpper>
    </>
  )
};

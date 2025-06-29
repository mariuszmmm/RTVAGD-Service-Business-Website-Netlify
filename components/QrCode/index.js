import { imageUrls } from "../../utils/urls";
import { Background, ImageWrapper, Text, Wrpper } from "./styled";
import Image from "next/image";
import { useEffect, useState } from "react";

export const QrCode = ({ hidden }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    if (isOpen) {
      setTimeout(() => {
        setDelay(false);
      }, 800);
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return () => {
      setDelay(true);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpen]);

  return (
    <>
      <Background $isOpen={isOpen} />
      <Wrpper
        onClick={() => setIsOpen(!isOpen)}
        $isOpen={isOpen}
        $hidden={hidden}
      >
        <ImageWrapper $isOpen={isOpen}>
          <Image src={imageUrls.qrCode} alt="review qr code" fill loading="lazy" />
        </ImageWrapper>
        {isOpen && <Text $delay={delay}>Zeskanuj kod QR i wystaw opinię</Text>}
      </Wrpper>
    </>
  );
};

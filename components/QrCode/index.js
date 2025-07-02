import { imageUrls } from "../../utils/urls";
import { Background, ImageWrapper, Text, Wrpper } from "./styled";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const QrCode = ({ hidden }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [delay, setDelay] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const wakeLockRef = useRef(null);

  const requestWakeLock = async () => {
    try {
      if ("wakeLock" in navigator) {
        wakeLockRef.current = await navigator.wakeLock.request("screen");
      }
    } catch (err) {
      console.error("Failed to acquire wake lock:", err);
    }
  };

  const releaseWakeLock = async () => {
    try {
      if (wakeLockRef.current) {
        await wakeLockRef.current.release();
        wakeLockRef.current = null;
      }
    } catch (err) {
      console.error("Failed to release wake lock:", err);
    }
  };

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    if (isOpen) {
      setTimeout(() => {
        setDelay(false);
      }, 300);
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      requestWakeLock();
    } else {
      releaseWakeLock();
    }

    return () => {
      releaseWakeLock();
      setDelay(true);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpen]);

  return (
    <>
      <Background $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Wrpper
        onClick={() => setIsOpen(!isOpen)}
        $isOpen={isOpen}
        $hidden={hidden}
        $loaded={loaded}
      >
        <ImageWrapper $isOpen={isOpen}>
          <Image
            src={imageUrls.qrCode}
            alt="QrCode"
            fill
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        </ImageWrapper>
        <Text $delay={delay}>Zeskanuj kod QR i wystaw opinię</Text>
      </Wrpper>
    </>
  );
};

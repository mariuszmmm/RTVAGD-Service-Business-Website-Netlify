import { imageUrls } from "../../utils/urls";
import { serwis } from "../../utils/serwis";
import { Background, ImageWrapper, Text, Wrpper } from "./styled";
import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";
import QRCode from 'qrcode'

export const QrCode = ({ hidden }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [delay, setDelay] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const wakeLockRef = useRef(null);
  const [qrCodeSvg, setQrCodeSvg] = useState("");


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


  useEffect(() => {
    const canvas = document.createElement('canvas');
    const logoUrl = imageUrls.logoGoogle;
    const qrCodeSize = 256;
    const logoSize = isOpen ? 100 : 0;

    QRCode.toCanvas(canvas, serwis.url.addTestimonial, {
      width: qrCodeSize,
      margin: 2,
      errorCorrectionLevel: 'high',
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    }, (error) => {
      if (error) console.error(error);

      const ctx = canvas.getContext('2d');
      const logo = new Image();
      logo.src = logoUrl;
      logo.crossOrigin = "Anonymous";
      logo.onload = () => {
        const logoX = (qrCodeSize - logoSize) / 2;
        const logoY = (qrCodeSize - logoSize) / 2;

        ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
        setQrCodeSvg(canvas.toDataURL('image/png'));
      };
    });
  }, [isOpen]);

  return (
    <>
      <Background $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Wrpper
        onClick={() => setIsOpen(!isOpen)}
        $isOpen={isOpen}
        $hidden={hidden}
        $loaded={loaded}
        title="Wystaw opinię - kod QR"
      >
        {qrCodeSvg &&
          <>
            <ImageWrapper $isOpen={isOpen}>
              <NextImage
                src={qrCodeSvg}
                alt="QrCode"
                fill
                loading="lazy"
                onLoad={() => setLoaded(true)}
              />
            </ImageWrapper>
            <Text $delay={delay}>Zeskanuj kod QR i wystaw opinię</Text>
          </>
        }
      </Wrpper>
    </>
  );
};

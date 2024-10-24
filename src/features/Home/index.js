import {
  Hero,
  HeroContainer,
  HeroSubText,
  HeroSubTitle,
  HeroText,
  HeroTitle,
  Main,
  Description,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { CoffeeMachine } from "./CoffeeMachine";
import { WashingMachine } from "./WashingMachine";
import { Television } from "./Television";
import { Dishwasher } from "./Dishwasher";
import { useEffect, useState } from "react";
import { StyledLink } from "../../common/Buttons";
import { HelmetForHome } from "./HemletForHome";
import { mobileScene, sceneB as scene } from "./scenes";

export const Home = () => {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  const [activeScene, setActiveScene] = useState({
    reset: false,
    number: 0,
    content: isPortrait ? mobileScene[0] : scene[0],
  });
  const [show, setShow] = useState(false);
  const [hold, setHold] = useState(false);

  const handleResize = () => {
    const actualState = window.innerHeight > window.innerWidth;
    if (isPortrait === actualState) return;
    setIsPortrait(actualState);
    setActiveScene({
      ...activeScene,
      reset: true,
      number: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line
  }, [window.innerHeight, window.innerWidth]);

  useEffect(() => {
    if (hold) return;
    let sceneNumber = activeScene.number >= 8 ? 1 : activeScene.number + 1;
    let isTransition = sceneNumber % 2 === 0 ? true : false;
    const interval = setInterval(
      () => {
        setActiveScene({
          reset: false,
          number: sceneNumber,
          content: isPortrait ? mobileScene[sceneNumber] : scene[sceneNumber],
        });
      },
      isTransition ? 3000 : 800
    );

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [activeScene, hold]);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Hero $show={show}>
      <HelmetForHome />
      <HeroContainer>
        <HeroTitle>
          Profesjonalna naprawa
          <br /> pralek, zmywarek, telewizorów
          <br /> i&nbsp;ekspresów do&nbsp;kawy
          <br />
          w&nbsp;Przemyślu
        </HeroTitle>
        <HeroText> Rzetelnie, szybko i skutecznie!</HeroText>
        <StyledLink href={`tel:${serwis.phone}`}>Zadzwoń teraz</StyledLink>
        <HeroSubText $notShow={isPortrait}>
          {" "}
          <br />
          Z ponad 20-letnim doświadczeniem <br />w naprawie sprzętu RTV i AGD,
          <br />
          zapewniam najwyższą jakość usług <br />
          dla moich klientów.
        </HeroSubText>
      </HeroContainer>
      <WashingMachine
        show={activeScene.content[0]}
        center={isPortrait}
        reset={activeScene.reset}
        setHold={setHold}
      />
      <CoffeeMachine
        show={activeScene.content[1]}
        center={isPortrait}
        reset={activeScene.reset}
        setHold={setHold}
      />
      <Dishwasher
        show={activeScene.content[2]}
        center={isPortrait}
        reset={activeScene.reset}
        setHold={setHold}
      />
      <Television
        show={activeScene.content[3]}
        center={isPortrait}
        reset={activeScene.reset}
        setHold={setHold}
      />
      {/* <WashingMachine show={true} center={isPortrait} />
      <CoffeeMachine show={true} center={isPortrait} />
      <Dishwasher show={true} center={isPortrait} />
      <Television show={true} center={isPortrait} /> */}

      <Main>
        <HeroSubTitle>
          Serwisuję wszystkie marki telewizorów, pralek, zmywarek i&nbsp;ekspresów&nbsp;do&nbsp;kawy
        </HeroSubTitle>
        <Description>
          Specjalizuję się w&nbsp;naprawie urządzeń RTV&nbsp;i&nbsp;AGD różnych marek, oferując profesjonalną obsługę zarówno dla popularnych, jak i&nbsp;mniej znanych producentów. Naprawiam urządzenia marek takich jak:
        </Description>
        <Description as="ul">
          <li><strong>Telewizory:</strong> Samsung, LG, Sony, Philips, Panasonic, Sharp, Toshiba</li>
          <li><strong>Pralki:</strong> Bosch, Siemens, Whirlpool, Electrolux, Beko, Amica, Candy</li>
          <li><strong>Ekspresy do kawy:</strong> De’Longhi, Saeco, Jura, Krups, Nivona, Siemens, Philips</li>
          <li><strong>Zmywarki:</strong> Bosch, Siemens, Whirlpool, Beko, Electrolux, Amica, Miele</li>
        </Description>
        <Description>
          Dzięki doświadczeniu oraz dostępowi do&nbsp;oryginalnych części zamiennych, możesz mieć pewność, że&nbsp;Twoje urządzenie zostanie naprawione szybko i&nbsp;solidnie.
        </Description>
        <br />
        <br />
        <HeroSubTitle>
          Naprawy realizuję w&nbsp;Przemyślu i&nbsp;okolicach
        </HeroSubTitle>
        <Description>
          Działam na&nbsp;terenie Przemyśla i&nbsp;oferuję moje usługi również w&nbsp;pobliskich miejscowościach oraz ich&nbsp;okolicach.
          Jeśli mieszkasz w&nbsp;jednym z&nbsp;poniższych miejsc lub w&nbsp;ich&nbsp;sąsiedztwie, chętnie przyjadę do&nbsp;Ciebie i&nbsp;naprawię Twoje urządzenie:
        </Description>
        <Description>
          Przemyśl&nbsp;• Bolestraszyce&nbsp;• Duńkowiczki&nbsp;• Krówniki&nbsp;• Nehrybka&nbsp;• Orzechowce&nbsp;• Ostrów&nbsp;• Pikulice • Prałkowce&nbsp;• Wyszatyce&nbsp;• Żurawica&nbsp;
        </Description>
        <Description>
          Zaufaj profesjonalnemu serwisowi, który codziennie dba o&nbsp;niezawodność Twoich urządzeń RTV&nbsp;i&nbsp;AGD!
        </Description>
      </Main>
    </Hero>
  );
};
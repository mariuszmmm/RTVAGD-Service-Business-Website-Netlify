import {
  Hero,
  HeroContainer,
  HeroSubText,
  HeroText,
  HeroTitle,
  ServicesContainer,
  ServiceText,
  ServiceTitle,
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
          zapewniamy najwyższą jakość usług <br />
          dla naszych klientów.
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

      <ServicesContainer>
        <ServiceTitle>Serwisujemy wszystkie marki telewizorów, pralek, ekspresów do kawy i zmywarek
        </ServiceTitle>
        <ServiceText>
          Specjalizuję się w naprawie urządzeń RTV i AGD różnych marek, oferując profesjonalną obsługę zarówno dla popularnych, jak i mniej znanych producentów. Naprawiam urządzenia marek takich jak:
        </ServiceText>
        <ServiceText as="ul">
          <li>Telewizory: Samsung, LG, Sony, Philips, Panasonic, Sharp, Toshiba</li>
          <li>Pralki: Bosch, Siemens, Whirlpool, Electrolux, Beko, Amica, Candy</li>
          <li>Ekspresy do kawy: De’Longhi, Saeco, Jura, Krups, Nivona, Siemens, Philips</li>
          <li>Zmywarki: Bosch, Siemens, Whirlpool, Beko, Electrolux, Amica, Miele</li>
        </ServiceText>
        <ServiceText>
          Dzięki doświadczeniu oraz dostępowi do oryginalnych części zamiennych, możesz mieć pewność, że Twoje urządzenie zostanie naprawione szybko i solidnie.
        </ServiceText>
      </ServicesContainer>
      <ServicesContainer>
        <ServiceTitle>Naprawy realizuję w Przemyślu i okolicach</ServiceTitle>
        <ServiceText>
          Działam na terenie Przemyśla i oferuję moje usługi również w pobliskich miejscowościach. Jeśli mieszkasz w jednym z poniższych miast lub okolicznych miejscowościach, chętnie przyjadę do Ciebie i naprawię Twoje urządzenie:
        </ServiceText>
        <ServiceText>
          Krówniki • Przemyśl • Żurawica • Orzechowce • Ostrów • Duńkowiczki • Bolestraszyce • Nehrybka • Wyszatyce • Prałkowce • Pikulice
        </ServiceText>
        <ServiceText>
          Zaufaj profesjonalnemu serwisowi, który codziennie dba o niezawodność Twoich urządzeń RTV i AGD!
        </ServiceText>
      </ServicesContainer>
    </Hero>
  );
};

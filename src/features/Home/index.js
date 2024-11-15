import {
  HeroContainer,
  Hero,
  HeroSubText,
  HeroText,
  HeroTitle,
} from "./styled";
import { SubTitle } from "../../common/SubTitle";
import { Text } from "../../common/Text";
import { Container } from "../../common/Container";
import { serwis } from "../../utils/serwis";
import CoffeeMachine from "./CoffeeMachine";
import WashingMachine from "./WashingMachine";
import Television from "./Television";
import Dishwasher from "./Dishwasher";
import { useEffect, useState } from "react";
import { StyledButtonLink } from "../../common/Buttons";
import { StyledLink } from "../../common/StyledLink";
// import HelmetForHome from "./HemletForHome";
import { mobileScene, sceneB as scene } from "./scenes";
import { Helmet } from "react-helmet";

const Home = () => {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  const [activeScene, setActiveScene] = useState({
    reset: false,
    number: 0,
    content: isPortrait ? mobileScene[0] : scene[0],
  });
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

  return (
    <Hero>
      {/* <HelmetForHome /> */}
      <Helmet>
        <title>Naprawa telewizorów, pralek, zmywarek, ekspresów do kawy</title>

        <meta
          property="og:title"
          content="Naprawa telewizorów, pralek, zmywarek, ekspresów do kawy"
        />
        <meta property="og:locale" content="pl_PL" />
      </Helmet>

      <HeroContainer>
        <HeroTitle>
          Profesjonalna naprawa<br />
          pralek, zmywarek, telewizorów<br />
          i&nbsp;ekspresów do&nbsp;kawy<br />
          w&nbsp;Przemyślu
        </HeroTitle>
        <HeroText> Rzetelnie, szybko i&nbsp;skutecznie!</HeroText>
        <StyledButtonLink href={`tel:${serwis.phone}`}>Zadzwoń teraz</StyledButtonLink>
        <HeroSubText $notShow={isPortrait}>
          {" "}<br />
          Z&nbsp;wieloletnim doświadczeniem<br />
          w&nbsp;naprawie sprzętu RTV&nbsp;i&nbsp;AGD,<br />
          zapewniam usługi najwyższej jakości.
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
      <Container>
        <SubTitle>
          Serwisuję wszystkie marki telewizorów, pralek, zmywarek i&nbsp;ekspresów&nbsp;do&nbsp;kawy
        </SubTitle>
        <Text>
          Specjalizuję się w&nbsp;naprawie urządzeń RTV&nbsp;i&nbsp;AGD różnych marek, oferując profesjonalną obsługę zarówno dla&nbsp;popularnych, jak&nbsp;i&nbsp;mniej znanych producentów.<br />
          Naprawiam urządzenia marek takich jak:
        </Text>
        <Text as="ul">
          <li>
            <StyledLink to="/naprawa-telewizorow"><h3>Telewizory: </h3></StyledLink>
            Samsung, LG, Sony, Philips, Panasonic, Sharp, Toshiba,
          </li>
          <li><StyledLink to="/naprawa-pralek"><h3>Pralki: </h3></StyledLink>Bosch, Siemens, Whirlpool, Electrolux, Beko, Amica, Candy,</li>
          <li><StyledLink to="/naprawa-ekspresow"><h3>Ekspresy do kawy: </h3></StyledLink>De’Longhi, Saeco, Jura, Krups, Nivona, Siemens, Philips,</li>
          <li><StyledLink to="/naprawa-zmywarek"><h3>Zmywarki: </h3></StyledLink>Bosch, Siemens, Whirlpool, Beko, Electrolux, Amica, Miele,</li>
        </Text>
        <Text>
          Dzięki doświadczeniu oraz dostępowi do&nbsp;oryginalnych części zamiennych, możesz mieć pewność, że&nbsp;Twoje urządzenie zostanie naprawione szybko i&nbsp;solidnie.
        </Text>
        <br />
        <br />
        <SubTitle>
          Naprawy realizuję w&nbsp;Przemyślu i&nbsp;okolicach
        </SubTitle>
        <Text>
          Działam na&nbsp;terenie Przemyśla i&nbsp;oferuję usługi również w&nbsp;pobliskich miejscowościach.
          Jeśli mieszkasz w&nbsp;jednym z&nbsp;poniższych miejsc lub w&nbsp;ich&nbsp;sąsiedztwie, chętnie przyjadę do&nbsp;Ciebie i&nbsp;naprawię Twoje urządzenie:
          Przemyśl, Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce, Żurawica.
        </Text>
        <Text>
          Zaufaj profesjonalnemu serwisowi, który codziennie dba o&nbsp;niezawodność Twoich urządzeń RTV&nbsp;i&nbsp;AGD!
        </Text>
      </Container>
    </Hero>
  );
};

export default Home;
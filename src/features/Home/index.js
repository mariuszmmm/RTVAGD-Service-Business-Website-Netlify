import {
  Hero,
  HeroContainer,
  HeroSubText,
  HeroText,
  HeroTitle,
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
  // const [isPortrait, setIsPortrait] = useState(
  //   window.innerHeight > window.innerWidth
  // );
  // const [activeScene, setActiveScene] = useState({
  //   reset: false,
  //   number: 0,
  //   content: isPortrait ? mobileScene[0] : scene[0],
  // });
  // const [show, setShow] = useState(false);
  // const [hold, setHold] = useState(false);

  // const handleResize = () => {
  //   const actualState = window.innerHeight > window.innerWidth;
  //   if (isPortrait === actualState) return;
  //   setIsPortrait(actualState);
  //   setActiveScene({
  //     ...activeScene,
  //     reset: true,
  //     number: 0,
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };

  //   // eslint-disable-next-line
  // }, [window.innerHeight, window.innerWidth]);

  // useEffect(() => {
  //   if (hold) return;
  //   let sceneNumber = activeScene.number >= 8 ? 1 : activeScene.number + 1;
  //   let isTransition = sceneNumber % 2 === 0 ? true : false;
  //   const interval = setInterval(
  //     () => {
  //       setActiveScene({
  //         reset: false,
  //         number: sceneNumber,
  //         content: isPortrait ? mobileScene[sceneNumber] : scene[sceneNumber],
  //       });
  //     },
  //     isTransition ? 3000 : 800
  //   );

  //   return () => clearInterval(interval);
  //   // eslint-disable-next-line
  // }, [activeScene, hold]);

  // useEffect(() => {
  //   setShow(true);
  // }, []);

  return (
    <Hero $show={true}>
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
        <HeroSubText 
        // $notShow={isPortrait}
        >
          {" "}
          <br />
          Z ponad 20-letnim doświadczeniem <br />w naprawie sprzętu RTV i AGD,
          <br />
          zapewniamy najwyższą jakość usług <br />
          dla naszych klientów.
        </HeroSubText>
      </HeroContainer>
      {/* <WashingMachine
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
      /> */}
      {/* <WashingMachine show={true} center={isPortrait} />
      <CoffeeMachine show={true} center={isPortrait} />
      <Dishwasher show={true} center={isPortrait} />
      <Television show={true} center={isPortrait} /> */}
    </Hero>
  );
};

import { Hero, HeroHeader, HeroText, HeroTitle, } from '../../styles/home/HomeStyled';
import { ButtonLink } from '../../components/common/ButtonLink';
import { Section } from '../../components/common/Section';
import { SubTitle } from '../../components/common/SubTitle';
import { serwis } from '../../utils/serwis';
import WashingMachine from './WashingMachine';
import CoffeeMachine from './CoffeeMachine';
import Television from './Television';
import Dishwasher from './Dishwasher';
import Dryer from './Dryer';
import CoffeeMachine_2 from './CoffeeMachine_2';
import { StyledLink } from '../../components/common/StyledLink';
import { useState, useEffect, useRef } from 'react';
import { mobileScene, scene } from "../../utils/scenes";
import MetaTags from '../../components/common/MetaTags';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import { useRouter } from 'next/router';
// import { Schema } from '../../components/common/Schema/inedx';
import Image from 'next/image';
import { imageUrls } from '../../utils/urls';
import { BackgroundImage } from '../../components/common/BackgroundImage';
import { StyledText } from '../../components/common/Text/styled';

const Home = ({ rating, ratingsTotal, reviews }) => {
  const path = useRouter().asPath;
  const [isPortrait, setIsPortrait] = useState(
    typeof window !== 'undefined' ? window.innerHeight > window.innerWidth : true
  );
  const [activeScene, setActiveScene] = useState({
    reset: true,
    number: 0,
    content: mobileScene[0],
  });
  const [hold, setHold] = useState(false);

  useEffect(() => {
    const initialIsPortrait = window.innerHeight > window.innerWidth;
    setIsPortrait(initialIsPortrait);
    setActiveScene({
      reset: false,
      number: 0,
      content: initialIsPortrait ? mobileScene[0] : scene[0],
    });

    const handleResize = () => {
      const actualState = window.innerHeight > window.innerWidth;
      if (isPortrait === actualState) return;
      setActiveScene({
        ...activeScene,
        reset: true,
        number: 0,
        content: actualState ? mobileScene[0] : scene[0],
      });
      setIsPortrait(actualState);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

    // eslint-disable-next-line
  }, [isPortrait]);

  const sceneNumberRef = useRef(activeScene.number);

  useEffect(() => {
    if (hold) return;

    const updateScene = () => {
      let sceneNumber = sceneNumberRef.current >= 12 ? 1 : sceneNumberRef.current + 1;
      setActiveScene({
        reset: false,
        number: sceneNumber,
        content: isPortrait ? mobileScene[sceneNumber] : scene[sceneNumber],
      });
      sceneNumberRef.current = sceneNumber;

      const intervalDuration = sceneNumber % 2 !== 0 ? 3000 : 800;
      clearInterval(interval);
      interval = setInterval(updateScene, intervalDuration);
    };

    let interval = setInterval(updateScene, 300);

    return () => clearInterval(interval);
  }, [hold, isPortrait]);

  return (
    <>
      <MetaTags
        path={path}
        page={dataForMetaTags.home}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />
      <Hero>
        {/* <BackgroundImage>
        <Image
          src={imageUrls.serwis}
          alt="Background image"
          loading="lazy"
          fill
        />
      </BackgroundImage> */}
        <HeroHeader >
          <HeroTitle
            lang="pl"
          // aria-label="Naprawa i serwis pralek, suszarek, zmywarek, telewizorów i ekspresów do kawy w Przemyślu"
          >
            Naprawa RTV-AGD Przemyśl<br /> Profesjonalny serwis pralek, suszarek, zmywarek,<br /> telewizórów i ekspresów do kawy
            {/* Naprawa i serwis<br />
            <StyledLink
              href="/naprawa-pralek"
              title='Naprawa pralek w Przemyślu'
              $standardText
            >
              pralek
            </StyledLink>
            {", "}
            <StyledLink
              href="/naprawa-suszarek"
              title='Naprawa suszarek w Przemyślu'
              $standardText
            >
              suszarek
            </StyledLink>
            {", "}
            <StyledLink
              href="/naprawa-zmywarek"
              title='Naprawa zmywarek w Przemyślu'
              $standardText
            >
              zmywarek
            </StyledLink>
            {", "}<br />
            <StyledLink
              href="/naprawa-telewizorow"
              title='Naprawa telewizorów w Przemyślu'
              $standardText
            >
              telewizorów
            </StyledLink>
            {" i "}
            <StyledLink
              href="/naprawa-ekspresow"
              title='Naprawa ekspresów w Przemyślu'
              $standardText
            >
              ekspresów do&nbsp;kawy
            </StyledLink><br />
            w&nbsp;Przemyślu */}
          </HeroTitle>
          <HeroText> Rzetelnie, szybko i&nbsp;skutecznie!</HeroText>
          <ButtonLink href={`tel:${serwis.phone.number}`} title='Serwis RTV i AGD w Przemyślu' $hero>
            Zadzwoń teraz
          </ButtonLink>


          {!activeScene.reset && <WashingMachine
            show={activeScene.content[0]}
            setHold={setHold}
            left
          />}
          {!activeScene.reset && <Television
            show={activeScene.content[1]}
            setHold={setHold}
            left
          />}
          {!activeScene.reset && <Dryer
            show={activeScene.content[2]}
            setHold={setHold}
            left
          />}
          {!activeScene.reset && <CoffeeMachine
            show={activeScene.content[3]}
            setHold={setHold}
          />}
          {!activeScene.reset && <Dishwasher
            show={activeScene.content[4]}
            setHold={setHold}
          />}
          {!activeScene.reset && <CoffeeMachine_2
            show={activeScene.content[5]}
            setHold={setHold}
          />}
        </HeroHeader>

        <Section>
          <SubTitle lang="pl">
            Serwisuję wszystkie marki telewizorów, pralek, suszarek, zmywarek i&nbsp;ekspresów&nbsp;do&nbsp;kawy
          </SubTitle>
          <StyledText>
            Specjalizuję się w naprawie urządzeń RTV i AGD różnych marek, oferując profesjonalną obsługę zarówno dla popularnych, jak i mniej znanych producentów.<br />
            Naprawiam urządzenia marek takich jak:
          </StyledText>
          <StyledText as="ul">
            <li>
              <StyledLink
                href="/naprawa-pralek"
                title='Naprawa pralek w Przemyślu'
              >
                <h3>Pralki: </h3>
              </StyledLink>
              {/* <Schema page={dataForMetaTags.naprawa_pralek} /> */}
              Bosch, Siemens, LG, Samsung, Whirlpool, Electrolux, Miele, Beko, AEG, Candy
            </li>
            <li>
              <StyledLink
                href="/naprawa-suszarek"
                title='Naprawa suszarek w Przemyślu'
              >
                <h3>Suszarki: </h3>
              </StyledLink>
              {/* <Schema page={dataForMetaTags.naprawa_suszarek} /> */}
              Bosch, Siemens, Whirlpool, Electrolux, Beko, Miele, Samsung, AEG, Candy, Amica
            </li>
            <li>
              <StyledLink
                href="/naprawa-zmywarek"
                title='Naprawa zmywarek w Przemyślu'
              >
                <h3>Zmywarki: </h3>
              </StyledLink>
              {/* <Schema page={dataForMetaTags.naprawa_zmywarek} /> */}
              Bosch, Siemens, Whirlpool, Electrolux, Beko, Miele, Samsung, AEG, Candy, Amica
            </li>
            <li>
              <StyledLink
                href="/naprawa-telewizorow"
                title='Naprawa telewizorów w Przemyślu'
              >
                <h3>Telewizory: </h3>
              </StyledLink>
              {/* <Schema page={dataForMetaTags.naprawa_telewizorow} /> */}
              LG, Samsung, Sony, Philips, Panasonic, TCL, Sharp, Hisense, Grundig, JVC
            </li>
            <li>
              <StyledLink
                href="/naprawa-ekspresow"
                title='Naprawa ekspresów do kawy w Przemyślu'
              >
                <h3>Ekspresy do kawy: </h3>
              </StyledLink>
              {/* <Schema page={dataForMetaTags.naprawa_ekspresow} /> */}
              De’Longhi, Jura, Siemens, Bosch, Philips, Nivona, Krups, Melitta, Smeg, Miele
            </li>
          </StyledText>
          <StyledText>
            Dzięki doświadczeniu oraz dostępowi do oryginalnych części zamiennych, możesz mieć pewność, że Twoje urządzenie zostanie naprawione szybko i solidnie.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Naprawy realizuję w&nbsp;Przemyślu i&nbsp;okolicach</SubTitle>
          <StyledText>
            Działam na terenie Przemyśla i oferuję usługi również w pobliskich miejscowościach. Jeśli mieszkasz w jednym z poniższych miejsc lub w ich sąsiedztwie, chętnie przyjadę do Ciebie i naprawię Twoje urządzenie: Przemyśl, Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce, Żurawica.
          </StyledText>
        </Section>

        <Section>
          <HeroText><b>Zaufaj profesjonalnemu serwisowi, który codziennie dba o niezawodność Twoich urządzeń.</b></HeroText>
        </Section>

      </Hero>
    </>
  );
};

export default Home;
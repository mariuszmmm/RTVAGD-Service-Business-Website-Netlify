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
import { appUrls } from '../../utils/urls';
import { StyledText } from '../../components/common/Text/styled';
import { getData } from '../../utils/getData';

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
        <HeroHeader >
          <HeroTitle lang="pl">
            Profesjonalny serwis RTV-AGD w Przemyślu
          </HeroTitle>
          <HeroText> Rzetelnie, szybko i&nbsp;skutecznie!</HeroText>
          <ButtonLink
            href={`tel:${serwis.phone.number}`}
            title='Serwis RTV i AGD w Przemyślu'
            $hero
          >
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
            Specjalizuję się w naprawie urządzeń RTV i AGD różnych marek, oferując profesjonalną obsługę zarówno dla popularnych, jak i mniej znanych producentów.<br />
            Naprawiam:
          </SubTitle>
          <StyledText as="ul">
            <li>
              <StyledLink
                href={appUrls.naprawa_pralek}
                title='Naprawa pralek w Przemyślu'
              >
                <strong>Pralki: </strong>
              </StyledLink>
              Bosch, Siemens, LG, Samsung, Whirlpool, Electrolux, Miele, Beko
            </li>
            <li>
              <StyledLink
                href={appUrls.naprawa_suszarek}
                title='Naprawa suszarek w Przemyślu'
              >
                <strong>Suszarki: </strong>
              </StyledLink>
              Bosch, Siemens, Whirlpool, Electrolux, Beko, Miele, Samsung
            </li>
            <li>
              <StyledLink
                href={appUrls.naprawa_zmywarek}
                title='Naprawa zmywarek w Przemyślu'
              >
                <strong>Zmywarki: </strong>
              </StyledLink>
              Bosch, Siemens, Whirlpool, Electrolux, Beko,  Samsung, AEG
            </li>
            <li>
              <StyledLink
                href={appUrls.naprawa_telewizorow}
                title='Naprawa telewizorów w Przemyślu'
              >
                <strong>Telewizory: </strong>
              </StyledLink>
              LG, Samsung, Sony, Philips, Panasonic, TCL, Sharp, JVC
            </li>
            <li>
              <StyledLink
                href={appUrls.naprawa_ekspresow}
                title='Naprawa ekspresów do kawy w Przemyślu'
              >
                <strong>Ekspresy do kawy: </strong>
              </StyledLink>
              De’Longhi, Jura, Siemens, Bosch, Philips, Krups
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
          <HeroText>
            <strong>
              Zaufaj profesjonalnemu serwisowi, który codziennie dba o niezawodność Twoich urządzeń.
            </strong>
          </HeroText>
        </Section>

      </Hero>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getData();

  return { props: data };
};

export default Home;
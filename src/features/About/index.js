import { AboutContainer, AboutSection, AboutText, AboutTitle } from "./styled";
import { TeamImage } from "../../common/TeamImage";
import team from "../../assets/images/serwis.webp";
import { useEffect, useState } from "react";
import { HelmetForAbout } from "./HelmetForAbout";

export const About = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <AboutSection $show={show}>
      {/* <HelmetForAbout /> */}
      <AboutContainer>
        <AboutTitle>Kim jestem</AboutTitle>
        <main>
          <AboutText>
            Jestem specjalistą z&nbsp;wieloletnim doświadczeniem w&nbsp;naprawie
            pralek automatycznych, zmywarek, telewizorów i&nbsp;ekspresów
            do&nbsp;kawy. Podchodzę do&nbsp;każdej naprawy z&nbsp;pełnym
            zaangażowaniem i&nbsp;pasją. Moim celem jest zapewnienie najwyższej
            jakości usług oraz&nbsp;pełnej satysfakcji klientów. Dzięki
            indywidualnemu podejściu do&nbsp;każdego zlecenia, mogę skupić się
            na&nbsp;szczegółach i&nbsp;dostarczać rozwiązania dopasowane
            do&nbsp;specyficznych potrzeb każdego klienta. Wierzę, że&nbsp;każda
            naprawa to&nbsp;nie tylko techniczne wyzwanie, ale&nbsp;również
            szansa na&nbsp;budowanie trwałych relacji z&nbsp;klientami, którzy
            mogą liczyć na&nbsp;rzetelność, terminowość i&nbsp;uczciwość.
            Zachęcam do&nbsp;skorzystania z&nbsp;moich
            usług&nbsp;–&nbsp;gwarantuję, że&nbsp;Twoja pralka lub&nbsp;ekspres
            do&nbsp;kawy będzie działać jak&nbsp;nowy!
          </AboutText>
          <TeamImage src={team} alt="serwis" />
        </main>
      </AboutContainer>
    </AboutSection>
  );
};

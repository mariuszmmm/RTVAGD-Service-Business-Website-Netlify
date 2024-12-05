import { Section } from '../../components/common/Section';
import { Container } from '../../components/common/Container';
import { Title } from '../../components/common/Title';
import { Text } from '../../components/common/Text';
import { TeamImage } from '../../components/common/TeamImage';
import { imageUrls } from '../../utils/urls';
import AboutMetaTags from "./AboutMetaTags"
import { getSharedStaticProps } from '../../utils/getSharedStaticProps';

const About = () => (
  <Section >
    <AboutMetaTags />
    <Container>
      <Title>Kim jestem</Title>
      <main>
        <Text>
          Jestem specjalistą z&nbsp;wieloletnim doświadczeniem w&nbsp;naprawie pralek, zmywarek, telewizorów oraz ekspresów do&nbsp;kawy.
          Każda naprawa to&nbsp;dla&nbsp;mnie nie&nbsp;tylko techniczne zadanie, ale&nbsp;również okazja do&nbsp;budowanie zaufania i&nbsp;dobrych relacji z&nbsp;klientami.
          Wykonuję swoją pracę z&nbsp;pełnym zaangażowaniem i&nbsp;pasją, dążąc do&nbsp;tego, aby&nbsp;każdy klient był w&nbsp;pełni zadowolony z&nbsp;jakości usług.
        </Text>
        <Text>
          Stawiam na indywidualne podejście, co&nbsp;pozwala mi&nbsp;dostosować naprawę do&nbsp;specyficznych potrzeb każdego urządzenia oraz&nbsp;oczekiwań klienta.
          W&nbsp;mojej pracy gwarantuję rzetelność, terminowość oraz&nbsp;uczciwość.
        </Text>
        <Text>
          Skorzystaj z&nbsp;moich usług, a&nbsp;Twoje urządzenia odzyskają swoją sprawność!
        </Text>
        <TeamImage src={imageUrls.serwis} alt="serwis" loading='lazy' />
      </main>
    </Container>
  </Section>
);

export const getStaticProps = getSharedStaticProps;

export default About;
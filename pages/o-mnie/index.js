import { Container } from '../../components/common/Container';
import { Section } from '../../components/common/Section';
import { Title } from '../../components/common/Title';
import { Text } from '../../components/common/Text';
import { Team, TeamImage } from '../../components/common/TeamImage';
import { imageUrls } from '../../utils/urls';
import MetaTags from '../../components/common/MetaTags';
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import Image from 'next/image';
import { getData } from '../../utils/getData';

const About = ({ rating, ratingsTotal }) => {
  const path = useRouter().asPath;

  return (

    <>
      <MetaTags
        path={path}
        page={dataForMetaTags.o_mnie}
        rating={rating}
        ratingsTotal={ratingsTotal}
      />
      <Container >

        <Section>
          <Title>Kim jestem</Title>
          <div>
            <Text>
              Jestem specjalistą z wieloletnim doświadczeniem w naprawie pralek, suszarek, zmywarek, telewizorów oraz ekspresów do kawy.
              Każda naprawa to dla mnie nie tylko techniczne zadanie, ale również okazja do budowanie zaufania i dobrych relacji z klientami.
              Wykonuję swoją pracę z pełnym zaangażowaniem i pasją, dążąc do tego, aby każdy klient był w pełni zadowolony z jakości usług.
            </Text>
            <Text>
              Stawiam na indywidualne podejście, co pozwala mi dostosować naprawę do specyficznych potrzeb każdego urządzenia oraz oczekiwań klienta.
              W mojej pracy gwarantuję rzetelność, terminowość oraz uczciwość.
            </Text>
            <Text>
              Skorzystaj z moich usług, a Twoje urządzenia odzyskają swoją sprawność!
            </Text>
            <Team>
              <Image
                src={imageUrls.serwis_1}
                alt="serwis"
                loading='lazy'
                fill
              />
            </Team>
          </div>
        </Section>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getData();

  return { props: data };
};

export default About;
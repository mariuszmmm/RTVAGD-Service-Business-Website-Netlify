import { Section } from '../../components/common/Section';
import { Container } from '../../components/common/Container';
import { Title } from '../../components/common/Title';
import { ServiceItem, Photo } from '../../styles/naprawa-telewizorow/NaprawaTelewizorowStyled';
import { SubTitle } from '../../components/common/SubTitle';
import { Text } from '../../components/common/Text';
import { imageUrls } from '../../utils/urls';
import TelevisionServiceMetaTags from "./TelevisionServiceMetaTags"
import { getSharedStaticProps } from '../../utils/getSharedStaticProps';
import { Emoticon } from '../../components/common/Emoticon';

const TelevisionService = () => (
  <Section>
    <TelevisionServiceMetaTags />
    <Container>
      <Title>
        <span>✔ </span>Naprawa telewizorów
        <Emoticon
          src={imageUrls.emoticon}
          alt="emoticon"
          loading="lazy"
        />
      </Title>
      <main>
        <ServiceItem>
          <SubTitle>Fachowa naprawa telewizorów wszystkich typów i&nbsp;marek.</SubTitle>
          <Photo src={imageUrls.telewizor} alt="naprawa telewizorow" loading='lazy' />
          <Text>
            Czy Twój telewizor przestał działać? Niezależnie od&nbsp;tego, czy&nbsp;to&nbsp;brak&nbsp;obrazu, brak&nbsp;dźwięku, problemy z&nbsp;zasilaniem czy&nbsp;uszkodzone matryca -&nbsp;jestem tutaj, aby&nbsp;przywrócić Twój telewizor do&nbsp;pełnej sprawności.
            Specjalizuję&nbsp;się w&nbsp;naprawach zarówno tradycyjnych, jak i&nbsp;nowoczesnych modeli, oferując szybką i&nbsp;profesjonalną obsługę.
            <br />
            Dzięki dostępowi do&nbsp;oryginalnych części zamiennych oraz&nbsp;nowoczesnemu sprzętowi diagnostycznemu, potrafię szybko zidentyfikować i&nbsp;skutecznie usunąć usterki.
            Moim celem jest, abyś mógł cieszyć się ulubionymi programami bez zakłóceń.
          </Text>
        </ServiceItem>
        <SubTitle as="h3">Dlaczego warto skorzystać z&nbsp;moich usług?</SubTitle>
        <Text as="ul">
          <li><h3>Szybka diagnoza: </h3>Zidentyfikuję problem w&nbsp;krótkim czasie, abyś jak najszybciej mógł wrócić do oglądania ulubionych filmów i&nbsp;programów.</li>
          <li><h3>Wysoka jakość naprawy: </h3>Używam tylko oryginalnych części, co zapewnia długotrwałą sprawność Twojego telewizora.</li>
          <li><h3>Zadowolenie klientów: </h3>Klienci doceniają moją rzetelność, terminowość i&nbsp;jakość świadczonych usług, co potwierdzają pozytywne opinie.</li>
          <li><h3>Elastyczność: </h3>Oferuję naprawy w warsztacie oraz dojazd do&nbsp;klienta w&nbsp;dogodnych godzinach.</li>
        </Text>
        <Text>
          Nie pozwól, aby&nbsp;zepsuty telewizor przeszkodził&nbsp;Ci w&nbsp;oglądaniu ulubionych programów. Skontaktuj&nbsp;się ze&nbsp;mną już&nbsp;dziś, a&nbsp;szybko przywrócę Twój telewizor do&nbsp;życia!
        </Text>
      </main>
    </Container>
  </Section>
);

export const getStaticProps = getSharedStaticProps;

export default TelevisionService;
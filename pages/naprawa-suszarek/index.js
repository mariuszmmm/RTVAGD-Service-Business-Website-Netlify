import { Section } from '../../components/common/Section';
import { Container } from '../../components/common/Container';
import { Title } from '../../components/common/Title';
import { ServiceItem, Photo } from '../../styles/naprawa-suszarek/NaprawaSuszarekStyled';
import { SubTitle } from '../../components/common/SubTitle';
import { Text } from '../../components/common/Text';
import { imageUrls } from '../../utils/urls';
import DryerServiceMetaTags from "./DryerServiceMetaTags"
import { getSharedStaticProps } from '../../utils/getSharedStaticProps';

const DryerService = () => (
  <Section>
    <DryerServiceMetaTags />
    <Container>
      <Title><span>✔ </span>Naprawa suszarek</Title>
      <main>
        <ServiceItem>
          <Photo src={imageUrls.suszarka} alt="naprawa suszarek" loading='lazy' />
          <SubTitle>Fachowa naprawa suszarek wszystkich marek i&nbsp;modeli</SubTitle>
          <Text>
            Czy Twoja suszarka do&nbsp;prania przestała działać? A&nbsp;może nie suszy ubrań tak skutecznie jak dawniej, wydaje dziwne dźwięki lub&nbsp;wyświetla błędy?
            Nie musisz kupować nowego urządzenia –&nbsp;jestem tutaj, aby pomóc! Specjalizuję się w&nbsp;naprawie różnego rodzaju suszarek: zarówno tych z&nbsp;pompą ciepła, jak i&nbsp;tradycyjnych modeli kondensacyjnych czy wentylacyjnych.
            Oferuję kompleksowe usługi, dzięki którym Twoja suszarka odzyska pełną funkcjonalność w&nbsp;krótkim czasie.
            <br />
            Dzięki wieloletniemu doświadczeniu oraz&nbsp;nowoczesnym narzędziom diagnostycznym szybko wykrywam usterki i&nbsp;skutecznie je&nbsp;usuwam.
            Niezależnie od&nbsp;problemu –&nbsp;czy to awaria grzałki, filtra, układu wentylacji czy elektronicznego sterowania –&nbsp;znajdę rozwiązanie, które pozwoli Ci znów cieszyć się suchymi i&nbsp;pachnącymi ubraniami.
          </Text>
        </ServiceItem>
        <SubTitle as="h3">Dlaczego warto skorzystać z&nbsp;moich usług?</SubTitle>
        <Text as="ul">
          <li><h3>Szybka diagnoza: </h3>Błyskawicznie identyfikuję przyczynę awarii, abyś mógł szybko wrócić do&nbsp;codziennych obowiązków.</li>
          <li><h3>Wysoka jakość naprawy: </h3>Korzystam wyłącznie z&nbsp;oryginalnych części zamiennych, co&nbsp;gwarantuje niezawodność i&nbsp;długotrwałą sprawność Twojej suszarki.</li>
          <li><h3>Zadowolenie klientów: </h3> Moje usługi są&nbsp;rekomendowane przez wielu zadowolonych klientów, którzy cenią rzetelność, terminowość i&nbsp;indywidualne podejście.</li>
          <li><h3>Elastyczność: </h3>Oferuję naprawy w warsztacie lub z dojazdem do klienta, w godzinach dostosowanych do Twoich potrzeb.</li>
        </Text>
        <Text>
          Nie pozwól, aby niesprawna suszarka zakłóciła Twoją codzienną rutynę. Skontaktuj się ze&nbsp;mną już dziś, a&nbsp;przywrócę Twoje urządzenie do&nbsp;pełnej sprawności –&nbsp;szybko, skutecznie i&nbsp;profesjonalnie!
        </Text>
      </main>
    </Container>
  </Section>
);

export const getStaticProps = getSharedStaticProps;

export default DryerService;
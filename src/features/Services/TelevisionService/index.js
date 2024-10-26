import { HemletForTelevisionService } from "./HemletForTelevisionService";
import { Photo, ServiceItem } from "../styled";
import { SubTitle } from "../../../common/SubTitle";
import { Text } from "../../../common/Text";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { Title } from "../../../common/Title";
import telewizor from "../../../assets/images/serwis-telewizorow.webp";

export const TelevisionService = () => (
  <Section>
    <HemletForTelevisionService />
    <Container>
      <Title><span>✔ </span>Naprawa Telewizorów</Title>
      <main>
        <ServiceItem>
          <SubTitle>Fachowa naprawa telewizorów wszystkich typów i&nbsp;marek</SubTitle>
          <Photo src={telewizor} alt="naprawa telewizorow" />
          <Text>
            Czy Twój telewizor przestał działać? Niezależnie od&nbsp;tego, czy&nbsp;to&nbsp;brak&nbsp;obrazu, brak&nbsp;dźwięku, problemy z&nbsp;zasilaniem czy&nbsp;uszkodzone matryca -&nbsp;jestem tutaj, aby&nbsp;przywrócić Twój telewizor do&nbsp;pełnej sprawności.
            Specjalizuję&nbsp;się w&nbsp;naprawach zarówno tradycyjnych, jak i&nbsp;nowoczesnych modeli, oferując szybką i&nbsp;profesjonalną obsługę.
            <br />
            Dzięki dostępowi do&nbsp;oryginalnych części zamiennych oraz&nbsp;nowoczesnemu sprzętowi diagnostycznemu, potrafię szybko zidentyfikować i&nbsp;skutecznie usunąć usterki.
            Moim celem jest, abyś mógł cieszyć się ulubionymi programami bez zakłóceń.
          </Text>
        </ServiceItem>
        <SubTitle as="h3">Dlaczego warto skorzystać z&nbsp;mojej usługi?</SubTitle>
        <Text as="ul">
          <li><strong>Szybka diagnoza: </strong>Zidentyfikuję problem w&nbsp;krótkim czasie, abyś jak najszybciej mógł wrócić do oglądania ulubionych filmów i&nbsp;programów.</li>
          <li><strong>Wysoka jakość naprawy: </strong>Używam tylko oryginalnych części, co zapewnia długotrwałą sprawność Twojego telewizora.</li>
          <li><strong>Zadowolenie klientów: </strong>Klienci doceniają moją rzetelność, terminowość i&nbsp;jakość świadczonych usług, co potwierdzają pozytywne opinie.</li>
          <li><strong>Elastyczność: </strong>Oferuję naprawy w warsztacie oraz dojazd do&nbsp;klienta w&nbsp;dogodnych godzinach.</li>
        </Text>
        <Text>
          Nie pozwól, aby&nbsp;zepsuty telewizor przeszkodził&nbsp;Ci w&nbsp;oglądaniu ulubionych programów. Skontaktuj&nbsp;się ze&nbsp;mną już&nbsp;dziś, a&nbsp;szybko przywrócę Twój telewizor do&nbsp;życia!
        </Text>
      </main>
    </Container>
  </Section>
);

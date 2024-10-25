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
      <Title><span>✔</span> Naprawa Telewizorów -&nbsp;Szybko i&nbsp;Skutecznie</Title>
      <main>
        <ServiceItem id="naprawa-telewizorów">
          <Photo src={telewizor} alt="naprawa telewizorow" />
          <Text>
            <strong>Fachowa naprawa telewizorów wszystkich typów i&nbsp;marek</strong><br />
            Czy Twój telewizor przestał działać? Niezależnie od tego, czy to brak obrazu, brak dźwięku, problemy z&nbsp;zasilaniem czy uszkodzone matryce -&nbsp;jestem tutaj, aby przywrócić Twój telewizor do pełnej sprawności.
            Specjalizuję się w naprawach zarówno tradycyjnych, jak i&nbsp;nowoczesnych modeli smart, oferując szybką i&nbsp;profesjonalną obsługę.
            <br />
            Dzięki dostępowi do oryginalnych części zamiennych oraz nowoczesnemu sprzętowi diagnostycznemu, potrafię szybko zidentyfikować i&nbsp;skutecznie usunąć usterki.
            Moim celem jest, abyś mógł cieszyć się ulubionymi programami bez zakłóceń.
          </Text>
        </ServiceItem>
        <SubTitle>Dlaczego warto skorzystać z&nbsp;mojej usługi?</SubTitle>
        <Text as="ul">
          <li><strong>Szybka Diagnoza:</strong> Zidentyfikuję problem w&nbsp;krótkim czasie, abyś jak najszybciej mógł wrócić do oglądania ulubionych filmów i&nbsp;programów.</li>
          <li><strong>Wysoka Jakość Naprawy:</strong> Używam tylko oryginalnych części, co zapewnia długotrwałą sprawność Twojego telewizora.</li>
          <li><strong>Zadowolenie Klientów:</strong> Klienci doceniają moją rzetelność, terminowość i&nbsp;jakość świadczonych usług, co potwierdzają pozytywne opinie.</li>
          <li><strong>Elastyczność:</strong> Oferuję naprawy w warsztacie oraz możliwość dojazdu do klienta w dogodnych dla Ciebie godzinach.</li>
        </Text>
        <Text>
          Nie pozwól, aby zepsuty telewizor zakłócił Twoją radość z&nbsp;oglądania. Skontaktuj się ze&nbsp;mną już dziś, a&nbsp;szybko przywrócę Twój telewizor do życia!
        </Text>
      </main>
    </Container>
  </Section>
);

import { HemletForCoffeeMachineService } from "./HemletForCoffeeMachineService";
import { Photo, ServiceItem } from "../styled";
import { SubTitle } from "../../../common/SubTitle";
import { Text } from "../../../common/Text";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { Title } from "../../../common/Title";
import ekspres from "../../../assets/images/naprawa-ekspresow.webp";

export const CoffeeMachineService = () => (
  <Section>
    <HemletForCoffeeMachineService />
    <Container>
      <Title><span>✔</span> Naprawa Ekspresów do Kawy -&nbsp;Szybko i&nbsp;Profesjonalnie</Title>
      <main>
        <ServiceItem id="naprawa-ekspresów">
          <Photo src={ekspres} alt="naprawa ekspresow" />
          <Text>
            <strong>Profesjonalna naprawa ekspresów do kawy niezależnie od marki i&nbsp;modelu</strong><br />
            Czy Twój ekspres do kawy przestał działać? A&nbsp;może nie zaparza kawy tak, jak dawniej, wyświetla błędy lub ma inne problemy? Jestem tutaj, aby Ci pomóc.
            Specjalizuję się w naprawie zarówno domowych, jak i&nbsp;profesjonalnych ekspresów do kawy, oferując precyzyjną diagnostykę oraz szybkie i&nbsp;skuteczne naprawy.
            <br />
            Moim celem jest zapewnienie Ci możliwości cieszenia się ulubioną kawą bez przerw.
            Dzięki wieloletniemu doświadczeniu oraz dostępowi do oryginalnych części zamiennych, oferuję kompleksową obsługę, dbając o&nbsp;każdy detal.
          </Text>
        </ServiceItem>
        <SubTitle>Dlaczego warto skorzystać z&nbsp;mojej usługi?</SubTitle>
        <Text as="ul">
          <li><strong>Szybka Diagnostyka:</strong> Zidentyfikuję problem w&nbsp;krótkim czasie, abyś jak najszybciej mógł wrócić do swoich codziennych rytuałów.</li>
          <li><strong>Wysoka Jakość Naprawy:</strong> Pracuję na oryginalnych częściach oraz sprawdzonych rozwiązaniach, co zapewnia długotrwałe efekty.</li>
          <li><strong>Zadowolenie Klientów:</strong> Moje usługi są rekomendowane przez wielu zadowolonych klientów, którzy wracają z kolejnymi zleceniami.
            Dbam o&nbsp;to, aby każdy klient czuł się traktowany indywidualnie.</li>
          <li><strong>Elastyczność:</strong> Oferuję naprawy zarówno w warsztacie, jak i&nbsp;możliwość dojazdu do klienta w&nbsp;dogodnych dla Ciebie godzinach.</li>
        </Text>
        <Text>
          Nie pozwól, aby uszkodzony ekspres zepsuł Twój poranek. Skontaktuj się ze&nbsp;mną już dziś, a&nbsp;szybko przywrócę pełną funkcjonalność Twojego ekspresu do kawy!
        </Text>
      </main>
    </Container>
  </Section>
);
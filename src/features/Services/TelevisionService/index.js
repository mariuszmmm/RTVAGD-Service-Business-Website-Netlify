import { HemletForTelevisionService } from "./HemletForTelevisionService";
import { Photo, ServiceItem, ServicesContainer, ServicesSection, ServicesTitle, ServiceText, ServiceTitle } from "../styled";
import telewizor from "../../../assets/images/serwis-telewizorow.webp";

export const TelevisionService = () => (
  <ServicesSection $show>
    <HemletForTelevisionService />
    <ServicesContainer>
      <ServicesTitle><span>✔</span> Naprawa telewizorów</ServicesTitle>
      <main>
        <ServiceItem id="naprawa-telewizorów">
          <Photo src={telewizor} alt="naprawa telewizorow" />
          <ServiceText>
            Oferuję fachową naprawę telewizorów wszystkich typów i&nbsp;marek, od&nbsp;tradycyjnych po&nbsp;nowoczesne modele smart.
            Niezależnie od&nbsp;problemu –&nbsp;brak obrazu, brak dźwięku, kłopoty z&nbsp;zasilaniem, uszkodzone matryce czy&nbsp;inne usterki – jestem tutaj, aby przywrócić Twój telewizor do&nbsp;pełnej sprawności.
            <br />
            Dzięki dostępowi do&nbsp;oryginalnych części zamiennych oraz nowoczesnemu sprzętowi diagnostycznemu mogę szybko i&nbsp;skutecznie zidentyfikować oraz naprawić usterki.
            Moim celem jest zapewnienie Ci precyzyjnej i&nbsp;profesjonalnej obsługi, abyś mógł cieszyć się ulubionymi programami bez&nbsp;zakłóceń.
          </ServiceText>
        </ServiceItem>
        <ServiceTitle>Dlaczego warto skorzystać z&nbsp;moich usług?</ServiceTitle>
        <ServiceText as="ul">
          <li><strong>Szybka diagnoza</strong> –&nbsp;Rozpoznam problem w&nbsp;krótkim czasie, abyś mógł wrócić do&nbsp;oglądania.</li>
          <li><strong>Wysoka jakość naprawy</strong> –&nbsp;Używam tylko oryginalnych części, co zapewnia długotrwałą sprawność urządzenia.</li>
          <li><strong>Zadowolenie klientów</strong> –&nbsp;Klienci doceniają moją rzetelność, terminowość i&nbsp;jakość świadczonych usług.</li>
          <li><strong>Elastyczność</strong> –&nbsp;Oferuję zarówno naprawy w&nbsp;warsztacie, jak i&nbsp;możliwość dojazdu do klienta.</li>
        </ServiceText>
        <ServiceText>
          Nie pozwól, aby zepsuty telewizor zepsuł Ci radość z&nbsp;oglądania ulubionych programów. Skontaktuj się ze&nbsp;mną już dziś, a&nbsp;przywrócę Twój telewizor do&nbsp;życia!
        </ServiceText>
      </main>
    </ServicesContainer>
  </ServicesSection>
);

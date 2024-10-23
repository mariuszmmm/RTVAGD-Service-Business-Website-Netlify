import { HemletForTelevisionService } from "./HemletForTelevisionService";
import { Emoticon, Photo, ServiceItem, ServicesContainer, ServicesSection, ServicesTitle, ServiceText, ServiceTitle } from "../styled";
import telewizor from "../../../assets/images/serwis-telewizorow.webp";
import emoticon from "../../../assets/images/emoticon.png"

export const TelevisionService = () => (
  <ServicesSection $show>
    <HemletForTelevisionService />
    <ServicesContainer>
      <ServicesTitle><span>✔</span> Naprawa telewizorów</ServicesTitle>
      <main>
        <ServiceItem id="naprawa-telewizorów">
          <ServiceTitle>Przywróć swoje ulubione programy do życia!</ServiceTitle>
          <Photo src={telewizor} alt="naprawa telewizorow" />
          <ServiceText>
            Oferuję fachową naprawę telewizorów wszystkich typów i marek, od tradycyjnych po nowoczesne modele smart.
            Niezależnie od problemu – brak obrazu, brak dźwięku, kłopoty z zasilaniem, uszkodzone matryce czy inne usterki – jestem tutaj, aby przywrócić Twój telewizor do pełnej sprawności.
            <br />
            Dzięki dostępowi do oryginalnych części zamiennych oraz nowoczesnemu sprzętowi diagnostycznemu mogę szybko i skutecznie zidentyfikować oraz naprawić usterki.
            Moim celem jest zapewnienie Ci precyzyjnej i profesjonalnej obsługi, abyś mógł cieszyć się ulubionymi programami bez zakłóceń.
          </ServiceText>
        </ServiceItem>
        <ServiceTitle>Dlaczego warto skorzystać z moich usług?<Emoticon src={emoticon} /></ServiceTitle>
        <ServiceText as="ul">
          <li>Szybka diagnoza – Rozpoznam problem w krótkim czasie, abyś mógł wrócić do oglądania.</li>
          <li>Wysoka jakość naprawy – Używam tylko oryginalnych części, co zapewnia długotrwałą sprawność urządzenia.</li>
          <li>Zadowolenie klientów – Klienci doceniają moją rzetelność, terminowość i jakość świadczonych usług.</li>
          <li>Elastyczność – Oferuję zarówno naprawy w warsztacie, jak i możliwość dojazdu do klienta.</li>
        </ServiceText>
        <ServiceText>
          Nie pozwól, aby zepsuty telewizor zepsuł Ci radość z oglądania ulubionych programów. Skontaktuj się ze mną już dziś, a przywrócę Twój telewizor do życia!
        </ServiceText>
      </main>
    </ServicesContainer>
  </ServicesSection>
);

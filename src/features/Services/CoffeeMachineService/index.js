import { HemletForCoffeeMachineService } from "./HemletForCoffeeMachineService";
import { Emoticon, Photo, ServiceItem, ServicesContainer, ServicesSection, ServicesTitle, ServiceText, ServiceTitle } from "../styled";
import ekspres from "../../../assets/images/naprawa-ekspresow.webp";
import emoticon from "../../../assets/images/emoticon.png"

export const CoffeeMachineService = () => (
  <ServicesSection $show>
    <HemletForCoffeeMachineService />
    <ServicesContainer>
      <ServicesTitle><span>✔</span> Naprawa ekspresów do kawy</ServicesTitle>
      <main>
        <ServiceItem id="naprawa-ekspresów">
          <ServiceTitle>Przywróć radość z parzenia kawy</ServiceTitle>
          <Photo src={ekspres} alt="naprawa ekspresow" />
          <ServiceText>
            Profesjonalna naprawa ekspresów do kawy, niezależnie od marki i modelu.
            Czy Twój ekspres do kawy przestał działać, nie zaparza kawy jak wcześniej, wyświetla błędy, czy ma inne problemy?
            Jestem tutaj, aby pomóc. Specjalizuję się w naprawie zarówno domowych, jak i profesjonalnych ekspresów do kawy, oferując precyzyjną diagnostykę i szybkie naprawy.
            <br />
            Moim celem jest, abyś mógł cieszyć się swoją ulubioną kawą bez żadnych przerw. Dzięki wieloletniemu doświadczeniu i dostępowi do oryginalnych części zamiennych, zapewniam kompleksową obsługę i dbałość o każdy detal.
          </ServiceText>
        </ServiceItem>
        <ServiceTitle>Dlaczego warto wybrać moją usługę?<Emoticon src={emoticon} /></ServiceTitle>
        <ServiceText as="ul">
          <li>Szybka diagnostyka – Zidentyfikuję problem w krótkim czasie.</li>
          <li>Wysoka jakość naprawy – Pracuję na oryginalnych częściach i sprawdzonych rozwiązaniach.</li>
          <li>Zadowolenie klientów – Moje usługi są rekomendowane przez wielu zadowolonych klientów, którzy wracają z kolejnymi zleceniami.</li>
          <li>Elastyczność – Oferuję zarówno naprawy w warsztacie, jak i możliwość dojazdu do klienta.</li>
        </ServiceText>
        <ServiceText>
          Nie pozwól, aby uszkodzony ekspres zepsuł Twój poranek. Skontaktuj się ze mną już dziś, a szybko przywrócę pełną funkcjonalność Twojego ekspresu do kawy!
        </ServiceText>
      </main>
    </ServicesContainer>
  </ServicesSection>
);
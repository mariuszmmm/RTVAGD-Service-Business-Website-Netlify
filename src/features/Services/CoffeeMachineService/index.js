import { HemletForCoffeeMachineService } from "./HemletForCoffeeMachineService";
import { Photo, ServiceItem, ServicesContainer, ServicesSection, ServicesTitle, ServiceText, ServiceTitle } from "../styled";
import ekspres from "../../../assets/images/naprawa-ekspresow.webp";

export const CoffeeMachineService = () => (
  <ServicesSection $show>
    <HemletForCoffeeMachineService />
    <ServicesContainer>
      <ServicesTitle><span>✔</span> Naprawa ekspresów do kawy</ServicesTitle>
      <main>
        <ServiceItem id="naprawa-ekspresów">
          <Photo src={ekspres} alt="naprawa ekspresow" />
          <ServiceText>
            Profesjonalna naprawa ekspresów do&nbsp;kawy, niezależnie od&nbsp;marki i&nbsp;modelu.
            Czy Twój ekspres do&nbsp;kawy przestał działać, nie&nbsp;zaparza kawy jak wcześniej, wyświetla błędy, czy ma inne problemy?
            Jestem tutaj, aby pomóc. Specjalizuję się w&nbsp;naprawie zarówno domowych, jak i&nbsp;profesjonalnych ekspresów do&nbsp;kawy, oferując precyzyjną diagnostykę i&nbsp;szybkie naprawy.
            <br />
            Moim celem jest, abyś mógł cieszyć się swoją ulubioną kawą bez żadnych przerw.
            Dzięki wieloletniemu doświadczeniu i&nbsp;dostępowi do&nbsp;oryginalnych części zamiennych, zapewniam kompleksową obsługę i&nbsp;dbałość o&nbsp;każdy detal.
          </ServiceText>
        </ServiceItem>
        <ServiceTitle>Dlaczego warto wybrać moją usługę?</ServiceTitle>
        <ServiceText as="ul">
          <li><strong>Szybka diagnostyka</strong> – Zidentyfikuję problem w krótkim czasie.</li>
          <li><strong>Wysoka jakość naprawy</strong> – Pracuję na oryginalnych częściach i&nbsp;sprawdzonych rozwiązaniach.</li>
          <li><strong>Zadowolenie klientów</strong> – Moje usługi są rekomendowane przez wielu zadowolonych klientów, którzy wracają z&nbsp;kolejnymi zleceniami.</li>
          <li><strong>Elastyczność</strong> – Oferuję zarówno naprawy w&nbsp;warsztacie, jak i&nbsp;możliwość dojazdu do&nbsp;klienta.</li>
        </ServiceText>
        <ServiceText>
          Nie pozwól, aby uszkodzony ekspres zepsuł Twój poranek. Skontaktuj się ze&nbsp;mną już dziś, a&nbsp;szybko przywrócę pełną funkcjonalność Twojego ekspresu do&nbsp;kawy!
        </ServiceText>
      </main>
    </ServicesContainer>
  </ServicesSection>
);
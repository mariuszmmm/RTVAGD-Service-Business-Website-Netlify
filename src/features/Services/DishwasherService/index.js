import { HemletForDishwasherService } from "./HemletForDishwasherService";
import { Emoticon, Photo, ServiceItem, ServicesContainer, ServicesSection, ServicesTitle, ServiceText, ServiceTitle } from "../styled";
import zmywarka from "../../../assets/images/serwis-zmywarek.webp";
import emoticon from "../../../assets/images/emoticon.png"

export const DishwasherService = () => (
  <ServicesSection $show>
    <HemletForDishwasherService />
    <ServicesContainer>
      <ServicesTitle><span>✔</span> Naprawa zmywarek</ServicesTitle>
      <main>
        <ServiceItem id="naprawa-zmywarek">
          <ServiceTitle>Przywróć sprawność swojej zmywarki!</ServiceTitle>
          <Photo src={zmywarka} alt="naprawa zmywarek" />
          <ServiceText>
            Specjalistyczna naprawa zmywarek różnych marek, gwarantująca ich długotrwałe i efektywne działanie.
            Problemy takie jak brak podgrzewania wody, wycieki, problemy z pompą czy trudności w suszeniu naczyń to tylko niektóre z usterek, które naprawiam.
            Oferuję szybkie i skuteczne usługi naprawcze, zapewniając, że Twoja zmywarka będzie działać jak nowa.
            <br />
            Dzięki regularnym szkoleniom i aktualizacji wiedzy jestem na bieżąco z najnowszymi technologiami i metodami napraw, co pozwala mi skutecznie rozwiązywać nawet najbardziej skomplikowane problemy.
          </ServiceText>
        </ServiceItem>
        <ServiceTitle>Dlaczego warto skorzystać z moich usług?<Emoticon src={emoticon} /></ServiceTitle>
        <ServiceText as="ul">
          <li>Szybka reakcja – Zgłoś usterkę, a ja szybko zajmę się naprawą.</li>
          <li>Wysoka jakość – Używam tylko sprawdzonych części zamiennych i najnowszych technologii.</li>
          <li>Zadowolenie klientów – Moje usługi cieszą się zaufaniem i pozytywnymi opiniami klientów.</li>
          <li>Elastyczność – Oferuję naprawy w warsztacie oraz dojazd do klienta.</li>
        </ServiceText>
        <ServiceText>
          Nie pozwól, aby zepsuta zmywarka skomplikowała Twoje życie. Skontaktuj się ze mną już dziś, a przywrócę jej pełną sprawność!
        </ServiceText>
      </main>
    </ServicesContainer>
  </ServicesSection>
);

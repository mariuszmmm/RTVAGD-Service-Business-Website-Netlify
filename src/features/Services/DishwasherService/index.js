import { HemletForDishwasherService } from "./HemletForDishwasherService";
import { Photo, ServiceItem, ServicesContainer, ServicesSection, ServicesTitle, ServiceText, ServiceTitle } from "../styled";
import zmywarka from "../../../assets/images/serwis-zmywarek.webp";

export const DishwasherService = () => (
  <ServicesSection $show>
    <HemletForDishwasherService />
    <ServicesContainer>
      <ServicesTitle><span>✔</span> Naprawa zmywarek</ServicesTitle>
      <main>
        <ServiceItem id="naprawa-zmywarek">
          <Photo src={zmywarka} alt="naprawa zmywarek" />
          <ServiceText>
            Specjalistyczna naprawa zmywarek różnych marek, gwarantująca ich długotrwałe i&nbsp;efektywne działanie.
            Problemy takie jak brak podgrzewania wody, wycieki, problemy z&nbsp;pompą czy trudności w&nbsp;suszeniu naczyń to&nbsp;tylko niektóre z&nbsp;usterek, które naprawiam.
            Oferuję szybkie i&nbsp;skuteczne usługi naprawcze, zapewniając, że&nbsp;Twoja zmywarka będzie działać jak&nbsp;nowa.
            <br />
            Dzięki regularnym szkoleniom i&nbsp;aktualizacji wiedzy jestem na&nbsp;bieżąco z&nbsp;najnowszymi technologiami i&nbsp;metodami napraw, co&nbsp;pozwala mi skutecznie rozwiązywać nawet najbardziej skomplikowane problemy.
          </ServiceText>
        </ServiceItem>
        <ServiceTitle>Dlaczego warto skorzystać z&nbsp;moich usług?</ServiceTitle>
        <ServiceText as="ul">
          <li><strong>Szybka reakcja</strong> –&nbsp;Zgłoś usterkę, a&nbsp;ja szybko zajmę się naprawą.</li>
          <li><strong>Wysoka jakość</strong> –&nbsp;Używam tylko sprawdzonych części zamiennych i&nbsp;najnowszych technologii.</li>
          <li><strong>Zadowolenie klientów</strong> –&nbsp;Moje usługi cieszą się zaufaniem i&nbsp;pozytywnymi opiniami klientów.</li>
          <li><strong>Elastyczność</strong> –&nbsp;Oferuję naprawy w&nbsp;warsztacie oraz dojazd do&nbsp;klienta.</li>
        </ServiceText>
        <ServiceText>
          Nie pozwól, aby zepsuta zmywarka skomplikowała Twoje życie. Skontaktuj się ze&nbsp;mną już dziś, a&nbsp;przywrócę jej pełną sprawność!
        </ServiceText>
      </main>
    </ServicesContainer>
  </ServicesSection>
);

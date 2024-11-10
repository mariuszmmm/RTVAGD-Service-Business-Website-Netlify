import { HemletForDishwasherService } from "./HemletForDishwasherService";
import { Photo, ServiceItem } from "../styled";
import { SubTitle } from "../../../common/SubTitle";
import { Text } from "../../../common/Text";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { Title } from "../../../common/Title";
import { imageUrls } from "../../../utils/urls";

export const DishwasherService = () => (
  <Section>
    <HemletForDishwasherService />
    <Container>
      <Title><span>✔ </span>Naprawa Zmywarek</Title>
      <main>
        <ServiceItem >
          <Photo src={imageUrls.zmywarka} alt="naprawa zmywarek" />
          <SubTitle>Specjalistyczna naprawa zmywarek różnych marek</SubTitle>
          <Text>
            Zmywarka to jedno z&nbsp;najważniejszych urządzeń w&nbsp;każdej kuchni,
            a&nbsp;jej awaria może znacząco utrudnić codzienne życie.
            Oferuję kompleksowe usługi naprawcze, które przywrócą pełną sprawność Twojego sprzętu.
            Rozwiązuję problemy takie jak&nbsp;brak podgrzewania wody, wycieki, usterki pompy czy&nbsp;trudności w&nbsp;suszeniu naczyń.
            <br />
            Dzięki nowoczesnym narzędziom diagnostycznym oraz&nbsp;oryginalnym częściom zamiennym zapewniam trwałość i&nbsp;niezawodność każdej naprawy.
            Moje doświadczenie oraz zaawansowane techniki naprawcze pozwalają&nbsp;mi przywrócić pełną funkcjonalność Twojej zmywarki w&nbsp;możliwie najkrótszym czasie.
          </Text>
        </ServiceItem>
        <SubTitle as="h3">Dlaczego warto wybrać moją ofertę?</SubTitle>
        <Text as="ul">
          <li><strong>Szybka reakcja: </strong>Zgłoś usterkę, a&nbsp;natychmiast zajmę się jej naprawą, ponieważ rozumiem, jak ważna jest dla Ciebie wygoda.</li>
          <li><strong>Wysoka jakość usług: </strong>Używam wyłącznie sprawdzonych części zamiennych oraz nowoczesnych technologii, co zapewnia długotrwałe efekty naprawy.</li>
          <li><strong>Elastyczność: </strong>Oferuję zarówno naprawy w warsztacie, jak i&nbsp;dojazd do klienta, co pozwala dostosować usługi do Twoich potrzeb.</li>
          <li><strong>Zadowolenie klientów: </strong>Moje usługi cieszą się zaufaniem i&nbsp;pozytywnymi opiniami. Każde zlecenie traktuję indywidualnie, dbając o&nbsp;najwyższą jakość.</li>
        </Text>
        <Text>
          Nie pozwól, aby awaria zmywarki utrudniała Ci codzienne obowiązki. Skontaktuj się ze&nbsp;mną już dziś, a&nbsp;przywrócę pełną sprawność Twojego urządzenia.
        </Text>
      </main>
    </Container>
  </Section>
);

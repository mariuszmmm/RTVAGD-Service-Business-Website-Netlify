import { HemletForDishwasherService } from "./HemletForDishwasherService";
import { Photo, ServiceItem } from "../styled";
import { SubTitle } from "../../../common/SubTitle";
import { Text } from "../../../common/Text";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { Title } from "../../../common/Title";
import zmywarka from "../../../assets/images/serwis-zmywarek.webp";

export const DishwasherService = () => (
  <Section>
    <HemletForDishwasherService />
    <Container>
      <Title><span>✔</span> Naprawa zmywarek -&nbsp;Szybko i&nbsp;Skutecznie</Title>
      <main>
        <ServiceItem id="naprawa-zmywarek">
          <Photo src={zmywarka} alt="naprawa zmywarek" />
          <Text>
            <strong>Specjalistyczna naprawa zmywarek różnych marek</strong><br />
            Zmywarka to jedno z&nbsp;najważniejszych urządzeń w&nbsp;każdej kuchni,
            a&nbsp;jej awaria może znacząco utrudnić codzienne życie.
            Oferuję kompleksowe usługi naprawcze, które przywrócą pełną sprawność Twojego sprzętu.
            Radzę sobie z&nbsp;takimi problemami, jak brak podgrzewania wody, wycieki, usterki pompy czy trudności w&nbsp;suszeniu naczyń.
          </Text>
        </ServiceItem>
        <SubTitle>Dlaczego warto wybrać moją ofertę?</SubTitle>
        <Text as="ul">
          <li><strong>Szybka Reakcja:</strong> Zgłoś usterkę, a&nbsp;ja natychmiast zajmę się jej naprawą. Zrozumienie, jak ważna jest dla Ciebie wygoda, motywuje mnie do działania.</li>
          <li><strong>Wysoka Jakość Usług:</strong> Używam tylko sprawdzonych części zamiennych oraz nowoczesnych technologii, co gwarantuje długotrwałe efekty napraw</li>
          <li><strong>Elastyczność:</strong> Oferuję zarówno naprawy w warsztacie, jak i&nbsp;dojazd do klienta, co pozwala dostosować usługi do Twoich potrzeb.</li>
          <li><strong>Zadowolenie Klientów:</strong> Moje usługi cieszą się zaufaniem i&nbsp;pozytywnymi opiniami. Każde zlecenie traktuję indywidualnie, dbając o&nbsp;najwyższą jakość wykonania..</li>
        </Text>
        <Text>
          Nie pozwól, aby awaria zmywarki skomplikowała Twoje życie. Skontaktuj się ze&nbsp;mną już dziś, a&nbsp;przywrócę sprawność Twojego urządzenia, zapewniając Ci wygodę i&nbsp;spokój ducha.
        </Text>
      </main>
    </Container>
  </Section>
);

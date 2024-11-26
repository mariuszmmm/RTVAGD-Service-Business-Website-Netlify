import { Section } from '.././../components/common/Section';
import { Container } from '.././../components/common/Container';
import { Title } from '.././../components/common/Title';
import { ServiceItem, Photo } from '../../styles/naprawa-zmywarek/NaprawaZmywarekStyled';
import { SubTitle } from '.././../components/common/SubTitle';
import { Text } from '.././../components/common/Text';
import { imageUrls } from '.././../utils/urls';
import DishwasherServiceMetaTags from './DishwasherServiceMetaTags';

const DishwasherService = () => (
  <Section>
    <DishwasherServiceMetaTags />
    <Container>
      <Title><span>✔ </span>Naprawa zmywarek</Title>
      <main>
        <ServiceItem >
          <Photo src={imageUrls.zmywarka} alt="naprawa zmywarek" loading='lazy' />
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
        <SubTitle as="h3">Dlaczego warto skorzystać z&nbsp;moich usług?</SubTitle>
        <Text as="ul">
          <li><h3>Szybka reakcja: </h3>Zgłoś usterkę, a&nbsp;natychmiast zajmę się jej naprawą, ponieważ rozumiem, jak ważna jest dla Ciebie wygoda.</li>
          <li><h3>Wysoka jakość usług: </h3>Używam wyłącznie sprawdzonych części zamiennych oraz nowoczesnych technologii, co zapewnia długotrwałe efekty naprawy.</li>
          <li><h3>Elastyczność: </h3>Oferuję zarówno naprawy w warsztacie, jak i&nbsp;dojazd do klienta, co pozwala dostosować usługi do Twoich potrzeb.</li>
          <li><h3>Zadowolenie klientów: </h3>Moje usługi cieszą się zaufaniem i&nbsp;pozytywnymi opiniami. Każde zlecenie traktuję indywidualnie, dbając o&nbsp;najwyższą jakość.</li>
        </Text>
        <Text>
          Nie pozwól, aby awaria zmywarki utrudniała Ci codzienne obowiązki. Skontaktuj się ze&nbsp;mną już dziś, a&nbsp;przywrócę pełną sprawność Twojego urządzenia.
        </Text>
      </main>
    </Container>
  </Section>
);

export default DishwasherService;
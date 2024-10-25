import { HemletForWashingMachineService } from "./HemletForWashingMachineService";
import { Photo, ServiceItem } from "../styled";
import { SubTitle } from "../../../common/SubTitle";
import { Text } from "../../../common/Text";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { Title } from "../../../common/Title";
import pralka from "../../../assets/images/naprawa-pralki.webp";

export const WashingMachineService = () => (
  <Section>
    <HemletForWashingMachineService />
    <Container>
      <Title><span>✔</span> Naprawa Pralek -&nbsp;Szybko i&nbsp;Skutecznie</Title>
      <main>
        <ServiceItem id="naprawa-pralek">
          <Photo src={pralka} alt="naprawa pralek" />
          <Text>
            <strong>Kompleksowe usługi naprawy pralek automatycznych wszystkich marek</strong><br />
            Zepsuta pralka? Nie martw się! Oferuję fachową diagnostykę i naprawę pralek, które przestały działać.
            Bez względu na problem — czy to brak poboru wody, wycieki, usterki bębna czy dziwne dźwięki — szybko zidentyfikuję i naprawię usterkę.
            <br />
            Korzystam z nowoczesnych narzędzi diagnostycznych oraz oryginalnych części zamiennych, co zapewnia trwałość i niezawodność każdej naprawy.
            Moje doświadczenie oraz zaawansowane techniki naprawcze pozwalają mi przywrócić pełną funkcjonalność Twojej pralki w jak najkrótszym czasie.
          </Text>
        </ServiceItem>
        <SubTitle>Dlaczego warto skorzystać z&nbsp;moich usług?</SubTitle>
        <Text as="ul">
          <li><strong>Szybka Diagnoza:</strong> Zgłoś problem, a&nbsp;ja szybko ustalę, co jest przyczyną awarii, abyś mógł wrócić do swoich codziennych obowiązków.</li>
          <li><strong>Wysoka Jakość Naprawy:</strong> Używam tylko oryginalnych części, co gwarantuje długotrwałą sprawność urządzenia.</li>
          <li><strong>Zadowolenie Klientów:</strong> Cenię sobie rzetelność i&nbsp;terminowość, co przekłada się na pozytywne opinie moich klientów.</li>
          <li><strong>Elastyczność:</strong> Oferuję naprawy w warsztacie oraz dojazd do klienta w dogodnych dla Ciebie godzinach.</li>
        </Text>
        <Text>
          Nie pozwól, aby awaria pralki zakłóciła Twoją rutynę. Skontaktuj się ze&nbsp;mną już dziś, a&nbsp;szybko przywrócę jej pełną sprawność!
        </Text>
      </main>
    </Container>
  </Section>
);

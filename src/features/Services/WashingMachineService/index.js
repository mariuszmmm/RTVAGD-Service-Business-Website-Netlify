import { HemletForWashingMachineService } from "./HemletForWashingMachineService";
import { Emoticon, Photo, ServiceItem, ServicesContainer, ServicesSection, ServicesTitle, ServiceText, ServiceTitle } from "../styled";
import pralka from "../../../assets/images/naprawa-pralki.webp";
import emoticon from "../../../assets/images/emoticon.png"

export const WashingMachineService = () => (
  <ServicesSection $show>
    <HemletForWashingMachineService />
    <ServicesContainer>
      <ServicesTitle><span>✔</span> Naprawa pralek</ServicesTitle>
      <main>
        <ServiceItem id="naprawa-pralek">
          <ServiceTitle>Profesjonalna naprawa na wyciągnięcie ręki!</ServiceTitle>
          <Photo src={pralka} alt="naprawa pralek" />
          <ServiceText>
            Oferuję kompleksowe usługi naprawy pralek automatycznych wszystkich marek.
            Bez względu na to, czy Twoja pralka nie pobiera wody, wycieka, nie obraca bębna, czy wydaje dziwne dźwięki – jestem w stanie zdiagnozować i naprawić problem.
            <br />
            Korzystam z nowoczesnych narzędzi diagnostycznych oraz oryginalnych części zamiennych, co zapewnia trwałość i niezawodność wykonanej naprawy.
            Dzięki mojemu doświadczeniu i zaawansowanym technikom naprawczym, moim celem jest przywrócenie pełnej funkcjonalności Twojej pralki w jak najkrótszym czasie.
          </ServiceText>
        </ServiceItem>
        <ServiceTitle>Dlaczego warto skorzystać z moich usług?<Emoticon src={emoticon} /></ServiceTitle>
        <ServiceText as="ul">
          <li>Szybka diagnoza – Zidentyfikuję problem w krótkim czasie, abyś jak najszybciej mógł wrócić do codziennych obowiązków.</li>
          <li>Wysoka jakość naprawy – Używam tylko oryginalnych części, co zapewnia długotrwałą sprawność urządzenia.</li>
          <li>Zadowolenie klientów – Klienci cenią sobie moją rzetelność oraz terminowość.</li>
          <li>Elastyczność – Oferuję zarówno naprawy w warsztacie, jak i możliwość dojazdu do klienta.</li>
        </ServiceText>
        <ServiceText>
          Nie pozwól, aby zepsuta pralka zakłóciła Twoją rutynę. Skontaktuj się ze mną już dziś, a szybko przywrócę jej pełną sprawność!
        </ServiceText>
      </main>
    </ServicesContainer>
  </ServicesSection>
);

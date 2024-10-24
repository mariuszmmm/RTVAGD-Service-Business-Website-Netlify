import { HemletForWashingMachineService } from "./HemletForWashingMachineService";
import { Photo, ServiceItem, ServicesContainer, ServicesSection, ServicesTitle, ServiceText, ServiceTitle } from "../styled";
import pralka from "../../../assets/images/naprawa-pralki.webp";

export const WashingMachineService = () => (
  <ServicesSection $show>
    <HemletForWashingMachineService />
    <ServicesContainer>
      <ServicesTitle><span>✔</span> Naprawa pralek</ServicesTitle>
      <main>
        <ServiceItem id="naprawa-pralek">
          <Photo src={pralka} alt="naprawa pralek" />
          <ServiceText>
            Oferuję kompleksowe usługi naprawy pralek automatycznych wszystkich marek.
            Bez względu na&nbsp;to, czy Twoja pralka nie&nbsp;pobiera wody, wycieka, nie&nbsp;obraca bębna, czy wydaje dziwne dźwięki –&nbsp;jestem w&nbsp;stanie zdiagnozować i&nbsp;naprawić problem.
            <br />
            Korzystam z&nbsp;nowoczesnych narzędzi diagnostycznych oraz&nbsp;oryginalnych części zamiennych, co&nbsp;zapewnia trwałość i&nbsp;niezawodność wykonanej naprawy.
            Dzięki mojemu doświadczeniu i&nbsp;zaawansowanym technikom naprawczym, moim celem jest przywrócenie pełnej funkcjonalności Twojej pralki w&nbsp;jak&nbsp;najkrótszym czasie.
          </ServiceText>
        </ServiceItem>
        <ServiceTitle>Dlaczego warto skorzystać z&nbsp;moich usług?</ServiceTitle>
        <ServiceText as="ul">
          <li><strong>Szybka diagnoza</strong> –&nbsp;Zidentyfikuję problem w&nbsp;krótkim czasie, abyś jak&nbsp;najszybciej mógł wrócić do&nbsp;codziennych obowiązków.</li>
          <li><strong>Wysoka jakość naprawy</strong> –&nbsp;Używam tylko oryginalnych części, co&nbsp;zapewnia długotrwałą sprawność urządzenia.</li>
          <li><strong>Zadowolenie klientów</strong> –&nbsp;Klienci cenią sobie moją rzetelność oraz terminowość.</li>
          <li><strong>Elastyczność</strong> –&nbsp;Oferuję zarówno naprawy w&nbsp;warsztacie, jak i&nbsp;możliwość dojazdu do&nbsp;klienta.</li>
        </ServiceText>
        <ServiceText>
          Nie pozwól, aby&nbsp;zepsuta pralka zakłóciła Twoją rutynę. Skontaktuj się ze&nbsp;mną już dziś, a&nbsp;szybko przywrócę jej pełną sprawność!
        </ServiceText>
      </main>
    </ServicesContainer>
  </ServicesSection>
);

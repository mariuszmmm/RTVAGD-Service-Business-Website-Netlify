import { PricingTable, PricingTh } from "./styled";
import { Container } from "../../common/Container";
import { Section } from "../../common/Section";
import { Title } from "../../common/Title";
import { PricingRow } from "./PricingRow";
import { serwis } from "../../utils/serwis";
import { HemletForPricing } from "./HemletForPricing";
export const Pricing = () => (
  <Section >
    <HemletForPricing />
    <Container>
      <Title>Cennik</Title>
      <PricingTable>
        <thead>
          <tr>
            <PricingTh>Usługa</PricingTh>
            <PricingTh>Cena</PricingTh>
          </tr>
        </thead>
        <tbody>
          {serwis.pricing.map((pri, index) => (
            <PricingRow item={pri} key={index} />
          ))}
        </tbody>
      </PricingTable>
    </Container>
  </Section>
);
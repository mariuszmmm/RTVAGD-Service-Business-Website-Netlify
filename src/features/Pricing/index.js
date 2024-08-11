import {
  PricingContainer,
  PricingSection,
  PricingTable,
  PricingTh,
  PricingTitle,
} from "./styled";
import { PricingRow } from "./PricingRow";
import { serwis } from "../../utils/serwis";
import { HemletForPricing } from "./HemletForPricing";
import { useEffect, useState } from "react";
export const Pricing = () => {
  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   setShow(true);
  // }, []);

  return (
    <PricingSection $show={true}>
      <HemletForPricing />
      <PricingContainer>
        <PricingTitle>Cennik</PricingTitle>
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
      </PricingContainer>
    </PricingSection>
  );
};

import { PricingTd } from "../../../styles/cennik/PricingRow/PricingRowStyled";

const PricingRow = ({ name, price }) => (
  <tr>
    <PricingTd>{name}</PricingTd>
    <PricingTd $center>od {price} PLN</PricingTd>
  </tr>
);

export default PricingRow;
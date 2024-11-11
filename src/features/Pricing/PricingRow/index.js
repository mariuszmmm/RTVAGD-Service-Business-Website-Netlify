import { PricingTd } from "./styled";

const PricingRow = ({ item }) => {
  const { name, price } = item;

  return (
    <tr>
      <PricingTd>{name}</PricingTd>
      <PricingTd $center>od {price} PLN</PricingTd>
    </tr>
  );
};

export default PricingRow;
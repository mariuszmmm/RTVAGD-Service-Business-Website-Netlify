import styled from "styled-components";

export const PricingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  background: rgba(40, 40, 40, 0.8);
`;

export const PricingTh = styled.th`
  padding: 15px;
  background-color: ${({ theme }) => theme.color.tableHeader};
  border: 1px solid ${({ theme }) => theme.color.border};
`;

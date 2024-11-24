import styled from "styled-components";

export const PricingTd = styled.td`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.color.border};
  text-align: ${({ $center }) => ($center ? "center" : "left")};
  line-height: 1.8;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
`;

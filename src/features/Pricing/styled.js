import styled, { css } from "styled-components";

export const PricingSection = styled.section`
  padding: 100px 0;
  text-align: center;
  min-height: 100vh;  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
    `}
`;

export const PricingContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const PricingTitle = styled.h1`
  margin-bottom: 70px;
  font-size: clamp(1.5rem, 3vw, 3rem);
`;

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

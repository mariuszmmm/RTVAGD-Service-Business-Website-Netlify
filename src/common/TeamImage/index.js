import styled from "styled-components";

export const TeamImage = styled.img`
  width: 300px;
  max-width: 75vw;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 10px;
  margin: 0;
  margin-top: 30px;
`;

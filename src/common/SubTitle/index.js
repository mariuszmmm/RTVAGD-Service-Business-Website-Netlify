import styled from "styled-components";

export const SubTitle = styled.h2`
  text-align: left;
  margin-bottom: 10px;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  display: flex;
  align-items: center;
  gap: 6px;
  grid-area: header;
  
  span{
    color: ${({ theme }) => theme.color.check};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding-top: 0;
  }
`;
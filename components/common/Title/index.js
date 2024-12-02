import styled from "styled-components";

export const Title = styled.h1`
  margin: 50px 0 50px;
  font-size: clamp(1.5rem, 3vw, 3rem);
  text-align: center;

  span{
    color: ${({ theme }) => theme.color.check};
    margin-right: 15px;
  }
`;
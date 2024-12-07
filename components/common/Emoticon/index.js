import styled from "styled-components";

export const Emoticon = styled.img`
  width: clamp(2.8rem, 5vw, 4.8rem);
  height: clamp(2.8rem, 5vw, 4.8rem);
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px ;
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    opacity: 0;
  }
`;
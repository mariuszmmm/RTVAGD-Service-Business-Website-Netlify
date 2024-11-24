import styled from "styled-components";

export const Emoticon = styled.img`
  grid-area: photo;
  width: clamp(1.8rem, 4vw, 2.8rem);
  height: clamp(1.8rem, 4vw, 2.8rem);

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
  }
`;
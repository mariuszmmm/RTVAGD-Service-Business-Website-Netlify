import styled, { css } from "styled-components";

export const Text = styled.p`
  grid-area: text;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  margin: 1rem 0;
  text-align: justify;
  text-justify: inter-word;

  ${({ $forReviews }) => $forReviews && css`
    font-style: italic;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    text-align: left; 
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;
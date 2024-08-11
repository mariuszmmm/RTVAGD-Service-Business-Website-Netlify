import styled, { css } from "styled-components";

export const AboutSection = styled.section`
  padding: 100px 0;
  text-align: center;
  min-height: 100vh;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
    `}
`;

export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const AboutTitle = styled.h1`
  margin-bottom: 70px;
  font-size: clamp(1.5rem, 3vw, 3rem);
`;

export const AboutText = styled.p`
  line-height: 1.8;
  margin: 0 0 30px;
  font-size: clamp(0.7rem, 2.5vw, 1.2rem);
  text-align: justify;
`;

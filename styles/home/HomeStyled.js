import styled from "styled-components";

export const Hero = styled.main`
  text-align: center;
  padding: 160px 0 9vh;
  min-height: 100vh;  
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 120px 0 6vh;
  }
`;

export const HeroHeader = styled.header`
  max-width: 1200px;
  min-height: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  min-height: clamp(500px, 50vw, 800px);  

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 0 10px;
  }

  @media (orientation: portrait) {
    min-height: clamp(370px, 106vw, 900px);  
  }
`;

export const HeroTitle = styled.h1`
  margin: 60px 0 0;
  font-size: clamp(1.5rem, 3vw, 3rem);
  line-height: 1.2;
  padding: 0 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
  margin: 30px 0 0;
    font-size: 1.3rem;
  }
`;

export const HeroText = styled.p`
  margin: 24px 0 36px;
  font-size: clamp(0.8rem, 2.3vw, 1.3rem);
  line-height: 1.5;
  font-weight: 400;
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 20px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 16px 0;
  }
`;

export const HeroImage = styled.img`  
  width: 30vw;
  height: auto;
  max-width: 600px;

  filter: drop-shadow(10px 10px 15px rgba(40, 40, 40, 0.7))
          drop-shadow(0px 20px 30px rgba(40, 40, 40, 0.4));
  transition: transform 0.2s ease-out, filter 0.2s ease-out;

  &:hover {
    transform: scale(101%);
    filter: drop-shadow(10px 10px 15px rgba(255, 140, 0, 0.7));
  }

  @media(orientation: portrait) {
    width: clamp(30vw, 59vw, 520px);
    max-width: 520px;
  }
`;
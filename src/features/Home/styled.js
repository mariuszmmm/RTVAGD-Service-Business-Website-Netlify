import styled, { css } from "styled-components";

export const Hero = styled.section`
  text-align: center;
  padding: 100px 0 9vh;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 100px 0 6vh;
  }
`;

export const HeroContainer = styled.header`
  max-width: 1200px;
  min-height: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.big}) {
    min-height: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    min-height: 450px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    min-height: 350px;
    padding: 10px;
  }

  @media (orientation: portrait) {
    min-height: 1100px;

    @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
      min-height: 850px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      min-height: 730px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      min-height: 630px;
    }
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 50px;
  font-size: clamp(1.5rem, 3vw, 3rem);

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 10px;
    font-size: 1.3rem;
  }

  @media (orientation: portrait) {
    margin-bottom: 20px;
  }
`;

const textStyled = css`
  opacity: ${({ $notShow }) => ($notShow ? 0 : 1)};
  margin-bottom: 50px;
  font-size: clamp(0.8rem, 2.3vw, 1.3rem);
  line-height: 1.5;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 20px;
  }
`;
export const HeroText = styled.p`
  ${textStyled}
`;

export const HeroSubText = styled.p`
  ${textStyled}
  font-size: clamp(0.6rem, 1.8vw, 1.1rem);
`;

export const HeroSubTitle = styled.h2`
  padding-top: 40px;
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
    text-align: center;
    padding-top: 0;
  }
`;

export const Description = styled.p`
  grid-area: text;
  line-height: 1.8;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  text-align: justify;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    text-align: left;
  }
`;

export const Main = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 20px;
`;

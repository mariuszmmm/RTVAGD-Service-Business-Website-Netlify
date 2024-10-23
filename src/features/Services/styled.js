import styled, { css } from "styled-components";

export const ServicesSection = styled.section`
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

export const ServicesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const ServicesTitle = styled.h1`
  margin-bottom: 70px;
  font-size: clamp(1.5rem, 3vw, 3rem);

  span{
    color: ${({ theme }) => theme.color.check};
  }
`;

export const Photo = styled.img`
  width: 15vw;
  max-width: 70%;
  margin: clamp(20px, 1vw, 40px);
  margin-top: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
  }
`;

export const ServiceTitle = styled.h2`
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
  }
`;

export const Emoticon = styled.img`
  grid-area: photo;
  width: clamp(1.8rem, 4vw, 2.8rem);
  height: clamp(1.8rem, 4vw, 2.8rem);

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
  }
`;

export const ServiceText = styled.p`
  grid-area: text;
  line-height: 1.8;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  text-align: justify;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    text-align: left;
  }
`;

export const ServiceItem = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "text photo";
  margin: 0 0 100px;
  scroll-margin-top: clamp(4rem, 7vw, 5.5rem);
 
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0 0 50px;
  }
`;

import styled from "styled-components";

export const Photo = styled.img`
  grid-area: photo;
  width: 15vw;
  max-width: 70%;
  margin: clamp(20px, 1vw, 40px);
  margin-top: 50px;
  justify-self: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
  }
`;

export const ServiceItem = styled.div`
  scroll-margin-top: clamp(4rem, 7vw, 5.5rem);
  margin: 0 0 60px;
  display: grid;
  grid-template-areas:
    "header header"
    "text photo";  
 
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0 0 20px;
  }
`;
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Photo = styled.img`
  width: 15vw;
  max-width: 70%;
  margin: clamp(20px, 1vw, 40px);
  margin-top: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
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

export const ServiceItem = styled.div`
  scroll-margin-top: clamp(4rem, 7vw, 5.5rem);
  margin: 0 0 60px;
  display: grid;

  ${({ $services }) => $services ? `
    grid-template-areas:
      "header header"
      "text photo";
  ` : `
    grid-template-areas:
      "text photo";
  `}
    
 
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0 0 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.button};
  text-decoration: none;
  transition: filter  0.3s ease;
  
  &:hover {
    filter: brightness(1.2);
  }
`;

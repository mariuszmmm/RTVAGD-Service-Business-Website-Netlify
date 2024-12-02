import styled from "styled-components";

export const RatingWrapper = styled.div`
  min-width: 160px;
  background-color: white;
  position: absolute;
  top: 80px;
  left: 30px;
  color: black;
  border-radius: 7px;
  display: grid ;
  grid-template-areas: 
   "logo text"
   "logo stars";
  align-items: center;
  padding: 0 10px 0;
  transition: opacity ease-out 0.2s;
  column-gap: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    min-width: 60px;
    top: 58px;
    left: 20px;
    
  }
`;

export const Text = styled.p`
  grid-area: text;
  font-size: 0.8rem;
  font-weight: 700;
  color: black;
  width: 100%;
  margin: 10px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size:0.6rem;
    margin: 4px 0 0;

  }
`;

export const ImageWrapper = styled.div`
  grid-area: logo;
  padding: 3px;
`;
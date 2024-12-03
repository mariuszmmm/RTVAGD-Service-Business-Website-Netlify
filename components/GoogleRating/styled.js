import styled from "styled-components";

export const RatingWrapper = styled.div`
  min-width: 132px;
  min-height: 36px;
  background-color: white;
  position: absolute;
  top: 80px;
  left: 20px;
  color: black;
  border-radius: 6px;
  display: grid ;
  grid-template-areas: 
   "logo text"
   "logo stars";
  align-items: center;
  justify-items: center;
  transition: opacity ease-out 0.2s;
  padding-right: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    min-width: 100px;
    min-height: 28px;
    top: 60px;
    left: 20px;
    border-radius: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    min-width: 60px;
    min-height: 22px;
    border-radius: 2px;
    top: 56px;
  }
`;

export const Text = styled.p`
  grid-area: text;
  font-size: 0.65rem;
  font-weight: 700;
  color: black;
  width: 100%;
  margin: 2px 0 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size:0.46rem;
    margin: 4px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size:0.36rem; 
    margin: 2px 0 0;
  }
`;

export const ImageWrapper = styled.div`
  grid-area: logo;
  padding: 3px;
  display: flex;
  max-width:36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    max-width:28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    max-width:22px;
  }
`;
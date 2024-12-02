import styled, { css } from "styled-components";
import StarIcon from "../../../../public/images/star.svg";

export const StarsWrapper = styled.div`
  display: flex;
  margin-top: 15px;;
  gap: 2px;
  ${({ $center }) => $center && css`
    justify-content: center;
    width: 100px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      width: 80px;
    
    }
  `} 
`;

export const Star = styled(StarIcon)`
  width: 20px;
  height: 20px;
  margin: 0 0 8px;
  color: ${({ theme, $active }) =>
    $active ? theme.color.start_1 : theme.color.start_2};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0;
    height: 15px;
    margin-bottom: 2px;
  }
`;
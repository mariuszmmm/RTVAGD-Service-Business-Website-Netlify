import styled, { css } from "styled-components";

export const SubNavWrapper = styled.div`
  position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-70%);
    max-height: 0;
    visibility: hidden;
    overflow-x: hidden;
    z-index: 1;
    transition: max-height 0.4s ease-in-out, visibility 0.4s ease-in-out;

    ${({ $show }) => $show && css`
      transition: max-height 0s; 
      
      visibility: visible;
      max-height: 170px;  
    `}; 
`;
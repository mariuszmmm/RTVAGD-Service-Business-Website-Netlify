import styled, { css } from "styled-components";

export const SubNavWrapper = styled.div`
  position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-70%);
    max-height: 0;
    visibility: hidden;
    overflow-x: hidden;
    transition: max-height 0.3s ease-in-out;
    z-index: 1;

    ${({ $show }) => $show && css`
     visibility: visible;
      max-height: 170px;  
    `}; 
`;
import styled, { css } from "styled-components";
import Link from "next/link";

export const Wrpper = styled.div`
  position: fixed;
  background-color: white;
  transition: top 0.5s ease-in-out, right 0.5s ease-in-out, transform 0.5s ease-in-out,   0.5s ease-in-out, opacity 0.1s ease;
  z-index: 1000;
  cursor: pointer;

  /* State when hidden */
  top: 127px;
  right: 20px;
  transform: translate(0, 0);
  opacity: 0.8;
  border-radius: 2px;


  ${({ $hidden }) => $hidden && css`
      opacity: 0;
      pointer-events: none;
  `};


  ${({ $show }) =>
    !$show &&
    css`
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      opacity: 1;
      border-radius: 20px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    top: ${({ $show }) => ($show ? '95px' : '50%')};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    top: ${({ $show }) => ($show ? '82px' : '50%')};
  }
`;


export const ImageWrapper = styled.div`
  position: relative;
  transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
  padding: 4px;

  /* State when hidden */
  width: 48px;
  height: 48px;

  /* State when open */
  ${({ $show }) =>
    !$show &&
    css`
      width: 90vmin;
      height: 90vmin;
    `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;


// export const Wrpper = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   opacity: 1;
//   transition: opacity 0.1s ease, scale 0.3s ease;
//   background-color: white;
//   border-radius: 4px;
//   z-index: 1000;

//   ${({ $hidden }) => $hidden &&
//     css`
//       opacity: 0.5;
//     `};
// `;


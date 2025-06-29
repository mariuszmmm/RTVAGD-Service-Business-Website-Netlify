import styled, { css } from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;

export const Wrpper = styled.div`
  position: absolute;
  background-color: white;
  z-index: 1000;
  cursor: pointer;
  top: 132px;
  right: 20px;  
  transform: translate(0, 0);
  opacity: 0.3;
  border-radius: 2px;

  ${({ $hidden }) =>
    $hidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    top: 98px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    top: 86px;
  }

  &:hover {
    opacity: 1;
  }

  ${({ $isOpen }) =>
    $isOpen ?
      css`
      transition: top 0.4s ease-in-out, right 0.4s ease-in-out, transform 0.4s ease-in-out,border-radius 0.3s ease-in-out;
      transition-delay: 0s, 0s, 0s, 0.2s;    
      opacity: 1;
      top: 50vh;
      right: 50%;
      transform: translate(50%, -50%);
      border-radius: 20px;

      @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
        top: 50vh;
      }
    `: css`
        transition:  top 0.3s ease-in-out, right 0.3s ease-in-out, transform 0.3s ease-in-out,border-radius 0.2s ease-in-out, opacity 0.2s ease;
        transition-delay: 0.1s, 0.1s, 0.1s, 0.1s, 0s;
      `}; 
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin: 1px;
  width: 42px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 25px;
    height: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 20px;
    height: 20px;
  }

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          transition: width 0.4s ease-in-out, height 0.4s ease-in-out,
            margin 0.4s ease-in-out;
          transition-delay: 0.1s, 0.1s, 0.1s;
          margin: 10px;
          width: min(90vmin, 900px);
          height: min(96vmin, 950px);

          @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
            width: min(90vmin, 900px);
            height: min(98vmin, 950px);
          }

          @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
            width: min(90vmin, 900px);
            height: min(95vmin, 950px);
          }
        `
      : css`
          transition: width 0.4s ease-in-out, height 0.4s ease-in-out,
            margin 0.4s ease-in-out;
          transition-delay: 0s, 0s, 0s;
        `}
`;

export const Text = styled.p`
  opacity: ${({ $delay }) => $delay ? 0 : 1};
  font-size: 2rem;
  color: black;
  text-align: center;
  font-weight: bold;
  z-index: 1;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 1rem;
  }
`;

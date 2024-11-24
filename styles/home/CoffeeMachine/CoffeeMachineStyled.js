import styled, { css } from "styled-components";

export const CoffeeMachineWrapper = styled.div`
  position: absolute;
  top: 240px;
  left: 50%;
  transform: translateX(240px) translateY(80px);
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ $show }) => ($show ? 1 : 0)};

  ${({ $show }) =>
    !$show &&
    css`
      z-index: -1;
      pointer-events: none;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.big}) {
    ${({ $center }) =>
    !$center &&
    css`
        transform: translateX(50px) translateY(-100px) scale(60%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    ${({ $center }) =>
    !$center &&
    css`
        transform: translateX(-70px) translateY(-230px) scale(40%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    ${({ $center }) =>
    !$center &&
    css`
        transform: translateX(-120px) translateY(-260px) scale(30%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    ${({ $center }) =>
    !$center &&
    css`
        transform: translateX(-180px) translateY(-290px) scale(20%);
      `}
  }

  @media (orientation: portrait) {
    top: clamp(270px, 29vw, 450px);
    transform: translateX(-50%) translateY(150px) scale(50%);

    @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
      transform: translateX(-50%) translateY(100px) scale(40%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      transform: translateX(-50%) translateY(10px) scale(30%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      transform: translateX(-50%) translateY(0) scale(30%);
      top: 300px;
    }
  }
`;

export const Image = styled.img`
  transform: scale(70%);
  filter: drop-shadow(10px 10px 15px rgba(40, 40, 40, 0.7))
    drop-shadow(0px 20px 30px rgba(40, 40, 40, 0.4));
  transition: transform 0.2s ease-out, filter 0.2s ease-out;

  &:hover {
    transform: scale(71%);
    filter: drop-shadow(10px 10px 15px rgba(255, 140, 0, 0.7));
  }

  @media (orientation: portrait) {
    transform: scale(150%);
    max-width: 100vw;

    &:hover {
      transform: scale(155%);
    }
  }
`;

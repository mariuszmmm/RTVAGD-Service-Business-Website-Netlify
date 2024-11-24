import styled, { css } from "styled-components";

export const TelevisionWrapper = styled.div`
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translateX(-1050px) translateY(70px);
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
        transform: translateX(-880px) translateY(-100px) scale(60%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    ${({ $center }) =>
    !$center &&
    css`
        transform: translateX(-740px) translateY(-240px) scale(35%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    ${({ $center }) =>
    !$center &&
    css`
        transform: translateX(-680px) translateY(-260px) scale(25%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    ${({ $center }) =>
    !$center &&
    css`
        transform: translateX(-630px) translateY(-290px) scale(20%);
      `}
  }

  @media (orientation: portrait) {
    top: clamp(420px, 45vw, 550px);
    top: clamp(320px, 29vw, 450px);

    transform: translateX(-50%) translateY(130px) scale(50%);

    @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
      transform: translateX(-50%) translateY(100px) scale(40%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      transform: translateX(-50%) translateY(10px) scale(40%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      transform: translateX(-50%) translateY(0) scale(40%);
      top: 330px;
    }
  }
`;

export const Image = styled.img`
  transform: scale(60%);
  filter: drop-shadow(10px 10px 15px rgba(40, 40, 40, 0.7))
    drop-shadow(0px 20px 30px rgba(40, 40, 40, 0.4));
  transition: transform 0.2s ease-out, filter 0.2s ease-out;

  &:hover {
    transform: scale(61%);
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

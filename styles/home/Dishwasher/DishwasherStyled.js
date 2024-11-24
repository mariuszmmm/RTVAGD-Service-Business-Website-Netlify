import styled, { css } from "styled-components";

export const DishwasherWrapper = styled.div`
  position: absolute;
  top: 240px;
  left: 50%;
  transform: translateX(300px) translateY(50px);
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
        transform: translateX(120px) translateY(-100px) scale(60%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    ${({ $center }) =>
    !$center &&
    css`
        transform: translateX(0px) translateY(-240px) scale(40%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    ${({ $center }) =>
    !$center &&
    css`
        transform: translateX(-60px) translateY(-270px) scale(30%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    ${({ $center }) =>
    !$center &&
    css`
        transform: translateX(-100px) translateY(-300px) scale(20%);
      `}
  }

  @media (orientation: portrait) {
    top: clamp(250px, 29vw, 450px);
    transform: translateX(-50%) translateY(170px) scale(50%);

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
    transform: scale(180%);
    max-width: 80vw;

    &:hover {
      transform: scale(185%);
    }
  }
`;

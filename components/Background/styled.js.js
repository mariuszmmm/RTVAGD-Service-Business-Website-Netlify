import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
`;

export const Rotating = styled.div`
  @keyframes rotateBg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotateBg 30s linear infinite;
  opacity: 0.3;
  background-color: transparent;
`;

export const Circle = styled.div`
  @keyframes moveCircle {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(10vw, 0) rotate(90deg);
    }
    50% {
      transform: translate(10vw, 10vh) rotate(180deg);
    }
    75% {
      transform: translate(0, 100vh) rotate(270deg);
    }
    100% {
      transform: translate(0, 0) rotate(360deg);
    }
  }

  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: 60vw;
  height: 60vw;
  background: radial-gradient(
    circle,
    rgba(235, 92, 32, 0.8) 0%,
    rgba(235, 92, 32, 0) 70%
  );
  border-radius: 50%;
  filter: blur(20px);
  animation: moveCircle 40s infinite;
`;

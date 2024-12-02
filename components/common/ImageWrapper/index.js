import styled, { css } from "styled-components";

export const ImageWrapper = styled.div`
position: absolute;
  top: 400px;
  left: 50%;
  transform: translateX(-170%);
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  width: 25vw;
  height: 25vw;

  ${({ $left }) => css`
    ${$left ? "transform: translateX(-170%)" : "transform: translateX(70%)"};
  `};

    ${({ $show }) => !$show && css`
        z-index: -1;
        pointer-events: none;
    `};

@media(orientation: portrait) {
  width: 50vw;
  height: 50vw;
  top: clamp(400px, 60vw, 500px);
  transform: translateX(-50%);
}
`;
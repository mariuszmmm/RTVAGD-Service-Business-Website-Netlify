import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.black};
  padding: 15px 30px;
  margin: 15px 0;
  font-size: clamp(0.7rem, 2vw, 2rem);
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease,
   outline-color 0.2s ease;
  font-weight: 600;
  min-width: max-content;  

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonHover};
    outline: 2px solid ${({ theme }) => theme.color.white};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.button};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 10px 15px;
    margin: 0;
    border-radius: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 10px;
  }
`;

export const StyledButtonLink = styled(Button).attrs({ as: "a" })`
  ${({ $opinia }) =>
    $opinia &&
    css`
      position: absolute;
      bottom: 0;
      right: 20px;
      padding: 8px 15px;
      transform: translate(0, calc(100% + 50px));
      font-size: clamp(0.3rem, 1.6vw, 0.9rem);
      font-weight: 600;
      opacity: 1;

      ${({ $hidden }) =>
        $hidden &&
        css`
          opacity: 0;
          pointer-events: none;
        `}

      @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
        margin: 0;
        padding: 5px 10px;
        transform: translate(0, calc(100% + 30px));
      }
    `}
`;

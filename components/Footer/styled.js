import styled, { css } from "styled-components";
import Facebook from "../../public/icons/facebook.svg";
import Envelope from "../../public/icons/envelope.svg";
import Phone from "../../public/icons/phone.svg";
import Google from "../../public/icons/address-card.svg";
import Link from "../../public/icons/link.svg";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  height: min-content;
  padding: 1vh 0;
  font-size: 0.8rem;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 1500px;
  margin: 10px auto 0;
  padding: 0 20px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    align-items: flex-start;
  }
`;

export const FooterInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-content: center;
  width: 100%;
  gap: 5px clamp(10px, 0.9vw, 200px);

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: repeat(2, auto);
    padding: 0 200px 0 20px;
  }
`;

export const FooterText = styled.span`
  margin: 0;
  font-size: clamp(0.5rem, 2.7vw, 0.9rem);
  font-weight: 200;
  width: max-content;
`;

export const FooterCopy = styled.p`
  margin: 10px 0 3px;
  font-size: clamp(0.2rem, 1.9vw, 0.6rem);
  color: ${({ theme }) => theme.color.border};
  font-weight: 200;
  width: max-content;
  align-self: center;
`;

const styledIcon = css`
  width: 2vw;
  height: 2vw;
`;

export const EmailIcon = styled(Envelope)`
  ${styledIcon}
`;
export const PhoneIcon = styled(Phone)`
  ${styledIcon}

`;
export const FacebookIcon = styled(Facebook)`
  ${styledIcon}

`;
export const GoogleIcon = styled(Google)`
  ${styledIcon}
`;

export const LinkIcon = styled(Link)`
  ${styledIcon}
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-self: center;
  gap: clamp(5px, 5.5vw, 10px);
  padding: 5px;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  transition: color 0.2s ease;

  ${({ $link }) => $link && css`
        order: 1;
    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      order: 0;
    }
  `};

  ${({ $first }) => $first && css`
    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      grid-column-end: span 2;
    }
  `};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    justify-self: left;
  }

  &:hover {
    color: ${({ theme }) => theme.color.button};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
  }
`;

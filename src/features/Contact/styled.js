import styled, { css } from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 0;
  text-align: left;
  min-height: calc(100vh - 5vh);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
    `}
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  padding: 20px;
`;

export const ContactTitle = styled.h1`
  margin-bottom: 70px;
  font-size: clamp(1.5rem, 3vw, 3rem);
  text-align: center;
`;

export const ContactInfo = styled.div`
  margin-top: 30px;
`;

export const ContactText = styled.p`
  font-size: clamp(0.9rem, 4vw, 1.3rem);
  margin: 10px 0;

  span {
    font-weight: 600;
  }
`;

export const MailLink = styled.a`
  color: ${({ theme }) => theme.color.button};
  text-decoration: none;
`;

export const PhoneLink = styled.a`
  color: ${({ theme }) => theme.color.button};
  text-decoration: none;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 90vw;
  aspect-ratio: 600/450;
  border: none;
  margin: 80px 0;
`;

export const Image = styled.img`
  width: 100%;
`;

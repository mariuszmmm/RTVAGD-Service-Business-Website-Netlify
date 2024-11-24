import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 0;
  text-align: left;
  min-height: calc(100vh - 5vh);
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  padding: 20px;
`;

export const ContactInfo = styled.div`
  margin-top: 30px;
`;

export const ContactText = styled.p`
  font-size: clamp(0.9rem, 4vw, 1.3rem);
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 4px 0;

  span {
    font-weight: 600;
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.button};
  text-decoration: none;
  transition: filter  0.3s ease;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 600/450;
  margin: 80px 0;
`;

export const Image = styled.img`
  width: 100%;
`;

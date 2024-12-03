import {
  FooterContainer,
  FooterText,
  FooterWrapper,
  FacebookIcon,
  GoogleIcon,
  FooterInfo,
  FooterCopy,
  EmailIcon,
  PhoneIcon,
  StyledLink,
  LinkIcon,
} from "./styled";
import { serwis } from "../../utils/serwis";

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterInfo>
        <StyledLink href={`tel:${serwis.phone}`} $first >
          <PhoneIcon />
          <FooterText>{serwis.phone} </FooterText>
        </StyledLink>
        <StyledLink href={`mailto:${serwis.email}`}>
          <EmailIcon />
          <FooterText>{serwis.email} </FooterText>
        </StyledLink>
        <StyledLink href={serwis.url.facebook}>
          <FacebookIcon />
          <FooterText>facebook</FooterText>
        </StyledLink>
        <StyledLink href={"https://naprawaprzemysl.pl/"} $link>
          <LinkIcon />
          <FooterText>{"naprawaprzemysl.pl"} </FooterText>
        </StyledLink>
        <StyledLink href={serwis.url.google}>
          <GoogleIcon />
          <FooterText>google</FooterText>
        </StyledLink>
      </FooterInfo>
      <FooterCopy>
        &copy; 2024 {serwis.name}. Wszelkie prawa zastrzeżone.
      </FooterCopy>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
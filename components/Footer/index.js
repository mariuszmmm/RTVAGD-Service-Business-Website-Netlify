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
  LocationIcon,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { SubTitle } from "../common/SubTitle";

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <SubTitle>{serwis.shortName}</SubTitle>
      <FooterInfo>
        <StyledLink
          area="adres"
          href={serwis.url.mapaGoogle}
          title="adres"
        >
          <LocationIcon />
          <FooterText>ul. {serwis.adres}</FooterText>
        </StyledLink>
        <StyledLink
          area="telefon"
          href={`tel:${serwis.phone.number}`}
          title="Telefon"
        >
          <PhoneIcon />
          <FooterText>{serwis.phone.formatted} </FooterText>
        </StyledLink>
        <StyledLink
          area="email"
          href={`mailto:${serwis.email}`}
          title="E-mail"
        >
          <EmailIcon />
          <FooterText>{serwis.email} </FooterText>
        </StyledLink>
        <StyledLink
          area="facebook"
          href={serwis.url.facebook}
          title="Facebook"
        >
          <FacebookIcon />
          <FooterText>Facebook</FooterText>
        </StyledLink>
        <StyledLink
          area="link"
          href="/"
          title="naprawaprzemysl.pl"
        >
          <LinkIcon />
          <FooterText>{"naprawaprzemysl.pl"} </FooterText>
        </StyledLink>
        <StyledLink
          area="google"
          href={serwis.url.google}
          title="Google"
        >
          <GoogleIcon />
          <FooterText>Google</FooterText>
        </StyledLink>
      </FooterInfo>
      <FooterCopy>
        © 2025 Serwis RTV i AGD w Przemyślu. Wszelkie prawa zastrzeżone.
      </FooterCopy>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
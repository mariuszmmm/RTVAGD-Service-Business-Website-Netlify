import { ContactSection, ContactContainer, ContactInfo, ContactText } from "../../styles/kontakt/KontaktStyled";
import { StyledLink } from "../../components/common/StyledLink";
import { SubTitle } from "../../components/common/SubTitle";
import { Title } from "../../components/common/Title";
import { serwis } from "../../utils/serwis";
import ContactForm from "./ContactForm";
import Iframe from "./Iframe";
import MetaTags from "../../components/common/MetaTags";
import { useRouter } from "next/router";
import { dataForMetaTags } from "../../utils/dataForMetaTags";
import { ImageContainer } from "../../styles/kontakt/KontaktStyled";
import { getData } from "../../utils/getData";

const Contact = ({ rating, ratingsTotal }) => {
  const path = useRouter().asPath;

  return (
    <>
      <MetaTags
        path={path}
        page={dataForMetaTags.kontakt}
        rating={rating}
        ratingsTotal={ratingsTotal}
      />
      <ContactContainer>
        <Title>Kontakt</Title>
        <ContactSection>
          <ContactForm />
          <ContactInfo>
            <SubTitle><StyledLink href="/" title={serwis.name}>{serwis.shortName}</StyledLink>
            </SubTitle>
            <ContactText>
              adres:{"  "}
              <StyledLink href={serwis.url.mapaGoogle} title={serwis.adres}>{serwis.adres}</StyledLink>
            </ContactText>
            <ContactText>
              e-mail:{" "}
              <StyledLink href={`mailto:${serwis.email}`} title={serwis.email}>{serwis.email}</StyledLink>
            </ContactText>
            <ContactText>
              telefon:{" "}
              <StyledLink href={`tel:${serwis.phone.number}`} title={(serwis.phone.formatted).replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3')}>{serwis.phone.formatted}</StyledLink>
            </ContactText>
            <br />
            <ContactText>NIP: 7952257951</ContactText>
            <br />
            <ContactText>Zapraszamy od poniedziałku do piątku</ContactText>
            <ContactText>
              w godzinach 9.30-17.00
            </ContactText>
            <ImageContainer>
              <Iframe />
            </ImageContainer>
          </ContactInfo>

        </ContactSection>
      </ContactContainer>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getData();

  return { props: data };
};

export default Contact;
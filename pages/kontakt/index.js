import { ContactSection, ContactContainer, ContactInfo, ContactText } from "../../styles/kontakt/KontaktStyled";
import ContactForm from "./ContactForm";
import { StyledLink } from "../../components/common/StyledLink";
import { SubTitle } from "../../components/common/SubTitle";
import { Title } from "../../components/common/Title";
import { serwis } from "../../utils/serwis";
import Iframe from "./Iframe";
import MetaTags from "../../components/common/MetaTags";
import { getDataForMetaTags } from "../../utils/dataForMetaTags";
import { ImageContainer } from "../../styles/kontakt/KontaktStyled";
import { getData } from "../../utils/getData";
import { appUrls } from "../../utils/urls";
import { getImageParameters } from "../../utils/imagesParametrs";

const Contact = ({ rating, ratingsTotal, dataForMetaTags }) => {
  const path = appUrls.kontakt;

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
            <SubTitle>
              <StyledLink
                href={appUrls.home}
                title={serwis.name}
              >
                {serwis.shortName}
              </StyledLink>
            </SubTitle>
            <ContactText>
              adres:{"  "}
              <span>
                <StyledLink
                  href={serwis.url.GMF}
                  rel="noopener noreferrer"
                  title={serwis.adres}
                >
                  {serwis.adres}
                </StyledLink>
              </span>
            </ContactText>
            <ContactText>
              e-mail:{" "}
              <span>
                <StyledLink
                  href={`mailto:${serwis.email}`}
                  title={serwis.email}
                >
                  {serwis.email}
                </StyledLink>
              </span>
            </ContactText>
            <ContactText>
              telefon:{" "}
              <span>
                <StyledLink
                  href={`tel:${serwis.phone.number}`}
                  title={serwis.phone.international}
                >
                  {serwis.phone.international}
                </StyledLink>
              </span>
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

// export const getStaticProps = async () => {
//   const data = await getData();

//   return { props: { ...data || null } };
// };

export const getStaticProps = async () => {
  const dataForMetaTags = await getDataForMetaTags();
  const imageParameters = await getImageParameters();
  const data = await getData();
  // console.log("dataForMetaTags", { dataForMetaTags })

  return {
    props: {
      ...(data || null),
      imageParameters: imageParameters || null,
      dataForMetaTags: dataForMetaTags || null,
    },
  };
};

export default Contact;
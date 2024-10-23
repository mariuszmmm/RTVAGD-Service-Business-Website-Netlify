import {
  ContactContainer,
  ContactInfo,
  ContactSection,
  ContactText,
  ContactTitle,
  ImageContainer,
  StyledLink,
  ContactHeader
} from "./styled";
import { serwis } from "../../utils/serwis";
import { useEffect, useState } from "react";
import { HelmetForContact } from "./HelmetForContact";
import { ContactForm } from "./ContactForm";
import React, { Suspense } from "react";
const Iframe = React.lazy(() => import("./Iframe"));

export const Contact = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <ContactSection $show={show}>
      <HelmetForContact />
      <ContactContainer>
        <ContactTitle>Kontakt</ContactTitle>
        <ContactForm />
        <ContactInfo>
          <ContactHeader>{serwis.name}</ContactHeader>
          <ContactText>
            adres:{"  "}
            <StyledLink href={serwis.url.mapaGoogle} title={serwis.adres}>{serwis.adres}</StyledLink>
          </ContactText>
          <ContactText>
            e-mail:{" "}
            <StyledLink href={`mailto: ${serwis.email}`} title={serwis.email}>{serwis.email}</StyledLink>
          </ContactText>
          <ContactText>
            telefon:{" "}
            <StyledLink href={`tel: ${serwis.phone}`} title={(serwis.phone).replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3')}>{serwis.phone}</StyledLink>
          </ContactText>
          <br />
          <ContactText>NIP: 7952257951</ContactText>
          <br />
          <ContactText>Zapraszamy od poniedziałku do piątku</ContactText>
          <ContactText>
            w godzinach <>9.30-17.00</>
          </ContactText>
          <ImageContainer>
            <Suspense fallback={<div>Ładowanie...</div>}>
              <Iframe />
            </Suspense>
          </ImageContainer>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

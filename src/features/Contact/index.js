import {
  ContactContainer,
  ContactInfo,
  ContactSection,
  ContactText,
  ContactTitle,
  ImageContainer,
  MailLink,
  PhoneLink,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { useEffect, useState } from "react";
import { HelmetForContact } from "./HelmetForContact";
import { ContactForm } from "./ContactForm";
import React, { Suspense } from "react";
const Iframe = React.lazy(() => import("./Iframe"));

export const Contact = () => {
  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   setShow(true);
  // }, []);

  return (
    <ContactSection $show={true}>
      {/* <HelmetForContact /> */}
      <ContactContainer>
        <ContactTitle>Kontakt</ContactTitle>
        <ContactForm />
        <ContactInfo>
          <ContactText>
            <span>Serwis RTV i AGD</span>
          </ContactText>
          <ContactText>ul. Generała Józefa Sowińskiego 2</ContactText>
          <ContactText>37-700 Przemyśl</ContactText>
          <br />
          <ContactText>
            <span>telefon:</span>{" "}
            <PhoneLink href={`tel:${serwis.phone}`}>{serwis.phone}</PhoneLink>
          </ContactText>
          <ContactText>
            <span>e-mail:</span>{" "}
            <MailLink href={`mailto:${serwis.email}`}>{serwis.email}</MailLink>
          </ContactText>
          <br />
          <ContactText>Zapraszamy od poniedziałku do piątku</ContactText>
          <ContactText>
            w godzinach <span>9.30-17.00</span>
          </ContactText>
          <ImageContainer>
            <Suspense fallback={<div>Ładowanie...</div>}>
              {/* <Iframe /> */}
            </Suspense>
          </ImageContainer>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

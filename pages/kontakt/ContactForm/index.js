import { useEffect, useState } from "react";
import { Form, Label, Input, Textarea } from "../../../styles/kontakt/ContactForm/ContactFormStyled";
import emailjs from "@emailjs/browser";
import SendInfo from "./SendInfo";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../../utils/emailjs";
import { Button } from "../../../components/common/Buttons";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Serwis RTV i AGD",
      message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        setName("");
        setEmail("");
        setMessage("");
        if (response.status === 200) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
        setShowInfo(true);
      })
      .catch((error) => {
        setSuccess(false);
        setShowInfo(true);
      });
  };

  useEffect(() => {
    if (showInfo) {
      setTimeout(() => {
        setShowInfo(false);
      }, 3000);
    }
  }, [showInfo]);

  return (
    <Form onSubmit={sendEmail}>
      <SendInfo show={showInfo} success={success} />
      <Label>Imię</Label>
      <Input
        type="text"
        name="name"
        value={name}
        placeholder="Twoje imię"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Label>Email</Label>
      <Input
        type="email"
        name="email"
        value={email}
        placeholder="Twój email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Label>Wiadomość</Label>
      <Textarea
        name="message"
        value={message}
        placeholder="Twoja wiadomość"
        onChange={(e) => setMessage(e.target.value)}
        required
      ></Textarea>
      <Button type="submit" value="Send">
        Wyślij
      </Button>
    </Form>
  );
};

export default ContactForm;
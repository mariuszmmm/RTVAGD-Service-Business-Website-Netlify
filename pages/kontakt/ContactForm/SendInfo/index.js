import { Info, SendInfoWrapper } from "../../../../styles/kontakt/ContactForm/SendInfo/SendInfoStyled";

const SendInfo = ({ show, success }) => (
  <SendInfoWrapper $show={show}>
    <Info>
      {success ? "Wiadomośc została wysłana" : "Błąd podczas wysyłania"}
    </Info>
  </SendInfoWrapper>
);

export default SendInfo;
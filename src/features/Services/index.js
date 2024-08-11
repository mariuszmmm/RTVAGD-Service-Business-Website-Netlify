import { useEffect, useState } from "react";
import {
  Emoticon,
  Photo,
  ServiceItem,
  ServiceText,
  ServiceTitle,
  ServicesContainer,
  ServicesSection,
  ServicesTitle,
} from "./styled";
import { HemletForServices } from "./HemletForServices";
import pralka from "../../assets/images/naprawa-pralki.webp";
import zmywarka from "../../assets/images/serwis-zmywarek.webp";
import ekspres from "../../assets/images/naprawa-ekspresow.webp";
import telewizor from "../../assets/images/serwis-telewizorow.webp";
import emoticon from "../../assets/images/emoticon.png"

export const Services = () => {
  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   setShow(true);
  // }, []);

  return (
    <ServicesSection $show={true}>
      <HemletForServices />
      <ServicesContainer>
        <ServicesTitle>Zakres usług</ServicesTitle>
        <main>
          <ServiceItem id="naprawa-pralek">
            <ServiceTitle><span>✔</span>&nbsp;Naprawa pralek<Emoticon src={emoticon} /></ServiceTitle>
            <Photo src={pralka} alt="naprawa pralek" />
            <ServiceText>
              Kompleksowe usługi naprawy pralek automatycznych wszystkich marek.
              Bez&nbsp;względu na&nbsp;to, czy&nbsp;Twoja pralka
              nie&nbsp;pobiera&nbsp;wody, wycieka, nie obraca bębna,
              czy&nbsp;wydaje dziwne dźwięki, jestem w stanie zdiagnozować
              i&nbsp;naprawić problem. Korzystam z nowoczesnych narzędzi
              diagnostycznych oraz oryginalnych części zamiennych,
              co&nbsp;zapewnia trwałość i&nbsp;niezawodność wykonanej naprawy.
              Moim celem jest przywrócenie pełnej funkcjonalności Twojej pralki
              w&nbsp;jak najkrótszym czasie.
            </ServiceText>
          </ServiceItem>
          <ServiceItem id="naprawa-zmywarek">
            <ServiceTitle><span>✔</span>&nbsp;Naprawa zmywarek<Emoticon src={emoticon} /></ServiceTitle>
            <Photo src={zmywarka} alt="naprawa zmywarek" />
            <ServiceText>
              Specjalistyczna naprawa zmywarek różnych marek, gwarantująca ich
              długotrwałe i&nbsp;efektywne działanie. Problemy takie jak brak
              podgrzewania wody, wycieki, problemy z&nbsp;pompą, czy problemy
              z&nbsp;suszeniem naczyń to tylko niektóre z usterek, które
              naprawiam. Oferuję szybkie i&nbsp;skuteczne usługi naprawcze,
              zapewniając, że&nbsp;Twoja zmywarka będzie działać jak nowa.
              Dzięki regularnym szkoleniom i&nbsp;aktualizacji wiedzy, jestem
              na&nbsp;bieżąco z&nbsp;najnowszymi technologiami i&nbsp;metodami
              napraw.
            </ServiceText>
          </ServiceItem>
          <ServiceItem id="naprawa-ekspresów">
            <ServiceTitle><span>✔</span>&nbsp;Naprawa ekspresów do kawy<Emoticon src={emoticon} /></ServiceTitle>
            <Photo src={ekspres} alt="naprawa ekspresow" />
            <ServiceText>
              Profesjonalna naprawa ekspresów do&nbsp;kawy, niezależnie od marki
              i&nbsp;modelu. Czy Twój ekspres do kawy przestał działać, nie
              zaparza kawy jak&nbsp;wcześniej, wyświetla błędy, czy ma inne
              problemy? Jestem tutaj, aby pomóc. Specjalizuję się
              w&nbsp;naprawie zarówno domowych, jak i&nbsp;profesjonalnych
              ekspresów do kawy, oferując precyzyjną diagnostykę i szybkie
              naprawy. Moim celem jest, abyś mógł cieszyć się swoją ulubioną
              kawą bez żadnych przerw.
            </ServiceText>
          </ServiceItem>
          <ServiceItem id="naprawa-telewizorów">
            <ServiceTitle><span>✔</span>&nbsp;Naprawa telewizorów<Emoticon src={emoticon} /></ServiceTitle>
            <Photo src={telewizor} alt="naprawa telewizorow" />
            <ServiceText>
              Fachowa naprawa telewizorów wszystkich typów i&nbsp;marek,
              od&nbsp;tradycyjnych po nowoczesne modele smart. Naprawiam
              różnorodne problemy, takie jak brak obrazu, brak dźwięku, problemy
              z&nbsp;zasilaniem, uszkodzone matryce i&nbsp;inne. Dzięki
              dostępowi do oryginalnych części zamiennych oraz nowoczesnemu
              sprzętowi diagnostycznemu, jestem w&nbsp;stanie szybko
              i&nbsp;skutecznie przywrócić pełną funkcjonalność Twojego
              telewizora. Gwarantuję precyzyjną i&nbsp;profesjonalną obsługę,
              abyś mógł cieszyć się ulubionymi programami bez zakłóceń.
            </ServiceText>
          </ServiceItem>
          <ServiceItem>
            <ServiceTitle><span>✔</span>&nbsp;Serwis i&nbsp;konserwacja</ServiceTitle>
            <ServiceText>
              Świadczę kompleksowe usługi serwisowe i&nbsp;konserwacyjne
              urządzeń&nbsp;AGD. Zapewniam szybką i&nbsp;skuteczną naprawę
              sprzętu, dbając o&nbsp;to, aby&nbsp;działał jak&nbsp;nowy.
              Regularna konserwacja przeprowadzana przez doświadczonego
              specjalistę pozwala na&nbsp;przedłużenie żywotności urządzeń
              i&nbsp;zapobieganie awariom.
            </ServiceText>
          </ServiceItem>
          <ServiceItem>
            <ServiceTitle><span>✔</span>&nbsp;Konsultacje i&nbsp;doradztwo</ServiceTitle>
            <ServiceText>
              Oferuję profesjonalne konsultacje i&nbsp;doradztwo w&nbsp;zakresie
              serwisu urządzeń&nbsp;AGD. Dzięki wieloletniemu doświadczeniu,
              pomagam zidentyfikować problemy z&nbsp;urządzeniami
              oraz&nbsp;doradzam najlepsze rozwiązania, aby&nbsp;zapewnić
              ich&nbsp;sprawne działanie. Gwarantuję rzetelną diagnozę
              oraz&nbsp;fachowe porady dotyczące napraw i&nbsp;konserwacji
              sprzętu.
            </ServiceText>
          </ServiceItem>
        </main>
      </ServicesContainer>
    </ServicesSection>
  );
};

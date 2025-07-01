import { Container } from '../../components/common/Container';
import { Section } from '../../components/common/Section';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { appUrls, imageUrls } from '../../utils/urls';
import { Emoticon } from '../../components/common/Emoticon';
import MetaTags from '../../components/common/MetaTags';
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import { ButtonLink } from '../../components/common/ButtonLink';
import { serwis } from '../../utils/serwis';
import Image from 'next/image';
import { StyledPhoto } from '../../components/common/StyledPhoto';
import { StyledText } from '../../components/common/Text/styled';
import { HeroText } from '../../styles/home/HomeStyled';
import { StyledLink } from '../../components/common/StyledLink';
import { getData } from '../../utils/getData';
import { Break } from '../../components/Break';

const DryerService = ({ rating, ratingsTotal, reviews }) => {
  const path = useRouter().asPath;

  return (
    <>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_suszarek}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />

      <Container>
        <Title>Naprawa Suszarek do Ubrań w Przemyślu</Title>

        <Section>
          <StyledPhoto
            $width={dataForMetaTags.naprawa_suszarek.metaTags.imageWidth}
            $height={dataForMetaTags.naprawa_suszarek.metaTags.imageHeight}>
            <Image
              src={imageUrls.suszarka}
              title={dataForMetaTags.naprawa_suszarek.metaTags.imageTitle}
              alt={dataForMetaTags.naprawa_suszarek.metaTags.imageAlt}
              loading='eager'
              fill
              // srcSet={`${imageUrls.suszarka_300} 500w,
              // ${imageUrls.suszarka} 1000w`}
              sizes="(max-width: 500px) 500px, 1000px"
            />
          </StyledPhoto>
        </Section>

        <Section>
          <SubTitle>Naprawa suszarek Przemyśl – Pełna diagnostyka i naprawa</SubTitle>
          <StyledText>
            Gdy suszarka do ubrań odmawia posłuszeństwa, szczególnie w deszczowe dni, domowe obowiązki potrafią się skomplikować. Jeśli właśnie spotkała Cię taka sytuacja, jestem do Twojej dyspozycji. Specjalizuję się w serwisie i naprawie suszarek na terenie Przemyśla i okolic. Niezależnie od tego, czy masz nowoczesny model z pompą ciepła, kondensacyjny, czy tradycyjny – znam je od podszewki. Moja praca to nie tylko szybka diagnoza, ale przede wszystkim skuteczna naprawa suszarek, która przywróci Twojemu urządzeniu pełną sprawność. Zaufaj mojemu doświadczeniu – Twoja suszarka szybko wróci do formy!
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Częste Problemy z Suszarkami – Rozwiązania</SubTitle>
          <StyledText as="ul" $cross>
            <li><strong>Bęben nie obraca się</strong> – może wynikać z zerwanego paska napędowego, zużytych łożysk lub uszkodzonego silnika. Dokładna kontrola elementów napędu pozwala zidentyfikować problem.</li>
            <li><strong>Suszarka wyłącza się przed zakończeniem cyklu</strong> – przyczyną mogą być czujnik wilgotności, przegrzewanie lub moduł sterujący. Sprawdzam układ elektroniczny i termiczne zabezpieczenia.</li>
            <li><strong>Niewystarczające suszenie</strong> – często efekt niedrożnego filtra kłaczków lub przewodu wentylacyjnego. W suszarkach kondensacyjnych analizuję stan skraplacza oraz pojemnika na wodę.</li>
            <li><strong>Przecieki wody</strong> – w modelach kondensacyjnych może to być uszkodzony zbiornik lub wąż spustowy; w innych – nieszczelne elementy. Sprawdzam szczelność układów.</li>
            <li><strong>Kody błędów na wyświetlaczu</strong> – weryfikuję komunikaty, diagnozuję usterki czujników, modułów i ich połączeń.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Dlaczego Wybrać "NaprawaPrzemysl" do Naprawy Suszarki?</SubTitle>
          <StyledText as="ul" $check>
            <li><strong>Szybkie ustalenie terminu</strong>: staram się zaaranżować wizytę jak najszybciej, z uwzględnieniem potrzeb Klienta i dostępności części.</li>
            <li><strong>Wieloletnia praktyka</strong>: doświadczenie w różnych typach suszarek – kondensacyjnych, z pompą ciepła czy z grzałką elektryczną – pozwala sprawnie diagnozować nawet nietypowe usterki.</li>
            <li><strong>Obsługa szerokiego zakresu marek</strong>: Bosch, Siemens, Whirlpool, Electrolux, Beko, Miele, Samsung, Amica, AEG, Candy, Hotpoint-Ariston, LG, Indesit, Zanussi i inne – potrafię dostosować naprawę do specyfiki modelu.</li>
            <li><strong>Sprawdzone części i metody</strong>: stosuję części o parametrach odpowiadających oryginalnym lub równoważnym. Dbam o czystość filtrów i przewodów, by przywrócić maksymalną wydajność.</li>
            <li><strong>Przejrzystość kosztów</strong>: po diagnostyce na miejscu przedstawiam orientacyjną wycenę, byś znał zakres i koszty naprawy przed podjęciem decyzji.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Jak Działam – Proces Serwisu Suszarek</SubTitle>
          <StyledText as="ol" >
            <li><strong>Kontakt i opis usterki</strong>: krótka rozmowa telefoniczna lub wiadomość e-mail z opisem symptomów i modelem urządzenia.</li>
            <li><strong>Diagnostyka na miejscu</strong>: pełne sprawdzenie suszarki, testy funkcjonalne i analiza ewentualnych kodów błędów.</li>
            <li><strong>Naprawa lub wymiana części</strong>: wymieniam tylko te podzespoły, które faktycznie są niesprawne, stosując części o potwierdzonej jakości.</li>
            <li><strong>Test suszenia</strong>: wykonuję krótki cykl testowy, by zweryfikować poprawność działania, szczelność i efektywność odprowadzania wilgoci.</li>
            <li><strong>Wskazówki eksploatacyjne</strong>: doradzam, jak dbać o suszarkę (czyszczenie filtra, kontrola układu wentylacyjnego/ skraplacza), aby wydłużyć czas bezawaryjnej pracy.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>FAQ – najczęściej zadawane pytania</SubTitle>
          <StyledText as="ul" $list>
            {dataForMetaTags.naprawa_suszarek.schema.faqPage.mainEntity.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <StyledText>{item.acceptedAnswer.text}</StyledText>
              </li>
            ))}
          </StyledText >
        </Section>

        <Section>
          <HeroText>
            <strong>Potrzebujesz szybkiej i fachowej naprawy suszarki?<Break /> Skontaktuj się, podając objawy usterki – ustalimy optymalny termin wizyty i zakres prac.</strong>
          </HeroText>
          <ButtonLink href={`tel:${serwis.phone.number}`} title='Naprawa suszarek w Przemyślu' >
            Zadzwoń 📞 {serwis.phone.short}
          </ButtonLink>
        </Section>

        <Section>
          <SubTitle>Obsługiwany obszar</SubTitle>
          <StyledText>
            Serwis suszarek w Przemyślu i w miejscowościach: Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce, Żurawica. Inne lokalizacje – proszę o kontakt w celu ustalenia dogodnej wizyty.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Sprawdź też inne usługi</SubTitle>
          <StyledText as="ul" $list>
            <li>
              <StyledLink href={appUrls.naprawa_pralek}><strong>Naprawa pralek</strong></StyledLink>
            </li>
            <li>
              <StyledLink href={appUrls.naprawa_zmywarek}><strong>Naprawa zmywarek</strong></StyledLink>
            </li>
            {/* <li>
              <StyledLink href={appUrls.naprawa_ekspresow}><strong>Naprawa ekspresów do kawy</strong></StyledLink>
            </li> */}
            {/* <li>
              <StyledLink href={appUrls.naprawa_telewizorow}><strong>Naprawa telewizorów</strong></StyledLink>
            </li> */}
          </StyledText >
        </Section>

      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getData();

  return { props: data };
};

export default DryerService;
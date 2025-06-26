import { Container } from '../../components/common/Container';
import { Section } from '../../components/common/Section';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { appUrls, imageUrls } from '../../utils/urls';
import MetaTags from '../../components/common/MetaTags';
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import { ButtonLink } from '../../components/common/ButtonLink';
import { serwis } from '../../utils/serwis';
import Image from 'next/image';
import { StyledPhoto } from '../../components/common/StyledPhoto';
import { getData } from '../../utils/getData';
import { StyledText } from '../../components/common/Text/styled';
import { StyledLink } from '../../components/common/StyledLink';
import { HeroText } from '../../styles/home/HomeStyled';
import { Break } from '../../components/Break';

const TelevisionService = ({ rating, ratingsTotal, reviews }) => {
  const path = useRouter().asPath;

  return (
    <>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_telewizorow}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />

      <Container>
        <Title>Naprawa telewizorów w Przemyślu</Title>

        <Section>
          <StyledPhoto>
            <Image
              title="Naprawa telewizorów Przemyśl"
              src={imageUrls.telewizor}
              alt={dataForMetaTags.naprawa_telewizorow.metaTags.imageAlt}
              loading='lazy'
              fill
              // srcSet={`${imageUrls.telewizor_300} 500w,
              // ${imageUrls.telewizor} 1000w`}
              sizes="(max-width: 500px) 500px, 1000px"
            />
          </StyledPhoto>
        </Section>

        <Section>
          <SubTitle>Specjalistyczna naprawa telewizorów LCD, OLED, Smart TV</SubTitle>
          <StyledText>
            Awaria telewizora może ograniczyć dostęp do ulubionych programów lub niezbędnych informacji. W Przemyślu oferuję diagnostykę i naprawę różnych typów telewizorów – od starszych modeli LCD, przez panele OLED po zaawansowane Smart TV. Dbam o to, aby po interwencji sprzęt działał stabilnie i bez niespodzianek.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Typowe usterki telewizorów</SubTitle>
          <StyledText as="ul" $cross>
            <li><strong>Brak obrazu lub problemy z wyświetlaniem</strong> – przyczyny to awarie matrycy, uszkodzenia podświetlenia LED, problemy w układzie sterowania. Dokładna diagnostyka elektroniki i podzespołów wyświetlania pozwala zlokalizować usterkę.</li>
            <li><strong>Brak dźwięku</strong> – usterki układów audio, głośników lub oprogramowania mogą powodować ciszę. Weryfikuję połączenia, moduły audio i oprogramowanie Smart TV.</li>
            <li><strong>Problemy z zasilaniem</strong> – telewizor nie włącza się, wyłącza się samoczynnie lub ma nieregularne zachowanie zasilacza. Kontrola zasilania i elementów bezpiecznikowych pozwala stwierdzić, co wymaga naprawy.</li>
            <li><strong>Uszkodzenia matrycy</strong> – pęknięcia, przebarwienia lub martwe piksele. Oceniam, czy naprawa jest opłacalna, i doradzam najlepsze rozwiązanie.</li>
            <li><strong>Awaria funkcji Smart TV</strong> – problemy z łącznością internetową, aplikacjami lub oprogramowaniem. Sprawdzam ustawienia sieci, aktualizacje firmware i konfigurację systemu.</li>
            <li><strong>Zakłócenia obrazu lub dźwięku</strong> – linie na ekranie, zniekształcenia lub trzaski. Analizuję układy wewnętrzne, kable i sygnały wejściowe.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Dlaczego warto wybrać ten serwis telewizorów?</SubTitle>
          <StyledText as="ul" $check>
            <li><strong>Szybka i trafna diagnoza</strong>: określam przyczynę usterki możliwie szybko, aby ograniczyć czas bez telewizora.</li>
            <li><strong>Wieloletnie doświadczenie</strong>: praca z różnorodnymi technologiami (LCD, LED, OLED, QLED, Smart TV) pomaga skutecznie lokalizować i usuwać problemy.</li>
            <li><strong>Sprawdzone części</strong>: korzystam z komponentów, które odpowiadają specyfikacjom producenta, by zapewnić długotrwałe działanie.</li>
            <li><strong>Elastyczność lokalizacji naprawy</strong>: prostsze naprawy u Klienta, bardziej złożone w warsztacie – doradzam najwygodniejszą opcję.</li>
            <li><strong>Przejrzystość kosztów</strong>: po diagnostyce informuję o przewidywanym zakresie prac i kosztach, by uniknąć niespodzianek.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Proces naprawy telewizora</SubTitle>
          <StyledText as="ol" >
            <li><strong>Kontakt i opis objawów</strong>: krótka konsultacja telefoniczna lub e-mail z informacją, co się dzieje (np. brak obrazu, migotanie, brak dźwięku).</li>
            <li><strong>Diagnostyka</strong>: testy elektroniki, analiza podzespołów zasilania, sterowania i wyświetlania; sprawdzenie oprogramowania Smart TV.</li>
            <li><strong>Naprawa lub wymiana</strong>: w zależności od usterki wymiana odpowiednich elementów: płyta zasilająca, podświetlenie, matryca, moduły audio, elementy sieciowe lub elektroniczne.</li>
            <li><strong>Test działania</strong>: uruchamiam telewizor w różnych trybach (wejścia HDMI, TV, Smart), sprawdzam jakość obrazu i dźwięku.</li>
            <li><strong>Porady i wskazówki</strong>: rekomenduję ustawienia, aktualizacje oprogramowania i sposób eksploatacji, by minimalizować ryzyko awarii.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>FAQ – najczęściej zadawane pytania</SubTitle>
          <StyledText as="ul" $list>
            {dataForMetaTags.naprawa_telewizorow.schema.faqPage.mainEntity.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <StyledText>{item.acceptedAnswer.text}</StyledText>
              </li>
            ))}
          </StyledText >
        </Section>

        <Section>
          <HeroText>
            <strong>
              Nie pozwól, by usterka telewizora ograniczała Twój komfort.<Break /> Skontaktuj się ze mną, a ustalimy, jak szybko przywrócić urządzenie do sprawności.
            </strong>
          </HeroText>
          <ButtonLink
            href={`tel:${serwis.phone.number}`}
            title='Naprawa telewizorów w Przemyślu'
          >
            Zadzwoń teraz
          </ButtonLink>
        </Section>

        <Section>
          <SubTitle>Obsługiwany obszar</SubTitle>
          <StyledText>
            Naprawa telewizorów w Przemyślu i w miejscowościach: Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce, Żurawica. Dalsze lokalizacje – zapraszam do kontaktu.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Sprawdź też inne usługi</SubTitle>
          <StyledText as="ul" $list>
            <li>
              <StyledLink href={appUrls.naprawa_pralek}><strong>Naprawa pralek</strong></StyledLink>
            </li>
            <li>
              <StyledLink href={appUrls.naprawa_suszarek}><strong>Naprawa suszarek</strong></StyledLink>
            </li>
            {/* <li>
              <StyledLink href={appUrls.naprawa_zmywarek}><strong>Naprawa zmywarek</strong></StyledLink>
            </li> */}
            {/* <li>
              <StyledLink href={appUrls.naprawa_ekspresow}><strong>Naprawa ekspresów do kawy</strong></StyledLink>
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

export default TelevisionService;
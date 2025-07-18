import { Container } from '../../components/common/Container';
import { Section } from '../../components/common/Section';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { StyledPhoto } from '../../components/common/StyledPhoto';
import { Emoticon } from '../../components/common/Emoticon';
import { appUrls, imageUrls } from '../../utils/urls';
import MetaTags from '../../components/common/MetaTags';
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import { ButtonLink } from '../../components/common/ButtonLink';
import { serwis } from '../../utils/serwis';
import Image from 'next/image';
import { HeroText } from '../../styles/home/HomeStyled';
import { StyledText } from '../../components/common/Text/styled';
import { StyledLink } from '../../components/common/StyledLink';
import { Break } from '../../components/Break';
import { getData } from '../../utils/getData';

const DishwasherService = ({ rating, ratingsTotal, reviews }) => {
  const path = useRouter().asPath;

  return (
    <>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_zmywarek}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />

      <Container>
        <Title>Naprawa Zmywarek w Przemyślu</Title>

        <Section>
          <StyledPhoto>
            <Image
              title={dataForMetaTags.naprawa_zmywarek.metaTags.imageTitle}
              src={imageUrls.zmywarka}
              alt={dataForMetaTags.naprawa_zmywarek.metaTags.imageAlt}
              loading='eager'
              fill
              // srcSet={`${imageUrls.zmywarka_300} 500w,
              // ${imageUrls.zmywarka} 1000w`}
              sizes="(max-width: 500px) 500px, 1000px"
            />
          </StyledPhoto>
        </Section>

        <Section>
          <SubTitle>Naprawa Zmywarek Przemyśl – Dokładna Diagnostyka i Usuwanie Usterek</SubTitle>
          <StyledText>
            Zmywarka odmówiła posłuszeństwa, a góra naczyń rośnie? Bez obaw, jestem tutaj, aby pomóc. Oferuję szybką i skuteczną naprawę zmywarek w Przemyślu i okolicy. Niezależnie od tego, czy Twoja zmywarka nie pobiera wody, nie grzeje, czy zostawia brudne naczynia – znam się na rzeczy. Jako specjalista od naprawy zmywarek w Przemyślu, podchodzę do każdego zlecenia indywidualnie, korzystając ze sprawdzonych części i profesjonalnego sprzętu. Moim celem jest, aby Twoja zmywarka znów działała jak nowa, a Ty mógłbyś zapomnieć o ręcznym zmywaniu. Skontaktuj się ze mną, a szybko przywrócę porządek w Twojej kuchni!
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Typowe Usterki Zmywarek i ich Rozwiązania</SubTitle>
          <StyledText as="ul" $cross>
            <li><strong>Brak pobierania wody</strong> – zazwyczaj wina zaworu dopływu, niedrożnego filtra lub problemu z dopływem. Sprawdzam obwód wodny i elementy sterujące.</li>
            <li><strong>Brak podgrzewania</strong> – przyczyną może być uszkodzona grzałka, czujnik temperatury lub moduł sterowania. Dokładnie weryfikuję elementy grzewcze.</li>
            <li><strong>Wycieki wody</strong> – źródłem mogą być uszczelki drzwi, pęknięty wąż lub nieszczelny mechanizm pompy. Kontrola szczelności to podstawa diagnozy.</li>
            <li><strong>Niedokładne suszenie</strong> – problem może dotyczyć wentylatora, elementu grzewczego suszenia lub układu sterującego; sprawdzam przepływ powietrza i działanie modułów.</li>
            <li><strong>Nieuruchamianie się</strong> – sprawdzam zasilanie, przyciski sterowania oraz moduł elektroniczny.</li>
            <li><strong>Brudne naczynia po cyklu</strong> – często wina zatkanych dysz spryskujących, zabrudzonego filtra lub zużytych ramion; czyszczenie i wymiana podzespołów poprawia efektywność.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Dlaczego warto mi zaufać w kwestii Naprawy Zmywarki?</SubTitle>
          <StyledText as="ul" $check>
            <li><strong>Szybkie ustalanie terminu</strong>: dbam o to, aby wizyta odbyła się w dogodnym dla Klienta terminie, reagując możliwie szybko.</li>
            <li><strong>Wieloletnia praktyka</strong>: doświadczenie przy zmywarkach marek Bosch, Electrolux, Beko, Siemens i innych pozwala skutecznie diagnozować zarówno standardowe, jak i nietypowe awarie.</li>
            <li><strong>Elastyczne warunki naprawy</strong>: naprawa u Klienta lub – gdy wymaga tego sytuacja – demontaż i naprawa w warsztacie, po uzgodnieniu.</li>
            <li><strong>Stosowanie sprawdzonych części</strong>: sięgam po elementy o właściwych parametrach technicznych, by zapewnić długotrwały efekt naprawy.</li>
            <li><strong>Jasne informacje</strong>: po diagnostyce przekazuję szczegóły usterki i zakres prac, byś wiedział, jakie kroki podejmujemy i jak prezentuje się wycena.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Kroki Naprawy Zmywarki w moim Serwisie</SubTitle>
          <StyledText as="ol" >
            <li><strong>Kontakt i wstępne ustalenia</strong>: opis usterki przez telefon lub e-mail, wstępna analiza możliwości i terminu.</li>
            <li><strong>Diagnostyka na miejscu</strong>: testy wodno-elektryczne, odczyt ewentualnych kodów błędów i kontrola mechaniczna.</li>
            <li><strong>Naprawa lub wymiana</strong>: wymieniam niesprawne podzespoły, korzystając z oryginalnych lub równoważnych komponentów.</li>
            <li><strong>Testy końcowe</strong>: uruchamiam cykl testowy, sprawdzam pobieranie i odprowadzanie wody oraz skuteczność mycia i suszenia.</li>
            <li><strong>Porady użytkowe</strong>: sugeruję, jak dbać o zmywarkę (czyszczenie filtrów, prawidłowe układanie naczyń itp.), aby zmniejszyć ryzyko powtórnej usterki.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>FAQ – najczęściej zadawane pytania</SubTitle>
          <StyledText as="ul" $list>
            {dataForMetaTags.naprawa_zmywarek.schema.faqPage.mainEntity.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <StyledText>{item.acceptedAnswer.text}</StyledText>
              </li>
            ))}
          </StyledText >
        </Section>

        <Section>
          <HeroText>
            <strong>Nie pozwól, aby Awaria Zmywarki zaburzyła codzienne rytuały w kuchni.<Break /> Skontaktuj się ze mną i omów problem – ustalimy najlepszy termin i zakres prac. </strong>
          </HeroText>
          <ButtonLink href={`tel:${serwis.phone.number}`} title='Naprawa zmywarek w Przemyślu' >
            📞 Zadzwoń teraz
          </ButtonLink>
        </Section>

        <Section>
          <SubTitle>Obsługiwany obszar</SubTitle>
          <StyledText>
            Naprawiam Zmywarki w Przemyślu oraz w pobliskich miejscowościach: Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce, Żurawica. Inne lokalizacje – proszę o kontakt.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Sprawdź też inne usługi</SubTitle>
          <StyledText as="ul" $list>
            {/* <li>
              <StyledLink href={appUrls.naprawa_pralek}><strong>Naprawa pralek</strong></StyledLink>
            </li> */}
            <li>
              <StyledLink href={appUrls.naprawa_suszarek}><strong>Naprawa suszarek</strong></StyledLink>
            </li>
            {/* <li>
              <StyledLink href={appUrls.naprawa_ekspresow}><strong>Naprawa ekspresów do kawy</strong></StyledLink>
            </li> */}
            <li>
              <StyledLink href={appUrls.naprawa_telewizorow}><strong>Naprawa telewizorów</strong></StyledLink>
            </li>
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

export default DishwasherService;
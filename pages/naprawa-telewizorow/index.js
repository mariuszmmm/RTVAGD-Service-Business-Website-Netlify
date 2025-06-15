import { Container } from '../../components/common/Container';
import { Section } from '../../components/common/Section';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { imageUrls } from '../../utils/urls';
import MetaTags from '../../components/common/MetaTags';
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import { ButtonLink } from '../../components/common/ButtonLink';
import { serwis } from '../../utils/serwis';
import Image from 'next/image';
import { StyledPhoto } from '../../components/common/StyledPhoto';
import { getData } from '../../utils/getData';
import { StyledText } from '../../components/common/Text/styled';

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
        <Title>
          Naprawa telewizorów w Przemyślu
        </Title>

        <Section>
          <StyledPhoto>
            <Image
              title="Telewizor"
              src={imageUrls.telewizor}
              alt="Naprawa telewizorów w Przemyślu - serwis telewizorów"
              // loading='lazy'
              fill
              // srcSet={`${imageUrls.telewizor_300} 500w,
              // ${imageUrls.telewizor} 1000w`}
              sizes="(max-width: 500px) 500px, 1000px"
            />
          </StyledPhoto>
        </Section>

        <Section>
          <SubTitle>
            Fachowa naprawa telewizorów wszystkich typów
          </SubTitle>
          <StyledText>
            Zepsuty telewizor to problem, który może zakłócić Twoją rozrywkę i dostęp do informacji. Niezależnie od tego, czy Twój sprzęt to starszy model LCD, nowoczesny OLED, czy zaawansowany telewizor Smart TV, jestem tutaj, aby pomóc. Oferuję profesjonalną naprawę telewizorów, niezależnie od marki i typu urządzenia, zapewniając szybką i skuteczną obsługę.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>
            Najczęstsze problemy z telewizorami
          </SubTitle>
          <StyledText as="ul" $cross>
            <li><b>brak obrazu lub problemy z&nbsp;jakością wyświetlania</b> -&nbsp;usterki matrycy, uszkodzenia podświetlenia LED, błędy w&nbsp;układzie sterowania.</li>
            <li><b>brak dźwięku</b> -&nbsp;awarie układów audio, problemy z&nbsp;głośnikami lub oprogramowaniem.</li>
            <li><b>problemy z&nbsp;zasilaniem</b> -&nbsp;telewizor nie włącza się, wyłącza samoczynnie lub występują nieregularności w&nbsp;działaniu zasilacza.</li>
            <li><b>uszkodzona matryca</b> -&nbsp;pęknięcia, przebarwienia lub martwe piksele.</li>
            <li><b>awaria funkcji Smart&nbsp;TV</b> -&nbsp;problemy z&nbsp;połączeniem internetowym, aplikacjami lub oprogramowaniem.</li>
            <li><b>zakłócenia obrazu lub dźwięku</b> -&nbsp;linie na ekranie, zniekształcony obraz, trzaski w&nbsp;dźwięku.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>
            Dlaczego warto wybrać moje usługi?
          </SubTitle>
          <StyledText as="ul" $check>
            <li><strong>Szybka i&nbsp;trafna diagnostyka</strong>Zidentyfikuję przyczynę usterki w&nbsp;krótkim czasie, dzięki czemu Twój telewizor szybko wróci do&nbsp;pełnej sprawności.</li>
            <li><strong>Profesjonalna jakość naprawy</strong>Korzystam wyłącznie z&nbsp;oryginalnych części zamiennych oraz zaawansowanych technik naprawczych, co&nbsp;zapewnia długotrwałą niezawodność urządzenia.</li>
            <li><strong>20 lat doświadczenia</strong>Specjalizuję się w&nbsp;naprawach telewizorów od&nbsp;ponad dwóch dekad, zdobywając zaufanie wielu klientów.</li>
            <li><strong>Wygoda i &nbsp;elastyczność</strong>Oferuję zarówno naprawy w warsztacie, jak i&nbsp;dojazd do&nbsp;klienta. Dopasowuję terminy do&nbsp;Twoich potrzeb.</li>
          </StyledText>
        </Section>

        <Section>
          <StyledText>
            <b>Nie pozwól, aby usterka telewizora popsuła Twój czas wolny! </b>
            Skontaktuj się ze mną już dziś, a sprawnie przywrócę Twój telewizor do pełnej funkcjonalności, byś mógł znów cieszyć się ulubionymi programami i filmami.
          </StyledText>
          <ButtonLink href={`tel:${serwis.phone.number}`} title='Naprawa telewizorów w Przemyślu' >
            Zadzwoń teraz
          </ButtonLink>
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
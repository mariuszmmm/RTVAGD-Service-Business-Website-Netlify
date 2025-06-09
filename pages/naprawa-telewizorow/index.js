import { Container } from '../../components/common/Container';
import { Section } from '../../components/common/Section';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { Text } from '../../components/common/Text';
import { ServiceOffer } from '../../components/common/ServiceOffer';
import { imageUrls } from '../../utils/urls';
import { Emoticon } from '../../components/common/Emoticon';
import MetaTags from '../../components/common/MetaTags';
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import { ButtonLink } from '../../components/common/ButtonLink';
import { serwis } from '../../utils/serwis';
import Image from 'next/image';
import { StyledPhoto } from '../../components/common/StyledPhoto';
import { getData } from '../../utils/getData';

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
          Naprawa telewizorów w&nbsp;Przemyślu&nbsp;
          <Emoticon>
            <Image
              src={imageUrls.logo}
              alt="Serwis RTV i AGD logo"
              loading="lazy"
              fill
            />
          </Emoticon>
        </Title>
        <Section>
          <div>
            <SubTitle>
              Fachowa naprawa telewizorów wszystkich typów i&nbsp;marek w&nbsp;Przemyślu i&nbsp;okolicach.
            </SubTitle>
            <Text>
              Zepsuty telewizor to problem, który może zakłócić Twoją rozrywkę i dostęp do informacji. Niezależnie od tego, czy Twój sprzęt to starszy model LCD, nowoczesny OLED, czy zaawansowany telewizor Smart TV, jestem tutaj, aby pomóc. Oferuję profesjonalną naprawę telewizorów, niezależnie od marki i typu urządzenia, zapewniając szybką i skuteczną obsługę.
            </Text>

            <ServiceOffer>
              <StyledPhoto>
                <Image
                  title="Naprawa telewizorów Przemyśl"
                  src={imageUrls.telewizor}
                  alt="Naprawa telewizorów - serwis telewizorów w Przemyślu"
                  // loading='lazy'
                  fill
                  // srcSet={`${imageUrls.telewizor_300} 500w,
                  // ${imageUrls.telewizor} 1000w`}
                  sizes="(max-width: 500px) 500px, 1000px"
                />
              </StyledPhoto>
              <SubTitle as="h3">
                Najczęstsze problemy z telewizorami, które naprawiam:
              </SubTitle>
              <Text as="ul" $cross>
                <li><b>brak obrazu lub problemy z&nbsp;jakością wyświetlania</b> -&nbsp;usterki matrycy, uszkodzenia podświetlenia LED, błędy w&nbsp;układzie sterowania.</li>
                <li><b>brak dźwięku</b> -&nbsp;awarie układów audio, problemy z&nbsp;głośnikami lub oprogramowaniem.</li>
                <li><b>problemy z&nbsp;zasilaniem</b> -&nbsp;telewizor nie włącza się, wyłącza samoczynnie lub występują nieregularności w&nbsp;działaniu zasilacza.</li>
                <li><b>uszkodzona matryca</b> -&nbsp;pęknięcia, przebarwienia lub martwe piksele.</li>
                <li><b>awaria funkcji Smart&nbsp;TV</b> -&nbsp;problemy z&nbsp;połączeniem internetowym, aplikacjami lub oprogramowaniem.</li>
                <li><b>zakłócenia obrazu lub dźwięku</b> -&nbsp;linie na ekranie, zniekształcony obraz, trzaski w&nbsp;dźwięku.</li>
              </Text>
              <Text $subArea>
                Dzięki nowoczesnym narzędziom diagnostycznym i dostępowi do oryginalnych części zamiennych gwarantuję trwałość i niezawodność każdej naprawy.
              </Text>
            </ServiceOffer>

            <SubTitle as="h3">
              Dlaczego warto wybrać moje usługi?
            </SubTitle>
            <Text as="ul" $check>
              <li><h3>Szybka i&nbsp;trafna diagnostyka</h3>Zidentyfikuję przyczynę usterki w&nbsp;krótkim czasie, dzięki czemu Twój telewizor szybko wróci do&nbsp;pełnej sprawności.</li>
              <li><h3>Profesjonalna jakość naprawy</h3>Korzystam wyłącznie z&nbsp;oryginalnych części zamiennych oraz zaawansowanych technik naprawczych, co&nbsp;zapewnia długotrwałą niezawodność urządzenia.</li>
              <li><h3>20 lat doświadczenia</h3>Specjalizuję się w&nbsp;naprawach telewizorów od&nbsp;ponad dwóch dekad, zdobywając zaufanie wielu klientów.</li>
              <li><h3>Wygoda i &nbsp;elastyczność</h3>Oferuję zarówno naprawy w warsztacie, jak i&nbsp;dojazd do&nbsp;klienta. Dopasowuję terminy do&nbsp;Twoich potrzeb.</li>
            </Text>
            <Text>
              <b>Nie pozwól, aby usterka telewizora popsuła Twój czas wolny! </b>
              Skontaktuj się ze mną już dziś, a sprawnie przywrócę Twój telewizor do pełnej funkcjonalności, byś mógł znów cieszyć się ulubionymi programami i filmami.
            </Text>
            <ButtonLink href={`tel:${serwis.phone.number}`} title='Naprawa telewizorów w Przemyślu' >
              Zadzwoń teraz
            </ButtonLink>
          </div>
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
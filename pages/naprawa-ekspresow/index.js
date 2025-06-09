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

const CoffeeMachineService = ({ rating, ratingsTotal, reviews }) => {
  const path = useRouter().asPath;

  return (
    <>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_ekspresow}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />
      <Container>

        <Title>
          Naprawa ekspresów do&nbsp;kawy w&nbsp;Przemyślu&nbsp;
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
              Profesjonalna naprawa ekspresów każdej marki w&nbsp;Przemyślu i&nbsp;okolicach.
            </SubTitle>
            <Text>
              Awaria ekspresu do kawy może skutecznie zepsuć poranek lub uniemożliwić sprawne działanie kawiarni. Oferuję kompleksowe usługi naprawcze, które pozwolą Ci ponownie cieszyć się aromatyczną kawą. Specjalizuję się zarówno w naprawach domowych ekspresów automatycznych, jak i profesjonalnych urządzeń stosowanych w gastronomii.
            </Text>

            <ServiceOffer>
              <StyledPhoto>
                <Image
                  title="Naprawa ekspresów Przemyśl"
                  src={imageUrls.ekspres}
                  alt="Naprawa ekspresów do kawy - profesjonalny serwis ekspresów w Przemyślu"
                  // loading='lazy'
                  fill
                  // srcSet={`${imageUrls.ekspres_300} 500w,
                  // ${imageUrls.ekspres} 1000w`}
                  sizes="(max-width: 500px) 500px, 1000px"
                />
              </StyledPhoto>

              <SubTitle as="h3">
                Najczęstsze problemy z&nbsp;ekspresami do&nbsp;kawy, które naprawiam:
              </SubTitle>
              <Text as="ul" $cross>
                <li><b>ekspres nie zaparza kawy</b> -&nbsp;problem z&nbsp;układem zaparzania, zatkane dysze lub uszkodzenie pompy.</li>
                <li><b>wycieki wody podczas pracy</b> -&nbsp;uszkodzone uszczelki, pęknięte przewody lub nieszczelny bojler.</li>
                <li><b>ekspres wyświetla błędy</b> -&nbsp;usterki elektroniki, czujników lub niewłaściwa konfiguracja urządzenia.</li>
                <li><b>słabe spienianie mleka</b> -&nbsp;problem z&nbsp;dyszą spieniającą, kamień w układzie lub uszkodzona pompa pary.</li>
                <li><b>kawa ma inny smak niż zwykle</b> -&nbsp;konieczność konserwacji, wymiany filtra wody lub odkamieniania.</li>
              </Text>
              <Text $subArea>
                Dzięki nowoczesnym narzędziom diagnostycznym oraz dostępowi do oryginalnych części zamiennych oferuję naprawy, które są nie tylko skuteczne, ale również trwałe.
              </Text>
            </ServiceOffer>

            <SubTitle as="h3">
              Dlaczego warto wybrać moje usługi?
            </SubTitle>
            <Text as="ul" $check>
              <li><h3>Szybka diagnostyka i&nbsp;naprawa</h3>Rozumiem, jak ważna jest kawa w codziennym życiu, dlatego szybko zidentyfikuję usterkę i&nbsp;przywrócę sprawność urządzenia.</li>
              <li><h3>Gwarancja wysokiej jakości usług</h3>Używam wyłącznie oryginalnych części zamiennych, co gwarantuje niezawodność naprawy i&nbsp;dłuższą żywotność ekspresu.</li>
              <li><h3>Wieloletnie doświadczenie</h3>Naprawiam ekspresy do kawy od ponad 20 lat, doskonale rozumiejąc specyfikę różnych marek i&nbsp;modeli.</li>
              <li><h3>Elastyczność i&nbsp;wygoda klienta</h3>Oferuję możliwość naprawy zarówno w warsztacie, jak i&nbsp;w&nbsp;domu lub miejscu pracy klienta.</li>
            </Text>
            <Text>
              <b>Nie pozwól, aby awaria ekspresu popsuła Twój dzień! </b>
              Skontaktuj się ze mną, a sprawnie przywrócę pełną funkcjonalność Twojego urządzenia, abyś mógł cieszyć się ulubioną kawą każdego dnia.
            </Text>
            <ButtonLink href={`tel:${serwis.phone.number}`} title='Naprawa ekspresów do kawy w Przemyślu'>
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

export default CoffeeMachineService;
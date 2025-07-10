import { Container } from "../../components/common/Container";
import { Title } from "../../components/common/Title";
import ReviewsItem from "../../components/ReviewsItem";
import { serwis } from "../../utils/serwis";
import { ButtonLink } from "../../components/common/ButtonLink";
import MetaTags from "../../components/common/MetaTags";
import { dataForMetaTags } from "../../utils/dataForMetaTags";
import { useRouter } from "next/router";
import { getData } from "../../utils/getData";
import { Section } from "../../components/common/Section";
import { HeroText } from "../../styles/home/HomeStyled";

const Reviews = ({ status, reviews, rating, ratingsTotal }) => {
  const path = useRouter().asPath;

  return (
    <>
      <MetaTags
        path={path}
        page={dataForMetaTags.opinie}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />
      <Container>
        <Section>
          <Title>Opinie Klientów</Title>
          {status === "loading" && <p>Ładowanie opinii z google...</p>}
          {status === "success" && reviews.map((item, index) => (
            <ReviewsItem
              item={item}
              key={item.time}
              reviewIndex={index + 1}
            />
          ))}
          {status === "error" &&
            <>
              <p>Wystąpił błąd podczas ładowania opinii.</p>
              <p> Proszę spróbować ponownie później.</p>
            </>
          }
        </Section>

        {status === "success" &&
          <Section>
            <HeroText>
              <strong>Czy jesteś zadowolony z naszych usług? Podziel się swoim doświadczeniem i pomóż innym klientom w podejmowaniu najlepszych decyzji!</strong>
            </HeroText>
            <ButtonLink
              href={serwis.url.addTestimonial}
              rel="noopener noreferrer"
            >
              Zostaw swoją opinię
            </ButtonLink>
          </Section>}

      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getData();

  return { props: data };
};

export default Reviews;
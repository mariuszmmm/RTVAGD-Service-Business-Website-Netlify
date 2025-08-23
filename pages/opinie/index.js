import { Container } from "../../components/common/Container";
import { Title } from "../../components/common/Title";
import ReviewsItem from "../../components/ReviewsItem";
import { serwis } from "../../utils/serwis";
import { ButtonLink } from "../../components/common/ButtonLink";
import MetaTags from "../../components/common/MetaTags";
import { getDataForMetaTags } from "../../utils/dataForMetaTags";
import { getData } from "../../utils/getData";
import { Section } from "../../components/common/Section";
import { HeroText } from "../../components/common/Hero/HeroText";
import { appUrls } from "../../utils/urls";
import { getImageParameters } from "../../utils/imagesParametrs";

const Reviews = ({ status, reviews, rating, ratingsTotal, dataForMetaTags }) => {
  const path = appUrls.opinie;

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
              <strong>Czy jesteś zadowolony z usług? Podziel się swoim doświadczeniem i pomóż innym klientom w podejmowaniu najlepszych decyzji!</strong>
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

// export const getStaticProps = async () => {
//   const data = await getData();

//   return { props: { ...data || null } };
// };

export const getStaticProps = async () => {
  const dataForMetaTags = await getDataForMetaTags();
  const imageParameters = await getImageParameters();
  const data = await getData();
  // console.log("dataForMetaTags", { dataForMetaTags })

  return {
    props: {
      ...(data || null),
      imageParameters: imageParameters || null,
      dataForMetaTags: dataForMetaTags || null,
    },
  };
};

export default Reviews;
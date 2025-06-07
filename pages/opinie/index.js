import { Container } from "../../components/common/Container";
import { Title } from "../../components/common/Title";
import { ReviewsContainer } from "../../styles/opinie/OpinieStyled";
import ReviewsItem from "../../components/ReviewsItem";
import { serwis } from "../../utils/serwis";
import { ButtonLink } from "../../components/common/ButtonLink";
import MetaTags from "../../components/common/MetaTags";
import { dataForMetaTags } from "../../utils/dataForMetaTags";
import { useRouter } from "next/router";
import { getData } from "../../utils/getData";

const Reviews = ({ status, reviews, rating, ratingsTotal }) => {
  const path = useRouter().asPath;

  console.log("Opinie - reviews:", reviews);

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

        <ReviewsContainer>
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
        </ReviewsContainer>
        {status === "success" && <ButtonLink href={serwis.url.addTestimonial}>
          Wystaw opinię
        </ButtonLink>}
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getData();

  console.log("Pobrano dane z Google API:", data);

  return { props: data };
};

export default Reviews;
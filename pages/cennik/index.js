import { Section } from '../../components/common/Section';
import { Container } from '../../components/common/Container';
import { Title } from '../../components/common/Title';
import { serwis } from '../../utils/serwis';
import { PricingTable, PricingTh } from '../../styles/cennik/PricingStyled';
import PricingRow from './PricingRow';
import PricingMetaTags from './PricingMetaTags';
import { GoogleRating } from '../../components/GoogleRating';
import { getSharedStaticProps } from '../../utils/getSharedStaticProps';

const Pricing = ({ rating }) => {
  return (
    <Section >
      <PricingMetaTags />
      <GoogleRating rating={rating} />
      <Container>
        <Title>Cennik</Title>
        <PricingTable>
          <thead>
            <tr>
              <PricingTh>Usługa</PricingTh>
              <PricingTh>Cena</PricingTh>
            </tr>
          </thead>
          <tbody>
            {serwis.pricing.map(({ name, price }, index) => (
              <PricingRow name={name} price={price} key={index} />
            ))}
          </tbody>
        </PricingTable>
      </Container>
    </Section>
  );
};

export const getStaticProps = getSharedStaticProps;

export default Pricing;
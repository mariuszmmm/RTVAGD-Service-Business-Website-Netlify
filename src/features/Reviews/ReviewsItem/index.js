import { Time } from "../../../common/Time";
import { Stars } from "./Stars";
import {
  ItemWrapper,
  Header,
  Photo,
  Author,
  Data,
} from "./styled";
import { Text } from "../../../common/Text";

export const ReviewsItem = ({ item }) => (
  <ItemWrapper itemScope itemType="https://schema.org/Review">
    <Header itemProp="author" itemScope itemType="https://schema.org/Person">
      <Photo
        itemProp="image"
        src={item.profile_photo_url || ""}
        loading="lazy"
      />
      <Data >
        <Author itemProp="name">{item.author_name}</Author>
        <Time time={item.time} />
      </Data>
    </Header>
    <Stars rating={item.rating} />
    <Text itemProp="reviewBody">{item.text}</Text>
  </ItemWrapper>
);
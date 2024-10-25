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
  <ItemWrapper >
    <Header>
      <Photo src={item.profile_photo_url ? item.profile_photo_url : ""} />
      <Data >
        <Author>{item.author_name}</Author>
        <Time time={item.time} />
      </Data>
    </Header>
    <Stars rating={item.rating} />
    <Text>{item.text}</Text>
  </ItemWrapper>
);
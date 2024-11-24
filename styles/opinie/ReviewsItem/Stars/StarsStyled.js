import styled from "styled-components";
import StarIcon from "../../../../public/images/star.svg";

export const StarsWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

export const Star = styled(StarIcon)`
  width: 25px;
  margin: 15px 0 8px;
  color: ${({ theme, $active }) =>
    $active ? theme.color.start_1 : theme.color.start_2};
`;
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.button};
  text-decoration: none;
  transition: filter  0.3s ease;
  
  &:hover {
    filter: brightness(1.2);
  }

  h3 {
    margin-bottom: 0;
  }
`;
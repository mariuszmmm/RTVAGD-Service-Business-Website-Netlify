import { ListItem, NavList, StyledNavLink } from "../styled";

export const SubNav = ({ setShowSubNav }) => (
  <NavList $subNav onClick={() => setShowSubNav(false)}>
    <ListItem $subNav>
      <StyledNavLink to="/naprawa-pralek">Naprawa pralek</StyledNavLink>
    </ListItem>
    <ListItem $subNav>
      <StyledNavLink to="/naprawa-zmywarek">Naprawa zmywarek</StyledNavLink>
    </ListItem>
    <ListItem $subNav>
      <StyledNavLink to="/naprawa-ekspresow">Naprawa ekspresów</StyledNavLink>
    </ListItem>
    <ListItem $subNav>
      <StyledNavLink to="/naprawa-telewizorow">Naprawa telewizorów</StyledNavLink>
    </ListItem>
  </NavList>
);
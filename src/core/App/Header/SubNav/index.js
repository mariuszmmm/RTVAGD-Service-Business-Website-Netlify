import { ListItem, NavList, StyledNavLink } from "../styled";

export const SubNav = ({ setShowSubNav }) => (
  <NavList $subNav onClick={() => setShowSubNav(false)}>
    <ListItem $subNav>
      <StyledNavLink to="/naprawa_pralek">Naprawa pralek</StyledNavLink>
    </ListItem>
    <ListItem $subNav>
      <StyledNavLink to="/naprawa_zmywarek">Naprawa zmywarek</StyledNavLink>
    </ListItem>
    <ListItem $subNav>
      <StyledNavLink to="/naprawa_ekspresow">Naprawa ekspresów</StyledNavLink>
    </ListItem>
    <ListItem $subNav>
      <StyledNavLink to="/naprawa_telewizorow">Naprawa telewizorów</StyledNavLink>
    </ListItem>
  </NavList>
);
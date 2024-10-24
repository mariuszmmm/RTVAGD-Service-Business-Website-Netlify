import { ListItem, NavList, StyledNavLink } from "../styled";
import { SubNavWrapper } from "./styled";

export const SubNav = ({ showSubNav, setShowSubNav }) => {
  return (
    <SubNavWrapper $show={showSubNav}>
      <NavList $subNav onClick={() => setShowSubNav(false)}>
        <ListItem $subNav>
          <StyledNavLink to="/naprawa-pralek" $subNav>Naprawa pralek</StyledNavLink>
        </ListItem>
        <ListItem >
          <StyledNavLink to="/naprawa-zmywarek" $subNav>Naprawa zmywarek</StyledNavLink>
        </ListItem>
        <ListItem >
          <StyledNavLink to="/naprawa-ekspresow" $subNav>Naprawa ekspresów</StyledNavLink>
        </ListItem>
        <ListItem >
          <StyledNavLink to="/naprawa-telewizorow" $subNav>Naprawa telewizorów</StyledNavLink>
        </ListItem>
      </NavList>
    </SubNavWrapper>
  );
};
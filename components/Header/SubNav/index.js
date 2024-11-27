import { ListItem, NavList, StyledLink } from "../styled";
import { SubNavWrapper } from "./styled";
import { usePathname } from 'next/navigation'

const SubNav = ({ showSubNav, setShowSubNav }) => {
  const pathname = usePathname()

  return (
    <SubNavWrapper $show={showSubNav}>
      <NavList $subNav onClick={() => setShowSubNav(false)}>
        <ListItem >
          <StyledLink href="/naprawa-pralek" $active={pathname === "/naprawa-pralek/"} $subNav>
            Naprawa pralek
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink href="/naprawa-zmywarek" $active={pathname === "/naprawa-zmywarek/"} $subNav>
            Naprawa zmywarek
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink href="/naprawa-ekspresow" $active={pathname === "/naprawa-ekspresow/"} $subNav>
            Naprawa ekspresów
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink href="/naprawa-telewizorow" $active={pathname === "/naprawa-telewizorow/"} $subNav>
            Naprawa telewizorów
          </StyledLink>
        </ListItem>
      </NavList>
    </SubNavWrapper>
  );
};

export default SubNav;
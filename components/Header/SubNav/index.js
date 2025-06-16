import { appUrls } from "../../../utils/urls";
import { ListItem, NavList, StyledLink } from "../styled";
import { SubNavWrapper } from "./styled";
import { usePathname } from 'next/navigation';

const SubNav = ({ showSubNav }) => {
  const pathname = usePathname()

  return (
    <SubNavWrapper $show={showSubNav}>
      <NavList $subNav>
        <ListItem >
          <StyledLink
            href={appUrls.naprawa_pralek}
            $active={pathname === appUrls.naprawa_pralek && showSubNav}
            $subNav
          >
            Naprawa pralek
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink
            href={appUrls.naprawa_suszarek}
            $active={pathname === appUrls.naprawa_suszarek && showSubNav}
            $subNav
          >
            Naprawa suszarek
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink
            href={appUrls.naprawa_zmywarek}
            $active={pathname === appUrls.naprawa_zmywarek && showSubNav}
            $subNav
          >
            Naprawa zmywarek
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink
            href={appUrls.naprawa_ekspresow}
            $active={pathname === appUrls.naprawa_ekspresow && showSubNav}
            $subNav
          >
            Naprawa ekspresów
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink
            href={appUrls.naprawa_telewizorow}
            $active={pathname === appUrls.naprawa_telewizorow && showSubNav}
            $subNav
          >
            Naprawa telewizorów
          </StyledLink>
        </ListItem>
      </NavList>
    </SubNavWrapper>
  );
};

export default SubNav;
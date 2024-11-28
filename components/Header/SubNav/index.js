import { ListItem, NavList, StyledLink } from "../styled";
import { SubNavWrapper } from "./styled";
import { usePathname } from 'next/navigation';
import { sendGTMEvent } from '@next/third-parties/google';

const SubNav = ({ showSubNav, setShowSubNav }) => {
  const pathname = usePathname()

  return (
    <SubNavWrapper $show={showSubNav}>
      <NavList $subNav onClick={() => setShowSubNav(false)}>
        <ListItem >
          <StyledLink
            href="/naprawa-pralek"
            $active={pathname === "/naprawa-pralek/"}
            $subNav
            onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'naprawa-pralek' })}
          >
            Naprawa pralek
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink
            href="/naprawa-zmywarek"
            $active={pathname === "/naprawa-zmywarek/"}
            $subNav
            onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'naprawa-zmywarek' })}
          >
            Naprawa zmywarek
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink
            href="/naprawa-ekspresow"
            $active={pathname === "/naprawa-ekspresow/"}
            $subNav
            onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'naprawa-ekspresow' })}
          >
            Naprawa ekspresów
          </StyledLink>
        </ListItem>
        <ListItem >
          <StyledLink
            href="/naprawa-telewizorow"
            $active={pathname === "/naprawa-telewizorow/"}
            $subNav
            onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'naprawa-telewizorow' })}
          >
            Naprawa telewizorów
          </StyledLink>
        </ListItem>
      </NavList>
    </SubNavWrapper>
  );
};

export default SubNav;
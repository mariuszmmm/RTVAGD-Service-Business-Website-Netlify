import {
  HeaderContainer,
  HeaderWrapper,
  ListItem,
  Logo,
  NavList,
  StyledNavLink,
} from "./styled";
import { serwis } from "../../../utils/serwis";
import { StyledLink } from "../../../common/Buttons";
import { useEffect, useState } from "react";
import { SubNav } from "./SubNav";
export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSubNav, setShowSubNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
        setShowSubNav(false);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo to="/">Serwis RTV&nbsp;i&nbsp;AGD</Logo>
        <nav>
          <NavList>
            <ListItem>
              <StyledNavLink to="/">Strona Główna</StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to="/o-mnie">O mnie</StyledNavLink>
            </ListItem>
            <ListItem
              onMouseEnter={() => setShowSubNav(true)}
              onTouchStart={() => setShowSubNav(true)}
              onMouseLeave={() => setShowSubNav(false)}
            >
              <StyledNavLink as="div" disabled>Usługi</StyledNavLink>
              <SubNav showSubNav={showSubNav} setShowSubNav={setShowSubNav} />
            </ListItem>
            <ListItem>
              <StyledNavLink to="/cennik">Cennik</StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to="/opinie">Opinie</StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
            </ListItem>
          </NavList>
        </nav>
        <StyledLink href={serwis.url.addTestimonial} $opinia $hidden={scrolled}>
          Wystaw opinię
        </StyledLink>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
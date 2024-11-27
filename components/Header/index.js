import {
  HeaderContainer,
  HeaderWrapper,
  ListItem,
  Logo,
  NavList,
  StyledLink,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { StyledButtonLink } from "../common/Buttons";
import { useEffect, useState } from "react";
import SubNav from "./SubNav";
import { usePathname } from 'next/navigation'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSubNav, setShowSubNav] = useState(false);
  const pathname = usePathname()
  const servicesPath = pathname.includes("naprawa-");

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
        <Logo href="/">Serwis RTV&nbsp;i&nbsp;AGD</Logo>
        <nav>
          <NavList>
            <ListItem>
              <StyledLink href="/" $active={pathname === "/"}>
                Strona Główna
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink href="/o-mnie" $active={pathname === "/o-mnie/"}              >
                O mnie
              </StyledLink>
            </ListItem>
            <ListItem
              onMouseEnter={() => setShowSubNav(true)}
              onTouchStart={() => setShowSubNav(true)}
              onMouseLeave={() => setShowSubNav(false)}
            >
              <StyledLink as="div"
                $active={servicesPath}
                disabled
              >Usługi
              </StyledLink>
              <SubNav showSubNav={showSubNav} setShowSubNav={setShowSubNav} />
            </ListItem>
            <ListItem>
              <StyledLink href="/cennik" $active={pathname === "/cennik/"}>Cennik</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink href="/opinie" $active={pathname === "/opinie/"}>Opinie</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink href="/kontakt" $active={pathname === "/kontakt/"}>Kontakt</StyledLink>
            </ListItem>
          </NavList>
        </nav>
        <StyledButtonLink href={serwis.url.addTestimonial} $opinia $hidden={scrolled}>
          Wystaw opinię
        </StyledButtonLink>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
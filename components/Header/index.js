import {
  HeaderContainer,
  HeaderWrapper,
  ListItem,
  Logo,
  NavList,
  StyledLink,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { ButtonLink } from "../common/ButtonLink";
import { useEffect, useState } from "react";
import SubNav from "./SubNav";
import { usePathname } from 'next/navigation';
import { GoogleRating } from '../GoogleRating';
import { Emoticon } from '../common/Emoticon';
import { appUrls, imageUrls } from '../../utils/urls';
import Image from "next/image";

const Header = ({ rating }) => {
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
        <Logo href={appUrls.home}>
          {` ${serwis.shortName} `}
          <Emoticon $logo>
            <Image
              src={imageUrls.logo}
              alt="Przemyśl"
              fill
            />
          </Emoticon>
        </Logo>
        <nav>
          <NavList>
            <ListItem>
              <StyledLink
                href={appUrls.home}
                $active={pathname === "/"}
              >
                Strona Główna
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink
                href={appUrls.o_mnie}
                $active={pathname === "/o-mnie/"}
              >
                O mnie
              </StyledLink>
            </ListItem>
            <ListItem
              onMouseEnter={() => setShowSubNav(true)}
              onTouchStart={() => setShowSubNav(true)}
              onMouseLeave={() => setShowSubNav(false)}
            >
              <StyledLink as="div"
                $active={servicesPath && !showSubNav}
                $disabled
              >
                Usługi
              </StyledLink>
              <SubNav showSubNav={showSubNav} />
            </ListItem>
            <ListItem>
              <StyledLink
                href={appUrls.opinie}
                $active={pathname === "/opinie/"}
              >
                Opinie
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink
                href={appUrls.kontakt}
                $active={pathname === "/kontakt/"}
              >
                Kontakt
              </StyledLink>
            </ListItem>
          </NavList>
        </nav>
        <ButtonLink
          href={serwis.url.addTestimonial}
          rel="nofollow"
          $opinia
          $hidden={scrolled}
          title="Wystaw opinię"
        >
          Wystaw opinię
        </ButtonLink>
        {rating && <GoogleRating rating={rating} hidden={scrolled} />}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
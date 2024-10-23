import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 0 10px;
  }
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  ul li {
    margin: 0 2px;
    font-size: clamp(0.3rem, 1.6vw, 0.9rem);

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      margin: 0 1px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      margin: 0;
    }
  }
`;

export const NavList = styled.ul`
  background-color: ${({ theme }) => theme.color.primary};
  position: relative;

  ${({ $subNav }) => $subNav && css`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-70%);
    display: flex;
    flex-direction: column;
    z-index: 1;
    gap: 5px;

    li:first-child, {
      padding-top: 10px;
    }

    li:last-child {
      padding-bottom: 10px;
    }
  `}
`;

export const ListItem = styled.li`
  padding: 0;
  
  ${({ $subNav }) => $subNav && css`
    padding: 0 5px;
  `}
`;


export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  padding: 8px 10px;
  transition: background-color 0.3s ease;
  display: flex;
  border-radius: 5px;
  min-width: max-content;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 5px 3px;
    border-radius: 2px;
    margin: 0 1px;
  }

  &.active,
  &:hover {
    background-color: ${({ theme }) => theme.color.emperor};
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  font-size: clamp(0.5rem, 2.5vw, 1.3rem);
  font-weight: bold;
`;

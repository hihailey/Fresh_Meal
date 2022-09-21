import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: none;
  height: 85px;
  display: flex;
  z-index: 12;
  justify-content: space-around;
  margin-left: -100px;
`;

export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #2d6a4f;
    transition: 0.4s;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogoLink = styled(Link)`
  margin: 0px 20px;
`;

export const SubNav = styled.nav`
  background: #ede3da;
  height: 105px;
  display: flex;
  z-index: 12;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;
    width: 100vw;
    padding: 0px 120px;
    justify-content: space-between;
  }

  img {
    height: 52px;
  }
`;

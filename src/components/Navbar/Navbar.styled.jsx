import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: none;
  height: 85px;
  display: flex;
  z-index: 12;
  justify-content: space-around;
  width: 100%;
`;

export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  &:hover {
    color: #2d6a4f;
    transition: 0.4s;
  }
`;

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.3fr 1fr 1fr 1fr;
`;

export const LogoLink = styled(Link)`
  margin: 0px 20px;
  display: flex;
  justify-content: center;
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

import React from "react";
import LogoSvg from "../icons/LogoSvg";
import { Nav, NavLink, NavMenu, LogoLink } from "./Navbar.styled";

/* NAVBAR*/
export default function Navbar() {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink>OUR MENU</NavLink>
          <NavLink>HOW IT WORKS</NavLink>
          <NavLink>PLANS & PRICING</NavLink>
          <LogoLink>
            <LogoSvg />
          </LogoLink>
          <NavLink>GET $50</NavLink>
          <NavLink>LOGIN</NavLink>
          <NavLink>GET STARTED</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

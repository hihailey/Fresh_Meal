import React from "react";
import LogoSvg from "../icons/LogoSvg";
import { LogoLink, SubNav } from "./Navbar.styled";
import progress from "../../img/progress.png";

/* NAVBAR*/
export default function SubNavbar() {
  return (
    <>
      <SubNav>
        <div>
          <LogoLink to="/">
            <LogoSvg />
          </LogoLink>
          <img alt="progress" src={progress}></img>
        </div>
      </SubNav>
    </>
  );
}

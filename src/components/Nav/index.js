import React, { useState } from "react";
import MenuBar from "./MenuBar";
import {
  NavContainer,
  NavBurger,
  Burger,
  NavLogo,
  Module,
  MenuBackGround,
} from "./style";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <NavContainer>
        <NavLogo>logo</NavLogo>
        <NavBurger onClick={handleOpen}>
          <Burger horizontalDash={menuOpen}></Burger>
        </NavBurger>
        <Module horizontalDash={menuOpen}>
          <MenuBar />
        </Module>
      </NavContainer>
      <MenuBackGround horizontalDash={menuOpen}></MenuBackGround>
    </>
  );
};

export default Nav;

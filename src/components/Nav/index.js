import React, { useState } from "react";
import MenuBar from "./MenuBar";
import {
  NavContainer,
  NavBurger,
  Burger,
  NavLogo,
  Module,
  MenuBackGround,
  Image,
} from "./style";
import logo from "../../assets/logo.svg";

const Nav = ({toggleMode, mode}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <NavContainer>
        <NavLogo>
          <a href="/#" style={{outline:'none'}}>
            <Image src={logo} />
          </a>
        </NavLogo>
        <button onClick={toggleMode}>{mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
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

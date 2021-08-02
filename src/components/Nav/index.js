import React, { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import {
  NavContainer,
  NavBurger,
  Burger,
  NavLogo,
  Module,
  MenuBackGround,
  Image,
  ButtonMode,
} from "./style";
import logo from "../../assets/logo.svg";

const Nav = ({ toggleMode, mode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const scroller = () => {
      if (window.scrollY > 100) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    };

    window.addEventListener("scroll", scroller);
  }, []);

  return (
    <>
      <NavContainer>
        <NavLogo>
          <a href="/#" style={{ outline: "none" }}>
            <Image src={logo} />
          </a>
          <ButtonMode onClick={toggleMode}>
            {mode === "dark" ? "Light Mode" : "Dark Mode"}
          </ButtonMode>
        </NavLogo>
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

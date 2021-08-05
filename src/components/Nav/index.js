import React, { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import sun from "../../assets/sun.png";
import night from "../../assets/night.png";
import {
  NavContainer,
  NavBurger,
  Burger,
  NavLogo,
  Module,
  MenuBackGround,
  Image,
  ButtonMode,
  RightContent,
  ImageSun,
  ImageNight,
} from "./style";
import logo from "../../assets/logo.svg";

const Nav = ({ toggleMode, mode, sunrise, sunset }) => {
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
        </NavLogo>
        <RightContent>
          <NavBurger onClick={handleOpen}>
            <Burger horizontalDash={menuOpen}></Burger>
          </NavBurger>
          <Module horizontalDash={menuOpen}>
            <MenuBar />
          </Module>
          <ButtonMode onClick={toggleMode}>
            {mode === "dark" ? (
              <ImageSun src={sun} day={sunrise} />
            ) : (
              <ImageNight src={night} nightImg={sunset} />
            )}
          </ButtonMode>
        </RightContent>
      </NavContainer>
      <MenuBackGround horizontalDash={menuOpen}></MenuBackGround>
    </>
  );
};

export default Nav;

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
  MenuButtons
} from "./style";
import logo from "../../assets/logo.svg";

const Nav = ({ toggleMode, mode, sunrise, sunset }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <NavContainer>
        <NavLogo>
          <a href="/#" style={{ outline: "none" }}>
            <Image src={logo} />
          </a>
        </NavLogo>
        <RightContent>
          <Module>
            <MenuBar menuOpen={menuOpen} />
          </Module>
          <MenuButtons>
            <NavBurger onClick={handleOpen}>
              <Burger horizontalDash={menuOpen}></Burger>
            </NavBurger>
            <ButtonMode onClick={toggleMode}>
              {mode === "dark" ? (
                <ImageSun src={sun} day={sunrise} />
              ) : (
                <ImageNight src={night} nightImg={sunset} />
              )}
            </ButtonMode>
          </MenuButtons>
        </RightContent>
      </NavContainer>
      <MenuBackGround horizontalDash={menuOpen}></MenuBackGround>
    </>
  );
};

export default Nav;

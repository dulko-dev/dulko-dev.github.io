import React, { useState } from "react";
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
  MenuButtons,
  ResumeCv,
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
            <a
              href="https://drive.google.com/u/0/uc?id=1bD6Q0oryW8rrJslGpdWmmbl0uovgD6IY&export=download"
              style={{ outline: "none" }}
            >
              <ResumeCv type="button">
                <span id="spanRes">Resume</span>
                <span id="spanDow">Download</span>
              </ResumeCv>
            </a>
          </MenuButtons>
        </RightContent>
      </NavContainer>
      <MenuBackGround horizontalDash={menuOpen}></MenuBackGround>
    </>
  );
};

export default Nav;

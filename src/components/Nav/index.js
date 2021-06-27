import React, {useState} from "react";
import { NavContainer, NavBurger, Burger, NavLogo } from "./style";

const Nav = () => {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavContainer>
      <NavLogo>logo</NavLogo>
      <NavBurger onClick={() => setMenuOpen(!menuOpen)}>
        <Burger horizontalDash={menuOpen}></Burger>
      </NavBurger>
    </NavContainer>
  );
};

export default Nav;

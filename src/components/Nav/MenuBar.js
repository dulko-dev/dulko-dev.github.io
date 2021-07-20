import React from "react";
import { Ul, Li, TitleMenu } from "./style";

const MenuBar = () => {
  return (
    <>
      <TitleMenu>Navigation</TitleMenu>
      <Ul>
        <Li>Home</Li>
        <Li>About</Li>
        <Li>Projects</Li>
        <Li>Contact</Li>
      </Ul>
    </>
  );
};

export default MenuBar;

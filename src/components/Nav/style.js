import styled, { css } from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  transition: all 0.5s;
  &:hover {
    transition: all 0.5s;
    opacity: 0.7;
  }
`;

export const NavLogo = styled.div`
  z-index: 1;
  margin-left: 50px;
`;

export const NavBurger = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  margin-right: 50px;
`;

export const Burger = styled.div`
  width: 50px;
  height: 6px;
  background-color: rgb(238, 238, 238);
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  z-index: 2;
  ${({ horizontalDash }) =>
    horizontalDash &&
    css`
      transform: translateX(-50px);
      background-color: transparent;
    `}

  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    background-color: rgb(238, 238, 238);
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }
  &:before {
    transform: translateY(-16px);
    ${({ horizontalDash }) =>
      horizontalDash &&
      css`
        transform: rotate(45deg) translate(35px, -35px);
        background-color: rgb(238, 238, 238);
      `}
  }
  &:after {
    transform: translateY(16px);
    ${({ horizontalDash }) =>
      horizontalDash &&
      css`
        transform: rotate(-45deg) translate(35px, 35px);
        background-color: rgb(238, 238, 238);
      `}
  }
`;

export const Module = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.horizontalDash ? "1" : "0")};
  visibility: ${(props) => (props.horizontalDash ? "visibility" : "hidden")};
`;

export const MenuBackGround = styled.div`
  ${({ horizontalDash }) =>
    horizontalDash &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.9);
      transition: background-color 0.5s;
    `}
`;

// MenuBar

export const Ul = styled.ul``;
export const Li = styled.li`
  font-size: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  color: rgb(238, 238, 238);
  font-family: "Poppins", sans-serif;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    color: rgba(238, 238, 238, 0.4);
    /* rgb() */
  }
`;

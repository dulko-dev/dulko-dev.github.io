import styled, { css } from "styled-components";

export const NavContainer = styled.div`
  height: 10vh;
  margin: 0 auto;
  max-width: 1200px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBurger = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

export const Burger = styled.div`
  width: 50px;
  height: 6px;
  background-color: black;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  z-index: 1;
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
    background-color: black;
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
  &:hover:after,
  &:hover:before {
    background-color: rgba(238, 238, 238, 0.4);
  }
`;

export const NavLogo = styled.div``;

export const Module = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.horizontalDash ? "1" : "0")};
  visibility: ${(props) => (props.horizontalDash ? "visibility" : "hidden")};
`;

export const MenuBackGround = styled.div`
  ${({ horizontalDash }) =>
    horizontalDash &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
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

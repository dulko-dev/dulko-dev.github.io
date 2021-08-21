import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  height: 150px;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 1fr;
`;

export const Image = styled.img`
  -webkit-box-reflect: below -30% linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  width: 80px;
  height: 80px;
`;

export const NavLogo = styled.div`
  margin-left: 50px;
  text-align: center;
  grid-column: 1/2;
  grid-row: 1/2;
`;

export const ButtonMode = styled.button`
  position: relative;
  padding: 13px 30px;
  margin-top: 15px;
  display: block;
  border: none;
  border-radius: 20px;
`;

export const ImageSun = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  transition: transform 0.4s;
  transform: translateX(40px);
  ${({ day }) =>
    day &&
    css`
      transform: translateX(0px);
      transition: transform 0.4s;
    `};
`;

export const ImageNight = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  transform: translateX(-40px);
  transition: transform 0.4s;
  ${({ nightImg }) =>
    nightImg &&
    css`
      transform: translateX(0px);
    `}
`;

export const RightContent = styled.div`
  display: flex;
  position: relative;
  grid-column: 2/3;
  grid-row: 1/2;
  justify-content: space-between;
  margin-right: 50px;
`;

export const MenuButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavBurger = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
`;

export const Burger = styled.div`
  width: 50px;
  height: 6px;
  background-color: rgb(238, 238, 238);
  border-radius: 5px;
  transition: all 0.4s ease-in-out;
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
    transition: all 0.4s ease-in-out;
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
  position: relative;
  width: 100%;
  z-index: 2;
  transition: all 0.4s;
`;

export const MenuBackGround = styled.div`
  position: fixed;
  transform: translateY(-100px);
  top: 0;
  width: 100%;
  height: 150px;
  transition: all 1s;
  ${({ horizontalDash }) =>
    horizontalDash &&
    css`
      transition: all 0.4s;
      transform: translateY(0);
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.75);
    `}
`;

// MenuBar

export const Ul = styled.ul`
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: center;
  transform: translateY(-160px);
  transition: all 1s;
  ${({ horizontalDash }) =>
    horizontalDash &&
    css`
      transition: all 1s;
      transform: translateY(0);
      transition-delay: 0.4s;
    `}
`;

export const Li = styled.li`
  position: relative;
  margin-right: 20px;
  font-size: 30px;
  cursor: pointer;
  color: rgb(238, 238, 238);
  font-family: "Poppins", sans-serif;
  transition: opacity 0.4s ease-in-out;
  &:hover {
    transition: opacity 0.4s ease-in-out;
    opacity: 0.6;
  }
`;

export const LiSociety = styled.li`
  position: relative;
  margin: 0 30px;
  font-size: 30px;
  cursor: pointer;
  color: rgb(238, 238, 238);
  font-family: "Poppins", sans-serif;
  transition: opacity 0.4s ease-in-out;
  &:hover {
    transition: opacity 0.4s ease-in-out;
    opacity: 0.6;
  }
`;

export const BreakLine = styled.div`
  height: 100%;
  width: 5px;
  background-color: #ffffff;
`;

export const Society = styled(FontAwesomeIcon)``;

export const ImageCV = styled.img``;

import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  height: 150px;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 200px) {
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.img`
  -webkit-box-reflect: below -30% linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  max-width: 80px;
  height: 80px;
`;

export const NavLogo = styled.div`
  margin-left: 20px;
  text-align: center;
  grid-column: 1/2;
  grid-row: 1/2;
  @media (max-width: 200px) {
    display: none;
  }
`;

export const ButtonMode = styled.button`
  position: relative;
  padding: 13px 30px;
  margin-top: 5px;
  display: block;
  border: none;
  border-radius: 20px;
  @media (max-width: 1100px) {
    margin-top: 10px;
    padding: 8px 25px;
  }
  @media (max-width: 200px) {
    display: none;
  }
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
  margin-right: 20px;
`;

export const ResumeCv = styled.button`
  position: relative;
  width: 100px;
  height: 30px;
  font-family: "Montserrat", sans-serif;
  border: 2px solid rgb(238, 238, 238);
  font-size: 13px;
  margin-left: -45px;
  border-radius: 5px;
  background-color: inherit;
  color: #eeeeee;
  text-transform: uppercase;
  transition: all 0.6s;
  margin-top: 5px;
  &:hover {
    transition: all 0.6s;
    background-color: rgb(238, 238, 238);
    color: #000000;
  }
  & #spanDow {
    display: none;
  }
  &:hover #spanDow {
    display: block;
  }
  &:hover #spanRes {
    display: none;
  }

  @media (max-width: 1100px) {
    font-size: 10px;
    padding: 8px 13px;
    margin-left: -25px;
  }
  @media (max-width: 200px) {
    display: none;
  }
`;

export const MenuButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  @media (max-width: 1100px) {
    margin-left: 30px;
  }
`;

export const ButtonAnchor = styled.a`
  outline: none;
`;

export const NavBurger = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-top: 10px;
  @media (max-width: 1100px) {
    width: 40px;
    height: 40px;
  }
`;

export const Burger = styled.div`
  width: 45px;
  height: 8px;
  background-color: rgb(238, 238, 238);
  border-radius: 5px;
  transition: all 0.4s ease-in-out;
  z-index: 2;

  @media (max-width: 1100px) {
    height: 6px;
    width: 35px;
  }
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
    width: 45px;
    height: 8px;
    background-color: rgb(238, 238, 238);
    border-radius: 5px;
    transition: all 0.4s ease-in-out;

    @media (max-width: 1100px) {
      height: 6px;
      width: 35px;
    }
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
  text-align: center;
  width: 100%;
  z-index: 2;
  transition: all .4s;
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
      transform: translateY(0);
      transition: all 0.4s;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.75);
    `}

  @media (max-width:700px) {
    ${({ horizontalDash }) =>
      horizontalDash &&
      css`
        height: 100%;
        width: 100%;
        transition: all 0.6s;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.85);
      `}
  }
`;

// MenuBar

export const TitleNavigation = styled.h2`
  color: #00b300;
  font-size: 2em;
  padding-bottom: 20px;
  display: none;

  @media (max-width: 700px) {
    transition: display 1s;
    transition-delay: 0.4s;
    display: block;
  }
`;

export const Ul = styled.ul`
  position: absolute;
  left: 0;
  top: -160px;
  max-width: 500px;
  width: 100%;
  display: inline-flex;
  height: 150px;
  align-items: center;
  justify-content: center;
  transition: top 1s;
  margin-left: 100px;

  ${({ horizontalDash }) =>
    horizontalDash &&
    css`
      top:0;
      transition-delay: 0.4s;
      transition: top 1s;
    `}

  @media (max-width: 1385px) {
    display: flex;
    align-items: flex-start;
    left: 50%;
    top: -140px;
    position: absolute;
    max-width: 500px;
    height: 50px;
    justify-content: center;
    transform: translateY(0) translateX(-50%);
    -webkit-transform: translateY(0) translateX(-50%);
    transition: top 1s;
    margin-left: 0;

    ${({ horizontalDash }) =>
      horizontalDash &&
      css`
        top:20px;
        transition: top 1s;
        transition-delay: 0.5s;
      `}
  }

  @media (max-width: 700px) {
    position: fixed;
    display: none;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    visibility: hidden;
    opacity: 0;
    ${({ horizontalDash }) =>
      horizontalDash &&
      css`
        display: block;
        visibility: visible;
        opacity: 1;
        transition: opacity 1s;
        transition-delay: 0.4s;
      `}
  }
`;

export const UlSocial = styled.ul`
  position: absolute;
  right: 0;
  bottom: 160px;
  max-width: 500px;
  width: 100%;
  display: inline-flex;
  height: 150px;
  align-items: center;
  justify-content: center;
  transition: bottom 1s;
  margin-right: 100px;

  @media (max-width: 1385px) {
    display: flex;
    align-items: flex-end;
    left: 50%;
    bottom: 160px;
    transform: translateX(-50%) translateY(0);
    -webkit-transform: translateX(-50%) translateY(0);
    position: absolute;
    max-width: 500px;
    height: 50px;
    width: 100%;
    transition: bottom 1s;
    margin-right: 0;
  }

  ${({ horizontalDash }) =>
    horizontalDash &&
    css`
      bottom:0;
      transition-delay: 0.4s;
      transition: bottom 1s;

      @media (max-width: 1385px) {
        bottom: 20px;
        transition-delay: 0.4s;
        transition: bottom 1s;
      }
    `}

  @media (max-width:700px) {
    visibility: hidden;
  }
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
  @media (max-width: 700px) {
    padding-bottom: 20px;
    margin-right: 0;
    text-align: center;
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

export const Society = styled(FontAwesomeIcon)``;

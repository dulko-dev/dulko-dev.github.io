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
      `}
  }
  &:after {
    transform: translateY(16px);
    ${({ horizontalDash }) =>
      horizontalDash &&
      css`
        transform: rotate(-45deg) translate(35px, 35px);
      `}
  }
`;

export const NavLogo = styled.div``;

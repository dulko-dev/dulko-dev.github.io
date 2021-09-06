import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const textAnimation = keyframes`
to {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50px);
}
`;

export const AboutContainer = styled.div`
  position: relative;
`;

export const AboutContent = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const AboutTag = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  font-size: 7em;
  width: 50%;
  background-color: ${({ theme }) => theme.lightBackground};
  height: 100%;
  ${({ fix }) =>
    fix &&
    css`
      position: fixed;
      top: 0;
      left: 0;
    `}

  // ---- media ---- //
  @media (max-width:1000px) {
    height: 100%;
    width: 100%;
    position: relative;
  }
`;

export const Image = styled.img`
  margin: 20px auto 0 auto;
  display: block;
  max-width: 150px;

  // ---- media ---- //
  @media (max-width: 1000px) {
    max-width: 200px;
  }
  @media (max-width: 470px) {
    max-width: 150px;
  }
  @media (max-width: 250px) {
    max-width: 100px;
  }
`;

export const AboutTagTitle = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.title};
  text-align: center;
  font-size: 60px;

  // ---- media ---- //

  @media (max-width: 1000px) {
    margin-bottom: 20px;
    font-size: 100px;
  }
  @media (max-width: 470px) {
    font-size: 80px;
  }
  @media (max-width: 250px) {
    font-size: 40px;
  }
`;

export const TextTag = styled.div`
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: 0;
  background-color: ${({ theme }) => theme.darkBackground};
  color: ${({ theme }) => theme.text};

  @media (max-width: 1000px) {
    height: 100%;
    width: 100%;
    position: relative;
  }
`;

export const TextTagP = styled.p`
  font-size: 1.4em;
  overflow: hidden;
  margin: 10px;
  height: 0;
  transition: height 1s;
  line-height: 1.2em;
  text-indent: 40px;
  ${({ open }) =>
    open &&
    css`
      height: 240px;
      transition: height 1s;
    `}
`;

export const Strenghts = styled.ul`
  font-size: 1.4em;
  overflow: hidden;
  margin: 10px;
  height: 0;
  transition: height 1s;
  ${({ open }) =>
    open &&
    css`
      height: 180px;
      transition: height 1s;
    `}
`;

export const TextTagTitle = styled.h2`
  line-height: 1.5em;
  font-size: 2em;
  position: relative;
  cursor: pointer;
  padding: 20px;
  transition: background-color 0.4s;
  ${({ open }) =>
    open &&
    css`
      background-color: ${({ theme }) => theme.bgFrameAbout};
      color: ${({ theme }) => theme.bgTextColor};
      transition: background-color 0.4s;
    `}
  @media (max-width:1000px) {
    font-size: 2.5em;
  }
  @media (max-width: 470px) {
    font-size: 2em;
  }
  @media (max-width: 400px) {
    font-size: 1.5em;
  }
`;

export const PlusIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  pointer-events: none;

  @media (max-width: 470px) {
    width: 16px;
    height: 16px;
  }
  @media (max-width: 400px) {
    width: 12px;
    height: 12px;
  }
  @media (max-width: 300px) {
    display: none;
  }
`;

export const IconContener = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 0;
  transition: height 1s;
  ${({ open }) =>
    open &&
    css`
      height: 250px;
      transition: height 1s;
    `}
`;

export const IconDiv = styled.div`
  margin: 0 10px;
  position: relative;
  transition: all 0.4s;
  transform: translateY(30px);
  opacity: 0;
  font-size: 12px;
  &:hover .iconText {
    animation-name: ${textAnimation};
    animation-fill-mode: forwards;
    animation-duration: 1.5s;
  }
  &:hover .iconImg {
    transition: all 0.4s;
    opacity: 0.1;
  }
  &:nth-child(6),
  &:nth-child(8),
  &:nth-child(9),
  &:nth-child(12) {
    font-size: 9px;
  }
`;

export const IconImage = styled.img`
  width: 64px;
  height: 64px;
`;

export const Arrow = styled(FontAwesomeIcon)`
  position: fixed;
  cursor: pointer;
  bottom: 3%;
  left: 0;
  margin-left: 30px;
  color: #0093d9;
  transition: opacity 1s;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  transform: scale(3);
  @media (max-width: 470px) {
    transform: scale(2);
    margin-left: 20px;
  }

  &.fade-enter,
  &.fade-enter-done {
    pointer-events: all;
    opacity: 1;
  }
  &:hover {
    color: #ffffff;
    transition: color 0.4s ease-in-out;
  }
`;

export const IconText = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`;

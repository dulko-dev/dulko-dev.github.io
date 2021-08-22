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
  @media (max-width:1000px) {
    height: 100%;
    width: 100%;
    position: relative;
  }
`;

export const Image = styled.img`
  margin: 20px auto 0 auto;
  display: block;
  max-width: 200px;
  @media (max-width: 980px) {
    margin: 20px 0;
  }
`;

export const AboutTagTitle = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.title};
  text-align: center;
  @media (max-width: 1000px) {
    margin-bottom: 20px;
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
  ${({ open }) =>
    open &&
    css`
      height: 160px;
      transition: height 1s;
    `}
`;

export const IconContener = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 0;
  transition: height 1s;
  ${({ open }) =>
    open &&
    css`
      height: 200px;
      transition: height 1s;
    `}
`;

export const TextTagTitle = styled.h2`
  font-size: 3em;
  position: relative;
  cursor: pointer;
  padding: 20px;
  transition: background-color 0.4s;
  ${({ open }) =>
    open &&
    css`
      background-color: #b2b2b2;
      transition: background-color 0.4s;
    `}
`;

export const PlusIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const IconDiv = styled.div`
  margin: 5px 25px 0 25px;
  position: relative;
  transition: all 0.4s;
  transform: translateY(30px);
  opacity: 0;
  &:hover .iconText {
    animation-name: ${textAnimation};
    animation-fill-mode: forwards;
    animation-duration: 1.5s;
  }
  &:hover .iconImg {
    transition: all 0.4s;
    opacity: 0.1;
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
  left: 2%;
  color: #0093d9;
  transition: opacity 1s;
  z-index: 1;
  opacity: 0;
  pointer-events: none;

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

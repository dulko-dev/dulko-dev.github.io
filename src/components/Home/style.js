import styled, { css, keyframes } from "styled-components";
import bg from "../../assets/programming.jpg";
import small from "../../assets/smallBg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rubber = keyframes`
0%{
  transform: scale3d(1,1,1);
}

30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  85% {
    transform: scale3d(1.05, 0.95, 1);
  }

100% {
  transform: scale3d(1,1,1);
}
`;

export const HomeComponent = styled.div`
  height: calc(100vh - 150px);
  width: 100%;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.85;
    transition: all 0.5s ease-in-out;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }

  @media (max-width: 1100px) {
    height: calc(100vh - 150px);
    width: 100%;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      opacity: 0.85;
      transition: all 0.5s ease-in-out;
      background-image: url(${small});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  margin-left: 200px;
  margin-right: 100px;
  max-width: 1500px;
  padding-top: 50px;
  color: rgb(238, 238, 238);
  font-size: 35px;
  height: 50vh;

  @media (max-width: 1475px) {
    margin-left: 90px;
  }

  @media (max-width: 1100px) {
    height: 70vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding-top: 0;
  }

  @media (max-width: 1100px) and (max-height: 1100px) {
    height: 100%;
  }

  @media (max-height: 500px) and (min-width: 1100px) {
    height: 30vh;
  }
  @media (max-height: 390px) and (min-width: 1100px) {
    height: 15vh;
  }
`;

export const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 5px;
  height: 100vh;
  background-color: #a6a6a6;
  z-index: 1;
  border: none;
`;

export const Progress = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 100px;
  background-color: #0093d9;
`;
export const Text = styled.div`
  position: relative;
  margin-left: 100px;
  margin-right: 50px;
  color: rgb(238, 238, 238);
  font-size: 50px;
  align-self: center;
  margin-bottom: 20px;

  @media (max-width: 1170px) {
    margin-left: 75px;
    margin-right: 20px;
  }
  @media (max-width: 1100px) {
    margin: 0 auto;
    text-align: center;
    color: #e87400;
    order: 1;
    font-size: 55px;
  }
  @media (max-width: 930px) and (min-height: 1300px) {
    font-size: 60px;
  }
  @media (max-width: 760px) and (min-height: 1300px) {
    font-size: 45px;
  }
  @media (max-width: 600px) and (min-height: 1300px) {
    font-size: 35px;
  }
  @media (max-width: 460px) and (min-height: 1300px) {
    font-size: 25px;
  }
  @media (max-width: 1100px) and (min-width: 931px) and (min-height: 1300px) {
    font-size: 70px;
  }
  @media (max-width: 1100px) and (max-height: 770px) {
    font-size: 45px;
  }
  @media (max-height: 500px) and (min-width: 1100px) {
    font-size: 30px;
  }
`;

export const TitleText = styled.h3`
  margin-left: -55px;
  font-family: "Merienda", cursive;
  font-size: 25px;
  color: #bfbfbf;
  padding-bottom: 20px;
  text-align: left;

  @media (max-width: 1385px) {
    font-size: 20px;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Letter = styled.p`
  display: inline-block;
  margin-bottom: 7px;
  text-transform: uppercase;
  font-family: "Aclonica", sans-serif;
  font-size: 1.2em;
  animation-duration: 0.8s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  transition: color 0.8s;
  &.letter {
    animation-name: ${rubber};
  }
  &:nth-of-type(5),
  &:nth-of-type(14),
  &:nth-of-type(29) {
    margin-left: 0.4em;
  }
  &:nth-of-type(9),
  &:nth-of-type(19) {
    display: block;
  }
  &:hover {
    color: #0093d9;
    transition: color 0.8s;
  }
  @media (max-width: 1630px) {
    font-size: 1.1em;
  }
  @media (max-width: 1600px) {
    font-size: 1em;
  }
  @media (max-width: 1475px) {
    font-size: 0.9em;
  }
  @media (max-width: 1280px) {
    font-size: 0.8em;
  }

  @media (max-width: 1100px) {
    font-size: 1em;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 1100px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    padding-top: 0;
  }
  @media (max-width:470px) and (min-height:1300px){
    position:relative;
    order:2;
    flex-direction: row;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  display: inline-block;
  margin-left: 20px;
  padding: 10px 20px;
  border: 2px solid rgb(238, 238, 238);
  background-color: inherit;
  color: #eeeeee;
  text-transform: uppercase;
  font-weight: 600;
  z-index: 1;
  transition: color 0.4s ease-in-out;
  &:first-child {
    margin-left: 0;
  }
  &:hover,
  &:focus {
    color: #0a0a0a;
  }
  &:hover:before {
    transform: scaleX(1);
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #eeeeee;
    transform: scaleX(0);
    transform-origin: left;
    z-index: -1;
    transition: transform 0.4s ease-in-out;
  }
  &:focus {
    color: #eeeeee;
  }

  @media (max-width: 1100px) and (min-height: 1101px) {
    font-size: 30px;
  }
  @media (max-width: 1100px) and (max-height: 770px) {
    font-size: 10px;
  }
  @media (max-width: 850px) and (min-height: 1300px) {
    display: block;
    margin: 20px auto;

    &:first-child {
      margin-left: auto;
      margin-top: 0;
    }
  }
  @media (max-width:650px) and (min-height:1300px){
    font-size:25px;
  }

  @media (max-width: 1385px) and (min-width: 1101px) {
    font-size: 13px;
  }

  @media (max-height: 500px) and (min-width: 1100px) {
    font-size: 10px;
  }
`;

export const ButtonSide = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  @media (max-width: 1100px) and (min-height: 0px) {
    position: relative;
    text-align: center;
    bottom: 0;
    order: 3;
    padding-top: 150px;
  }

  @media (max-width: 1101px) and (max-height: 1100px) {
    margin-bottom: 50px;
    padding-top: 100px;
  }

  @media (max-width: 850px) and (min-height: 1300px) {
    padding-top: 20px;
  }

  @media (min-width: 1101px) and (min-height: 1050px) and (min-height: 900px) {
    bottom: 70px;
  }
  @media (max-height: 700px) and (min-width: 1100px) {
    bottom: -50px;
  }
  @media (max-height: 500px) and (min-width: 1100px) {
    bottom: -80px;
  }
  @media (max-height: 390px) and (min-width: 1100px) {
    display: none;
  }
`;

export const FontIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 1385px) and (min-width: 1101px) {
    padding: 7px;
  }
  @media (max-height: 500px) {
    padding: 5px;
  }

  @media (max-width: 1100px) and (min-height: 1101px) {
    padding: 20px 23px;
  }
`;

export const FbIcon = styled(FontIcon)`
  padding: 10px 13px;
  cursor: pointer;
  @media (max-width: 1385px) and (min-width: 1101px) {
    padding: 7px 10px;
  }
  @media (max-height: 500px) {
    padding: 4px 7px;
  }
  @media (max-width: 1100px) and (min-height: 1101px) {
    padding: 20px 26px;
  }
`;

export const SocialIcon = styled.div`
  margin-bottom: 20px;
  display: flex;
  position: relative;
  align-items: center;
`;

export const SpanIconName = styled.span`
  font-size: 10px;
  color: #39b54a;
  margin-right: 5px;
  visibility: hidden;
  opacity: 0;
  transition: 0.4s;
  ${({ social }) =>
    social &&
    css`
      opacity: 1;
      visibility: visible;
      transition: 0.4s;
    `};
`;

export const ImageDiv = styled.div`
  position: relative;
  height: 325px;
  margin-bottom: 50px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  border: 5px solid rgba(255, 255, 255, 0.5);
  align-self: center;

  @media (max-width: 1600px) {
    height: 300px;
  }
  @media (max-width: 1475px) {
    height: 275px;
  }
  @media (max-width: 1250px) {
    height: 225px;
  }
  @media (max-width: 1100px) {
    margin: 50px auto;
    margin-bottom: 10px;
    width: 300px;
    height: 300px;
    order: 2;
  }
  @media (max-width: 1100px) and (min-height: 1101px) {
    width: 400px;
    height: 400px;
  }
  @media (max-height: 950px) and (max-width: 1100px) {
    display: none;
  }
  @media (max-height: 810px) and (min-width: 1100px) {
    height: 250px;
    width: 250px;
  }
  @media (max-height: 500px) and (min-width: 1100px) {
    height: 200px;
  }
  @media (max-width: 650px) and (min-height: 1300px) {
    height: 250px;
    width: 250px;
  }
`;

export const Image = styled.img`
  opacity: 0.7;
  width: 100%;
  height: 100%;
  transition: all 0.4s;
  filter: grayscale(80%);
  &:hover {
    filter: grayscale(60%);
    opacity: 1;
  }
`;

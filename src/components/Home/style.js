import styled, { css, keyframes } from "styled-components";
import bg from "../../assets/programming.jpg";
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
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: 100px;
  max-width: 1500px;
  padding-top: 100px;
  color: rgb(238, 238, 238);
  font-size: 35px;
  height: 400px;
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
  color: rgb(238, 238, 238);
  font-size: 50px;
  width: 800px;
`;

export const TitleText = styled.h3`
  font-size: 30px;
  margin-bottom: 40px;
  color: #bfbfbf;
  padding-bottom: 20px;
  text-align: left;
`;

export const Letter = styled.p`
  display: inline-block;
  text-transform: uppercase;
  font-size: 2em;
  animation-duration: 0.8s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  transition: color 0.8s;
  &.letter {
    animation-name: ${rubber};
  }
  &:nth-of-type(3),
  &:nth-of-type(7),
  &:nth-of-type(9),
  &:nth-of-type(13),
  &:nth-of-type(15) {
    margin-left: .4em;
  }
  &:hover {
    color: #0093d9;
    transition: color 0.8s;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 75px;
  align-items: flex-end;
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
`;

export const ButtonSide = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
`;

export const FontIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
`;

export const FbIcon = styled(FontIcon)`
  padding: 10px 13px;
  cursor: pointer;
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
  margin: 30px auto;
  width: 400px;
  height: 300px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  border: 5px solid rgba(255, 255, 255, 0.5);
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

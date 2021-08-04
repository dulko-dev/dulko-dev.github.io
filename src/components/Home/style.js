import styled, { css } from "styled-components";
import bg from "../../assets/programming.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  justify-content: space-between;
  margin-left: auto;
  margin-right: 100px;
  max-width: 1500px;
  padding-top: 140px;
  color: rgb(238, 238, 238);
  font-size: 35px;
  height: 400px;
`;

export const Text = styled.div`
  position: relative;
  color: rgb(238, 238, 238);
  font-size: 60px;
  width: 900px;
`;

export const TitleText = styled.h3`
  font-size: 30px;
  color: rgb(140, 140, 140);
  padding-bottom: 20px;
  text-align: left;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 75px;
  align-items: flex-end;
`;

export const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  display: inline-block;
  margin-left: 20px;
  padding: 10px 20px;
  border: 2px solid rgb(238, 238, 238);
  background-color: inherit;
  color: rgb(238, 238, 238);
  transition: all 0.4s ease-in-out;
  text-transform: uppercase;
  font-weight: 600;
  &:hover {
    background-color: rgb(238, 238, 238);
    color: black;
    transition: all 0.4s ease-in-out;
  }
`;

export const ButtonSide = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
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
  margin: 30px 0;
  margin-right: auto;
  margin-left: 0;
  width: 400px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
`;
export const Image = styled.img`
  opacity: 0.7;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: all 0.4s;
  filter: grayscale(100%);
  &:hover {
    transform: scale(1.2);
    transition: all 0.4s;
    filter: grayscale(80%);
    opacity: 1;
  }
`;

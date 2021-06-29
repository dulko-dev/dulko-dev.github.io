import styled, { keyframes } from "styled-components";
import bg from "../../assets/programming.jpg";

const blinking = keyframes`
from{
  opacity: 0;
  transform: scale(0);
}
to{
  opacity: 1;
  transform: scale(1);
}
`;

export const HomeComponent = styled.div`
  &:after {
    position: absolute;
    content: "";
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    /* opacity: 0.9; */
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Content = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(238, 238, 238);
  font-size: 35px;
`;

export const Text = styled.p`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    height: 35px;
    width: 3px;
    background-color: black;
    animation-name: ${blinking};
    animation-duration: .8s;
    animation-iteration-count: infinite;
  }
`;

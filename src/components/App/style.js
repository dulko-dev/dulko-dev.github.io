import styled, { keyframes } from "styled-components";

const light = keyframes`
0%{
  background-position-x:-500%;
}
100%{
  background-position-x:500%;
  opacity:0;
}
`;

const leftCurtain = keyframes`
to{
width: 0%;
}
`;
const rightCurtain = keyframes`
to{
width: 0%;
}
`;

const hidden = keyframes`
from{
opacity: 1;
}
to{
opacity: 0;
}
`;

export const AppContainer = styled.div`
  font-family: "STIX Two Text", serif;
`;

export const LoadingContainerLeft = styled.div`
  background-color: black;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  animation-name: ${leftCurtain};
  animation-delay: 2s;
  animation-duration: 3s;
`;

export const LoadingContainerRight = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 3;

  animation-name: ${rightCurtain};
  animation-delay: 2s;
  animation-duration: 3s;
`;

export const Loading = styled.div`
  color: #ffffff;
  opacity: 1;
  font-size: 4em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  text-transform: uppercase;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-size: 75%;
  background-repeat: no-repeat;
  background-clip: padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* animation-name: ${light}; */
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

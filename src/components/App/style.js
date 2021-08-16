import styled, { keyframes, css } from "styled-components";

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

export const AppContainer = styled.div`
  font-family: "STIX Two Text", serif;
  width: 100%;
`;

export const LoadingContainerLeft = styled.div`
  background-color: black;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  ${({ left }) =>
    left &&
    css`
      animation-name: ${leftCurtain};
      animation-delay: 2s;
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}
`;

export const LoadingContainerRight = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 4;
  ${({ right }) =>
    right &&
    css`
      animation-name: ${rightCurtain};
      animation-delay: 2s;
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}
`;

export const Loading = styled.div`
  opacity: 1;
  font-size: 4em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  text-transform: uppercase;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-size: 75% 100%;
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation-name: ${light};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

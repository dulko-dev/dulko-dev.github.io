import styled, { keyframes } from "styled-components";

const rotating = keyframes`
   0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
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
  display: inline-block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  z-index: 4;
  animation: ${hidden};
  animation-duration: 1s;
  animation-delay: 1s;
  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 60px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${rotating} 1.2s infinite;
  }
`;

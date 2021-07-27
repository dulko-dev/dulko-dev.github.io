import styled, { css, keyframes } from "styled-components";

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
`;

export const AboutTag = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  font-size: 7em;
  width: 50%;
  background-color: #1d1e21;
  height: 100%;
  ${({ fix }) =>
    fix &&
    css`
      position: fixed;
      top: 0;
      left: 0;
    `}
`;

export const Image = styled.img`
  margin: 0 auto;
  display: block;
  margin-top: 20px;
`;

export const AboutTagTitle = styled.p`
  margin: 0 auto;
  color: rgb(140, 140, 140);
  text-align: center;
`;

export const TextTag = styled.div`
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: 0;
  background-color: #121212;
  color: rgb(238, 238, 238);
`;

export const TextTagTitle = styled.h2`
  text-align: center;
  font-size: 3em;
`;
export const TextTagP = styled.p`
  font-size: 1.4em;
  padding: 5px;
`;

export const IconContener = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const IconDiv = styled.div`
  margin: 30px;
  position: relative;
  transition: all 0.4s;
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

export const IconText = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`;

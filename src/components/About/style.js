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
  background-color: ${({ theme }) => theme.lightBackground};
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
  color: ${({ theme }) => theme.title};
  text-align: center;
`;

export const TextTag = styled.div`
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: 0;
  background-color: ${({ theme }) => theme.darkBackground};
  color: ${({ theme }) => theme.text};
`;

export const TextTagP = styled.p`
  font-size: 1.4em;
  padding: 5px;
`;

export const IconContener = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const TextTagTitle = styled.h2`
  font-size: 3em;
  position: relative;
  text-align: center;
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



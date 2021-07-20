import styled, { css } from "styled-components";

export const AboutContainer = styled.div`
  position: relative;
`;

export const AboutContent = styled.div`
  display: flex;
  position: relative;
`;

export const AboutTag = styled.div`
  display: flex;
  font-size: 10em;
  width: 50%;
  background-color: #1d1e21;
  height: 100vh;
  ${({ fix }) =>
    fix &&
    css`
      position: fixed;
      top: 0;
      left: 0;
    `}
  ${({ over }) =>
    over &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
    `}
`;

export const AboutTagP = styled.p`
  margin: auto;
  color: rgb(140, 140, 140);
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




import styled, { css } from "styled-components";

export const ProjectsContainer = styled.div`
  position: relative;
`;

export const ProjectContent = styled.div`
  display: flex;
  position: relative;
`;

export const ProjectTag = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 8em;
  width: 50%;
  background-color: #121212;
  color: rgb(140, 140, 140);
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

export const Image = styled.img`
  margin: 0 auto;
  display: block;
  margin-top: 20px;
  width: 500px;
  height: 200px;
`;

export const ProjectTagP = styled.p`
  margin: 0 auto;
`;

export const TextContainer = styled.div`
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: 0;
  background-color: #1d1e21;
  color: rgb(238, 238, 238);
`;

export const TextTitle = styled.h2`
  text-align: center;
  font-size: 3em;
`;
export const TextContent = styled.div`
  overflow: hidden;
  position:relative;
  width: 100%;
  height: 400px;
  &:after {
    content: "";
    position: absolute;
    top: -110%;
    left: -210%;
    width: 200%;
    height: 200%;
    opacity: 0;
    transform: rotate(30deg);
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &:hover:after {
    opacity: 1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
    &:active:after {
      opacity: 0;
    }
  }
`;

export const ImageProject = styled.img`
  width: 100%;
  height: 100%;
`;

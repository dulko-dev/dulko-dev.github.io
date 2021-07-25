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
  height: 50px;
`;

export const Text = styled.p`
  transition: all 0.6s;
  transition-delay: 0.3s;
  position: relative;
  padding-top: 5px;
  padding-left: 5px;
  bottom: -200px;
`;

export const EnterIcon = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: -200px;
  transition: all 0.6s;
  transition-delay: 0.3s;
`;

export const TextContent = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 500px;
  &:hover .blockProject {
    transform: translateY(-230px);
    transition: all 0.7s;
    transition-delay: 0.3s;
  }
  &:hover .blockTech {
    transform: translateY(-30px);
    transition: all 0.7s;
    transition-delay: 1s;
  }
  &:hover .blockProject ${Text} {
    transform: translateY(-200px);
    transition: all 1s;
    transition-delay: 1.5s;
  }
  &:hover .blockProject ${EnterIcon} {
    transform: translateY(-200px);
    transition: all 1s;
    transition-delay: 2s;
  }
  &:after {
    content: "";
    position: absolute;
    top: -200%;
    left: -210%;
    width: 200%;
    height: 200%;
    opacity: 0;
    transform: rotate(25deg);
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
    transition-duration: 0.3s, 0.3s, 0.15s;
    transition-timing-function: ease;
    &:active:after {
      opacity: 0;
    }
  }
`;

export const TextModule = styled.div`
  width: 500px;
  position: absolute;
  bottom: -200px;
  right: 0;
  background-color: rgba(17, 34, 64, 0.6);
  transition: all 0.3s;
  transition-delay: 0.9s;
  z-index: 1;
`;

export const TextModuleTech = styled(TextModule)`
  height: 30px;
  bottom: -30px;
  transition-delay: 0.6s;
  background-color: rgb(35, 53, 84);
`;

export const ImageProject = styled.img`
  width: 100%;
  height: 450px;
`;

export const GitIcon = styled.div`
  color: rgb(238, 238, 238);
  padding-right: 10px;
`;
export const LiveIcon = styled(GitIcon)``;

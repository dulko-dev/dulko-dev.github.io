import styled, { css, keyframes } from "styled-components";
import under from "../../assets/under.png";

const pulseIcon = keyframes`
 0% {
    box-shadow: 0 0 0 0 rgba(140, 140, 140, 0.7);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(140, 140, 140, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(140, 140, 140, 0);
  }
`;

export const ProjectsContainer = styled.div`
  position: relative;
`;

export const ProjectContent = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const ProjectTag = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  font-size: 7em;
  width: 50%;
  background-color: ${({ theme }) => theme.darkBackground};
  color: ${({ theme }) => theme.title};
  height: 100%;

  @media (max-width: 1000px) {
    position: relative;
    width: 100%;
    background-color: ${({ theme }) => theme.lightBackground};
    color: ${({ theme }) => theme.title};
  }
`;

export const GroupImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ fix }) =>
    fix &&
    css`
      position: fixed;
      top: 0;
      align-self: center;
    `}
  ${({ abs }) =>
    abs &&
    css`
      position: absolute;
      bottom: 150px;
      align-self: center;
    `}
    @media (max-width:1000px) {
    position: relative;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  margin-top: 20px;
  height: 175px;

  @media (max-width: 1000px) {
    height: 300px;
    margin-top: 0;
  }
  @media (max-width: 500px) {
    height: 175px;
  }
  @media (max-width: 270px) {
    height: 125px;
  }
  @media (max-width: 200px) {
    height: 90px;
  }
`;

export const ProjectTagP = styled.p`
  margin-top: 10px;
  font-size: 60px;
  color: ${({ theme }) => theme.title};
  @media (max-width: 1000px) {
    margin-bottom: 20px;
    font-size: 100px;
  }
  @media (max-width: 500px) {
    font-size: 70px;
  }
  @media (max-width: 250px) {
    font-size: 40px;
  }
  transition: all 1s;

  &:last-child {
    font-size: 25px;
    position: relative;
  }
  &:last-child:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.title};
    transform: scale(0);
    transition: all 0.4s;
  }
  &:hover:last-child:after {
    transform: scale(1);
    transition: all 0.4s;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: 0;
  background-color: ${({ theme }) => theme.lightBackground};
  color: ${({ theme }) => theme.text};
  @media (max-width: 1000px) {
    position: relative;
    width: 100%;
    background-color: ${({ theme }) => theme.darkBackground};
    color: ${({ theme }) => theme.text};
  }
`;

export const TextTitle = styled.h2`
  text-align: center;
  font-size: 2.5em;
  height: 50px;
  padding: 10px 0;
  font-weight: 600;
  line-height: 50px;
  @media (max-width: 500px) {
    font-size: 1.75em;
  }
`;

export const SpanText = styled.span`
  display: block;
  padding-bottom: 10px;
`;

export const Text = styled.p`
  transition: all 0.3s;
  transition-delay: 0.6s;
  position: relative;
  padding: 15px;
  bottom: -330px;
  color: rgb(238, 238, 238);
  font-size: 1em;
  line-height: 1.2em;
  & ${SpanText}:last-child {
    text-decoration: underline;
    text-decoration-color: #ff0000;
  }
`;

export const EnterIcon = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  bottom: -200px;
  transition: all 0.3s;
  transition-delay: 0.3s;
  padding: 0 0 5px 10px;
  color: rgb(140, 140, 140);
  @media (max-width: 280px) {
    left: 43%;
    padding: 0;
  }
`;

export const SingleTech = styled(Text)`
  bottom: -40px;
  padding: 0 10px 0 0;
  color: rgb(140, 140, 140);
  transition-delay: 0s;
  @media (max-width: 280px) {
    display: none;
  }
`;

export const ImageProject = styled.img`
  width: 100%;
  height: 350px;

  @media (max-width: 1000px) {
    height: 450px;
  }
  @media (max-width: 500px) {
    height: 250px;
  }
`;

export const TextContent = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 30px auto 0 auto;
  border-top: 1px solid ${({ theme }) => theme.line};
  border-bottom: 1px solid ${({ theme }) => theme.line};
  box-sizing: border-box;
  &:hover .blockProject {
    transform: translateY(-350px);
    transition: all 0.3s;
  }
  &:hover .blockTech {
    transform: translateY(-40px);
    transition: all 0.3s;
    transition-delay: 0.3s;
  }
  &:hover .blockProject ${Text} {
    transform: translateY(-320px);
    transition: all 0.3s;
    transition-delay: 0.6s;
  }
  &:hover .blockTech ${EnterIcon} {
    transform: translateY(-205px);
    transition: all 0.3s;
    transition-delay: 0.9s;
  }
  &:hover .blockTech ${SingleTech} {
    transform: translateY(-40px);
    transition: all 0.3s;
    transition-delay: 1.2s;
  }

  &:before {
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
  &:hover:before {
    opacity: 1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.3s, 0.3s, 0.15s;
    transition-timing-function: ease;
    &:active:before {
      opacity: 0;
    }
  }

  &:first-child {
    margin-top: 0;
    border-top: none;
  }
  &:last-child {
    border-bottom: none;
    pointer-events: none;
    &:hover .blockProject,
    &:hover .blockTech,
    &:hover
      .blockProject
      ${Text},&:hover
      .blockTech
      ${EnterIcon},&:hover
      .blockTech
      ${SingleTech} {
      transform: none;
    }
  }

  &:last-child ${ImageProject} {
    opacity: 0.3;
  }

  &:last-child:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${under});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const TextModule = styled.div`
  width: 500px;
  position: absolute;
  bottom: -320px;
  right: 0;
  border-top-left-radius: 15px;
  background-color: rgba(17, 34, 64, 0.6);
  transition: all 0.3s;
  transition-delay: 1.2s;
  z-index: 1;
  @media (max-width: 500px) {
    left: 5px;
    width: 100%;
    max-width: 500px;
    font-size: 0.8em;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

export const TextModuleTech = styled(TextModule)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
  bottom: -40px;
  border-top-left-radius: 0;
  transition-delay: 0.9s;
  background-color: rgb(35, 53, 84);
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const GitIcon = styled.div`
  font-size: 18px;
  color: rgb(140, 140, 140);
  margin-right: 15px;
  transition: all 0.3s;
  border: 0px solid rgb(140, 140, 140);
  border-radius: 50%;
  animation-name: ${pulseIcon};
  animation-duration: 1.7s;
  animation-iteration-count: infinite;
  &:hover {
    color: rgb(238, 238, 238);
    transition: all 0.3s;
  }
`;

export const LiveIcon = styled(GitIcon)``;

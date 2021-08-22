import styled, { css } from "styled-components";

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
      bottom: 158px;
      align-self: center;
    `}
    @media (max-width:1000px) {
    position: relative;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  margin-top: 20px;
  max-width: 500px;
  max-height: 200px;
`;

export const ProjectTagP = styled.p`
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.title};
  @media (max-width: 1000px) {
    margin-bottom: 20px;
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
  font-size: 3em;
  height: 50px;
  padding: 10px 0;
  font-weight: 600;
`;

export const Text = styled.p`
  transition: all 0.3s;
  transition-delay: 0.6s;
  position: relative;
  padding: 15px;
  bottom: -200px;
  color: rgb(238, 238, 238);
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
`;

export const SingleTech = styled(Text)`
  bottom: -30px;
  padding: 0 10px 0 0;
  color: rgb(140, 140, 140);
  transition-delay: 0s;
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
    transform: translateY(-230px);
    transition: all 0.3s;
  }
  &:hover .blockTech {
    transform: translateY(-30px);
    transition: all 0.3s;
    transition-delay: 0.3s;
  }
  &:hover .blockProject ${Text} {
    transform: translateY(-200px);
    transition: all 0.3s;
    transition-delay: 0.6s;
  }
  &:hover .blockTech ${EnterIcon} {
    transform: translateY(-200px);
    transition: all 0.3s;
    transition-delay: 0.9s;
  }
  &:hover .blockTech ${SingleTech} {
    transform: translateY(-30px);
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
`;

export const TextModule = styled.div`
  width: 500px;
  position: absolute;
  bottom: -200px;
  right: 0;
  background-color: rgba(17, 34, 64, 0.6);
  transition: all 0.3s;
  transition-delay: 1.2s;
  z-index: 1;
`;

export const TextModuleTech = styled(TextModule)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 30px;
  bottom: -30px;
  transition-delay: 0.9s;
  background-color: rgb(35, 53, 84);
`;

export const ImageProject = styled.img`
  width: 100%;
  height: 450px;
`;

export const GitIcon = styled.div`
  color: rgb(140, 140, 140);
  padding-right: 10px;
  transition: all 0.3s;
  &:hover {
    color: rgb(238, 238, 238);
    transition: all 0.3s;
  }
`;

export const LiveIcon = styled(GitIcon)``;

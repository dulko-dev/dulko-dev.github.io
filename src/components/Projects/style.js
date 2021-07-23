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
  font-size: 10em;
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
  margin-top: 10px;
  width:300px;
  height:200px;

`;

export const ProjectTagP = styled.p`
  margin: 0 auto;
`;

export const TextTag = styled.div`
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: 0;
  background-color: #1d1e21;
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

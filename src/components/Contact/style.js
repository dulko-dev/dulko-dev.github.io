import styled, { css } from "styled-components";

export const ContactContainer = styled.div`
  position: relative;
`;

export const ContactContent = styled.div`
  position: relative;
  display: flex;
`;

export const ContactTag = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 7em;
  width: 50%;
  background-color: #1d1e21;
  color: rgb(140, 140, 140);
  height: 50vh;
  ${({ fix }) =>
    fix &&
    css`
      position: fixed;
      top: 0;
      left: 0;
    `}
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  width: 500px;
  height: 300px;
`;
export const ContactTagP = styled.p`
  margin: 0 auto;
`;

export const TextTag = styled.div`
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: 0;
  background-color: #121212;
  color: rgb(140, 140, 140);
`;

export const TextTagTitle = styled.h2`
  text-align: center;
  font-size: 3em;
`;
export const TextTagP = styled.p`
  font-size: 1.4em;
  padding: 5px;
`;

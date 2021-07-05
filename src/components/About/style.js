import styled, { css } from "styled-components";

export const AboutContainer = styled.div`
  position: relative;
  display: flex;
`;

export const AboutTag = styled.div`
  display: flex;
  font-size: 10em;
  width: 50%;
  background-color: rebeccapurple;
`;

export const AboutTagP = styled.p`
  line-height: 937px;
  margin: 0 auto;
  ${({ fix }) =>
    fix &&
    css`
      position: fixed;
      line-height: normal;
      top: 50%;
      left: 25%;
      transform: translateX(-50%) translateY(-50%);
    `}

  ${({ bottomStash }) =>
    bottomStash &&
    css`
      position: absolute;
      bottom: 0;
      left: 25%;
      transform: translateX(-50%);
    `}
`;

export const TextTag = styled.div`
  width: 50%;
`;

export const TextTagTitle = styled.h2`
  text-align: center;
  font-size: 3em;
`;
export const TextTagP = styled.p`
  font-size: 1.4em;
  padding: 5px;
`;

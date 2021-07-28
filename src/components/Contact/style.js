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

export const FormContact = styled.h2`
  font-size: 2.5em;
  text-align: center;
  padding: 20px 0;
`;

export const Form = styled.form`
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  row-gap: 10px;
`;
export const Label = styled.label`
  grid-column: 1/2;
  grid-row: 1/2 2/3 3/4;
  place-self: center flex-start;
`;
export const InputName = styled.input`
  grid-column: 2/3;
  grid-row: 1/2;
`;
export const InputEmail = styled.input`
  grid-column: 2/3;
  grid-row: 2/3;
`;
export const InputNumber = styled.input`
  grid-column: 2/3;
  grid-row: 3/4;
`;
export const TextArea = styled.textarea`
  grid-column: 1/3;
  grid-row: 4/5;
  border-radius: 4px;
  resize: none;
  padding: 10px 5px;
  outline: none;
`;
export const SendButton = styled.button`
  grid-column: 1/3;
  grid-row: 5/6;
`;

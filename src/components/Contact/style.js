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
  position: relative;
  font-size: 7em;
  width: 50%;
  background-color: #1d1e21;
  color: rgb(140, 140, 140);
  padding-bottom:20px;
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
  grid-template-rows: repeat(3, 1fr) 150px 1fr;
  row-gap: 10px;
`;
export const Label = styled.label`
  grid-column: 1/2;
  grid-row: 1/2 2/3 3/4;
  place-self: center flex-start;
  font-size: 2em;
`;

export const Input = styled.input`
  grid-column: 2/3;
  grid-row: 1/2 2/3 3/4;
  padding: 5px 3px;
  &:nth-child(2),
  &:nth-child(4),
  &:nth-child(6) {
  }
`;

export const TextArea = styled.textarea`
  grid-column: 1/3;
  grid-row: 4/5;
  resize: none;
  outline: none;
  height: 150px;
  border-radius: 4px;
`;
export const SendButton = styled.button`
  grid-column: 1/3;
  grid-row: 5/6;
  justify-self: center;
  width: 150px;
  border-radius: 15px;
`;

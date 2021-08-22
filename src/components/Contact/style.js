import styled, { css } from "styled-components";

export const ContactContainer = styled.div`
  position: relative;
`;

export const ContactContent = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const ContactTag = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 7em;
  width: 50%;
  background-color: ${({ theme }) => theme.lightBackground};
  color: ${({ theme }) => theme.title};
  padding-bottom: 20px;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  max-width: 500px;
  height: 275px;
`;
export const ContactTagP = styled.p`
  margin: 10px auto 0 auto;
`;

export const TextTag = styled.div`
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: 0;
  background-color: ${({ theme }) => theme.darkBackground};
  color: ${({ theme }) => theme.text};
  padding-top: 20px;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

export const FormTitle = styled.h2`
  font-size: 2.5em;
  text-align: center;
  padding: 20px 0;
`;

export const Form = styled.form`
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr) 150px auto;
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
  margin-top: 10px;
  height: 35px;
  justify-self: center;
  width: 150px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.buttonColor};
  transition: all 0.4s;
  border: none;
  &:hover {
    transition: all 0.4s;
    background-color: ${({ theme }) => theme.lightBackground};
    color: ${({ theme }) => theme.text};
  }
`;

export const SpanError = styled.p`
  color: #ff0000;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

export const SpanSuccess = styled(SpanError)`
  color: #00b300;
`;

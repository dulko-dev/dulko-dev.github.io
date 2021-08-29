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
  align-items: center;
  font-size: 7em;
  width: 50%;
  background-color: ${({ theme }) => theme.lightBackground};
  color: ${({ theme }) => theme.title};
  padding-bottom: 20px;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 430px) {
    font-size: 5em;
  }
`;

export const Image = styled.img`
  display: block;
  margin: 20px auto 0 auto;
  margin-top: 20px;
  height: 225px;
  @media (max-width: 1000px) {
    height: 375px;
  }
  @media (max-width: 550px) {
    height: 300px;
  }
  @media (max-width: 470px) {
    height: 175px;
  }
  @media (max-width: 250px) {
    height: 125px;
  }
`;
export const ContactTagP = styled.p`
  margin-top: 10px;
  font-size: 60px;
  @media (max-width: 1000px) {
    font-size: 100px;
  }
  @media (max-width: 550px) {
    font-size: 90px;
  }
  @media (max-width: 470px) {
    font-size: 70px;
  }
  @media (max-width: 250px) {
    font-size: 40px;
  }
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
  font-size: 2.2em;
  text-align: center;
  padding: 20px 0;
  @media (max-width: 1000px) {
    font-size: 2.7em;
  }
  @media (max-width: 740px) {
    font-size: 2.2em;
  }
  @media (max-width: 470px) {
    font-size: 1.8em;
  }
`;

export const Form = styled.form`
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-template-rows: repeat(3, 1fr) 150px auto;
  row-gap: 10px;
  @media (max-width: 1460px) {
    margin: 0 20px;
  }
  @media (max-width: 1000px) {
    margin: 0 auto;
  }
  @media (max-width: 740px) {
    margin: 0 20px;
  }
  @media (max-width: 470px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 0;
  }
  @media (max-width: 250px) {
    margin: 0 10px 0 10px;
    display: block;
  }
`;
export const Label = styled.label`
  grid-column: 1/2;
  grid-row: 1/2 2/3 3/4;
  place-self: center flex-start;
  font-size: 1.8em;
  @media (max-width: 1000px) {
    font-size: 2em;
  }
  @media (max-width: 740px) {
    font-size: 1.8em;
  }
  @media (max-width: 470px) {
    font-size: 1.5em;
  }
  @media (max-width: 470px) {
    grid-column: 1/1;
    grid-row: 1/2 3/4 5/6;
    margin-top: 10px;
  }
`;

export const Input = styled.input`
  grid-column: 2/3;
  grid-row: 1/2 2/3 3/4;
  padding: 5px 3px;
  border-radius: 4px;
  @media (max-width: 470px) {
    grid-column: 1/1;
    grid-row: 2/3 4/5 6/7;
  }
  @media (max-width: 250px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  grid-column: 1/3;
  grid-row: 4/5;
  resize: none;
  outline: none;
  height: 150px;
  border-radius: 4px;
  @media (max-width: 470px) {
    grid-row: 7/8;
    margin-top: 30px;
  }
  @media (max-width: 250px) {
    width: 100%;
  }
`;
export const SendButton = styled.button`
  padding: 10px 28px;
  font-size: 20px;
  grid-column: 1/3;
  grid-row: 5/6;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-self: center;
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
  @media (max-width: 740px) {
    padding: 10px 20px;
    font-size: 15px;
  }
  @media (max-width: 470px) {
    padding: 7px 15px;
    font-size: 12px;
    grid-column: 1/1;
    grid-row: 8/9;
  }
  @media (max-width: 250px) {
    width: 100%;
    border-radius: 0;
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

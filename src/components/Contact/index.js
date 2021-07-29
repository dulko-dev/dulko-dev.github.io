import React, { useEffect, useState } from "react";
import {
  ContactContainer,
  ContactContent,
  ContactTag,
  ContactTagP,
  TextTag,
  Image,
  Form,
  Label,
  Input,
  TextArea,
  SendButton,
  FormContact,
} from "./style";
import contactImage from "../../assets/contact.png";

const Contact = () => {
  const [state, setState] = useState({
    nick: "",
    email: "",
    number: "",
    text: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContactContainer>
      <ContactContent>
        <ContactTag>
          <Image src={contactImage} />
          <ContactTagP>Contact</ContactTagP>
        </ContactTag>
        <TextTag id="contact">
          {/* Formularz */}
          <FormContact>Form Contact</FormContact>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              onChange={handleInput}
              value={state.nick}
              id="name"
              name="nick"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              onChange={handleInput}
              value={state.email}
              name="email"
              id="email"
            />
            <Label htmlFor="number">
              Number
              <span style={{ fontSize: "15px", paddingLeft: "5px" }}>
                (optional)
              </span>
            </Label>
            <Input
              type="number"
              onChange={handleInput}
              value={state.number}
              name="number"
              id="number"
            />
            <TextArea
              type="text"
              onChange={handleInput}
              value={state.text}
              name="text"
              placeholder="place for your message"
            />
            <SendButton>Wyślij</SendButton>
          </Form>
        </TextTag>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

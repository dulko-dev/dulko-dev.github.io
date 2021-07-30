import React, { useEffect, useState } from "react";
import { send } from "emailjs-com";
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

  console.log("name", state.nick, "email", state.email, "text", state.text);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorText, setErrorText] = useState(false);

  const regexEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      state.nick.trim().length <= 2 ||
      regexEmail(state.email) === false ||
      state.text.trim().length < 5
    ) {
      setErrorName(true);
      return;
    }

    send(
      "service_s61x6sg",
      "template_nnmsj32",
      state,
      "user_tkro5BbWGAiTWmR58DLTb"
    )
      .then((response) => {
        if (response.status === 200) {
          console.log("supa good");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setState({
      nick: "",
      email: "",
      number: "",
      text: "",
    });
  };

  useEffect(() => {
    if (!state.nick.trim().length >= 2) {
      setErrorName(false);
    }
    if (regexEmail(state.email) === true) {
      setErrorEmail(false);
    }
    if (!state.text.trim().length > 5) {
      setErrorText(false);
    }
  }, [state.nick, state.email, state.text]);

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
              style={{
                border: errorName ? "3px solid red" : "1px solid black",
              }}
              type="text"
              onChange={handleInput}
              value={state.nick}
              id="name"
              name="nick"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              style={{
                border: errorEmail ? "3px solid red" : "1px solid black",
              }}
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
              style={{
                border: errorText ? "3px solid red" : "1px solid black",
              }}
              type="text"
              onChange={handleInput}
              value={state.text}
              name="text"
              placeholder="place for your message"
            />
            <SendButton type="submit">Wyślij</SendButton>
            {errorName ? (
              <p style={{ color: "red" }}>
                Please fill empty space or check is correctly fill in
              </p>
            ) : null}
          </Form>
        </TextTag>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

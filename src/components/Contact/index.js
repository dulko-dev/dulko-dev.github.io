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
  InputName,
  InputEmail,
  InputNumber,
  TextArea,
  SendButton,
  FormContact,
} from "./style";
import contactImage from "../../assets/contact.png";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <ContactTag>
          <Image src={contactImage} />
          <ContactTagP>Contact</ContactTagP>
        </ContactTag>
        <TextTag id="contact">
          {/* Formularz */}
          <p>Please send me message</p>
          <p>or say hello</p>
          <FormContact>Form Contact</FormContact>
          <Form>
            <Label>Name</Label>
            <InputName />
            <Label>Email</Label>
            <InputEmail />
            <Label>Number(optional)</Label>
            <InputNumber />
            <TextArea />
            <SendButton>Wyślij</SendButton>
          </Form>
        </TextTag>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

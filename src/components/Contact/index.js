import React, { useEffect, useState } from "react";
import {
  ContactContainer,
  ContactContent,
  ContactTag,
  ContactTagP,
  TextTag,
  TextTagTitle,
  TextTagP,
} from "./style";

const Contact = () => {
  const [stackUpper, setStackUpper] = useState(false);

  useEffect(() => {
    const aboutFixed = () => {
      let el = document.querySelector("#contact");
      if (el.getBoundingClientRect().top <= 0) {
        setStackUpper(true);
      } else {
        setStackUpper(false);
      }
    };
    window.addEventListener("scroll", aboutFixed);
  }, []);

  useEffect(() => {
    let el = document.querySelector("#contact");
    const bottomSucks = () => {
      if (el.getBoundingClientRect().bottom <= window.innerHeight)
        setStackUpper(false);
    };
    window.addEventListener("scroll", bottomSucks);
  }, []);

  return (
    <ContactContainer>
      <ContactContent>
        <ContactTag fix={stackUpper}>
          <ContactTagP>Contact</ContactTagP>
        </ContactTag>
        <TextTag id="contact">
          <TextTagTitle>Title 1</TextTagTitle>
          <TextTagP>blblb</TextTagP>
        </TextTag>
      </ContactContent>
    </ContactContainer>
  );
};



export default Contact;

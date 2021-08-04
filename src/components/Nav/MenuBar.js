import React, { useEffect, useState } from "react";
import { Ul, Li, TitleMenu } from "./style";

const MenuBar = () => {
  const [changeColor, setChangeColor] = useState({
    home: true,
    about: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    const contentHome = document.querySelector("#home");
    const contentAbout = document.querySelector("#cont");
    const contentProjects = document.querySelector("#project");
    const contentContact = document.querySelector("#contact");

    document.addEventListener("scroll", () => {
      if (contentHome.getBoundingClientRect().top <= 0)
        setChangeColor({
          home: true,
          about: false,
          projects: false,
          contact: false,
        });
      if (contentAbout.getBoundingClientRect().top <= 0) {
        setChangeColor({
          home: false,
          about: true,
          projects: false,
          contact: false,
        });
      }
      if (contentProjects.getBoundingClientRect().top <= 0)
        setChangeColor({
          home: false,
          about: false,
          projects: true,
          contact: false,
        });
      if (contentContact.getBoundingClientRect().top <= 0)
        setChangeColor({
          home: false,
          about: false,
          projects: false,
          contact: true,
        });
    });
  }, []);

  const handleHome = (e) => {
    const contentAbout = document.querySelector("#home");
    contentAbout.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleAbout = (e) => {
    const contentAbout = document.querySelector("#cont");

    contentAbout.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleProjects = (e) => {
    const contentAbout = document.querySelector("#project");
    contentAbout.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleContact = (e) => {
    const contentAbout = document.querySelector("#contact");
    contentAbout.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Ul>
        <Li
          onClick={handleHome}
          style={changeColor.home ? { color: "red" } : { color: "white" }}
        >
          Home
        </Li>
        <Li
          onClick={handleAbout}
          style={changeColor.about ? { color: "red" } : { color: "white" }}
        >
          About
        </Li>
        <Li
          onClick={handleProjects}
          style={changeColor.projects ? { color: "red" } : { color: "white" }}
        >
          Projects
        </Li>
        <Li
          onClick={handleContact}
          style={changeColor.contact ? { color: "red" } : { color: "white" }}
        >
          Contact
        </Li>
      </Ul>
    </>
  );
};

export default MenuBar;

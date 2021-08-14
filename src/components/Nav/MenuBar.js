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
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
        setChangeColor({
          home: false,
          about: false,
          projects: false,
          contact: true,
        });
    });
  }, []);

  const handleHome = (e) => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
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
          style={changeColor.home ? { color: "#0093d9" } : { color: "#ffffff" }}
        >
          Home
        </Li>
        <Li
          onClick={handleAbout}
          style={
            changeColor.about ? { color: "#0093d9" } : { color: "#ffffff" }
          }
        >
          About
        </Li>
        <Li
          onClick={handleProjects}
          style={
            changeColor.projects ? { color: "#0093d9" } : { color: "#ffffff" }
          }
        >
          Projects
        </Li>
        <Li
          onClick={handleContact}
          style={
            changeColor.contact ? { color: "#0093d9" } : { color: "#ffffff" }
          }
        >
          Contact
        </Li>
        <a
          style={{ outline: "none", textDecoration: "none" }}
          href="https://drive.google.com/u/0/uc?id=1bD6Q0oryW8rrJslGpdWmmbl0uovgD6IY&export=download"
        >
          <Li>Resume</Li>
        </a>
      </Ul>
    </>
  );
};

export default MenuBar;

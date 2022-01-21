import React, { useEffect, useState } from "react";
import {
  Ul,
  Li,
  Society,
  LiSociety,
  UlSocial,
  TitleNavigation,
} from "./style";
import {
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

const MenuBar = ({ menuOpen }) => {
  const [changeColor, setChangeColor] = useState({
    home: true,
    about: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    const contentHome = document.querySelector("#home");
    const contentAbout = document.querySelector("#contImg");
    const contentProjects = document.querySelector("#projectImg");

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
    const contentAbout = document.querySelector("#contImg");
    contentAbout.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleProjects = (e) => {
    const contentAbout = document.querySelector("#projectImg");
    contentAbout.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleContact = (e) => {
    const contentAbout = document.querySelector("#contactImg");
    contentAbout.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Ul horizontalDash={menuOpen}>
        <TitleNavigation>Navigation</TitleNavigation>
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
      </Ul>
      <UlSocial horizontalDash={menuOpen}>
        <LiSociety>
          <a
            href="https://www.facebook.com/kamil.duliniec/"
            target="_blank"
            rel="noreferrer"
            style={{ outline: "none", color: "rgb(238, 238, 238)" }}
          >
            <Society icon={faFacebookF} />
          </a>
        </LiSociety>
        <LiSociety>
          <a
            href="https://www.linkedin.com/in/kamil-duliniec/"
            target="_blank"
            rel="noreferrer"
            style={{ outline: "none", color: "rgb(238, 238, 238)" }}
          >
            <Society icon={faLinkedinIn} />
          </a>
        </LiSociety>
        <LiSociety>
          <a
            href="https://github.com/dulko-dev"
            target="_blank"
            rel="noreferrer"
            style={{ outline: "none", color: "rgb(238, 238, 238)" }}
          >
            <Society icon={faGithubAlt} />
          </a>
        </LiSociety>
      </UlSocial>
    </>
  );
};

export default MenuBar;

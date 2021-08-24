import React, { useState, useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { letter } from "./letter";
import {
  HomeComponent,
  Content,
  Text,
  TitleText,
  Button,
  ButtonSide,
  Social,
  FontIcon,
  SocialIcon,
  SpanIconName,
  FbIcon,
  ImageDiv,
  Image,
  ProgressBar,
  Progress,
  Letter,
} from "./style";
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import myPhoto from "../../assets/homePhoto.jpg";

const Home = () => {
  const [hidden, setHidden] = useState({
    fb: false,
    git: false,
    link: false,
  });

  const [changeBar, setChangeBar] = useState(0);
  const [moveLetter, setMoveLetter] = useState(false);

  const imageRef = useRef();
  const progressRef = useRef();
  const barRef = useRef();

  const vanillaOptions = {
    scale: 1.1,
    speed: 400,
    transition: true,
    max: 15,
    glare: true,
    "max-glare": 0.7,
  };

  useEffect(() => {
    VanillaTilt.init(imageRef.current, vanillaOptions);
  }, [vanillaOptions]);

  useEffect(() => {
    const progressBar = () => {
      const wScroll = document.documentElement.scrollTop;
      const hSroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const result = (wScroll / hSroll) * 100;
      setChangeBar(result);
    };

    window.addEventListener("scroll", progressBar);
  }, [changeBar]);

  const contactId = () => {
    const contact = document.querySelector("#contact");
    contact.scrollIntoView({
      behavior: "smooth",
    });
  };

  const aboutId = () => {
    const about = document.querySelector("#cont");
    about.scrollIntoView({
      behavior: "smooth",
    });
  };

  const projectId = () => {
    const project = document.querySelector("#project");
    project.scrollIntoView({
      behavior: "smooth",
    });
  };

  const onMouseEnter = (e) => {
    let icon = e.target.dataset.icon;
    switch (icon) {
      case "facebook-f":
        setHidden({ ...hidden, fb: true });
        break;
      case "github-alt":
        setHidden({ ...hidden, git: true });
        break;
      case "linkedin-in":
        setHidden({ ...hidden, link: true });
        break;
      default:
        setHidden({ ...hidden });
    }
  };

  const onMouseLeave = (e) => {
    let icon = e.target.dataset.icon;
    switch (icon) {
      case "facebook-f":
        setHidden({ ...hidden, fb: false });
        break;
      case "github-alt":
        setHidden({ ...hidden, git: false });
        break;
      case "linkedin-in":
        setHidden({ ...hidden, link: false });
        break;
      default:
        setHidden({ ...hidden });
    }
  };

  const showLetter = (e) => {
    e.target.classList.add("letter");
    setMoveLetter(true);

    window.addEventListener("animationend", (e) => {
      setMoveLetter(false);
      e.target.classList.remove("letter");
    });
  };

  return (
    <HomeComponent id="home">
      <Content>
        <ProgressBar ref={barRef}>
          <Progress
            red={progressRef}
            style={{ height: `${changeBar}%` }}
          ></Progress>
        </ProgressBar>
        <ImageDiv ref={imageRef}>
          <Image src={myPhoto} />
        </ImageDiv>
        <Text>
          <TitleText>&lt;h1&gt;</TitleText>
          {Array.from(letter).map((element, index) => (
            <Letter onMouseEnter={showLetter} key={index}>
              {element}
            </Letter>
          ))}
          <TitleText>&lt;/h1&gt;</TitleText>
        </Text>
        <Social>
          <SocialIcon>
            <SpanIconName social={hidden.fb}>Facebook</SpanIconName>
            <a
              href="https://www.facebook.com/kamil.duliniec/"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", color: "rgb(238, 238, 238)" }}
            >
              <FbIcon
                icon={faFacebookF}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onMouseLeave}
              />
            </a>
          </SocialIcon>
          <SocialIcon>
            <SpanIconName social={hidden.git}>Github</SpanIconName>
            <a
              href="https://github.com/dulko-dev"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", color: "rgb(238, 238, 238)" }}
            >
              <FontIcon
                icon={faGithubAlt}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onMouseLeave}
              />
            </a>
          </SocialIcon>
          <SocialIcon>
            <SpanIconName social={hidden.link}>Linkedin</SpanIconName>
            <a
              href="https://www.linkedin.com/in/kamil-duliniec/"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", color: "rgb(238, 238, 238)" }}
            >
              <FontIcon
                icon={faLinkedinIn}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onMouseLeave}
              />
            </a>
          </SocialIcon>
        </Social>
        <ButtonSide>
          <Button onClick={aboutId}>More About me</Button>
          <Button onClick={projectId}>My Projects</Button>
          <Button onClick={contactId}>Let's talk</Button>
        </ButtonSide>
      </Content>
    </HomeComponent>
  );
};

export default Home;

/* <div>Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
// Photo by <a href="https://unsplash.com/@byadoniaa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pars Sahin</a> on <a href="https://unsplash.com/s/photos/space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@grakozy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Greg Rakozy</a> on <a href="https://unsplash.com/s/photos/space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

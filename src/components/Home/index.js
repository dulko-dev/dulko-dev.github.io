import React, { useState } from "react";
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
} from "./style";
import Typewriter from "typewriter-effect";
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import myPhoto from "../../assets/homePhoto.jpg";

const Home = ({ hiddenBlock }) => {
  const [hidden, setHidden] = useState({
    fb: false,
    git: false,
    link: false,
  });

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

  return (
    <HomeComponent id='home'>
      <Content>
        <ImageDiv>
          <Image src={myPhoto} />
        </ImageDiv>
        <Text>
          <TitleText>Welcome to my portfolio</TitleText>
          <Typewriter
            options={{
              loop: true,
              autoStart: hiddenBlock ? false : true,
              strings: [
                `Name: Kamil Duliniec, <br>
                Occupation: Front-end Developer, <br>
                Place: Wrocław
                `,
              ],
              pauseFor: 0,
            }}
          />
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
          <Button onClick={contactId}>Let's talk</Button>
          <Button onClick={aboutId}>More About me</Button>
        </ButtonSide>
      </Content>
    </HomeComponent>
  );
};

export default Home;

/* <div>Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
// Photo by <a href="https://unsplash.com/@byadoniaa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pars Sahin</a> on <a href="https://unsplash.com/s/photos/space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

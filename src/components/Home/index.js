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
} from "./style";
import Typewriter from "typewriter-effect";
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [hidden, setHidden] = useState({
    fb: false,
    git: false,
    link: false,
  });

  const handleMouse = (e) => {
    let icon = e.target.dataset.icon;
    switch (icon) {
      case "facebook-f":
        setHidden({ ...hidden, fb: !hidden.fb });
        break;
      case "github-alt":
        setHidden({ ...hidden, git: !hidden.git });
        break;
      case "linkedin-in":
        setHidden({ ...hidden, link: !hidden.link });
        break;
      default:
        setHidden({ ...hidden });
    }
  };

  return (
    <HomeComponent>
      <Content>
        <Text>
          <TitleText>Welcome to my portfolio</TitleText>
          <Typewriter
            options={{
              strings: [
                "Hi! My name is Kamil Duliniec front-end developer",
                "My passion is building some excited application",
                "I am open into collaboration",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              pauseFor: 5000,
            }}
          />
        </Text>
        <Social>
          <SocialIcon>
            <SpanIconName social={hidden.fb}>Facebook</SpanIconName>
            <FbIcon
              icon={faFacebookF}
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            />
          </SocialIcon>
          <SocialIcon>
            <SpanIconName social={hidden.git}>Github</SpanIconName>
            <FontIcon
              icon={faGithubAlt}
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            />
          </SocialIcon>
          <SocialIcon>
            <SpanIconName social={hidden.link}>Linkedin</SpanIconName>
            <FontIcon
              icon={faLinkedinIn}
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            />
          </SocialIcon>
        </Social>
        <ButtonSide>
          <Button>Let's talk</Button>
          <Button>More About me</Button>
        </ButtonSide>
      </Content>
    </HomeComponent>
  );
};

export default Home;

/* <div>Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
// Photo by <a href="https://unsplash.com/@byadoniaa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pars Sahin</a> on <a href="https://unsplash.com/s/photos/space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

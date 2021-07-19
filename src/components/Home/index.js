import React from "react";
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
  FbIcon
} from "./style";
import Typewriter from "typewriter-effect";
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
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
            <SpanIconName>Facebook</SpanIconName>
            <FbIcon icon={faFacebookF} />
          </SocialIcon>
          <SocialIcon>
            <SpanIconName>Github</SpanIconName>
            <FontIcon icon={faGithubAlt} />
          </SocialIcon>
          <SocialIcon>
            <SpanIconName>Linkedin</SpanIconName>
            <FontIcon icon={faLinkedinIn} />
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

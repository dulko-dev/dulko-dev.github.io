import React from "react";
import { HomeComponent, Content, Text } from "./style";
import Typewriter from "typewriter-effect";

const Home = () => {
  const sentence = [
    "Hi! My name is Kamil Duliniec fron-end developer",
    "My passion is building some excited application",
    "I am open into collaboration",
  ];

  return (
    <HomeComponent>
      <Content>
        <Text>
          <Typewriter
            options={{
              strings: [
                'Hi! My name is <span style="color:red"> Kamil Duliniec </span> front-end developer',
                'My passion is building some excited application',
                'I am open into collaboration',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              pauseFor: 5000,
            }}
          />
        </Text>
      </Content>
    </HomeComponent>
  );
};

export default Home;

{/* <div>Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import AOS from "aos";
import "aos/dist/aos.css";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import {
  AboutContainer,
  AboutTag,
  AboutTagTitle,
  TextTag,
  TextTagTitle,
  TextTagP,
  AboutContent,
  Image,
  IconImage,
  IconDiv,
  IconContener,
  IconText,
  Arrow,
} from "./style";
import { iconsFolder } from "./icons";
import myAvatar from "../../assets/myAvatar.png";

const About = () => {
  const [stackUpper, setStackUpper] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const aboutFixed = () => {
      let el = document.querySelector("#cont");
      if (el.getBoundingClientRect().top <= 0) {
        setStackUpper(true);
      } else {
        setStackUpper(false);
      }
    };
    window.addEventListener("scroll", aboutFixed);
  }, []);

  useEffect(() => {
    const arrow = document.querySelector("#cont");
    const handleArrow = () => {
      const check = arrow.getBoundingClientRect().top;
      if (check <= 0) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleArrow);
  }, []);

  useEffect(() => {
    let el = document.querySelector("#cont");
    let photoAbout = document.querySelector(".photoAbout");
    let titleAbout = document.querySelector(".titleAbout");

    const bottomSucks = () => {
      let value = el.getBoundingClientRect().bottom;
      if (el.getBoundingClientRect().bottom <= window.innerHeight) {
        photoAbout.style.opacity = titleAbout.style.opacity = value * 0.001;
      } else {
        photoAbout.style.opacity = titleAbout.style.opacity = "1";
      }
    };
    window.addEventListener("scroll", bottomSucks);
  }, []);

  useEffect(() => {
    AOS.init({});
  }, []);

  const handleUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <AboutContainer>
      <AboutContent>
        <AboutTag fix={stackUpper}>
          <Image src={myAvatar} className="photoAbout" />
          <AboutTagTitle className="titleAbout">
            <span style={{ display: "block" }}>About</span> Me
          </AboutTagTitle>
        </AboutTag>
        <TextTag id="cont">
          <TextTagTitle
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-offset="400"
          >
            Who I am
          </TextTagTitle>
          <TextTagP>
            z tej strony front-end developer z Wrocławia, Swoją pasję do
            tworzenia stron oraz aplikacji odkryłem jeszcze, gdy pracowałem jako
            sprzedawca z 12 latnim doświadczeniem. Od tamtej pory koncentruję
            się na nieustannym podnoszeniu swoich umiejętności i utrwalaniu ich
            poprzez ciągłą praktykę. Jestem dobrze z organizowaną osobą, mającą
            za każdym razem plan na siebie, lubiącą rozwiązywać zadania I
            doprowadzać rozpoczęte sprawy do końca. Na codzień fan angielskich
            seriali oraz premiere league, gier przygodowych typu “click and
            point”, sudoku oraz ligi NBA. W przyszłości, również trener
            personalny kulturystki oraz zdrowego odżywiania.
          </TextTagP>
          <TextTagTitle
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-offset="400"
          >
            Technology
          </TextTagTitle>
          <IconContener id="textTag">
            {iconsFolder.map((icon) => (
              <IconDiv key={icon.id}>
                <IconImage src={icon.img} className={"iconImg"} />
                <IconText className={"iconText"}>{icon.name}</IconText>
              </IconDiv>
            ))}
          </IconContener>
        </TextTag>
      </AboutContent>
      <CSSTransition in={showArrow} timeout={1000} classNames="fade">
        <Arrow icon={faArrowAltCircleUp} size="3x" onClick={handleUp} />
      </CSSTransition>
    </AboutContainer>
  );
};

export default About;

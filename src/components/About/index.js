import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
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
  PlusIcon,
} from "./style";
import { iconsFolder } from "./icons";
import myAvatar from "../../assets/myAvatar.png";

const About = () => {
  const [stackUpper, setStackUpper] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [icon, setIcon] = useState(false);
  const [changeSign, setChangeSign] = useState({
    who: true,
    what: true,
    do: true,
    tech: true,
  });

  useEffect(() => {
    const aboutFixed = () => {
      let el = document.querySelector("#cont");
      console.log(el.getBoundingClientRect().bottom);
      if (
        el.getBoundingClientRect().top <= 0 &&
        el.getBoundingClientRect().bottom > 0
      ) {
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
        photoAbout.style.opacity = titleAbout.style.opacity = value * 0.002;
      } else {
        photoAbout.style.opacity = titleAbout.style.opacity = "1";
      }
    };
    window.addEventListener("scroll", bottomSucks);
  }, []);

  useEffect(() => {
    if (icon === true) {
      gsap.to(".textTag", {
        duration: 1,
        delay: 1,
        stagger: 0.2,
        y: 0,
        opacity: 1,
      });
    }
  }, [icon]);

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

  const handleInfo = (e) => {
    if (e.target.textContent.startsWith("Who")) {
      setChangeSign((prev) => ({ ...prev, who: !changeSign["who"] }));
    }

    if (e.target.textContent.startsWith("What")) {
      setChangeSign((prev) => ({ ...prev, what: !changeSign["what"] }));
    }

    if (e.target.textContent.startsWith("Why")) {
      setChangeSign((prev) => ({ ...prev, do: !changeSign["do"] }));
    }
  };

  const handleTech = (e) => {
    if (e.target.textContent.includes("Technology")) {
      setChangeSign((prev) => ({ ...prev, tech: !changeSign["tech"] }));
    }
    setIcon(true);
  };

  return (
    <AboutContainer>
      <AboutContent>
        <AboutTag fix={stackUpper} id="contImg">
          <Image src={myAvatar} className="photoAbout" />
          <AboutTagTitle className="titleAbout">
            <span style={{ display: "block" }}>About</span> Me
          </AboutTagTitle>
        </AboutTag>
        <TextTag id="cont">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-once="true"
          >
            <TextTagTitle onClick={handleInfo} open={!changeSign.who}>
              Who does he ?
              <PlusIcon icon={changeSign.who ? faPlus : faMinus} />
            </TextTagTitle>
          </div>
          <TextTagP open={!changeSign.who}>
            I'am frontend developer from Wroclaw. My adventure with programming
            has been starting about 1.5 years ago. Currently I
          </TextTagP>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-once="true"
          >
            <TextTagTitle onClick={handleInfo} open={!changeSign.what}>
              What does he like?
              <PlusIcon icon={changeSign.what ? faPlus : faMinus} />
            </TextTagTitle>
          </div>
          <TextTagP open={!changeSign.what}>
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

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-once="true"
          >
            <TextTagTitle onClick={handleInfo} open={!changeSign.do}>
              Why does he do this?
              <PlusIcon icon={changeSign.do ? faPlus : faMinus} />
            </TextTagTitle>
          </div>
          <TextTagP open={!changeSign.do}>
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
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="100"
            data-aos-once="true"
          >
            <TextTagTitle onClick={handleTech} open={!changeSign.tech}>
              Technology
              <PlusIcon icon={changeSign.tech ? faPlus : faMinus} />
            </TextTagTitle>
          </div>
          <IconContener open={!changeSign.tech}>
            {iconsFolder.map((icon) => (
              <IconDiv key={icon.id} className="textTag">
                <IconImage src={icon.img} className={"iconImg"} />
                <IconText className={"iconText"}>{icon.name}</IconText>
              </IconDiv>
            ))}
          </IconContener>
        </TextTag>
      </AboutContent>
      <CSSTransition in={showArrow} timeout={1000} classNames="fade">
        <Arrow icon={faArrowAltCircleUp} onClick={handleUp} />
      </CSSTransition>
    </AboutContainer>
  );
};

export default About;

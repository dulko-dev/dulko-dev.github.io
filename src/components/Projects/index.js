import React, { useEffect, useState } from "react";
import {
  ProjectsContainer,
  ProjectTag,
  ProjectTagP,
  TextContainer,
  TextTitle,
  TextContent,
  ProjectContent,
  Image,
  ImageProject,
  TextModule,
  TextModuleTech,
  Text,
  GitIcon,
  LiveIcon,
  EnterIcon,
  SingleTech,
  GroupImage,
  SpanText,
} from "./style";

import project from "../../assets/projects.png";
import { projectsList } from "./projectsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotjar, faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [stack, setStack] = useState(false);
  const [bottomStack, setBottomStack] = useState(false);

  useEffect(() => {
    const aboutFixed = () => {
      let el = document.querySelector("#project");
      if (
        el.getBoundingClientRect().top <= 0 &&
        el.getBoundingClientRect().bottom >= 450
      ) {
        setStack(true);
      } else {
        setStack(false);
      }
    };
    window.addEventListener("scroll", aboutFixed);
  }, []);

  useEffect(() => {
    let el = document.querySelector("#project");

    const bottomSucks = () => {
      
      if (el.getBoundingClientRect().bottom < 450) {
        setBottomStack(true);
      } else {
        setBottomStack(false);
      }
    };
    window.addEventListener("scroll", bottomSucks);
  }, []);

  return (
    <ProjectsContainer>
      <ProjectContent>
        <ProjectTag id="projectImg">
          <GroupImage fix={stack} abs={bottomStack}>
            <Image src={project} className={"photoProject"} />
            <ProjectTagP className={"titleProject"}>Projects</ProjectTagP>
            <a
              href="https://github.com/dulko-dev?tab=repositories"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }}
            >
              <ProjectTagP>Click for more projects...</ProjectTagP>
            </a>
          </GroupImage>
        </ProjectTag>
        <TextContainer id="project">
          {projectsList.map((element) => (
            <TextContent key={element.id}>
              <TextTitle>{element.title}</TextTitle>
              <TextModule className={"blockProject"}>
                <Text>
                  {element.description.split("\n").map((el, index) => (
                    <SpanText key={index}>{el}</SpanText>
                  ))}
                </Text>
              </TextModule>
              <TextModuleTech className={"blockTech"}>
                <EnterIcon>
                  <a href={element.git} target="_blanket">
                    <GitIcon>
                      <FontAwesomeIcon icon={faGithub} />
                    </GitIcon>
                  </a>
                  <a href={element.live} target="_blanket">
                    <LiveIcon>
                      <FontAwesomeIcon icon={faHotjar} />
                    </LiveIcon>
                  </a>
                </EnterIcon>
                {element.tech.map((tech, index) => (
                  <SingleTech key={index}>{tech}</SingleTech>
                ))}
              </TextModuleTech>
              <ImageProject src={element.img} />
            </TextContent>
          ))}
        </TextContainer>
      </ProjectContent>
    </ProjectsContainer>
  );
};

export default Projects;

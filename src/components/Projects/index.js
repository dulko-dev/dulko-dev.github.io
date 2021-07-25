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
  EnterIcon
} from "./style";

import project from "../../assets/projects.png";
import { projectsList } from "./projectsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotjar, faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [stackUpper, setStackUpper] = useState(false);
  const [stackBottom, setStackBottom] = useState(false);

  useEffect(() => {
    const aboutFixed = () => {
      let el = document.querySelector("#project");
      if (el.getBoundingClientRect().top <= 0) {
        setStackUpper(true);
      } else {
        setStackUpper(false);
      }
    };
    window.addEventListener("scroll", aboutFixed);
  }, []);

  useEffect(() => {
    let el = document.querySelector("#project");
    const bottomSucks = () => {
      if (el.getBoundingClientRect().bottom <= window.innerHeight) {
        setStackUpper(false);
        setStackBottom(true);
      } else {
        setStackBottom(false);
      }
    };
    window.addEventListener("scroll", bottomSucks);
  }, []);

  return (
    <ProjectsContainer>
      <ProjectContent>
        <ProjectTag fix={stackUpper} over={stackBottom}>
          <Image src={project} />
          <ProjectTagP>Projects</ProjectTagP>
        </ProjectTag>
        <TextContainer id="project">
          {projectsList.map((element) => (
            <TextContent key={element.id}>
              <TextTitle>{element.title}</TextTitle>
              <TextModule className={"blockProject"}>
                <Text>{element.description}</Text>
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
              </TextModule>
              <TextModuleTech className={"blockTech"}></TextModuleTech>
              <ImageProject src={element.img} />
            </TextContent>
          ))}
        </TextContainer>
      </ProjectContent>
    </ProjectsContainer>
  );
};

export default Projects;

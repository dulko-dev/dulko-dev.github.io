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
} from "./style";

import project from "../../assets/projects.png";
import { projectsList } from "./projectsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotjar, faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [stackUpper, setStackUpper] = useState(false);
 

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
     
      } else {
        
      }
    };
    window.addEventListener("scroll", bottomSucks);
  }, []);

  return (
    <ProjectsContainer>
      <ProjectContent>
        <ProjectTag fix={stackUpper} >
          <Image src={project} />
          <ProjectTagP>Projects</ProjectTagP>
        </ProjectTag>
        <TextContainer id="project">
          {projectsList.map((element) => (
            <TextContent key={element.id}>
              <TextTitle>{element.title}</TextTitle>
              <TextModule className={"blockProject"}>
                <Text>{element.description}</Text>
              </TextModule>
              <TextModuleTech className={"blockTech"}>
                <EnterIcon>
                  <a href={element.git} target="_blanket">
                    <GitIcon>
                      <FontAwesomeIcon
                        icon={faGithub}
                      />
                    </GitIcon>
                  </a>
                  <a href={element.live} target="_blanket">
                    <LiveIcon>
                      <FontAwesomeIcon
                        icon={faHotjar}
                      />
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

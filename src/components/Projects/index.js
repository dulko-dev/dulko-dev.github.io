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
} from "./style";

import project from "../../assets/projects.png";
import imgDashboard from "../../assets/dashboard.png";

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
          <TextTitle>React dashboard</TextTitle>
          <TextContent>
            <ImageProject src={imgDashboard} />
          </TextContent>
        </TextContainer>
      </ProjectContent>
    </ProjectsContainer>
  );
};

export default Projects;

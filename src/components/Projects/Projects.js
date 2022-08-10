import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>
      <svg
        width="30%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
      </svg>
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Projects</div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;

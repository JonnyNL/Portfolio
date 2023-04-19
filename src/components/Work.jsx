import React, { useState } from "react";
import "../styles/portfolio.css";
import Project1 from "../projects/NLQuest.png";
import Project2 from "../projects/Meerkats.png";
import Project3 from "../projects/Gary'sDiner.png";
import Project4 from "../projects/ChuckAPI.png";
const projectsData = [
  {
    id: 1,
    title: "NLQUEST",
    imageSrc: Project1,
    description:
      "NLQUEST is an idea I had to fight the ever complicating job market. It's an early stage idea an still in development. The alpha stage is a product of my term 2 final sprint to showcase my ability to create a react-app",
    githubLink: "https://github.com/JonnyNL/FSNLQuest",
  },
  {
    id: 2,
    title: "Just Meerkats",
    imageSrc: Project2,
    description:
      "First HTML site I've ever made! Inspired by wikipedia I did some basic research on meerkats and put it into a website with resoures and sources",
    githubLink: "https://github.com/JonnyNL",
  },
  {
    id: 3,
    title: "Gary's Diner Menu",
    imageSrc: Project3,
    description:
      "A Mid Term Sprint project we had to design a food website, I designed a working menu page that had tabs for the corresponding categories, navagation bar to go back home or order, and the menu is responsive",
    githubLink: "https://github.com/JonnyNL",
  },
  {
    id: 4,
    title: "Chuck API",
    imageSrc: Project4,
    description:
      "First time successfully using an API to fetch data, in this case I set the catergories using a selection input allowing the user to select a joke category, that would format into a url  which would the jokes would then be fetched from.",
    githubLink: "https://github.com/user/JonnyNL",
  },
  // Reminder for myself to add more projects here lol
];

const Work = () => {
  const [activeProjects, setActiveProjects] = useState([
    projectsData[0],
    projectsData[1],
  ]);
  // A function to make the arrow keys cycle project data through project displays
  const handleProjectChange = (direction) => {
    setActiveProjects((prevActiveProjects) => {
      const currentIndex = projectsData.findIndex(
        (project) => project.id === prevActiveProjects[0].id
      );
      let nextIndex;
      if (direction === "right") {
        nextIndex = (currentIndex + 1) % projectsData.length;
      } else if (direction === "left") {
        nextIndex =
          (currentIndex - 1 + projectsData.length) % projectsData.length;
      }
      const nextProjects = [
        projectsData[nextIndex],
        projectsData[(nextIndex + 1) % projectsData.length],
      ];
      return nextProjects;
    });
  };

  return (
    <div className="wBackgroundc">
      <div className="work-container">
        <div className="header">
          <h1>Recent Work</h1>
          <p>
            As a Software Development student, I'm constantly challenged to
            apply my learnings and turn them into tangible results. Here are
            some of the projects I've created to showcase my skills and passion
            for the field.
          </p>
        </div>
        <div className="projects-container">
          {activeProjects.map((project) => (
            <div key={project.id} className="project">
              <img src={project.imageSrc} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Find Out More!
              </a>
            </div>
          ))}
        </div>
        <div className="arrows-container">
          <button
            className="arrow left"
            onClick={() => handleProjectChange("left")}
          >
            &lt;
          </button>
          <button
            className="arrow right"
            onClick={() => handleProjectChange("right")}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;

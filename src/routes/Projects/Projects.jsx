import { React, useEffect } from "react";
import ProjectItem from "../../Components/Project-Item/project-item";
import {
  ProjectContainer,
  Container,
  HeadingContainer,
  Heading,
} from "./Projects.styles";

const projects = [
  {
    id: 1,
    title: "Portfolio Page",
    imageUrl: "https://i.ibb.co/V37wqxk/lion.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit. ",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/personal-portfolio",
    demo: "",
  },
  {
    id: 2,
    title: "TDB-Clothing-2.0",
    imageUrl: "https://i.ibb.co/V37wqxk/lion.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit. ",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/TDB-Clothing-2.0",
    demo: "https://tdb-clothing.netlify.app/",
  },
  {
    id: 3,
    title: "FoodToGo",
    imageUrl: "https://i.ibb.co/V37wqxk/lion.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit. ",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/FoodToGo/tree/part-52",
    demo: "React Native project",
  },
  {
    id: 4,
    title: "Face-Recognition-App",
    imageUrl: "https://i.ibb.co/V37wqxk/lion.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/personal-portfolio",
    demo: "https://face-recognition-app-tcd8.onrender.com/",
  },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <ProjectContainer>
      <HeadingContainer>
        <Heading>PROJECTS</Heading>
      </HeadingContainer>
      <Container>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </Container>
    </ProjectContainer>
  );
};

export default Projects;

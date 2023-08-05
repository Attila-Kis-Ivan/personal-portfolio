import React from "react";

export const projects = [
  {
    id: 1,
    title: "Portfolio Page",
    image: "../../assets/project-images/webshop.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit. ",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/personal-portfolio",
    demo: "",
  },
  {
    id: 2,
    title: "TDB-Clothing-2.0",
    image: "../../assets/project-images/webshop.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit. ",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/TDB-Clothing-2.0",
    demo: "https://tdb-clothing.netlify.app/",
  },
  {
    id: 3,
    title: "FoodToGo",
    image: "../../assets/project-images/webshop.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit. ",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/FoodToGo/tree/part-52",
    demo: "React Native project",
  },
  {
    id: 4,
    title: "Face-Recognition-App",
    image: "../../assets/project-images/webshop.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/personal-portfolio",
    demo: "https://face-recognition-app-tcd8.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div className="container">
      {projects.map((project) => (
        <div key={project.id} className="project-container">
          <div className="card-container">
            <div className="image-container"> {project.image}</div>
            <div className="title-container">{project.title}</div>
            <div className="descr-container">{project.description}</div>
            <div className="button-container">
              <button href={project.demo}></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

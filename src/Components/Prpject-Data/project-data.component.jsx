import { React, useEffect } from "react";
import ProjectItem from "../Project-Item/project-item";
import {
  ProjectContainer,
  Container,
  HeadingContainer,
  Heading,
} from "./project-data.styles";

const projects = [
  {
    id: 1,
    title: "Portfolio Page",
    imageUrl: "https://i.ibb.co/k9Cqwwj/Portfolio.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit. ",
    language: "React",
    source: "https://github.com/Attila-Kis-Ivan/personal-portfolio",
    demo: "https://tdb-coding.com/",
  },
  {
    id: 2,
    title: "TDB-Clothing-2.0",
    imageUrl: "https://i.ibb.co/FmB7Lxp/Webshop.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit. ",
    language: "React",
    source: "https://github.com/Attila-Kis-Ivan/TDB-Clothing-2.0",
    demo: "https://tdb-clothing.netlify.app/",
  },
  {
    id: 3,
    title: "FoodToGo",
    imageUrl: "https://i.ibb.co/Mk8TyvZ/FoodToGo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit. ",
    language: "React Native",
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
  {
    id: 5,
    title: "Kanban Board",
    imageUrl: "https://i.ibb.co/ng8DL4y/Kanban.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/Drag-and-Drop",
    demo: "https://attila-kis-ivan.github.io/Drag-and-Drop/",
  },
  {
    id: 6,
    title: "Ping-Pong",
    imageUrl: "https://i.ibb.co/cvH2pYx/Ping-Pong.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/Ping-Pong",
    demo: "https://attila-kis-ivan.github.io/Ping-Pong/",
  },
  {
    id: 7,
    title: "NASA-API-Pictures",
    imageUrl: "https://i.ibb.co/L0JS26m/NASA-API.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/NASA-API-Pictures",
    demo: "https://attila-kis-ivan.github.io/NASA-API-Pictures/",
  },
  {
    id: 8,
    title: "Calculator",
    imageUrl: "https://i.ibb.co/8DVqqx4/Calculator.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/Calculator",
    demo: "https://attila-kis-ivan.github.io/Calculator/",
  },

  {
    id: 9,
    title: "Math Game",
    imageUrl: "https://i.ibb.co/CPNwbQY/Math-Game.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/The-Math-Game",
    demo: "https://attila-kis-ivan.github.io/The-Math-Game/",
  },

  {
    id: 10,
    title: "Music Player",
    imageUrl: "https://i.ibb.co/f2zyq8h/Music-Player.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/Music-Player",
    demo: "https://attila-kis-ivan.github.io/Music-Player/",
  },
  {
    id: 11,
    title: "Bookmark App",
    imageUrl: "https://i.ibb.co/nw6c4rG/BookMark.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/Bookmark-App",
    demo: "https://attila-kis-ivan.github.io/Bookmark-App/",
  },

  {
    id: 12,
    title: "Landing Page",
    imageUrl: "https://i.ibb.co/G5Ckw39/Landing-Page.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "CSS",
    source: "https://github.com/Attila-Kis-Ivan/Splash-Page",
    demo: "https://attila-kis-ivan.github.io/Splash-Page/",
  },

  {
    id: 13,
    title: "Quote Generator",
    imageUrl: "https://i.ibb.co/Bn7qDZ6/Quote-Generator.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "CSS",
    source: "https://github.com/Attila-Kis-Ivan/Quote-Generator",
    demo: "https://attila-kis-ivan.github.io/Quote-Generator/",
  },
  {
    id: 14,
    title: "Infinite Scroll",
    imageUrl: "https://i.ibb.co/ncqJpDG/Infinite-Scroll.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "javascript",
    source: "https://github.com/Attila-Kis-Ivan/Infinite-Scroll",
    demo: "https://attila-kis-ivan.github.io/Infinite-Scroll/",
  },
  {
    id: 15,
    title: "CSS background color generator",
    imageUrl: "https://i.ibb.co/XYfHzjT/Background-color-generator.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet purus gravida quis blandit.",
    language: "CSS",
    source: "https://github.com/Attila-Kis-Ivan/Background-Color-Generator",
    demo: "https://attila-kis-ivan.github.io/Background-Color-Generator/",
  },
];

const ProjectData = () => {
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

export default ProjectData;

import React from "react";
import {
  CardContainer,
  SkillsContainer,
  Container,
  ImageHolder,
} from "./Skills.styles";
import {
  DiJavascript1,
  DiHtml5,
  DiReact,
  DiCss3,
  DiNodejs,
} from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";
import { ImGit } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

export const skills = [
  {
    id: 1,
    title: "javascript",
    image: <DiJavascript1 id="1" />,
  },
  {
    id: 2,
    title: "html5",
    image: <DiHtml5 />,
  },
  {
    id: 3,
    title: "css",
    image: <DiCss3 />,
  },
  {
    id: 4,
    title: "react",
    image: <DiReact />,
  },
  {
    id: 5,
    title: "react-native",
    image: <DiReact />,
  },
  {
    id: 6,
    title: "styled-components",
    image: <SiStyledcomponents />,
  },
  {
    id: 7,
    title: "node",
    image: <DiNodejs />,
  },
  {
    id: 8,
    title: "git",
    image: <ImGit />,
  },
  {
    id: 9,
    title: "github",
    image: <FaGithub />,
  },
];

const Skills = () => {
  return (
    <Container>
      {skills.map((item) => (
        <SkillsContainer key={item.id}>
          <CardContainer>
            <ImageHolder> {item.image}</ImageHolder>
            <div className="title-container">{item.title}</div>
          </CardContainer>
        </SkillsContainer>
      ))}
    </Container>
  );
};
export default Skills;

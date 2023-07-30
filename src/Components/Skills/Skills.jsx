import React from "react";
import {} from "./Skills.styles";
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

// export const skills = [
//   {
//     id: 1,
//     title: "javascript",
//     image: <DiJavascript1 />,
//   },
//   {
//     id: 2,
//     title: "html5",
//     image: <DiHtml5 />,
//   },
//   {
//     id: 3,
//     title: "css",
//     image: <DiCss3 />,
//   },
//   {
//     id: 4,
//     title: "react",
//     image: <DiReact />,
//   },
//   {
//     id: 5,
//     title: "react-native",
//     image: <DiReact />,
//   },
//   {
//     id: 6,
//     title: "styled-components",
//     image: <SiStyledcomponents />,
//   },
//   {
//     id: 7,
//     title: "node",
//     image: <DiNodejs />,
//   },
//   {
//     id: 8,
//     title: "git",
//     image: <ImGit />,
//   },
//   {
//     id: 8,
//     title: "github",
//     image: <FaGithub />,
//   },
// ];

// const SkillSet = () => {
//   return (
//     <SkillsContainer>
//       {skills.map((skill) => (
//         <SkillItem key={skill.id} skill={skill} />
//       ))}
//     </SkillsContainer>
//   );
// };

const Skills = () => {
  return (
    <div className="Icon-container">
      <div className="skill-icons">
        <DiReact />
      </div>
      <div className="skill-icons">
        <DiReact />
      </div>
      <div className="skill-icons">
        <DiNodejs />
      </div>
      <div className="skill-icons">
        <DiJavascript1 />
      </div>
      <div className="skill-icons">
        <DiHtml5 />
      </div>
      <div className="skill-icons">
        <DiCss3 />
      </div>
      <div className="skill-icons">
        <SiStyledcomponents />
      </div>
      <div className="skill-icons">
        <ImGit />
      </div>
    </div>
  );
};
export default Skills;

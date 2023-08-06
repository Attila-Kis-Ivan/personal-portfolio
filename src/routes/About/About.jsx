import { React, useEffect } from "react";
import Skills from "../../Components/Skills/Skills";
import Tools from "../../Components/Tools/Tools";
import about from "../../assets/images/about.png";
import {
  AboutSection,
  AboutContainer,
  AboutTextContainer,
  AboutPictureContainer,
  AboutImage,
  HeaderText,
  Introduce,
  Purple,
  SkillsPurple,
  ToolsPurple,
  ToolsWhite,
  PContainer,
  Paragraph,
} from "./about.styles.jsx";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <AboutSection>
      <AboutContainer>
        <AboutTextContainer>
          <HeaderText>
            <Introduce>
              Let Me <Purple>Introduce</Purple> Myself
            </Introduce>
          </HeaderText>
          <PContainer>
            <Paragraph>
              Hi everyone, I'm <span className="purple">Attila Kis-Ivan</span>
              Donec imperdiet lorem in felis molestie, vitae malesuada purus
              bibendum. Sed eget convallis ipsum. Fusce felis arcu, tempus ut
              sem eget, lobortis viverra nunc. Etiam id dictum lorem, quis
              semper sem. Etiam enim orci Fusce porta aliquam rutrum. Fusce
              ligula sem, pretium et fermentum ac, venenatis at lorem.
            </Paragraph>
          </PContainer>
        </AboutTextContainer>
        <AboutPictureContainer>
          <AboutImage src={about} alt="about" />
        </AboutPictureContainer>
      </AboutContainer>

      <SkillsPurple>Skillset</SkillsPurple>
      <Skills />
      <ToolsPurple>
        Tools <ToolsWhite>I use</ToolsWhite>
      </ToolsPurple>
      <Tools />
    </AboutSection>
  );
};

export default About;

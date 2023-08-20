import React, { useEffect } from "react";
import DownloadButton from "../../Components/Download-Button/Button.component";
import resume from "../../assets/CV/Attila Kis-Ivan CV.svg";
import {
  Container,
  ButtonContainer,
  ResumeContainer,
  Section,
} from "./resume.styles";

const ResumeComponent = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <Container>
      <Section>
        <DownloadButton />

        <ResumeContainer>
          <img src={resume} alt="resume" />
          {/* <Resume /> */}
        </ResumeContainer>
      </Section>
    </Container>
  );
};

export default ResumeComponent;

import React, { useEffect } from "react";
import ResumeComponent from "../../Components/Resume/resume.component";

const Resume = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return <ResumeComponent />;
};

export default Resume;

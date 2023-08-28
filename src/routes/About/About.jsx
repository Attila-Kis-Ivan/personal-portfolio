import React, { useEffect } from "react";
import AboutItem from "../../Components/About/about.component";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return <AboutItem />;
};

export default About;

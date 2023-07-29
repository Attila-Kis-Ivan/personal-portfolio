import React from "react";
import Skills from "../../Components/Skills/Skills";
import Tools from "../../Components/Tools/Tools";
import about from "../../assets/images/about.png";
import "./about.styles.css";

const About = () => {
  return (
    <div className="section">
      <div className="about-container">
        <div className="about-text-container">
          <div className="header-text">
            <h1 className="introduce">
              Let Me <span className="purple">Introduce</span> Myself
            </h1>
          </div>
          <div className="p-container">
            <p className="paragraph">
              Hi everyone, I'm <span className="purple">Attila Kis-Ivan</span>
              Donec imperdiet lorem in felis molestie, vitae malesuada purus
              bibendum. Sed eget convallis ipsum. Fusce felis arcu, tempus ut
              sem eget, lobortis viverra nunc. Etiam id dictum lorem, quis
              semper sem. Etiam enim orci Fusce porta aliquam rutrum. Fusce
              ligula sem, pretium et fermentum ac, venenatis at lorem.
            </p>
          </div>
        </div>
        <div className="about-picture-container">
          <img className="about-image" src={about} alt="about" />
        </div>
      </div>
      {/* <Skills />
      <Tools /> */}
    </div>
  );
};

export default About;

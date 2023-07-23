import React from "react";
import TypeWriter from "./TypeWriter";
import homeImage from "../../assets/images/home-img.svg";
import "./Home.style.css";
const Home = () => {
  return (
    <section className="home">
      <container className="home-section" id="home">
        <container className="home-content">
          <div className="header-text-container">
            <h1 className="header-text">
              Hi There!
              <span className="greeting"> 👋🏻 </span>
            </h1>
            <h1>
              <span className="im">I'm </span>
              <span className="main-name"> Attila Kis-Ivan</span>
            </h1>
            <div className="type-writer">
              <TypeWriter />
            </div>
          </div>
          <div className="hero-image-container">
            <img src={homeImage} alt="home" className="hero-image" />
          </div>
        </container>
      </container>
    </section>
  );
};

export default Home;

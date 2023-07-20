import React from "react";
import TypeWriter from "./TypeWriter";
const Home = () => {
  return (
    <section className="home">
      <container className="home-section" id="home">
        <container className="home-content">
          <div className="hero-image"></div>
          <div className="header-text-container">
            <h1 className="header-text">
              {" "}
              Hi There!
              <span className="greeting"> 👋🏻 </span>
            </h1>
            <h1>
              I'm <span className="main-name"> Attila Kis-Ivan</span>
            </h1>
            <div className="type-writer">
              <TypeWriter />
            </div>
          </div>
        </container>
      </container>
    </section>
  );
};

export default Home;

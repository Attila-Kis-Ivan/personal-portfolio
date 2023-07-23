import React from "react";
import github from "../../assets/images/github-purple.svg";
import linkedIn from "../../assets/images/inkedI-purple.svg";
import "./Footer.styles.css";

const FooterBar = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-item-container">
        <div className="footer-copyright">
          <h1 className="footer-copyright-text">
            Developed and Designed by Attila Kis-Ivan
          </h1>
        </div>
        <div className="footer-copyright">
          <h1 className="footer-copyright-text">Copyright &copy; {year} TDB</h1>
        </div>
        <div className="footer-copyright">
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/attila-kis-ivan-68a67bb3/"
              target="blank"
            >
              <img src={linkedIn} alt="" />
            </a>
            <a href="https://github.com/Attila-Kis-Ivan" target="blank">
              <img src={github} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;

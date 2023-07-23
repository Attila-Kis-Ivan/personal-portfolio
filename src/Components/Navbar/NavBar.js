import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import github from "../../assets/images/github-purple.svg";
import linkedIn from "../../assets/images/inkedI-purple.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/Logo.svg";
import "./NavBar.css";
import { IconContext } from "react-icons/lib";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <IconContext.Provider value={{ className: "navbar-menu-icons " }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <div className="logo-container">
              <Link to="/" className="navbar-logo">
                <img src={logo} alt="logo" className="navbar-icon" />
              </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <div className="link-container">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {/* <AiOutlineHome style={{ marginBottom: "2px" }} /> */}
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {/* <AiOutlineUser style={{ marginBottom: "2px" }} /> */}
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {/* <AiOutlineFundProjectionScreen
                      style={{ marginBottom: "2px" }}
                    /> */}
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Resume"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {/* <CgFileDocument style={{ marginBottom: "2px" }} />  */}
                    Resume
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="social-icon-container">
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
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;

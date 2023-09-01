import React, { useState } from "react";

// import github from "../../assets/images/github-purple.svg";
// import linkedIn from "../../assets/images/inkedI-purple.svg";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/images/Logo.svg";
// // import "./NavBar.css";
// import { IconContext } from "react-icons/lib";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendendContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkExtended,
  Logo,
  OpenLinksButton,
} from "./NavBar.styles";
import LogoImage from "../../assets/images/Logo.svg";

// const NavBar = () => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   return (
//     <>
//       <IconContext.Provider value={{ className: "navbar-menu-icons " }}>
//         <nav className="navbar">
//           <div className="navbar-container container">
//             <div className="logo-container">
//               <Link to="/" className="navbar-logo">
//                 <img src={logo} alt="logo" className="navbar-icon" />
//               </Link>
//             </div>
//             <div className="menu-icon" onClick={handleClick}>
//               {click ? <FaTimes /> : <FaBars />}
//             </div>
//             <div className="link-container">
//               <ul className={click ? "nav-menu active" : "nav-menu"}>
//                 <li className="nav-item">
//                   <NavLink
//                     to="/"
//                     className={({ isActive }) =>
//                       "nav-links" + (isActive ? " activated" : "")
//                     }
//                     onClick={closeMobileMenu}
//                   >
//                     {/* <AiOutlineHome style={{ marginBottom: "2px" }} /> */}
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink
//                     to="/about"
//                     className={({ isActive }) =>
//                       "nav-links" + (isActive ? " activated" : "")
//                     }
//                     onClick={closeMobileMenu}
//                   >
//                     {/* <AiOutlineUser style={{ marginBottom: "2px" }} /> */}
//                     About
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink
//                     to="/projects"
//                     className={({ isActive }) =>
//                       "nav-links" + (isActive ? " activated" : "")
//                     }
//                     onClick={closeMobileMenu}
//                   >
//                     {/* <AiOutlineFundProjectionScreen
//                       style={{ marginBottom: "2px" }}
//                     /> */}
//                     Projects
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink
//                     to="/Resume"
//                     className={({ isActive }) =>
//                       "nav-links" + (isActive ? " activated" : "")
//                     }
//                     onClick={closeMobileMenu}
//                   >
//                     Resume
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink
//                     to="/contact"
//                     className={({ isActive }) =>
//                       "nav-links" + (isActive ? " activated" : "")
//                     }
//                     onClick={closeMobileMenu}
//                   >
//                     Contact
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//             <div className="social-icon-container">
//               <div className="social-icon">
//                 <a
//                   href="https://www.linkedin.com/in/attila-kis-ivan-68a67bb3/"
//                   target="blank"
//                 >
//                   <img src={linkedIn} alt="" />
//                 </a>
//                 <a href="https://github.com/Attila-Kis-Ivan" target="blank">
//                   <img src={github} alt="" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// };

// export default NavBar;

const NavBar = () => {
  const [extendnavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendnavbar={extendnavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/projects ">Projects</NavbarLink>
            <NavbarLink to="/resume">Resume</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((value) => !value);
              }}
            >
              {extendnavbar ? <> &#10005;</> : <> &#9776; </>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImage}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendnavbar && (
        <NavbarExtendendContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
          <NavbarLinkExtended to="/projects ">Projects</NavbarLinkExtended>
          <NavbarLinkExtended to="/resume">Resume</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
        </NavbarExtendendContainer>
      )}
    </NavbarContainer>
  );
};

export default NavBar;

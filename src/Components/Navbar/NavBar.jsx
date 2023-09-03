import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendendContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkExtended,
  Icon,
  OpenLinksButton,
  SocialIcon,
  AiOutlineHomeicn,
  AiOutlineFundProjectionScreenicn,
  AiOutlineUsericn,
  AiOutlineFilePdficn,
  AiOutlineMailicn,
} from "./NavBar.styles";
import LinkedImage from "../../assets/images/inkedI-purple.svg";
import GithubImage from "../../assets/images/github-purple.svg";

const NavBar = () => {
  const [extendnavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendnavbar={extendnavbar}>
      <IconContext.Provider value={{ className: "navbar-icons" }}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink
                lassName={({ isActive }) => (isActive ? " active" : "")}
                to="/"
              >
                <AiOutlineHomeicn />
                Home
              </NavbarLink>
              <NavbarLink to="/about">
                <AiOutlineUsericn />
                About
              </NavbarLink>
              <NavbarLink to="/projects ">
                <AiOutlineFundProjectionScreenicn /> Projects
              </NavbarLink>
              <NavbarLink to="/resume">
                <AiOutlineFilePdficn />
                Resume
              </NavbarLink>
              <NavbarLink to="/contact">
                <AiOutlineMailicn /> Contact
              </NavbarLink>
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
            <>
              <SocialIcon
                href="https://github.com/Attila-Kis-Ivan"
                target="_blank"
                rel="noreferrer"
              >
                <Icon src={GithubImage} alt="LinkedIn"></Icon>
              </SocialIcon>
            </>
            <>
              <SocialIcon
                href="https://www.linkedin.com/in/attila-kis-ivan-68a67bb3/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon src={LinkedImage} alt="LinkedIn"></Icon>
              </SocialIcon>
            </>
          </RightContainer>
        </NavbarInnerContainer>
        {extendnavbar && (
          <NavbarExtendendContainer>
            <NavbarLinkExtended to="/">
              <AiOutlineHomeicn /> Home
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/about">
              <AiOutlineUsericn /> About
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/projects ">
              <AiOutlineFundProjectionScreenicn /> Projects
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/resume">
              <AiOutlineFilePdficn /> Resume
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/contact">
              <AiOutlineMailicn /> Contact
            </NavbarLinkExtended>
          </NavbarExtendendContainer>
        )}
      </IconContext.Provider>
    </NavbarContainer>
  );
};

export default NavBar;

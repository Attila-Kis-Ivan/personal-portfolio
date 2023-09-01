import styled from "styled-components";
import { Link } from "react-router-dom";
import { Devices } from "../../Components/MediaQuery";

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: ${(props) => (props.extendnavbar ? "100vh" : "3em")};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  background-color: #000;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;
export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: large;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  margin: 1em;

  @media ${Devices.md} {
    display: none;
  }
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 150px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #fff;
  font-size: 45px;
  cursor: pointer;
  height: auto;

  @media (min-width: 960px) {
    display: none;
  }

  &:hover {
    color: #b127e8;
  }
`;

export const NavbarExtendendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 960px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: large;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  margin: 1em;

  &:hover {
    color: #b127e8;
  }
`;

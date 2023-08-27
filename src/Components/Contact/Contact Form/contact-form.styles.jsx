import styled from "styled-components";
import { Devices } from "../../../Components/MediaQuery";

export const ContactSection = styled.section`
  min-height: 100vh;
  width: 100vw;
  padding: 2em;
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media ${Devices.md} {
    width: 50%;
  }
`;
export const Heading = styled.h1`
  font-family: "Montserrat";
  text-align: center;
  color: #b127e8;
  font-size: 2.5em;
  letter-spacing: 2px;
  @media ${Devices.md} {
    font-size: 2em;
  }
`;

export const Text = styled.p`
  max-width: 400px;
  line-height: 27px;
  font-family: "Montserrat";
  font-size: 1em;
  letter-spacing: 2px;
  color: #fff;
  margin: 1em 0 2em 0;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 0.8em;
  background-color: #b127e8;
  border-radius: 8px;
  font-size: 1.2em;
  color: #fff;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const Alert = styled.div`
  position: absolute;
  top: 50;
  right: 50;
  width: 15em;
  height: 15em;
  background-color: #000;
  font-size: 1em;
  letter-spacing: 2px;
  text-align: center;
  color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 10px #b127e8;
`;

export const TextAlert = styled.p`
  max-width: 400px;
  line-height: 27px;
  font-family: "Montserrat";
  font-size: 1.2em;
  letter-spacing: 2px;
  color: #fff;
  margin: 5em 0 2em 0;
`;

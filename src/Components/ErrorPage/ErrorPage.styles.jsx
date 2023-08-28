import styled from "styled-components";
import { Devices } from "../MediaQuery";

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #000;
`;

export const Heading = styled.h1`
  margin: 1em;
  font-family: "Montserrat";
  text-align: center;
  color: #b127e8;
  font-size: 2.5em;
  font-weight: 400;
  letter-spacing: 2px;
  @media ${Devices.md} {
    font-size: 2em;
  }
`;

export const Text = styled.p`
  max-width: 20rem;
  line-height: 27px;
  font-family: "Montserrat";
  font-size: 1.2em;
  letter-spacing: 2px;
  color: #fff;
  margin: 1em 0 2em 0;
  @media ${Devices.md} {
    font-size: 1em;
  }
`;

export const I = styled.i`
  font-size: 1.2em;
  letter-spacing: 2px;
  color: #fff;
  @media ${Devices.md} {
    font-size: 1em;
  }
`;

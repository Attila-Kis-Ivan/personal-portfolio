import styled from "styled-components";
import { Devices } from "../../Components/MediaQuery";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin-top: 1em;
  margin-bottom: 35em;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 15em;
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

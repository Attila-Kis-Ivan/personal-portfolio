import styled from "styled-components";
import { Devices } from "../../Components/MediaQuery";

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  background-color: #000;
  color: #fff;

  @media ${Devices.md} {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: auto;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  text-align: center;
  width: 100vw;
  margin-top: 3em;
  margin-left: 5em;
  margin-right: 5em;
  margin-bottom: 14em;
  @media ${Devices.md} {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    text-align: center;
    width: 90vw;
    height: auto;
    margin: 2em;
  }
`;

export const AboutTextContainer = styled.div`
  width: 50%;

  @media ${Devices.md} {
    width: 100%;
    margin: 2em;
    text-align: center;
    height: auto;
  }
`;

export const AboutPictureContainer = styled.div`
  width: 30%;
  height: auto;
  margin-left: 8em;
  margin-top: 8em;

  @media ${Devices.md} {
    width: 50vw;
    margin: 3em;
  }
`;
export const AboutImage = styled.img`
  width: 90%;
  height: 100%;

  @media ${Devices.md} {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderText = styled.div`
  margin-top: 5em;
  margin-bottom: 2em;

  @media ${Devices.md} {
    margin-top: 4em;
  }
`;

export const Introduce = styled.h1`
  font-family: "Montserrat";
  font-weight: 500;

  @media ${Devices.md} {
    font-size: 1.4em;
    width: 100%;
  }
`;
export const Purple = styled.span`
  color: #b127e8;
`;

export const PContainer = styled.div`
  margin-top: 1em;

  @media ${Devices.md} {
    width: 100%;
  }
`;
export const Paragraph = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 1.2em;
  letter-spacing: 0.2em;
  line-height: 1.5em;

  @media ${Devices.md} {
    width: 100%;
    font-size: 1.2em;
  }
`;

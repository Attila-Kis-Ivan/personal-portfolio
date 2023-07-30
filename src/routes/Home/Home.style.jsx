import styled, { keyframes } from "styled-components";
import { Devices } from "../../Components/MediaQuery";

export const HomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  font-size: 3rem;
  background-color: #000;
  color: #fff;
  @media ${Devices.md} {
    font-size: 1.6em;
    width: 100%;
  }
`;

export const Greeting = styled.span`
  padding-left: 0.5em;
  animation-name: GreetingAnimation;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  @keyframes GreetingAnimation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @media ${Devices.md} {
    font-size: 1em;
  }
`;

const KeyfameAnimation = () => {
  return <Greeting></Greeting>;
};

export default KeyfameAnimation;

export const GreetingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;
export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  color: whitesmoke;
  text-align: left;
  width: 100vw;
  height: 80vh;
  margin: 1em;
  margin-top: 3.5em;
  margin-bottom: 0;

  @media ${Devices.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const HeaderTextContainer = styled.div`
  width: 50%;
  height: 100%;

  @media ${Devices.md} {
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    width: 100%;
  }
`;

export const HeaderText = styled.h1`
  font-family: "Montserrat";
  font-size: 1.1em;
  font-weight: 300;

  @media ${Devices.md} {
    font-size: 1.5em;
    margin-top: 2em;
  }
`;

// .header-main {
//   font-size: 1.1em;
//   font-weight: 300;
// }
export const Im = styled.span`
  font-family: "Montserrat";
  font-size: 1em;
  font-weight: 200;
`;

export const MainName = styled.span`
  font-family: "Montserrat";
  font-size: 1em;
  font-weight: 500;
  color: #b127e8;
`;

export const NameContainer = styled.h1`
  @media ${Devices.md} {
    font-size: 1.4em;
    padding-top: 1em;
  }
`;

export const TypeWriterContainer = styled.div`
  margin-top: 1em;
  color: #b127e8;
  font-size: 1em;
  color: #b127e8;
  font-weight: 400;
  @media ${Devices.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    margin: auto;
  }
`;

export const HeroImageContainer = styled.div`
  width: 40%;
  height: 100%;
  margin: auto;
  margin-left: 1em;
  padding-left: 1em;

  @media ${Devices.md} {
    margin: 1em;
    width: 50%;
  }
`;
export const HeroImage = styled.img`
  width: 100%;
`;

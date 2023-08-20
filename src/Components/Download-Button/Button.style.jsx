import styled from "styled-components";
import { Devices } from "../../Components/MediaQuery";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 3em;
  margin-bottom: 4em;
`;

export const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  height: 2.5rem;
  width: 50%;
  font-size: 3.25em;
  color: #f2f2f2;
  margin: auto;
  border-radius: 10px;
  border: 2px solid #b127e8;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    box-shadow: 0px 0px 10px 5px #b127e8;
  }

  @media ${Devices.md} {
    height: 3rem;
    width: 100vw;
  }
`;

export const Btn = styled.a`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 1rem;
  border: none;
  text-decoration: none;
  border: none;
  /* @media ${Devices.md} {
    font-weight: 400;

    font-size: 0.8rem;
  } */
`;

export const BtnTetx = styled.span`
  margin-left: 0.5em;
`;

import styled from "styled-components";
import { Devices } from "../../Components/MediaQuery";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column wrap;
  width: 100vw;
  height: 5em;
  font-family: "Montserrat";
  margin-top: 3em;

  @media ${Devices.md} {
    margin-top: 3em;
  }
`;
export const FooterItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #b127e8;
  font-family: "Montserrat";
  font-size: 0.3em;
  font-weight: 200;
  margin-bottom: 4em;
  letter-spacing: 1px;
`;

export const FooterCopyright = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 3em;
  margin-right: 3em;
`;

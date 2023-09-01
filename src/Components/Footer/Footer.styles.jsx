import styled from "styled-components";
// import { Devices } from "../../Components/MediaQuery";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column wrap;
  width: 100vw;
  height: 5em;
  font-family: "Montserrat";
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

// .social-icon {
//   display: inline-block;
//   margin-left: 14px;
// }
// .social-icon-container {
//   display: flex;
//   align-items: center;
//   width: 33%;
// }

// .social-icon a {
//   width: 45px;
//   height: 45px;
//   background: rgba(217, 217, 217, 0.1);
//   display: inline-flex;
//   border-radius: 50%;
//   margin-right: 0.8em;
//   align-items: center;
//   justify-content: center;
//   line-height: 1;
//   border: 1px solid rgba(255, 255, 255, 0.5);
// }
// .social-icon a::before {
//   content: "";
//   width: 42px;
//   height: 42px;
//   position: absolute;
//   background-color: #ffffff;
//   border-radius: 50%;
//   transform: scale(0);
//   transition: 0.3s ease-in-out;
// }
// .social-icon a:hover::before {
//   transform: scale(1);
// }
// .social-icon a img {
//   width: 40%;
//   z-index: 1;
//   transition: 0.3s ease-in-out;
// }
// .social-icon a:hover img {
//   filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(90%)
//     brightness(95%) contrast(86%);
// }

// @media screen and (max-width: 960px) {
//   .footer-container {
//     width: 100%;

//     margin-top: 3em;
//   }

import { createGlobalStyle } from "styled-components";
import MontserratVariableTtf from "./assets/fonts/Montserrat-VariableFont_wght.ttf";
// import MontserraVarableItalicTtf from "./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: 'Montserrat';
  ${"" /* src: url(${MontserraVarableItalicTtf}) format('truetype'); */}
  src: url(${MontserratVariableTtf}) format('truetype');
  }


* {

  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: 'Montserrat', sans-serif;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 75px;
  height: 100vh;
  width: 100vw;
}

body {
  height: 90vh;
  width: 100vh;
  
  font-weight: 400;

  position: relative;
  background-color: #000;
}

a {
  &.active {
    color: #b127e8;
  }
}
`;

export default GlobalStyle;

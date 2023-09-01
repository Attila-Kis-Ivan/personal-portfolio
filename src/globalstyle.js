import { createGlobalStyle } from "styled-components";
import Montserrat from "./assets/fonts/Montserrat-VariableFont_wght.ttf";
import Montserrat2 from "./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
        font-family: 'Font Name' !important;;
        src: local('Font Name'), local('FontName'),
        url(${Montserrat}) format('ttf'),
        url(${Montserrat2}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }

* {

  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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

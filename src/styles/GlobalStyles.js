import { css } from "@emotion/react";
import "normalize.css";

const GlobalStyle = (theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  body {
    background-color: ${theme.colors.body};
    color: ${theme.colors.text};
    font-family: "Poppins", sans-serif;
  }
`;

export default GlobalStyle;

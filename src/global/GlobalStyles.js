import { css } from "@emotion/react";

const GlobalStyle = (theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap");

  * {
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.body};
    color: ${theme.colors.textPrimary};
  }
`;

export default GlobalStyle;

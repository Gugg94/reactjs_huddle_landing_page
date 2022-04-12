const pink = "hsl(322, 100%, 66%)";
const veryPaleCyan = "hsl(193, 100%, 96%)";
const veryDarkCyan = "hsl(192, 100%, 9%)";
const grayishBlue = "hsl(208, 11%, 55%)";

const lightTheme = {
  colors: {
    header: veryPaleCyan,
    body: "#ffffff",
    footer: veryDarkCyan,
    textPrimary: veryDarkCyan,
    textSecondary: grayishBlue,
    accent: pink,
  },
};

// N/A
const darkTheme = {
  colors: {
    header: "#000000",
    body: "#000000",
    footer: "#000000",
    text: "#ffffff",
  },
};

const Themes = {
  LightTheme: lightTheme,
  DarkTheme: darkTheme,
};
export default Themes;

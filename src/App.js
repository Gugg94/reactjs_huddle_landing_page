import { ThemeProvider, Global } from "@emotion/react";
import GlobalStyle from "./global/GlobalStyles";
import Themes from "./global/Themes";
import Header from "./components/Header";
import Container from "./components/Container";
import CardContent from "./content/CardsContent";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={Themes.LightTheme}>
      <div>
        <Global styles={GlobalStyle} />
        <Header />
        <section>
          <Container>
            {CardContent.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </Container>
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

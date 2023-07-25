import Header from "./components/Header";
// eslint-disable-next-line
import Nav from "./components/Nav";
import Container from "./components/styled/Container";
import { GlobalStyle } from "./components/styled/GlobalStyle";

import { ThemeProvider } from "styled-components";
const App = () => {
  const styles = {
    colors: {
      primary: "#eee",
      secondary: "#bebe",
    },

    breakpoints: {
      xs: "300px",
      sm: "500px",
      md: "700px",
    },
  };
  return (
    <>
      <ThemeProvider theme={styles}>
        <GlobalStyle />
        <Nav />
        <Container>
          <Header />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;

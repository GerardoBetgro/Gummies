import React from "react";
import { ThemeProvider } from "@mui/material";
import Contenedor from "./componentes/Contenedor";
import Hero from "./componentes/Hero";
import Cards from "./componentes/Cards";
import About from "./componentes/About";
import Footer from "./componentes/Footer";
import theme from "./themeConfig";
import "./componentes/Styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor />
      <Hero />
      <Cards />
      <About />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

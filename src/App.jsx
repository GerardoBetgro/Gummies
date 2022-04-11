import React from "react";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Cards from "./componentes/Cards";
import theme from "./themeConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <div className="flex">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </ThemeProvider>
  );
}

export default App;

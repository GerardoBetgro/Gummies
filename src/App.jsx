import React from "react";
import { ThemeProvider, Typography } from "@mui/material";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Cards from "./componentes/Cards";
import About from "./componentes/About";
import Footer from "./componentes/Footer";
import theme from "./themeConfig";
import "./componentes/Styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Typography variant="h2" sx={{mt:'2rem'}} align="center" className="letters">
        Nuestros Productos
      </Typography>
      <div className="flex">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Typography variant="h2" sx={{mb:'2rem'}} align="center" className="letters">
        Acerca de nuestros productos
      </Typography>
      <About/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;

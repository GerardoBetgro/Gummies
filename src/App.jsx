import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Cards from "./componentes/Cards";
import Footer from "./componentes/Footer";
import theme from "./themeConfig";
import "./componentes/Styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Typography variant="h2" sx={{my:'1.5rem'}} align="center">
        Nuestros Productos
      </Typography>
      <div className="flex">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;

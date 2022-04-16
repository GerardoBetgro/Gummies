import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Cards from "./componentes/Cards";
import Footer from "./componentes/Footer";
import "./componentes/Styles.css";

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;

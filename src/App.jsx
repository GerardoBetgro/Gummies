import React from "react";
import { ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Contenedor from "./componentes/Contenedor";
import Footer from "./componentes/Footer";
import theme from "./themeConfig";
import "./componentes/Styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor />
      <Outlet />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;

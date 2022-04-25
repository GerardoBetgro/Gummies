import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Error from "../assets/404.webp";

const NoEncontrada = () => {
  return (
    <Box
      sx={{
        my: "4rem",
        width: { xl: `calc(100% - ${220}px)` },
        mr: { xl: `${220}px` },
      }}
    >
      <Typography
        variant="h2"
        sx={{ my: "3rem" }}
        align="center"
        className="letters"
      >
        No Encontrada
      </Typography>
      <Box sx={{ my: "2rem" }} className="flex1">
        <NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>
          <Button variant="contained" color="secondary">
            Volver al Inicio
          </Button>
        </NavLink>
        <Box sx={{ my: "2rem" }}>
          <img src={Error} alt="404 Error" className="fix-image-404"/>
        </Box>
      </Box>
    </Box>
  );
};

export default NoEncontrada;

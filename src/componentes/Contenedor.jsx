import React from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => theme.mixins.toolbar);

const Contenedor = () => {
  return (
    <Box sx={{display:'flex'}}>
      <Navbar />
      <Box sx={{flexGrow:1, p:'3rem', backgroundColor:'white'}}>
        <Div/>
        contenido
      </Box>
    </Box>
  );
};

export default Contenedor;

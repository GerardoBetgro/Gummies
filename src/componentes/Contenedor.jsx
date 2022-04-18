import React, { useState } from "react";
import Navbar from "./Navbar";
import Cajon from "./Cajon";
import { Box } from "@mui/system";

const Contenedor = () => {
  const [abrir,setAbrir] = useState(false)
  
  const accionAbrir = () => {
    setAbrir(!abrir)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar accionAbrir={accionAbrir}/>
      {/* Cajon para pantalla completa, solo monitores */}
      <Box sx={{ display: { xs: "none", xl: "block" } }}>
        <Cajon variant='permanent' open={true}/>
      </Box>
      {/* Cajon para laptop, tablet y celular */}
      <Box sx={{ display: { xs: 'block', xl: 'none' } }}>
        <Cajon variant='temporary' open={abrir} onClose={accionAbrir}/>
      </Box>
    </Box>
  );
};

export default Contenedor;

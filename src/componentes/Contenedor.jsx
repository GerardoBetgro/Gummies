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
      {/* Cajon para pantalla completa */}
      <Box sx={{ display: { xs: "none", sm: "none", md:"none", lg:"block", xl:"block" } }}>
        <Cajon variant='permanent' open={true}/>
      </Box>
      {/* Cajon para tablet y celular */}
      <Box sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg:"block", xl:"none" } }}>
        <Cajon variant='temporary' open={abrir} onClose={accionAbrir}/>
      </Box>
      
    </Box>
  );
};

export default Contenedor;

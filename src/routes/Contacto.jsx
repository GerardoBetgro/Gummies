import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Contacto = () => {
  return (
    <Box
      sx={{
        width: { xl: `calc(100% - ${220}px)` },
        mr: { xl: `${220}px` },
      }}
    >
      <Typography
        variant="h2"
        sx={{ my: "2rem" }}
        align="center"
        className="letters"
      >
        Contacto
      </Typography>
      <Typography
        variant="h4"
        sx={{ my: "1rem" }}
        align="center"
        className="letters"
      >
        Pide tus productos con nosotros!
      </Typography>
      <Box className="flex" sx={{my:"2rem"}}>
        <Button sx={{m:"1rem"}} variant="contained" color="tree">WhatsApp</Button>
        <Button sx={{m:"1rem"}} variant="contained" color="primary">Facebook</Button>
        <Button sx={{m:"1rem"}} variant="contained" color="gray">Correo</Button>
      </Box>
    </Box>
  );
};

export default Contacto;

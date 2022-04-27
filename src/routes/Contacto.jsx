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
        sx={{ m: "1rem" }}
        align="center"
        className="letters"
      >
        Pide tus productos con nosotros!
      </Typography>
      <Box className="flex" sx={{ my: "2rem" }}>
        <Button
          sx={{ m: "1rem" }}
          variant="contained"
          color="tree"
          /*
          href="https://api.whatsapp.com/send?phone=5218445379912&text=Me%20gustaría%20saber%20el%20precio%20de%20sus%20productos"
          target="_blank"
          rel="noopener"
          */
        >
          WhatsApp
        </Button>
        <Button sx={{ m: "1rem" }} variant="contained" color="primary">
          Facebook
        </Button>
        <Button sx={{ m: "1rem" }} variant="contained" color="gray">
          Correo
        </Button>
      </Box>
    </Box>
  );
};

export default Contacto;

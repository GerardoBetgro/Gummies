import React from "react";
import { Box, Typography } from "@mui/material";

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
    </Box>
  );
};

export default Contacto;

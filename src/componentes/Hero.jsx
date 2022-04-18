import React from "react";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

const Hero = () => {
  return (
    <Box className="img" sx={{
      width: { xl: `calc(100% - ${240}px)` },
      mr: { xl: `${240}px` },
    }}>
      <Typography variant="h1" sx={{ my: 2 }}>
        Gomitas para Dormir
      </Typography>
      {/* <Typography variant="h4" sx={{ my: 2 }}>
        “Hoy ha sido un día muy especial, espero que descanses”.
      </Typography> */}
      <Tooltip title='Vamos allá'>
        <Button
          variant="contained"
          align="center"
          color="dark"
          sx={{ my: 2 }}
          endIcon={<AddShoppingCartRoundedIcon />}
        >
          Pide ahora!
        </Button>
      </Tooltip>
    </Box>
  );
};

export default Hero;

import React from "react";
import { Button, Typography } from "@mui/material";
import theme from "../themeConfig";
import { ThemeProvider } from '@mui/material/styles';
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="img">
        <Typography variant="h1" sx={{ my: 2 }}>
          Gomitas para Dormir
        </Typography>
        <Typography variant="h4" sx={{ my: 2 }}>
          “Hoy ha sido un día muy especial, espero que descanses”.
        </Typography>
        <Button
          variant="contained"
          align="center"
          color="dark"
          sx={{ my: 2 }}
          endIcon={<AddShoppingCartRoundedIcon />}
        >
          Pide ahora!
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Hero;

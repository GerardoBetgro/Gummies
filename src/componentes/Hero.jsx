import React, { Fragment } from "react";
import { Button, Typography } from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

const Hero = () => {
  return (
    <Fragment>
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
      <Typography variant="h2" sx={{mt:'2rem'}} align="center" className="letters">
        Nuestros Productos
      </Typography>
    </Fragment>
  );
};

export default Hero;

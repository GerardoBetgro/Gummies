import React from "react";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box
      className="img"
      sx={{
        width: { xl: `calc(100% - ${220}px)` },
        mr: { xl: `${220}px` },
      }}
    >
      <Typography variant="h1" sx={{ my: 2 }}>
        Gomitas para Dormir
      </Typography>
      {/* <Typography
        variant="h4"
        sx={{ my: 2, mx: 2, display: { xs: "block", xl: "none" } }}
      >
        “Hoy ha sido un día muy especial, espero que descanses”.
      </Typography> */}
      <Link to="contacto" style={{ textDecoration: "none" }}>
        <Tooltip title="Vamos allá">
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
      </Link>
    </Box>
  );
};

export default Hero;

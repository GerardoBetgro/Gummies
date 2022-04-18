import React from "react";
import Listas from "./Listas";
import { Box, Drawer, Divider, Typography } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";

const Cajon = (props) => {
  return (
    <Drawer
      sx={{
        width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "240px",
          boxSizing: "border-box",
          background: "#311b92",
        },
      }}
      anchor="right"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <Box sx={{ my: "30px", color: "white" }}>
        <Typography align="center">
          <WidgetsIcon />
        </Typography>
        <Typography align="center">Menú Principal</Typography>
      </Box>
      <Divider color="white" />
      <Listas />
      <Box sx={{ display: { xs: "none", xl: "block", color: "white" } }}>
      <Typography
          variant="h5"
          sx={{ mt: "3rem", mx: "2rem" }}
        >
          Frase del día:
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: "3rem", mx: "2.5rem" }}
        >
          “Hoy ha sido un día muy especial, espero que descanses”.
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Cajon;

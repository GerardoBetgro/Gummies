import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BedtimeIcon from '@mui/icons-material/Bedtime';

const Navbar = (props) => {
  return (
    <AppBar
      position="fixed"
      color="dark"
      sx={{
        width: { xl: `calc(100% - ${240}px)` },
        mr: { xl: `${240}px` },
      }}
    >
      <Toolbar>
        <Tooltip title="Gomitas para dormir">
          <IconButton>
            <BedtimeIcon color="light" />
          </IconButton>
        </Tooltip>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Gomitas
        </Typography>
        <Tooltip title="Abrir menú">
          <IconButton onClick={() => props.accionAbrir()} sx={{ display: { xl: 'none' } }}>
            <MenuIcon color="light" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

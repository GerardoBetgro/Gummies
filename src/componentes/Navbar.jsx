import React, { Fragment } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
//import { Routes, Route, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <Fragment>
      <AppBar
        position="fixed"
        color="dark"
        sx={{
          width: { lg: `calc(100% - ${280}px)` },
          ml: { lg: `${280}px` },
        }}
      >
        <Toolbar>
          <IconButton onClick={() => props.accionAbrir()} sx={{ mr: 2, display: { lg: 'none'} }}>
            <MenuIcon color="light" />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Gomitas
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;

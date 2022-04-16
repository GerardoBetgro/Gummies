import React, { Fragment } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
//import { Routes, Route, NavLink } from "react-router-dom";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Navbar = () => {
  return (
    <Fragment>
      <AppBar position="fixed" color="dark">
        <Toolbar>
          <IconButton>
            <MenuIcon color="light" />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Gomitas
          </Typography>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Contacto</Button>
        </Toolbar>
      </AppBar>
      <Offset />
    </Fragment>
  );
};

export default Navbar;

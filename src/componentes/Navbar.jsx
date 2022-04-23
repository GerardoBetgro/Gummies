import React, { Fragment } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const Salto = styled("div")(({ theme }) => theme.mixins.toolbar);

const Navbar = (props) => {
  return (
    <Fragment>
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
            <IconButton
              onClick={() => props.accionAbrir()}
              sx={{ display: { xl: "none" } }}
            >
              <MenuIcon color="light" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Salto />
    </Fragment>
  );
};

export default Navbar;

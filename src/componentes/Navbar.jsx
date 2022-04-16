import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import theme from "../themeConfig";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Navbar = () => {
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}

export default Navbar;
import React, { Fragment } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Navbar = () => {
    return (
        <Fragment>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton>
                        <MenuIcon color="light"/> 
                    </IconButton>
                    <Typography variant="h6" sx={{flexGrow:1}}>
                        Gummies
                    </Typography>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Products</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
            <Offset/>
        </Fragment>
    );
}

export default Navbar;
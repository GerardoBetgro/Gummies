import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
    return (
        <div>
            <AppBar position="fixed" color="secondary">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        className="{classes.menuButton}"
                        >
                            {/* <MenuIcon></MenuIcon> */}
                    </IconButton>
                    <Typography variant="h6">
                        Gummies
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
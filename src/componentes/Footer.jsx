import React from "react";
import SocialMedia from "./SocialMedia";
import { Box, Container, Typography, Link } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="h6" color="text.secondary">
      <Link
        color="inherit"
        href="https://gera-es.web.app/"
        sx={{ textDecoration: "none", fontWeight: "bold" }}
      >
        © Gomitas para dormir 2022
      </Link>
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        width: { xl: `calc(100% - ${240}px)` },
        mr: { xl: `${240}px` },
      }}
    >
      <Container maxWidth="sm">
        <SocialMedia />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

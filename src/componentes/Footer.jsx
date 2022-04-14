import React, { Fragment } from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import { blue, pink, green } from "@mui/material/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright ©"}
      <Link
        color="inherit"
        href="https://gera-es.web.app/"
        sx={{ textDecoration: "none", fontWeight: "bold" }}
      >
        Gomitas para el sueño
      </Link>
    </Typography>
  );
}

const Footer = () => {
  return (
    <Fragment>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <FacebookIcon sx={{ color: blue[500] }} />
            </IconButton>
            <IconButton>
              <InstagramIcon sx={{ color: pink[500] }} />
            </IconButton>
            <IconButton>
              <WhatsAppIcon sx={{ color: green[500] }} />
            </IconButton>
            <Copyright />
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Footer;

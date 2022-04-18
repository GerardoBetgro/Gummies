import React from "react";
import { Box, Container, Typography, Link, IconButton, Tooltip } from "@mui/material";
import { blue, pink, green } from "@mui/material/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        width: { xl: `calc(100% - ${280}px)` },
        mr: { xl: `${280}px` },
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
          <Tooltip title='Facebook'>
            <IconButton>
              <FacebookIcon fontSize="large" sx={{ color: blue[500] }} />
            </IconButton>
          </Tooltip>
          <Tooltip title='Instagram'>
            <IconButton>
              <InstagramIcon fontSize="large" sx={{ color: pink[500] }} />
            </IconButton>
          </Tooltip>
          <Tooltip title='WhatsApp'>
            <IconButton>
              <WhatsAppIcon fontSize="large" sx={{ color: green[500] }} />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        >
          <Copyright />
        </Box>
      </Container >
    </Box >
  );
};

export default Footer;

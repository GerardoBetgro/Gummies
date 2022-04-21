import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  ButtonGroup,
  Box,
} from "@mui/material";
import picture from "../assets/gummies.webp";
import Opening from "./Opening";
import "./Styles.css";

const Cards = () => {
  return (
    <Box
      sx={{
        width: { xl: `calc(100% - ${240}px)` },
        mr: { xl: `${240}px` },
      }}
    >
      <Typography
        variant="h2"
        sx={{ mt: "2rem" }}
        align="center"
        className="letters"
      >
        Nuestros Productos
      </Typography>
      <Box className="flex">
        <Card sx={{ maxWidth: 345, my: "2.5rem", mx: "1.5rem" }}>
          <CardMedia component="img" alt="gummies" height="440" src={picture} />
          <CardContent className="card">
            <Typography gutterBottom variant="h5" component="div">
              Gomitas
            </Typography>
            <Typography variant="body1" color="text.primary">
              Belabear Buenas Noches, 1 bolsa con 28 gomas marca Belabear.
            </Typography>
          </CardContent>
          <CardActions
            className="buttons"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ButtonGroup>
              <Opening size="small" variant="contained" color="secondary" />
            </ButtonGroup>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, my: "2.5rem", mx: "1.5rem" }}>
          <CardMedia component="img" alt="gummies" height="440" src={picture} />
          <CardContent className="card">
            <Typography gutterBottom variant="h5" component="div">
              Gomitas
            </Typography>
            <Typography variant="body1" color="text.primary">
              Belabear Buenas Noches, 1 bolsa con 28 gomas marca Belabear.
            </Typography>
          </CardContent>
          <CardActions
            className="buttons"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ButtonGroup>
              <Opening size="small" variant="contained" color="secondary" />
            </ButtonGroup>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, my: "2.5rem", mx: "1.5rem" }}>
          <CardMedia component="img" alt="gummies" height="440" src={picture} />
          <CardContent className="card">
            <Typography gutterBottom variant="h5" component="div">
              Gomitas
            </Typography>
            <Typography variant="body1" color="text.primary">
              Belabear Buenas Noches, 1 bolsa con 28 gomas marca Belabear.
            </Typography>
          </CardContent>
          <CardActions
            className="buttons"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ButtonGroup>
              <Opening size="small" variant="contained" color="secondary" />
            </ButtonGroup>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Cards;

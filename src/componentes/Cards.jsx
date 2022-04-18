import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  CardActions,
  ButtonGroup,
  Box,
  Tooltip,
} from "@mui/material";
import picture from "../assets/gummies.webp";
import "./Styles.css";

const Cards = () => {
  return (
    <Box sx={{
      width: { xl: `calc(100% - ${240}px)` },
      mr: { xl: `${240}px` },
    }}>
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
          <CardMedia
            component="img"
            alt="gummies"
            height="440"
            src={picture}
          />
          <CardContent className="card">
            <Typography gutterBottom variant="h5" component="div">
              Gomitas
            </Typography>
            <Typography variant="body2" color="text.primary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              architecto!
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
            <Tooltip title='Abrir'>
              <ButtonGroup>
                <Button size="small" variant="contained" color="secondary">
                  Leer Más
                </Button>
              </ButtonGroup>
            </Tooltip>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, my: "2.5rem", mx: "1.5rem" }}>
          <CardMedia
            component="img"
            alt="gummies"
            height="440"
            src={picture}
          />
          <CardContent className="card">
            <Typography gutterBottom variant="h5" component="div">
              Gomitas
            </Typography>
            <Typography variant="body2" color="text.primary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              architecto!
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
            <Tooltip title='Abrir'>
              <ButtonGroup>
                <Button size="small" variant="contained" color="secondary">
                  Leer Más
                </Button>
              </ButtonGroup>
            </Tooltip>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, my: "2.5rem", mx: "1.5rem" }}>
          <CardMedia
            component="img"
            alt="gummies"
            height="440"
            src={picture}
          />
          <CardContent className="card">
            <Typography gutterBottom variant="h5" component="div">
              Gomitas
            </Typography>
            <Typography variant="body2" color="text.primary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              architecto!
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
            <Tooltip title='Abrir'>
              <ButtonGroup>
                <Button size="small" variant="contained" color="secondary">
                  Leer Más
                </Button>
              </ButtonGroup>
            </Tooltip>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Cards;

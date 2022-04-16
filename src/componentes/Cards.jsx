import React, { Fragment } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  CardActions,
  ButtonGroup,
} from "@mui/material";
import "./Styles.css";

const Cards = () => {
  return (
    <Fragment>
      <Card sx={{ maxWidth: 345, my: "2.5rem", mx: "1.5rem" }}>
        <CardMedia
          component="img"
          alt="gummies"
          height="340"
          image="https://http2.mlstatic.com/D_NQ_NP_660055-MLM47123671582_082021-O.webp"
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
          <ButtonGroup>
            <Button size="small" variant="contained" color="secondary">
              Leer Más
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default Cards;

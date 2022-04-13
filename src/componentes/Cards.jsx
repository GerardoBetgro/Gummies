import React, { Fragment } from "react";
import { Card, CardMedia, CardContent, Button, Typography, CardActions } from '@mui/material';

const Cards = () => {
  return (
    <Fragment>
      <Typography variant='h2'>
        Nuestros productos
      </Typography>
      <Card sx={{ maxWidth: 345 }} className='card'>
        <CardMedia
          component="img"
          alt="gummies"
          height="340"
          image="https://http2.mlstatic.com/D_NQ_NP_660055-MLM47123671582_082021-O.webp"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gomitas
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Comparte</Button>
          <Button size="small">Leer Más</Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default Cards;

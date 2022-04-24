import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

const Redes = () => {
  return (
    <Box
      sx={{
        my: "3rem",
        width: { xl: `calc(100% - ${220}px)` },
        mr: { xl: `${220}px` },
      }}
    >
      <Typography
        variant="h2"
        sx={{ my: "2rem" }}
        align="center"
        className="letters"
      >
        Redes Sociales
      </Typography>
      <Box className="flex">
        <Card sx={{ maxWidth: 345, m: "1rem" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png"
              alt="facebook"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Facebook
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Info Facebook
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, m: "1rem" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn.pixabay.com/photo/2022/04/01/05/40/app-7104075_960_720.png"
              alt="instagram"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Instagram
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Info Instagram
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, m: "1rem" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn.pixabay.com/photo/2015/08/03/13/58/soon-873316_960_720.png"
              alt="whatsapp"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                WhatsApp
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Info Wpp
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default Redes;

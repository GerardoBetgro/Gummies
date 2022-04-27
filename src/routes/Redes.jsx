import React from "react";
import { Typography, Box, Button } from "@mui/material";

const Redes = () => {
  return (
    <Box
      sx={{
        my: "2.5rem",
        width: { xl: `calc(100% - ${220}px)` },
        mr: { xl: `${220}px` },
      }}
    >
      <Typography
        variant="h2"
        sx={{ my: "2rem" }}
        className="letters"
        align="center"
      >
        Redes Sociales
      </Typography>
      <Box sx={{ p: "20px", gridGap: "40px" }} className="flex">
        <Box
          sx={{
            backgroundColor: "#1c1b29",
            borderRadius: "20px",
            boxShadow: "0 0 30px rgba(0,0,0,0.18)",
          }}
          className="card-sm"
        >
          <Box
            sx={{
              position: "relative",
              clipPath: "polygon(0 0,100% 0, 100% 85%, 0 100%)",
              borderRadius: "20px",
            }}
          >
            <img
              className="img-sm"
              src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png"
              alt="facebook"
              width="350px"
            />
          </Box>
          <Box sx={{ px: "20px", py: "10px" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: "550",
                fontSize: "18px",
                m: "10px 0 15px 0",
              }}
            >
              Síguenos en Facebook!
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#a0a0a0",
                fontSize: "15px",
                lineHeight: "30px",
                fontWeight: "400",
              }}
            >
              Te invitamos a seguir nuestra página para encontrar todas nuestras
              actualizaciones de tus productos favoritos.
            </Typography>
            <Button
              sx={{ my: "1rem" }}
              variant="contained"
              color="light"
            >
              Visitanos
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#1c1b29",
            borderRadius: "20px",
            boxShadow: "0 0 30px rgba(0,0,0,0.18)",
          }}
          className="card-sm"
        >
          <Box
            sx={{
              position: "relative",
              clipPath: "polygon(0 0,100% 0, 100% 85%, 0 100%)",
              borderRadius: "20px",
            }}
          >
            <img
              className="img-sm"
              src="https://cdn.pixabay.com/photo/2022/04/01/05/40/app-7104075_960_720.png"
              alt="instagram"
              width="350px"
            />
          </Box>
          <Box sx={{ px: "20px", py: "10px" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: "550",
                fontSize: "18px",
                m: "10px 0 15px 0",
              }}
            >
              Síguenos en Instagram!
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#a0a0a0",
                fontSize: "15px",
                lineHeight: "30px",
                fontWeight: "400",
              }}
            >
              Revisa nuestra galería de imágenes en donde podrás encontrar
              nuestros productos y conocer más acerca de estos, así como
              promociones.
            </Typography>
            <Button sx={{ my: "1rem" }} variant="contained" color="light">
              Visitanos
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#1c1b29",
            borderRadius: "20px",
            boxShadow: "0 0 30px rgba(0,0,0,0.18)",
          }}
          className="card-sm"
        >
          <Box
            sx={{
              position: "relative",
              clipPath: "polygon(0 0,100% 0, 100% 85%, 0 100%)",
              borderRadius: "20px",
            }}
          >
            <img
              className="img-sm"
              src="https://cdn.pixabay.com/photo/2015/08/03/13/58/soon-873316_960_720.png"
              alt="whatsapp"
              width="350px"
            />
          </Box>
          <Box sx={{ px: "20px", py: "10px" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: "550",
                fontSize: "18px",
                m: "10px 0 15px 0",
              }}
            >
              Síguenos en WhatsApp!
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#a0a0a0",
                fontSize: "15px",
                lineHeight: "30px",
                fontWeight: "400",
              }}
            >
              Puedes comunicarte directamente vía WhatsApp para solicitar la
              cantidad de productos que desees adquirir con nosotros.
            </Typography>
            <Button sx={{ my: "1rem" }} variant="contained" color="light">
              Visitanos
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Redes;

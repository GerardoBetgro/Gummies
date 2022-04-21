import React from "react";
import { Box, Typography, Container } from "@mui/material";
import "./Styles.css";

const About = () => {
  return (
    <Box
      sx={{
        width: { xl: `calc(100% - ${240}px)` },
        mr: { xl: `${240}px` },
      }}
    >
      <Typography
        variant="h2"
        sx={{ mb: "1rem" }}
        align="center"
        className="letters"
      >
        Acerca de nuestros productos
      </Typography>
      <Container sx={{ mb: "2rem" }}>
        <Typography variant="subtitle1" className="letters">
          De seguro has visto alguna vez entre productos alimenticios o en
          farmacias las "Gomitas para Dormir", estas son como cualquier otra
          golosina, sin embargo, contienen algunos compuestos y fármacos,
          principalmente la Melatonina, que ayudan a las personas a conciliar el
          sueño, en quienes padecen de insomnio. Cuando se padece de insomnio,
          se sabe lo desesperante que puede llegar a ser. El estrés del día a
          día y las preocupaciones pueden afectar los ritmos biológicos y hacer
          que cueste quedarse dormido por la noche o despertarse más temprano,
          de madrugada. A quienes han sufrido de insomnio, muchas veces se les
          recomienda tomar Melatonina. Esta es una hormona que nuestro cuerpo
          produce naturalmente y es la encargada de regular el sueño, sin
          embargo hay personas que tienen problemas para su producción y corren
          a comprarla para al fin poder dormir. Esta se puede encontrar en
          medicamentos en diferente presentación (pastillas, cápsulas, gotas) y
          algunos alimentos, pero últimamente las gomitas de melatonina han
          tomado mucha fama debido a sus beneficios, pero también por su sabor y
          su forma tan divertida.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;

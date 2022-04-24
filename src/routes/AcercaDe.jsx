import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Sleep from "../assets/sleep.svg";
import Sleep1 from "../assets/sleep1.svg";

const About = () => {
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
        sx={{ mb: "1.5rem" }}
        align="center"
        className="letters"
      >
        Acerca de nuestros productos
      </Typography>
      <Container>
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
        <Box sx={{ mt: "2rem" }} className="flex">
          <img src={Sleep1} alt="sleep1" className="fix-image"/>
          <img src={Sleep} alt="sleep" width="720px" className="fix-image" />
        </Box>
      </Container>
    </Box>
  );
};

export default About;

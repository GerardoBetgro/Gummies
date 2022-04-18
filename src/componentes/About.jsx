import React from "react";
import { Box, Typography, Container } from "@mui/material";
import "./Styles.css";

const About = () => {
  return (
    <Box sx={{
      width: { xl: `calc(100% - ${240}px)` },
      mr: { xl: `${240}px` },
    }}>
      <Typography variant="h2" sx={{ mb: '1rem' }} align="center" className="letters">
        Acerca de nuestros productos
      </Typography>
      <Container sx={{ mb: '2rem' }}>
        <Typography variant="subtitle1" className="letters">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          vitae! Voluptates consequatur, porro enim iure ipsum aspernatur
          similique qui accusamus quibusdam nam libero, quaerat cupiditate
          assumenda ut laboriosam dolore fugit a nemo nisi autem, eos quidem
          provident delectus vel? Laborum fugiat voluptatem voluptatibus sint
          libero consequuntur et optio obcaecati totam quos, cum dolor impedit
          alias magnam voluptas? Alias minima praesentium rerum quisquam omnis
          dolorum, ullam eos quos odit, cum nihil expedita laborum quod ipsam
          reprehenderit suscipit. Id rem numquam magni, accusantium impedit, et
          sint repellat aut vel exercitationem odio incidunt dolorum? Magnam
          ducimus voluptatum mollitia dolorem voluptas laborum cumque aperiam
          veritatis distinctio facere, laboriosam sequi a, dignissimos velit.
          Neque fuga maiores animi officiis nisi, inventore adipisci illo,
          facilis, at deleniti mollitia. Inventore voluptatibus officiis,
          aliquam eaque nesciunt nihil natus, error nemo hic asperiores illum ab
          amet blanditiis? Earum laboriosam possimus, incidunt, eius repellendus
          optio atque accusamus recusandae unde fugit id qui ullam repellat
          dolore reiciendis dolorum sint deleniti repudiandae tenetur modi?
          Similique necessitatibus neque obcaecati consectetur excepturi
          deleniti ipsum quis, pariatur magnam cumque sit?
        </Typography>
      </Container>
    </Box>
  );
};

export default About;

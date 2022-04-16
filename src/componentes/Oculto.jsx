import React, { Fragment } from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Oculto = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Fragment>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>
      </Box>
    </Fragment>
  );
};

export default Oculto;

import React from "react";
import Listas from "./Listas";
import { styled } from "@mui/material/styles";
import { Drawer, Divider } from "@mui/material";

const Div = styled("div")(({ theme }) => theme.mixins.toolbar);

const Cajon = (props) => {
  return (
    <Drawer
      sx={{
        width: "280px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "280px",
          boxSizing: "border-box",
        },
      }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <Div />
      <Divider/>
      <Listas/>
    </Drawer>
  );
};

export default Cajon;

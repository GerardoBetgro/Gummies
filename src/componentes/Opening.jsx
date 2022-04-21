import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 250, sm: 300, md: 350, lg: 450, xl: 350 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Opening = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        size={props.size}
        variant={props.variant}
        color={props.color}
        onClick={handleOpen}
      >
        Leer Más
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="secondary"
          >
            Gomitas Buenas Noches
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <b>
              <em>Consumo</em>
            </b>{" "}
            : Adultos, tomar 4 gomitas al dia, antes de disponerse a dormir.{" "}
            <br />
            <b>
              <em>Nombre del producto</em>
            </b>{" "}
            : Ashwagandha, GABA, 5-HTP, L-Teanina, Húmulus. <br />
            <b>
              <em>Cont. Net. </em>
            </b>{" "}
            78.4 g <br />
            <b>
              <em>Sabor</em>
            </b>{" "}
            : Naranja
          </Typography>
          <Typography align="right">
            <Tooltip title="Cerrar" placement="left-start">
              <Button variant="contained" sx={{ backgroundColor: red[500] }} onClick={handleClose}>
                Cerrar <CloseIcon />
              </Button>
            </Tooltip>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Opening;

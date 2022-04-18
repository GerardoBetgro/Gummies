import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import AppsIcon from '@mui/icons-material/Apps';
import CallIcon from '@mui/icons-material/Call';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Listas = () => {
  return (
      <List component="nav" sx={{ color: "#fff" }}>
        <ListItemButton sx={{my:'2rem'}}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <CallIcon />
          </ListItemIcon>
          <ListItemText primary="Contacto" />
        </ListItemButton>
        <ListItemButton sx={{my:'2rem'}}>
          <ListItemIcon>
            <InventoryIcon sx={{ color: "#fff" }}/>
          </ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItemButton>
        <ListItemButton sx={{my:'2rem'}}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <PersonSearchIcon />
          </ListItemIcon>
          <ListItemText primary="Conocenos" />
        </ListItemButton>
        <ListItemButton sx={{my:'2rem'}}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Redes Sociales" />
        </ListItemButton>
        <Divider color='white'/>
      </List>
  );
};

export default Listas;

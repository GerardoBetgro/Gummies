import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import InventoryIcon from "@mui/icons-material/Inventory";
import AppsIcon from "@mui/icons-material/Apps";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const Listas = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <List component="nav">
      <NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>
        <ListItemButton
          sx={{ my: "2rem" }}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItemButton>
      </NavLink>
      <NavLink to="cards" style={{ color: "#fff", textDecoration: "none" }}>
        <ListItemButton
          sx={{ my: "2rem" }}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItemButton>
      </NavLink>
      <NavLink to="about" style={{ color: "#fff", textDecoration: "none" }}>
        <ListItemButton sx={{ my: "2rem" }} selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <PersonSearchIcon />
          </ListItemIcon>
          <ListItemText primary="Conocenos" />
        </ListItemButton>
      </NavLink>
      <NavLink to="footer" style={{ color: "#fff", textDecoration: "none" }}>
        <ListItemButton sx={{ my: "2rem" }} selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Redes Sociales" />
        </ListItemButton>
      </NavLink>
      <NavLink to="cards" style={{ color: "#fff", textDecoration: "none" }}>
        <ListItemButton sx={{ my: "2rem" }} selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <CallIcon />
          </ListItemIcon>
          <ListItemText primary="Contactanos" />
        </ListItemButton>
      </NavLink>
      <Divider color="white" />
    </List>
  );
};

export default Listas;

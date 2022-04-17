import React, { Fragment } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Listas = () => {
    return(
        <Fragment>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <InventoryIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Productos'/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ShoppingCartCheckoutIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Contacto'/>
                </ListItem>
                <Divider/>
            </List>
        </Fragment>
    );
}

export default Listas;
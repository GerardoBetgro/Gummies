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
                    <ListItemText primary='Elemento1'/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ShoppingCartCheckoutIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Elemento2'/>
                </ListItem>
                <Divider/>
            </List>
        </Fragment>
    );
}

export default Listas;
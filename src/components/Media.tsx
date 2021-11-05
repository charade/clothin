import { LinkedIn, Facebook, Twitter, ShoppingCart,  } from '@mui/icons-material';
import { List, ListItem, Badge, useMediaQuery } from '@mui/material';
import { useMediaStyle } from "../assets/styles/index.styles";

import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state/store';
import { Cart } from "./Cart";
import { useState } from 'react';

export const Media = () => {
    const [ openCart, setOpenCart ] = useState<boolean>(false) ; 
    const classes = useMediaStyle();
    
    const cart = useSelector((store : ReducerRootStateType) => store.cart);
    const isScreenLarge = useMediaQuery('(min-width : 700px)');
    
    //click on cart icon to open cart
    const handleOpenCart = () => setOpenCart(true);

    return(
        <>
            <List className = {classes.list}>
                <ListItem className = {classes.item} onClick = { handleOpenCart }>
                    <Badge
                        anchorOrigin = {{vertical : 'top', horizontal : 'left'}} 
                        badgeContent = {cart.length} 
                        color = "error"
                    >
                        <ShoppingCart/>
                    </Badge>
                    Cart
                </ListItem>
                {isScreenLarge &&
                    <>
                        <ListItem className = {classes.item}>
                            <LinkedIn/>
                        </ListItem>
                        <ListItem className = {classes.item}>
                            <Facebook />
                        </ListItem>
                        <ListItem className = {classes.item}>
                            <Twitter/>
                        </ListItem>
                    </>
                }
            </List>
            <Cart 
                open = {openCart}
                setOpen = {setOpenCart}
            />
        </>
    )
}
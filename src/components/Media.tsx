import { LinkedIn, Facebook, Twitter, ShoppingCart } from '@mui/icons-material';
import { List, ListItem } from '@material-ui/core';
import { useMediaStyle } from "../assets/styles/index.styles";

export const Media = () => {  
    const classes = useMediaStyle();

    return(
        <List className = {classes.list}>
            <ListItem className = {classes.item}>
                <ShoppingCart/>
                Cart
            </ListItem>
            <ListItem className = {classes.item}>
                <LinkedIn/>
            </ListItem>
            <ListItem className = {classes.item}>
                <Facebook />
            </ListItem>
            <ListItem className = {classes.item}>
                <Twitter/>
            </ListItem>
        </List>
    )
}
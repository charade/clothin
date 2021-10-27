import { LinkedIn, Facebook, Twitter, ShoppingCart } from '@mui/icons-material';
import { List, ListItem } from '@material-ui/core';
import { useMediaStyle } from "../assets/styles/index.styles";

export const Media = () => {  
    const classes = useMediaStyle();

    return(
        <List
            className = {classes.list}
        >
            <ListItem>
                <ShoppingCart />
            </ListItem>
            <ListItem>
                <LinkedIn />
            </ListItem>
            <ListItem>
                <Facebook />
            </ListItem>
            <ListItem>
                <Twitter />
            </ListItem>
        </List>
    )
}
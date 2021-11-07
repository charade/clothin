import { useState } from "react";
import { AppBar, Drawer, Toolbar, IconButton } from "@material-ui/core";
import { useNavbarStyle } from "../assets/styles/index.styles"
import { NavigationOptions } from './NavigationOptions';
import { Media } from './Media';
import { useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from "react-router";

export const Navbar = () => {
    const classes = useNavbarStyle();
    const history = useHistory();
    //check wether the screen is min tablet size
    const isScreenLarge = useMediaQuery('(min-width : 900px)');
    const [openBurgerMenu, setOpenBugerMenu] = useState<boolean>(false);

    const toggleOpenBurgerMenu = () => setOpenBugerMenu(!openBurgerMenu);
    const handleRedirectToHome = () => history.push('/home');

    return(
        <>
            <AppBar
                classes = {{root : classes.root}}
                color = 'transparent'
            >
                <Toolbar component = 'div' className = {classes.toolbar}>
                    <IconButton onClick = {handleRedirectToHome}>
                        <HomeIcon />
                    </IconButton>

                    {isScreenLarge ?
                        <NavigationOptions /> :
                        <MenuIcon  onClick = { toggleOpenBurgerMenu }/>
                    }

                    <Media />
                </Toolbar>
            </AppBar>

            <Drawer
                classes = {{paper : classes.drawerRoot}}
                open = {openBurgerMenu}
                onClose = { toggleOpenBurgerMenu }
                anchor = 'left'
            >
                <NavigationOptions />
            </Drawer>
        </>
    )
}
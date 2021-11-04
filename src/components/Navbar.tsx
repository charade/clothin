import { useState } from "react";
import { AppBar, Drawer, Toolbar } from "@material-ui/core";
import { useNavbarStyle } from "../assets/styles/index.styles"
import { NavigationOptions } from './NavigationOptions';
// import { SearchBar } from "./SearchBar";
import { Media } from './Media';
import { useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    const classes = useNavbarStyle();
    //check wether the screen is min tablet size
    const isScreenLarge = useMediaQuery('(min-width : 900px)');
    const [openBurgerMenu, setOpenBugerMenu] = useState<boolean>(false);

    const toggleOpenBurgerMenu = () => setOpenBugerMenu(!openBurgerMenu);

    return(
        <>
            <AppBar
                classes = {{root : classes.root}}
                color = 'transparent'
            >
                <Toolbar component = 'div' className = {classes.toolbar}>
                    {/* <SearchBar />  filter?? */}
                    {isScreenLarge ?
                        <>
                            <NavigationOptions />
                        </> :
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
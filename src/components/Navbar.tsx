import { AppBar, Toolbar } from "@material-ui/core";
import { useNavbarStyle } from "../assets/styles/index.styles"
import { NavigationOptions } from './NavigationOptions';
import { SearchBar } from "./SearchBar";
import { Media } from './Media';
export const Navbar = () => {
    const classes = useNavbarStyle();
    return(
        <AppBar
            classes = {{root : classes.root}}
            color = 'transparent'
        >
            <Toolbar component = 'div' className = {classes.toolbar}>
                <SearchBar />
                <NavigationOptions />
                <Media />
            </Toolbar>
        </AppBar>
    )
}
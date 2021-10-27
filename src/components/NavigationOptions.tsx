import { useNavigationOptionsStyle } from "../assets/styles/index.styles"

export const NavigationOptions = () => {
    const classes = useNavigationOptionsStyle();

    return(
        <ul className = {classes.list} >
            <li role = "button" className = {classes.item}>New realeases</li>
            <li role = "button" className = {classes.item}>Men</li>
            <li role = "button" className = {classes.item}>Women</li>
            <li role = "button" className = {classes.item}>Kids</li>
        </ul>
    )
}
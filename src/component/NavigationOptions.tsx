import { useNavigatoinOptionsStyle } from "../assets/styles/index.styles"


export const NavigationOptions = () => {
    const classes = useNavigatoinOptionsStyle();

    return(
        <ul className = {classes.list}>
            <li className = {classes.item}>new realeases</li>
            <li className = {classes.item}>categories</li>
            <li className = {classes.item}></li>
        </ul>
    )
}
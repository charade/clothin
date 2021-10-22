import { useNavigationOptionsStyle } from "../assets/styles/index.styles"

type OptionsProps = {
    height: string,
    width : string
}
export const NavigationOptions = ({height, width} : OptionsProps) => {
    const classes = useNavigationOptionsStyle();

    return(
        <ul className = {classes.list} style = {{height, width}}>
            <li role = "button" className = {classes.item}>New realeases</li>
            <li role = "button" className = {classes.item}>Men</li>
            <li role = "button" className = {classes.item}>Women</li>
            <li role = "button" className = {classes.item}>Kids</li>
        </ul>
    )
}
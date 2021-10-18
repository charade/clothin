import { useUnderlayStyle } from "../assests/styles/index.styles";


export const Underlay = () => {
    const classes = useUnderlayStyle();

    return(
        <div className = {classes.root}>
            <div className = {classes.left}></div>
            <div className = {classes.right}>
                <div className = {classes.rightOverlay}></div>
            </div>
        </div>
    )
}
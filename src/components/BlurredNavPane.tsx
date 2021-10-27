import { useNavPaneStyle } from "../assets/styles/index.styles"

export const BlurredNavPane = () => {
    const classes = useNavPaneStyle();
    return(
        <div className = {classes.blurredPane}></div>
    )
}
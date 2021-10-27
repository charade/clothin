
import { useCaptionStyle } from "../assets/styles/index.styles";

type CaptionProps = {
    children : React.ReactNode ;
}

export const Caption = ({ children }  : CaptionProps) => {
    const classes = useCaptionStyle();

    return(
        <p className = {classes.text}>
            { children }
        </p>
    )
}
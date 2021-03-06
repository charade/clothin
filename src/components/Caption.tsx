
import { useCaptionStyle } from "../assets/styles/index.styles";
import Image from '../assets/img/nike.jpeg';

type CaptionProps = {
    children : React.ReactNode ;
}

export const Caption = ({ children }  : CaptionProps) => {
    const classes = useCaptionStyle();

    return(
        <div className ={classes.container}>
            <img className = {classes.image} src = { Image } alt = 'poster'/>
            <p className = {classes.text}>
                {/* each lines  */}
                { children }
            </p>
        </div>
    )
}
import { useMainStyle } from "../assets/styles/Main.styles";
import { Caption } from './Caption';
import { Items } from "./Items"

export const Main = () => {
    const classes = useMainStyle();

    return(
        <div className = {classes.container}>
            <Caption>
                <span>Define new codes</span><br/>
                <span>Define hype</span><br/>
                <span>Make it trends</span>  
            </Caption>
            <Items />
        </div>
    )
}
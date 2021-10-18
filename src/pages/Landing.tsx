import { useLandingStyles } from "../assests/styles/index.styles";
import { Shoe } from "../component/Shoe";
import { Underlay } from "../component/UnderLay";

const LandingMain = () => {
    const classes = useLandingStyles();
    
    return(
        <div className = {classes.root}>
            <Underlay />
            <Shoe />
        </div>
    )
}

export default LandingMain
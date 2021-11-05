import { useHomeStyle } from "../assets/styles/index.styles";
import { Main } from "../components/Main";

export const Home = () => {
    const classes = useHomeStyle(); 
    return(
        <div className = {classes.root}>
            <Main />
        </div>
    )
}


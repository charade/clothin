import { useHomeStyle } from "../assets/styles/index.styles";
import { Main } from "../components/Main";
import { Landing} from "../components/Landing";
export const Home = () => {
    const classes = useHomeStyle();

    return(
        <div className = {classes.root}>
            <Landing />
            <Main />
        </div>
    )
}


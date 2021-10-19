import { useHomeStyle } from "../assets/styles/index.styles";
import { Header } from "../component/Header";
import { Main } from "../component/Main";
import { JustDoItScene } from "../component/JustDoItScene";
import { Landing} from "../component/Landing";
export const Home = () => {
    const classes = useHomeStyle();

    return(
        <div className = {classes.root}>
            <JustDoItScene />
            <Landing />
            {/* <Header />
            <Main /> */}
        </div>
    )
}


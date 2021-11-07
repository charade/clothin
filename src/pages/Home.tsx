import { useHomeStyle } from "../assets/styles/index.styles";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
export const Home = () => {
    const classes = useHomeStyle(); 
    return(
        <div className = {classes.root}>
            <Navbar />
            <Main />
        </div>
    )
}


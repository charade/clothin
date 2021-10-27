import { useEffect } from 'react';
import { useHomeStyle } from "../assets/styles/index.styles";
import { Main } from "../components/Main";
import { Landing} from "../components/Landing";
export const Home = () => {
    const classes = useHomeStyle();

    useEffect(() => {
        window.addEventListener('click', (e : MouseEvent) => console.log(e))
    },[]);

    return(
        <div className = {classes.root}>
            <Landing />
            <Main />
        </div>
    )
}


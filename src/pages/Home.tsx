import { useEffect } from 'react';
import { useHomeStyle } from "../assets/styles/index.styles";
import { Header } from "../component/Header";
import { Main } from "../component/Main";
import { Landing} from "../component/Landing";
export const Home = () => {
    const classes = useHomeStyle();

    useEffect(() => {
        window.addEventListener('click', (e : MouseEvent) => console.log(e))
    },[]);

    return(
        <div className = {classes.root}>
            <Landing />
            <Header />
            {/* <Main /> */}
        </div>
    )
}


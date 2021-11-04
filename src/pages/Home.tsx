import { useHomeStyle } from "../assets/styles/index.styles";
import { Main } from "../components/Main";
import { Landing} from "../components/Landing";
import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import { useEffect } from "react";

export const Home = () => {
    const classes = useHomeStyle();
    const cart = useSelector((store : ReducerRootStateType) => store.cart );
    /**
     * each time cart changes save changes in localStorage
     * to persist datas locally
     */
    useEffect(() => {
        //avoid erase saved cart when mounting app
        cart.length && localStorage.setItem('cart', JSON.stringify(cart));
    },[cart]);

    return(
        <div className = {classes.root}>
            <Landing />
            <Main />
        </div>
    )
}


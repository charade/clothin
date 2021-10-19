import { useUnderlayStyle } from "../assets/styles/index.styles";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux"; 
import { ReducerRootStateType } from "../state/store";
import { CircularProgress } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as discoverBtnActionCreators  from "../state/actions-creators/discoverButton-action-creators";

//click make transition from Landing to home scene interface
const Button = () => {
    const classes = useUnderlayStyle();
    const dispatch = useDispatch();
    const { setDiscoverClicked } = bindActionCreators(discoverBtnActionCreators, dispatch);

    const handleClick = () => setDiscoverClicked(true);
    return(
        <>
            <h4 role = "button" className = {classes.text} onClick = { handleClick }>
                Discover
            </h4>
            <div className = {classes.line}></div>
        </>
    )
}

//conditional dispaly when home scene is ready
const SwitchDisplay = () => {
    const isLoading = useSelector((store : ReducerRootStateType) => store.isLoading);
    //when home scene ended loading display discover button
    return isLoading ? <CircularProgress size = '2rem' />  : <Button/>
}

export const Underlay = () => {
    const classes = useUnderlayStyle();

    return(
        <div className = {classes.root}>
            <div className = {classes.left}></div>
            <div className = {classes.right}>
                <div className = {classes.rightOverlay}></div>
            </div>
            <div className = {classes.link}>
                <SwitchDisplay />
            </div>
        </div>
    )
}

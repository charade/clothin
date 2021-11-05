import {  useLayoutEffect, useState } from "react";
import { useLandingStyles } from "../assets/styles/index.styles";
import { Shoe } from "./Shoe";
import { Underlay } from "./UnderLay";
import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import { useHistory } from "react-router";
export const Landing = () => {
    //wait till camera is close enough to the shoe to exit landing on animate 
    const [canSwitchPage , setCanSwicthPage] = useState<boolean>(false)
    const classes = useLandingStyles();
    const isBtnClicked = useSelector((store : ReducerRootStateType) => store.discoverBtn);
    const history = useHistory();

    //redirect after shoe model camera animated
    useLayoutEffect(() => {
        if(canSwitchPage){
            history.push('/home');
        }
    },[canSwitchPage]);
    
    //wait before animating out landing after discover boutton is clicked
    // useEffect(() => {
    //     if(isBtnClicked){
    //         setTimeout(() => setStyles.start({opacity : 0}), 200)
    //     }
    // },[isBtnClicked, setStyles]);
   
    return(
        <div className = {classes.root}>
            <Underlay />
            <Shoe isBtnClicked = { isBtnClicked } setCanSwicthPage = {setCanSwicthPage}/>
        </div>
    )
}

import {  useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLandingStyles } from "../assets/styles/index.styles";
import { Shoe } from "./Shoe";
import { Underlay } from "./UnderLay";
import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import { useSpring, animated } from "react-spring";

export const Landing = () => {
    //wait till camera is close enough to the shoe to exit landing on animate 
    const [canSwitchPage , setCanSwicthPage] = useState<boolean>(false)
    const classes = useLandingStyles();
    const isBtnClicked = useSelector((store : ReducerRootStateType) => store.discoverBtn);
    const ref = useRef<HTMLDivElement>(null);
    //animate exit on click discover button
    const [styles, setStyles] = useSpring(() =>({
            opacity :  1,
            height : '100%'
    }));
    //remove canvas from the dom to stop three animation
    useLayoutEffect(() => {
        const parent = ref.current
        if(canSwitchPage && parent && parent.lastElementChild){
            parent.removeChild(parent.lastElementChild);
        }
    },[canSwitchPage]);

    //wait before animating out landing after discover boutton is clicked
    useEffect(() => {
        if(isBtnClicked){
            setTimeout(() => setStyles.start({opacity : 0, height : "0"}), 200)
        }
    },[isBtnClicked, setStyles]);

   
    return(
        <animated.div 
            ref = {ref}
            className = {classes.root}
            style = { styles }
        >
            <Underlay />
            <Shoe isBtnClicked = { isBtnClicked } setCanSwicthPage = {setCanSwicthPage}/>
        </animated.div>
    )
}

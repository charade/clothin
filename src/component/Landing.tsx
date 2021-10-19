import { useState } from "react";
import { useLandingStyles } from "../assets/styles/index.styles";
import { Shoe } from "./Shoe";
import { Underlay } from "./UnderLay";
import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import { motion } from "framer-motion";

const landingVariants = {
    open : {
        height : '100%',
        opacity : 1
    },
    close : {
        height : 0,
        opacity : 0
    }
}

export const Landing = () => {
    //wait till camera is close enough to the shoe to exit landing on animate 
    const [canSwitchPage , setCanSwicthPage] = useState<boolean>(false)
    const classes = useLandingStyles();
    const isBtnClicked = useSelector((store : ReducerRootStateType) => store.discoverBtn);

    return(
        <motion.div 
            className = {classes.root}
            variants = {landingVariants} 
            initial = 'open'
            animate = {canSwitchPage ? 'close' : 'open'}
        >
            <Underlay />
            <Shoe isBtnClicked = { isBtnClicked } setCanSwicthPage = {setCanSwicthPage}/>
        </motion.div>
    )
}

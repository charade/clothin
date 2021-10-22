import { useHeaderStyles } from "../assets/styles/Header.styles";
import { motion, Variants } from 'framer-motion';
import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../state/store";

type CaptionType = {
    text : string,
};

const variants : Variants = {
    open : {
        height : '100%',
        opacity : 1,
        transition : {
            delay : 1,
            duration : .4,
            mass : 100
        }
    },
    close : {
        height: "0",
        opacity : 0
    }
};

export const Caption = ({text} : CaptionType) => {

    const classes = useHeaderStyles();
    const isBtnClicked = useSelector((store : ReducerRootStateType) => store.discoverBtn);

    return(
        <motion.span 
            className = {classes.caption}
            variants = { variants } 
            animate = {isBtnClicked ? "open" : "close"}
            initial = "close"
        >
            { text }
        </motion.span>
    )
}
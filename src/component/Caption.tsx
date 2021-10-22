import { useHeaderStyles } from "../assets/styles/Header.styles";
import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import { motion, Variants } from "framer-motion";

type CaptionType = {
    lines : string[],
};

const captionVariants : Variants = {
    open : {
        filter : 'blur(0)',
        opacity : 1,
        transition : {
            delay : .6,
            duration : .5,
        }
    },
    close : {
        filter : 'blur(20px)',
        opacity : 0
    }
};

export const Caption = ({lines} : CaptionType) => {
    const isBtnClicked = useSelector((store : ReducerRootStateType) => store.discoverBtn);

    const classes = useHeaderStyles();
    return(
        <motion.h2 
                className = {classes.block} 
                style = {{top : '10%'}}
                variants = { captionVariants }
                animate = { isBtnClicked ? "open" : "close" }
            >
            { lines.map(line => (
                <span className = {classes.caption}>
                    { line }
                </span>
            ))}
        </motion.h2>
    )
}

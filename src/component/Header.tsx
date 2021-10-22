
import { useHeaderStyles } from "../assets/styles/index.styles";
import { Caption } from "./Caption";
import { motion, Variants } from "framer-motion";

import { NavigationOptions } from "./NavigationOptions";
//pose image component
import Pose from "./Pose";
//poses images
// import pose1 from "../assets/img/nike_1.jpeg";
import poseImg from "../assets/img/nike.jpeg";

const headerVariants : Variants = {
    open : { 
        transition : { 
            when : "beforeChildren",
            staggerChildren : .5 
        } 
    },
    close : {}
};

export const Header = () => {
    const classes = useHeaderStyles();
    //discover button state

    return(
        <motion.div 
            variants = { headerVariants }
            initial = "close"
            animate = "open"
            className = {classes.root}
        >
            <Pose 
                alt = "pose"
                img = { poseImg }
            />
            <Caption lines = {["Define", "new", "Codes"]}/>
      </motion.div>
    )
}
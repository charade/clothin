import { usePoseStyle } from "../assets/styles/index.styles";
import { motion, Variants } from 'framer-motion';
import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import { useMediaQuery } from "@material-ui/core";

const variants : Variants = {
    open:  {
        width : "30%",
        opacity : 1,
        transition : {
            type : 'spring',
            damping : 50,
            stiffness : 450,
            velocity : 70,
            delay : .3,
            duration : 2
        }
    },
    close : {
        width : '0',
        opacity  :0,
    }
};

type PoseProps = {
    img : string,
    alt : string
};

const Pose = ({img, alt} : PoseProps) => {
    const classes = usePoseStyle();
    const isBtnClicked = useSelector((store : ReducerRootStateType) => store.discoverBtn);

    return(
        <motion.img
            className = {classes.container}
            src = {img} 
            alt = {alt}
            initial = {false}
            variants = { variants }
            animate = { isBtnClicked ? "open" : "close" }
        />
    )
}

export default Pose;


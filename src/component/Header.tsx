
import { useHeaderStyles } from "../assets/styles/index.styles";
import { Caption } from "./Caption";
import { motion, Variants } from "framer-motion";
import { Container } from "./Container";
//pose image component
import Pose from "./Pose";
//poses images
import pose1 from "../assets/img/nike_1.jpeg";
import pose2 from "../assets/img/nike_2.jpeg";
// const poses : Readonly<string[]> = [pose1, pose2];

const headerVariants : Variants = {
    open : {
        transition : {
            // when : "beforeChildren",
            // delay : .5,
            // staggerChildren : .5
        }
    }
}
export const Header = () => {
    const classes = useHeaderStyles();
    // const [open, setOpen] = useState<boolean>(false);

    // useEffect(() => {
    //     isBtnClicked && setTimeo
    // }, [isBtnClicked]);

    return(
        <motion.div 
            variants = { headerVariants }
            initial = "close"
            animate = "open"
            className = {classes.root}
        >
            <Container
                background = 'rgb(211, 85, 80)'

            >
                <Pose 
                    alt = "pose"
                    img = { pose2 }
                />
                <h2 className = {classes.block} style = {{top : '10%'}}>
                    <Caption text = "ekjnzlngkzl"/>
                    <Caption text = "ez eglzekgze"/>
                    <Caption text = "gjnkzegnezlez"/>
                </h2>
            </Container>
            <Container
                background = "rgb(59, 95, 194)"
            >
                <Pose 
                    alt = "pose"
                    img = { pose1 }
                />
                <h2 className = {classes.block} style = {{top : '50%'}}>
                    <Caption text = "ekjnzlngkzl"/>
                    <Caption text = "ez eglzekgze"/>
                    <Caption text = "gjnkzegnezlez"/>
                </h2>
            </Container>
      </motion.div>
    )
}
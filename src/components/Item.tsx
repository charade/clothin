import { useState } from 'react';
import { ItemsType } from '../service'
import { useItemStyle } from "../assets/styles/index.styles";
import { motion, Variants } from 'framer-motion';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton } from '@material-ui/core';
import { SelectField } from "./SelectField";
import { Button } from '@material-ui/core';
import { ShoppingCart } from '@mui/icons-material';

const sizesArr: number[] = [36, 37,36, 40,41,42, 43, 44];
const quantityArr : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


type DetailsProps = {
    layoutId : string;
    setExpand : (expand : boolean) => void,
    item : ItemsType | null,
}

const itemVariants =  {
    expand : {
        opacity : 1,
        transition : {
            type : 'spring',
            duration : .5
        }
    },
    close : {
        opacity : 0,
        transition : {
            duration : .2
        }
    }
}

export const Item = (props : DetailsProps) => {
    const classes = useItemStyle();
    const [ size, setSize ] = useState<number>(sizesArr[0]);
    const [quantity, setQuantity] = useState<number>(quantityArr[0])
    const handleExpand = () => props.setExpand(false);

    return(
        <motion.div
            className = {classes.container} 
            layoutId = { props.layoutId }
            variants = { itemVariants }
            animate = "expand"
            exit = "close"
        >
            <div className = {classes.cardContainer}>
                <IconButton className = {classes.closeBtn} onClick = {handleExpand}>
                    <HighlightOffIcon className = {classes.closeIcon} />
                </IconButton>
                <span className = {classes.price}> {props.item?.price} € </span>
                <img
                    className = { classes.image } 
                    src = {props.item?.imageUrl} 
                    alt = {`${props.item?.brandsName}-shoe`}
                />
                <div className = {classes.infoContainer}>
                    <h2 className = {classes.brand} >{ props.item?.brandsName } </h2>
                    <p className = {classes.description}>
                        {props.item?.name}
                    </p>
                    <span className = {classes.gender}>
                        Gender : {props.item?.gender}
                    </span>
                    <div className = {classes.inputFieldsContainer}>
                        <SelectField
                        //make difference between size & quantity
                            isSizeInput = { true }
                            items = {sizesArr}
                            set = { setSize }
                            label = 'size'
                            value = {size}
                        />
                        <SelectField 
                            items = {quantityArr}
                            set = { setQuantity }
                            label = 'quantity'
                            value = {quantity}
                        />
                    </div>
                    <Button
                        startIcon = { <ShoppingCart /> }
                        variant = 'contained'
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
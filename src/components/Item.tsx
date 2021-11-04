import { useCallback, useState } from 'react';
import { ItemsType } from '../service'
import { useItemStyle } from "../assets/styles/index.styles";
import { motion, Variants } from 'framer-motion';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton } from '@material-ui/core';
import { SelectField } from "./SelectField";
import { Button } from '@material-ui/core';
import { ShoppingCart } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActionCreators from "../state/actions-creators/cart-action-creators";
import { Notification, NotificationType, NOTIFICATION_DEFAULT_VALUE } from "./Notification";

const sizesArr: number[] = [36, 37,36, 40,41,42, 43, 44];
const quantityArr : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type DetailsProps = {
    layoutId : string;
    setExpand : (expand : boolean) => void,
    item : ItemsType | null,
}

const itemVariants : Variants = {
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
    //items eu sizes
    const [ size, setSize ] = useState<number>(0);
    //quantity ordered
    const [quantity, setQuantity] = useState<number>(0);
    //notification component default severity === success / message === ''
    const [ notification, setNotification] = useState<NotificationType>(NOTIFICATION_DEFAULT_VALUE);
    //toogle notification
    const [openNotification, setOpenNotification] = useState<boolean>(false)
    const dispatch = useDispatch();
    const { addToCart } = bindActionCreators(CartActionCreators, dispatch);

    //toggle item details pop-up
    const handleExpand = () => props.setExpand(false);
    //add a item to cart
    const handleAddToCart = useCallback(() => {
        if(size && quantity){
            addToCart({item : props.item, quantity, size});
            setNotification({severity : 'success', message : 'successfully added to your cart'});
        }
        else{
            setNotification({severity : 'warning', message : 'you need to provide size and quantity'})
        }
        setOpenNotification(true);
    },[size, quantity, props.item]);

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
                    <div className = {classes.selectFieldsContainer}>
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
                        onClick = { handleAddToCart }
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
            <Notification 
                open = {openNotification}
                setOpen = {setOpenNotification}
                message = { notification?.message }
                severity = {notification?.severity}
            />
        </motion.div>
    )
}
import { useCartStyle } from "../assets/styles/index.styles";
import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import { CartItem } from "./CartItem";
import { CartItemType } from "../state/reducers/cartReducer";
import { Drawer, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type CartPropsType = {
    open : boolean
    setOpen : (open : boolean) => void
};

export const Cart = (props : CartPropsType) => {
    const classes = useCartStyle();
    const cart = useSelector((store : ReducerRootStateType) => store.cart);
    //on Close Cart drawer
    const handleClose = () => props.setOpen(false);

    return(
        <Drawer
            open = { props.open }
            onClose = { handleClose }
            anchor = 'bottom'
        >
            {/* close drawer */}
            <IconButton onClick = { handleClose } className = {classes.closeBtn}>
                <KeyboardArrowDownIcon className ={classes.closeIcon}/>
            </IconButton>

            <div className = {classes.root}>
                { !cart.length ? <h2 className = {classes.noItemMsg}>No items</h2> :
                    <div>
                        <span className = {classes.cartInfo}>Total : { totalPrice(cart) } €</span>
                    </div>
                }
                {cart.map((item, i) => (
                    <CartItem 
                        cartItem = {item}
                        itemKey = {i}
                    />
                ))

                }
            </div>
        </Drawer>

    )
}

//calculate the sum of items in cart
const totalPrice = (items : CartItemType[]) => {
    return items.reduce((a , b) => {
        return a + parseInt(b.item!.price)
    },0)
}
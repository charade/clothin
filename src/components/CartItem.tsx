import { useCartItemStyle } from "../assets/styles/index.styles";
import { CartItemType } from "../state/reducers/cartReducer";
import {Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import * as cartActionCreators from '../state/actions-creators/cart-action-creators';
import { bindActionCreators } from "redux";

type Props = {
    cartItem : CartItemType,
    itemKey : number
};

export const CartItem = (props : Props) => {
    const classes = useCartItemStyle();
    const dispatch = useDispatch();
    const { removeFromCart } = bindActionCreators(cartActionCreators, dispatch);

    //on delete an item from cart
    const handleRemoveFromCart = () => removeFromCart(props.itemKey);
    
    return(
        <div className = {classes.container} key = {props.itemKey}>
            {/* block styling image position */}
            <div className = {classes.imageContainer}>
                <img 
                    className = {classes.image}
                    src = {props.cartItem.item?.imageUrl} 
                    alt = {`${props.cartItem.item?.brandsName}`}
                />
            </div>
            {/* block containing brandName + descrption + gender + (quantity + size)*/}
            <div className = {classes.infosContainer}>
                <h2 className = {classes.brand}>{props.cartItem.item?.brandsName}</h2>
                <p className = {classes.description}>{props.cartItem.item?.name}</p>
                {/* block containing quantity + size */}
                <div className = {classes.quantitySizeContainer}>
                    <span> size : {props.cartItem.size} </span>
                    <span> quantity : {props.cartItem.quantity} </span>
                </div>
            </div>

            <div className = {classes.actionBlock}>
                <h3 className = {classes.price}> {props.cartItem.item?.price} €</h3>
                <Button 
                    onClick = { handleRemoveFromCart }
                    endIcon = { <DeleteIcon /> }
                >
                    Remove
                </Button>
            </div>
        </div>
    )
}
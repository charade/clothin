import { useCartStyle } from "../assets/styles/index.styles";
import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import { Reducer } from "react";
import { CartItem } from "./CartItem";
export const Cart = () => {
    const classes = useCartStyle();
    const cart = useSelector((store : ReducerRootStateType) => store.cart);

    return(
        <div className = {classes.root}>
            { !cart.length && <h2>No items</h2> }

            {cart.map((item, i) => (
                <CartItem 
                    cartItem = {item}
                    itemKey = {i}
                />
            ))

            }
        </div>
    )
}
import { Actions } from "../actions";
import { CartActionsType } from "../reducers/cartReducer";
import { Dispatch } from "react";
import { CartItemType } from "../reducers/cartReducer"

//add an item to cart
export const addToCart = (item : CartItemType) => {
    return (dispatch : Dispatch<CartActionsType>) => {
        dispatch({
            type : Actions.ADD_TO_CART,
            payload : item
        })
    }
}
//remove an item
export const removeFromCart = (id : number) => {
    return (dispatch : Dispatch<CartActionsType>) => {
        dispatch({
            type : Actions.ADD_TO_CART,
            payload : id
        })
    }
}
//load saved cart from localStorage
export const loadCart = (savedCart : CartItemType[]) => {
    return (dispatch : Dispatch<CartActionsType>) => {
        dispatch({
            type : Actions.ADD_TO_CART,
            payload : savedCart
        })
    }
}
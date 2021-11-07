import { Actions } from "../actions";
import { ItemsType } from "../../service";

export type CartItemType = {
    item : ItemsType | null,
    quantity : number,
    size : number
};
interface CartAddActionsType {
    type : string,
    payload : CartItemType
}
interface CartRemoveActionType {
    type : string,
    payload : number
}
interface CartLoadAction {
    type : string,
    payload : CartItemType[]
}
export type CartActionsType = CartAddActionsType | CartRemoveActionType | CartLoadAction;

export const cartReducer = (state : CartItemType[] = [], action : CartActionsType ) => {
    switch(action.type){
        case Actions.LOAD_CART : 
        case Actions.ADD_TO_CART : 
            state = state.concat(action.payload as CartItemType[] | CartItemType);
            //Save cart when an item is added
            localStorage.setItem('cart', JSON.stringify(state))
            return state;
        case Actions.REMOVE_FROM_CART : 
            state = state.filter((_,id) => id !== action.payload);
            //Save cart when an item is removed
            localStorage.setItem('cart', JSON.stringify(state))
            return state
        default : return state;
    }
}
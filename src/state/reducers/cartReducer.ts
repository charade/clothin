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
            return state.concat(action.payload as CartItemType[] | CartItemType)
        case Actions.REMOVE_FROM_CART : return state.filter((_,id) => id !== action.payload);
        default : return state;
    }
}
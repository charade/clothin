import { Actions } from "../actions"
import { ItemsType } from "../../service";

type StateType = ItemsType[];

export type ItemsActionsType = {
    type : string,
    payload : ItemsType[]
}
export const itemsReducer = (state : StateType = [], action : ItemsActionsType) => {
    switch(action.type){
        case Actions.FILTER_ITEMS :
            state.splice(0, state.length)
            console.log(state)
            return state.concat(action.payload);
        default : 
            console.log('default')
            console.log('default')
            console.log('default')
            return state;
    }
}
    
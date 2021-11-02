import { Actions } from "../actions"
import { ItemsType } from "../../service";

type StateType = ItemsType[];

export type SuggestionsActionsType = {
    type : string,
    payload : ItemsType[]
}

export const suggestionsReducer = (state : StateType = [], action : SuggestionsActionsType) => {
    switch(action.type){
        case Actions.LOAD_SUGGESTIONS : return state.concat(action.payload);
        default : return state;
    }
}
    
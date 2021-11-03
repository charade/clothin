import { Actions } from '../actions';


export type CategoryActionType = {
    type : string,
    payload : string
}

export const categoryReducer = (state : string = 'Most Popular', action : CategoryActionType) => {
    switch(action.type){
        case Actions.SET_CATEGORY : return action.payload;
        default :  return state;
    }
}

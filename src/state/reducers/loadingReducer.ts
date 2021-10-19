import { Actions } from "../actions";

export type LoadingType = {
    type : string,
    payload : boolean
}

const loadingReducer = (state: boolean = true, action : LoadingType) => {
    switch(action.type){
        case Actions.ISLOADING : return action.payload;
        default : return state
    }
}   

export default loadingReducer;
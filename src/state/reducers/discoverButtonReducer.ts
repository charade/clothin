import { Actions } from "../actions";

export type DscvrBtnActionType = {
    type : string,
    payload : boolean
}

const  discoverBtnReducer = (state : boolean = false, action : DscvrBtnActionType) =>{
    switch(action.type){
        case Actions.ISDISCOVERBTNCLIKED : return action.payload
        default : return state
    }
}

export default discoverBtnReducer;
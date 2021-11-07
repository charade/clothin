import { Actions } from "../actions";

export type BrandsType = {
    brandsName : string
}
export type BrandsActionType = {
    type : string,
    payload : BrandsType[]
}
export const brandsReducer = (state : BrandsType[] = [], action : BrandsActionType) => {
    switch(action.type){
        case Actions.LOAD_BRANDS : return state.concat(action.payload);
        default : return state
    }
}

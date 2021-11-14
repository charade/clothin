import { Actions } from "../actions";
import { CategoryActionType } from "../reducers/categoryReducer";
import { Dispatch } from "react";

export const setCategory = (category : string) =>{
    return (dispatch : Dispatch<CategoryActionType>) => {
        dispatch({
            type : Actions.SET_CATEGORY,
            payload : category
        })
    }
}
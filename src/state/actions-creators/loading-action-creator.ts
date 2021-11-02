import { LoadingType } from "../reducers/loadingReducer";
import { Dispatch } from "react";
import { Actions } from "../actions";

export const setLoading = (isLoading : boolean) => {
    return (dispatch : Dispatch<LoadingType>) =>{
        dispatch({
            type : Actions.IS_LOADING,
            payload : isLoading
        })
    }
}
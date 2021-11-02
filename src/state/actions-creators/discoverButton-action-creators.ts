import { DscvrBtnActionType } from "../reducers/discoverButtonReducer";
import { Actions } from "../actions";
import { Dispatch } from "react";

export const setDiscoverClicked = (clicked : boolean) => {
    return(dispatch : Dispatch<DscvrBtnActionType>) => {
        dispatch({
            type : Actions.IS_DISCOVERBTN_CLIKED,
            payload : clicked
        })
    }
}
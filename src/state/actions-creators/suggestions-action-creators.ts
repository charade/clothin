import { Actions } from "../actions";
import { SuggestionsActionsType } from "../reducers/suggestionsReducer";
import { ItemsType } from "../../service";
import { Dispatch } from "react";
import { suggestionsLoader } from "../../service";


export const loadSuggestions = () => {
    return async (dispatch : Dispatch<SuggestionsActionsType>) => {
        const suggestions = await suggestionsLoader();
        dispatch({
            type : Actions.LOAD_SUGGESTIONS,
            payload : suggestions as ItemsType[]
        })
    }
}
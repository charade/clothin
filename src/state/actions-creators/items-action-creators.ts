import { Actions } from "../actions";
import { ItemsActionsType } from "../reducers/itemsReducer";
import { Dispatch } from "react";
import { suggestionsLoader, getGender, getABrand } from "../../service";

export const filterItems = (category : string) => {
    return async(dispatch : Dispatch<ItemsActionsType>)=> {
        let results : any;
        switch(category){
            case 'Men' : 
            case 'Women':
                results = await getGender(category);
                return  dispatch({
                    type : Actions.FILTER_ITEMS,
                    payload : results.data
                })
            case 'Most Popular': 
                results = await suggestionsLoader();
                return  dispatch({
                    type : Actions.FILTER_ITEMS,
                        /**
                         * loading suggestions --> most popular --> typeof result is array
                         */
                    payload : results
                })
            default : 
                results = await getABrand(category)
                return  dispatch({
                    type : Actions.FILTER_ITEMS,
                    payload : results.data
                })
        }
       
    }
}
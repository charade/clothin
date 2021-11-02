import { Actions } from "../actions";
import { BrandsActionType, BrandsType } from "../reducers/brandsReducer";
import { Dispatch } from "react";
import { getBrands } from "../../service";

export const loadBrands = () => {
    return async (dispatch : Dispatch<BrandsActionType>) =>{
        const brands = await getBrands();
        dispatch({
            type: Actions.LOAD_BRANDS,
            payload : brands.data as BrandsType[]
        })
    }
}
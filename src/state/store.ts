import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
    loadingReducer,
    discoverBtnReducer,
    itemsReducer,
    brandsReducer,
    categoryReducer,
    cartReducer
} from "./reducers";

const reducers = combineReducers({
    isLoading : loadingReducer,
    discoverBtn : discoverBtnReducer,
    items : itemsReducer,
    brands : brandsReducer,
    category: categoryReducer,
    cart : cartReducer
})
export const store = createStore(reducers, applyMiddleware(thunk));
export type ReducerRootStateType = ReturnType<typeof reducers>
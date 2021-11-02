import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadingReducer, discoverBtnReducer, suggestionsReducer, brandsReducer } from "./reducers";

const reducers = combineReducers({
    isLoading : loadingReducer,
    discoverBtn : discoverBtnReducer,
    suggestions : suggestionsReducer,
    brands : brandsReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));

export type ReducerRootStateType = ReturnType<typeof reducers>
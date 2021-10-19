import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadingReducer, discoverBtnReducer } from "./reducers";

const reducers = combineReducers({
    isLoading : loadingReducer,
    discoverBtn : discoverBtnReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));

export type ReducerRootStateType = ReturnType<typeof reducers>
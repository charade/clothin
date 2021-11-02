import { useSuggestionsStyle } from "../assets/styles/index.styles";
import { Card } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as suggestionActionCreators from "../state/actions-creators/suggestions-action-creators";
import { ReducerRootStateType } from "../state/store";
import { ItemsType } from "../service";
import { useEffect } from "react";

export const Suggestions = () => {
    const classes = useSuggestionsStyle();
    const dispatch = useDispatch();
    const { loadSuggestions } = bindActionCreators(suggestionActionCreators, dispatch);
    const suggestions = useSelector((store : ReducerRootStateType) => store.suggestions)

    useEffect(() => {
        loadSuggestions();
    },[]);

    return(
        <div className = {classes.mainContainer}>
            <h2 className = {classes.title}>Most popular</h2>
            <div className = {classes.container}>
                {
                    (suggestions as ItemsType[]).map((item, i) => {
                        return<Card 
                            itemKey = {i}
                            img = {item.imageUrl}
                            brandsName = { item.brandsName}
                            price = {`${item.price} €`}
                        />}
                    )
                }
            </div>
            
        </div>
    )
}
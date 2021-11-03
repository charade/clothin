import { useSuggestionsStyle } from "../assets/styles/index.styles";
import { Card } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as filterItemsActionCreators from "../state/actions-creators/items-action-creators";
import { ReducerRootStateType } from "../state/store";
import { ItemsType } from "../service";
import { useEffect } from "react";

export const Suggestions = () => {
    const classes = useSuggestionsStyle();
    const dispatch = useDispatch();
    const { filterItems } = bindActionCreators(filterItemsActionCreators, dispatch);
    const category = useSelector((store : ReducerRootStateType) => store.category);
    const suggestions = useSelector((store : ReducerRootStateType) => store.items)

    useEffect(() => {
        filterItems(category);
    },[category]);

    return(
        <div className = {classes.mainContainer}>
            <h2 className = {classes.title}> { category } </h2>
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
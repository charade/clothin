import { useState } from "react";
import { useItemsStyle } from "../assets/styles/index.styles";
import { Card } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as filterItemsActionCreators from "../state/actions-creators/items-action-creators";
import { ReducerRootStateType } from "../state/store";
import { ItemsType } from "../service";
import { useEffect } from "react";
import { Item } from "./Item";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

export const Items = () => {
    const classes = useItemsStyle();
    const dispatch = useDispatch();
    const { filterItems } = bindActionCreators(filterItemsActionCreators, dispatch);
    const category = useSelector((store : ReducerRootStateType) => store.category);
    const items = useSelector((store : ReducerRootStateType) => store.items);
    const [layoutId, setLayoutId] = useState<string>('');
    const [item, setItem] = useState<ItemsType | null>(null);
    //when show button clicked it expands sharing layout component
    const [ expand, setExpand ] = useState<boolean>(false);

    useEffect(() => {
        filterItems(category);
    },[category]);

    return(
        <div className = {classes.mainContainer} >
            <h2 className = {classes.title}> { category } </h2>
            <AnimateSharedLayout>
                <div className = {classes.container} >
                    {
                        (items as ItemsType[]).map((item, i) => {
                            return<Card 
                                itemKey = {i}
                                item = {item}
                                setId = { setLayoutId }
                                setItem = { setItem }
                                setExpand = { setExpand }
                            />}
                        )
                    }
                </div>
                <AnimatePresence>
                    {expand && 
                        <Item 
                            layoutId = { layoutId }
                            setExpand = { setExpand }
                            item = { item }
                        />
                    }
                </AnimatePresence>
            </AnimateSharedLayout>
        </div>
    )
}
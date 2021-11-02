import { useEffect } from "react";
import { useBrandsStyle } from "../assets/styles/index.styles";
import { useSelector, useDispatch } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import { Popover, List, ListItem } from "@mui/material";
import { bindActionCreators } from "redux";
import * as brandsActionsCreators from "../state/actions-creators/brands-action-creators";
import { BrandsType } from "../state/reducers/brandsReducer";

type PropsType = {
    open : boolean,
    setOpen : (open : boolean) => void,
    anchorEl : HTMLLIElement | null
}
export const Brands = (props : PropsType) => {
    const classes = useBrandsStyle();
    const brands = useSelector((store : ReducerRootStateType) => store.brands);
    const dispatch = useDispatch();
    const { loadBrands } = bindActionCreators(brandsActionsCreators, dispatch);

    useEffect(() => {
        //request brands then fill brands Store
        loadBrands();
    },[])

    console.log(brands);

    return(
        <Popover
            open = {props.open}
            anchorEl = { props.anchorEl }
            onClose = { () => props.setOpen(false) }
            anchorOrigin = {{vertical : 'bottom', horizontal : 'left'}}
            // anchorReference = "anchorPosition"
            // anchorPosition= {{top : 300, left : 0}}
            anchorPosition = {{top : 400, left:0}}
        >
            <List className = {classes.container}>
                { (brands as BrandsType[]).map((brand, i) => {
                    return <ListItem key = {i} className = {classes.item}>
                            {brand.brandsName}
                        </ListItem>
                })}
            </List>
        </Popover>
    )
}
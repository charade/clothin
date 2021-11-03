import { useEffect } from "react";
import { useBrandsStyle } from "../assets/styles/index.styles";
import { useSelector, useDispatch } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import { Popover, List, ListItem } from "@mui/material";
import { bindActionCreators } from "redux";
import * as brandsActionsCreators from "../state/actions-creators/brands-action-creators";
import * as categoryActionCreators from "../state/actions-creators/category-action-creators";
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
    const { setCategory } = bindActionCreators(categoryActionCreators, dispatch);

    useEffect(() => {
        //request brands then fill brands Store
        loadBrands();
    },[])

    //dispatch category when clicking on li element
    const handleCategory = (e : React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as HTMLLIElement;
        setCategory(target.textContent!)
    }

    return(
        <Popover
            open = {props.open}
            anchorEl = { props.anchorEl }
            onClose = {() => props.setOpen(false) }
            anchorOrigin = {{vertical : 'bottom', horizontal : 'left'}}
            anchorPosition = {{top : 400, left:0}}
        >
            <List className = {classes.container}>
                {(brands as BrandsType[]).map((brand, i) => {
                    return (
                        <ListItem key = {i} className = {classes.item} onClick = { handleCategory }>
                            {brand.brandsName}
                        </ListItem>
                    )
                })}
            </List>
        </Popover>
    )
}
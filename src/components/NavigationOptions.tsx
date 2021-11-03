import React, { useCallback, useRef, useState } from "react";
import { useNavigationOptionsStyle } from "../assets/styles/index.styles"
import { Brands } from "./Brands";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActionCreators from "../state/actions-creators/category-action-creators";

export const NavigationOptions = () => {
    const classes = useNavigationOptionsStyle();
    const [openPopover, setOpenPopover] = useState<boolean>(false);
    const popoverAnchor = useRef<HTMLLIElement>(null);
    const dispatch = useDispatch();
    const { setCategory } = bindActionCreators(categoryActionCreators, dispatch);

    //dispatch category when clicking on li element
    const handleCategory = (e : React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as HTMLLIElement;
        setCategory(target.textContent!)
    }
    const handleOpenPopover = useCallback(() => setOpenPopover(true),[]);
    
    return(
        <>
            <ul className = {classes.list} >
                <li
                    onClick = { handleCategory }
                    role = "button" 
                    className = {classes.item}
                >
                    Most Popular
                </li>
                <li
                   onClick = { handleCategory }
                   role = "button" 
                    className = {classes.item}
                >
                    Men
                </li>
                <li
                   onClick = { handleCategory }
                   role = "button" 
                    className = {classes.item}
                >
                    Women
                </li>
                <li 
                    ref = { popoverAnchor }
                    role = "button" 
                    className = {classes.item}
                    onClick = { handleOpenPopover }
                >
                    Brands
                </li>
            </ul>
            <Brands 
                anchorEl = { popoverAnchor.current }
                open = { openPopover }
                setOpen = { setOpenPopover }
            />
        </>
    )
}
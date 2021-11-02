import { useCallback, useRef, useState } from "react";
import { useNavigationOptionsStyle } from "../assets/styles/index.styles"
import { Brands } from "./Brands";


export const NavigationOptions = () => {
    const classes = useNavigationOptionsStyle();
    const [openPopover, setOpenPopover] = useState<boolean>(false);
    const popoverAnchor = useRef<HTMLLIElement>(null);

    const handleOpenPopover = useCallback(() => setOpenPopover(true),[]);

    return(
        <>
            <ul className = {classes.list} >
                <li 
                    role = "button" 
                    className = {classes.item}>
                    Men
                </li>
                <li 
                    role = "button" 
                    className = {classes.item}>
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
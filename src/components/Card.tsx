import { useCardStyle } from "../assets/styles/index.styles";
import React, { useCallback, useState } from 'react';
import { ItemsType } from "../service";
import { motion, AnimateSharedLayout } from "framer-motion";

type CardProps = {
    itemKey : number,
    item : ItemsType,
    setItem : (item : ItemsType) => void
    setId : (id : string) => void
    setExpand : (expand : boolean) => void
}
export const Card = (props : CardProps) => {
    const classes = useCardStyle();

    const handleChosenItem = (e : React.MouseEvent<HTMLSpanElement>) => {
        const target = e.target as HTMLSpanElement;
        //get item from store
        props.setItem(props.item);
        //change layoutId for animatesharedLayout
        props.setId(`item-${props.itemKey}`)
        props.setExpand(true)
    };

    return(
        <motion.div layoutId = {`item-${props.itemKey}`} key = {props.itemKey} className = {classes.cardContainer}>
            <img
                className = {classes.img}
                src ={props.item.imageUrl} 
                alt = {`${props.item.brandsName}-shoe`}
            />
            {/* infos block */}
            <div className = {classes.infosContainer}>
                <span className = {classes.brand}>{props.item.brandsName}</span>
                <span 
                    onClick = { handleChosenItem }
                    role = 'button' 
                    className = {classes.btn}
                >
                    show
                </span>
            </div>
        </motion.div>
    )
}


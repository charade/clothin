import React from "react";
import { useSelectFieldStyle } from "../assets/styles/index.styles";
import Select from '@mui/material/Select'
import { MenuItem } from "@material-ui/core";
import{ SelectChangeEvent } from "@mui/material";

type PropsType = {
    set : (size : number) => void;
    label : string;
    items : number[],
    isSizeInput ?: boolean
    value : number
};

export const SelectField = (props : PropsType) => {
    const classes = useSelectFieldStyle();
    
    const handleChange = (e : SelectChangeEvent) => {
        const target = e.target as HTMLSelectElement;
        props.set(parseInt(target.value));
    }
    return(
        <>
            <label htmlFor = {`select-${props.label}`}>{props.label}</label>
            <Select
                onChange = { handleChange }
                aria-labelledby = {`${props.label}-select-field`}
                label = "Age"
                value = {`${props.value}`}
                id = {`select-${props.label}`}
            >
                {props.items.map((item, key) => (
                    <MenuItem key ={key} value = {item}>{item}</MenuItem>
                ))}

            </Select>
       </>
    )
}
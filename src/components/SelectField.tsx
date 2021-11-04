import React from "react";
import { useSelectFieldStyle } from "../assets/styles/index.styles";
import{MenuItem, SelectChangeEvent, InputLabel, Select, FormControl } from "@mui/material";

type PropsType = {
    set : (value : number) => void;
    label : string;
    items : number[],
    isSizeInput ?: boolean
    value : number
};

export const SelectField = (props : PropsType) => {
    const classes = useSelectFieldStyle();
    
    const handleChange = (e : SelectChangeEvent) => {
        props.set(parseInt(e.target.value));
    }
    return(
        <FormControl classes = {{root : classes.rootForm}}>
            <InputLabel id = {`select-${props.label}`}>{props.label}</InputLabel>
            <Select
                onChange = { handleChange }
                aria-labelledby = {`${props.label}-select-field`}
                label = "Age"
                value = {`${props.value}`}
                id = {`select-${props.label}`}
                labelId = {`select-${props.label}`}
            >
                {props.items.map((item, key) => (
                    <MenuItem key ={key} value = {item}>{item}</MenuItem>
                ))}

            </Select>
       </FormControl>
    )
}
import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { Search } from "@mui/icons-material";
import { useSearchBarStyle } from "../assets/styles/SearchBar.styles";

export const SearchBar = () => {
    const [entry, set] = useState<string>('');
    const classes = useSearchBarStyle();

    //on changing text
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        set(target.value)
    }
    //on submit form

    return(
        <form className = { classes.form }>
            <input
                className = { classes.textField }
                onChange = { handleChange }
                type = 'text'
                placeholder = 'search articles...'
            />
            <IconButton className = {classes.submitBtn} type = 'submit' aria-label = 'submit-form'>
                <Search />
            </IconButton>
        </form>
    )
}
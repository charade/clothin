import { makeStyles } from "@material-ui/core";

export const useMainStyle = makeStyles(theme => ({
    container : {
        flex: 1,
        display : 'flex',
        flexDirection : 'column',
        zIndex : 7,
    },
}))
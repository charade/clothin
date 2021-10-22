import { makeStyles } from "@material-ui/core";

export const useContainerStyle = makeStyles(theme => ({
    container : {
        position : 'relative',
        // border : '2px solid',
        minWidth : '100vw',
        height : '100%'
    }

}))
import { makeStyles } from "@material-ui/core";

export const useMainStyle = makeStyles(theme => ({
    container : {
        position : 'fixed',
        top : 0, 
        left: 0,
        height : '100%',
        width: '100%',
        // border : '12px solid black',
        flex: 1,
        display : 'flex',
        flexDirection : 'column',
        // padding : '150px 0',
        zIndex : 7,
        background : 'rgb(211, 85, 80)'

    },
}))
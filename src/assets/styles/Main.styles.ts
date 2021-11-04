import { makeStyles } from "@material-ui/core";

export const useMainStyle = makeStyles(theme => ({
    container : {
        // border : '12px solid red',
        flex: 1,
        display : 'flex',
        flexDirection : 'column',
        zIndex : 7,
        // background :'white', /* 'linear-gradient(40deg ,rgb(211, 85, 80) 70%, rgb(14, 25,44))' */
    },
}))
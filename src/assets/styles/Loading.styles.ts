import { makeStyles } from "@material-ui/core";

export const useLoadingStyle = makeStyles({
    container : {
        alignSelf : 'center',
        display : 'flex',
        justifyContent: 'center',
        "& > *" : {
            margin :'10px'
        },
        width :"100%"
    },
    label : {
        fontSize : '1.8rem'
    }
})
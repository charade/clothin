import { makeStyles } from "@material-ui/core";

export const useCartStyle = makeStyles(theme  => ({
    root : {
        position : 'relative',
        height :'100%',
        padding: '100px 20px'
    },
    closeBtn : {
        width :'70px',
        height: '70px',
        alignSelf : 'center',
        padding: '5px',
        margin : '30px'
    },
    closeIcon : {
        minWidth :'70%',
        minHeight : '70%',
    },
    noItemMsg : {
        position : 'absolute',
        top : '50%',
        left : '50%',
        transform :'translate(-50%, -50%)',
        fontSize :'2rem'
    },
    cartInfo : {
        display :'block',
        fontSize :'1.8rem',
        margin :'30px 0'
    }
}))
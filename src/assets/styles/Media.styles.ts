import { makeStyles } from "@material-ui/core";

export const useMediaStyle = makeStyles(theme => ({
    list : {
        display : 'flex',
        alignItems : 'center',
        '& > *:first-child' : {
            margin : '50px',
            fontSize :  '1.6rem'
        }
    },
    item :{
        padding :0,
        margin : '10px',
        cursor : 'pointer',
    }
}))
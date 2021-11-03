import { makeStyles } from "@material-ui/core";

export const useMediaStyle = makeStyles(theme => ({
    list : {
        display : 'flex',
        alignItems : 'center',
        // border :'2px solid'
        '& > *:first-child' : {
            margin : '50px',
            fontSize :  '1.6rem'
        }
    },
    item :{
        padding :0,
        margin : '10px',
        // border: '2px solid',
        cursor : 'pointer',
    }
}))
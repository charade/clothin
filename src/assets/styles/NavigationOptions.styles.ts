import { makeStyles } from "@material-ui/core";

export const useNavigationOptionsStyle = makeStyles(theme => ({
    list : {
        // border :'2px solid',
        position : 'relative',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        listStyle : 'none',
        padding :0,
        width : '50%'
    },
    item : {
        cursor : 'pointer',
        fontSize : '1.8rem',
        // color : 'white',
        margin : '15px'
        // border : '1px solid white'
    },
}))
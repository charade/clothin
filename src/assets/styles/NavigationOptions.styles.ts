import { makeStyles } from "@material-ui/core";

export const useNavigationOptionsStyle = makeStyles(theme => ({
    list : {
        position : 'relative',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        alignItems : 'center',
        listStyle : 'none',
        padding :0,
        width : '100%',
        [theme.breakpoints.up('md')] : {
            flexDirection : 'row',
            width : '50%'
        }
    },
    item : {
        cursor : 'pointer',
        fontSize : '1.8rem',
        margin : '15px',
        color : 'white'
    },
}))
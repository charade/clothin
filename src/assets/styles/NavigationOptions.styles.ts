import { makeStyles } from "@material-ui/core";

export const useNavigationOptionsStyle = makeStyles(theme => ({
    list : {
        // border :'2px solid',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        listStyle : 'none',
        marginRight : '15%',
        padding : 0
    },
    item : {
        cursor : 'pointer',
        fontSize : '2rem',
        color : 'white',
        // border : '1px solid white'
    }
}))
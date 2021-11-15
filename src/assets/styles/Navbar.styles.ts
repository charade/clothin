import { makeStyles } from "@material-ui/core";

export const useNavbarStyle = makeStyles(theme => ({
    root : {
        zIndex : 9,
        height : '60px',
       
        overflow : 'hidden',
        width :'100%',
        display : 'flex',
        justifyContent : 'flex-end',
    },
    toolbar : {
        background : 'rgb(14, 25,40)',
        display : 'flex',
        alignItems: 'center',
        justifyContent :'space-around',
        width : '100%',
        height : '100%',
    },
    drawerRoot : {
        width : '70%'
    }
    
}))
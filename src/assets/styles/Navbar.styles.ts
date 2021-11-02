import { makeStyles } from "@material-ui/core";

export const useNavbarStyle = makeStyles(theme => ({
    root : {
        zIndex : 9,
        position : 'fixed',
        // border: "2px solid red",
        height : '60px',
        background : 'rgba(255, 255, 255, .3)',
        overflow : 'hidden',
        width :'100%',
        boxShadow : 'none',
        borderBottom :'2px solid rgba(255, 255, 255, .4)',
        display : 'flex',
        justifyContent : 'flex-end',
        backdropFilter : 'blur(20px)'
    },
    toolbar : {
        display : 'flex',
        alignItems: 'center',
        justifyContent :'space-around',
        width : '100%',
        height : '100%'
    },
    
}))
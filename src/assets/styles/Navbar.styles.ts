import { makeStyles } from "@material-ui/core";

export const useNavbarStyle = makeStyles(theme => ({
    root : {
        zIndex : 9,
        position : 'fixed',
        // border: "2px solid red",
        height : '70px',
        background : 'rgba(255, 255, 255, .3)',
        // overflow : 'hidden',
        width :'100%',
        boxShadow : 'none',
        // border :'none',
        display : 'flex',
        justifyContent : 'flex-end',
        backdropFilter : 'blur(20px)'
    },
    toolbar : {
        // position :'absolute',
        // right :  '0',
        // top : 0,
        // border : '2px solid blue',
        display : 'flex',
        alignItems: 'center',
        justifyContent :'space-around',
        width : '100%',
        height : '100%'
    },
    
}))
import { makeStyles } from "@material-ui/core";

export const useNavPaneStyle = makeStyles(theme => ({
    blurredPane : {
        //behind navbar
        position : 'fixed',
        top : 0,
        left : 0,
        width : '100%',
        height : '70px',
        zIndex : 8,
        backdropFilter :'blur(20px)',
        background : 'rgba(255, 255, 255, .1)'
        // border :'13px solid blue'
    }
}))
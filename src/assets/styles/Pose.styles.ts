import { makeStyles } from '@material-ui/core';


export const usePoseStyle = makeStyles(theme => ({
    container : {
        position : 'absolute',
        top: '50%',
        right : '50%',
        transform : 'translateY(-50%)',
        // boxShadow : '0 0 10px black'
        // borderTopLeftRadius : '600px 100px',
        // borderBottomLeftRadius : '700px 100px',
        // clipPath : 'polygon(0 5%, 100% 0, 100% 100%, 0 95%)'
    },

}))
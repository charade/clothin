import { makeStyles } from '@material-ui/core';

export const useUnderlayStyle = makeStyles(theme => ({
    root : {
        position :'absolute',
        display : 'flex',
        width : '100%',
        height : '100%',
        background : '#F23041',
        '& > *' :{
           flex : 1
        }
    },
    //left block
    left : {
        background : 'rgb(14, 25,44)',
        borderTopRightRadius : '300px'
    },
    //right block
    right: {
        background : 'rgb(14, 25,44)',
    },
    //right bloc overlay
    rightOverlay : {
        height : '100%',
        background : '#F23041',
        borderBottomLeftRadius : '300px',
    }
}))
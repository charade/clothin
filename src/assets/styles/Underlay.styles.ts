import { makeStyles } from '@material-ui/core';

export const useUnderlayStyle = makeStyles(theme => ({
    root : {
        position :'absolute',
        display : 'flex',
        width : '100%',
        height : '100%',
        background : '#F23041',
        '& > *' :{
           flex : 1,
           border :'none'
        }
    },
    //left block
    left : {
        background : 'rgb(14, 25,44)',
        borderTopRightRadius : '280px'
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
    },
    //discover button and styled line block
    link : {
        position : 'absolute',
        top : '27%',
        left : '50%',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        // justifyContent : 'center',
        transform :'translateX(-50%)',
        zIndex : 5,
        width : '200px',
        height : '200px',
        // border: '2px solid',
        '& > *' : {
            margin : '3px 0'
        },
        [theme.breakpoints.up('sm')] : {
            top : '5%',
            left : '78%',
            transform :'translateX(0)',
        }
        
    },
    //dicover button text
    text : {
        fontSize : '1.8rem',
        fontWeight : 300,
        color : '#fff',
        cursor : 'pointer',
        transition : '.4s ease',
        // borderBottom: '1px solid white',
        padding : '0 6px',
        borderRadius : '10px',
        '&:hover' : {
            transform : 'scale(1.05)',
            boxShadow : '0 0 2px white'
        }
    },
    //discover styled undeline
    line : {
        height: '2px',
        width : '39%',
        position : 'relative',
        // background : 'white',
        // boxShadow : '0 0 5px white',
        '&::before, &::after' : {
            content : "''",
            position : 'absolute',
            top : 0, 
            height : '100%',
            width : '50%',
        },
        '&::before' : {
            left : 0,
            background : '#F23041',
            [theme.breakpoints.up('sm')] : {
                background : 'white'
            }
        },
        '&::after' : {
            right : 0,
            background : 'rgb(14, 25, 44)',
        }
    }
}))
import { makeStyles } from '@material-ui/core';

export const useSuggestionsStyle = makeStyles(theme => ({
    mainContainer : {
        // border : '2px solid red',
        height : '500px',
        display : 'flex',
        flexDirection : 'column'
    },
    title : {
        fontSize : '1.8rem',
        fontWeight: 700,
        // alignSelf: 'center',
        // color : 'white',
        position : 'relative',
        margin : '20px 50px',
        '&::before' : {
            content : "''",
            position : 'absolute',
            top : '120%',
            // left : '50%',
            // transform : 'translateX(-50%)',
            width : '120px',
            height : '2px',
            background : 'black'
        }
    },
    container: {
        flex : 1,
        // border :'3px solid yellowgreen',
        marginLeft : '30px',
        display : 'flex',
        overflowY : 'scroll'
    }
}))
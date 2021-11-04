import { makeStyles } from '@material-ui/core';

export const useItemsStyle = makeStyles(theme => ({
    mainContainer : {
        // border : '2px solid red',
        display : 'flex',
        flexDirection : 'column'
    },
    title : {
        fontSize : '1.8rem',
        fontWeight: 700,
        position : 'relative',
        margin : '20px 50px',
       
    },
    container: {
        flex : 1,
        // border :'3px solid yellowgreen',
        marginLeft : '30px',
        display : 'flex',
        flexWrap: 'wrap',
    }
}))
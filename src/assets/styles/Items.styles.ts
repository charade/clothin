import { makeStyles } from '@material-ui/core';

export const useItemsStyle = makeStyles(theme => ({
    mainContainer : {
        position :'relative',
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
        marginLeft : '30px',
        display : 'flex',
        flexWrap: 'wrap',
    }
}))
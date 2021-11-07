import { makeStyles } from '@material-ui/core'

export const useCardStyle = makeStyles(theme => ({
    cardContainer : {
        position :'relative',
        minWidth: '250px',
        height : '190px',
        background : 'white',
        borderRadius : '8px',
        overflow: 'hidden',
    },
    img : {
        maxWidth : '60%',
    },
    infosContainer : {
        position : 'absolute',
        width : '60%',
        top : '69%',
        height : '25%',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
    },
    brand : {
        fontSize : '2rem',
        color : 'rgba(0, 0, 0, .5)',
        fontWeight : 700,
    },
    price : {
        fontSize : '1.8rem'
    },
    btn : {
        padding : '0 10px',
        fontSize : '1.4rem',
        borderRadius : '8px',
        background : 'rgb(211, 85, 80)',
        color : 'white',
        cursor : 'pointer'
    }
}))
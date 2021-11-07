import { makeStyles } from "@material-ui/core"

export const useCartItemStyle = makeStyles(theme => ({
    container : {
        display : 'flex',
        marginBottom : '30px',
        alignItems :'center'
    },
    imageContainer: {
        position : 'relative',
        display : 'none',
        [theme.breakpoints.up('xs')]: {
            display : 'block',
            width : '120px',
            height : '120px',
            borderRight : '3px solid white',
            borderBottom : '3px solid white',
            borderRadius: '10px',
            boxShadow: '0 0 3px rgba(0, 0, 0, .4)',
        },
    },
    image : {
        position : 'absolute',
        top : '5px',
        left :'30%',
        width : '80%',
        height : '80%'
    },
    infosContainer: {
        flex : 2,
        '& >*' : {
            margin : '5px 30px'
        }
    },
    brand : {
        [theme.breakpoints.up('sm')] :{
            fontSize : '2rem',
        }
    },
    description : {
        [theme.breakpoints.up('sm')] :{
            fontSize :'1.7rem',
        }
    },
    gender : {
        [theme.breakpoints.up('sm')] : {
            fontSize :'1.5rem',
        }
    },
    quantitySizeContainer:{
        display : 'flex',
        width : '80%',
        [theme.breakpoints.up('sm')] : {
            fontSize :'1.6rem',
        },
        '& > *' :{
            marginRight : '30px'
        }
    },
    actionBlock : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'space-between',
        height: '70%'
    },
    price : {
        fontSize :'2.2rem'
    }

}))
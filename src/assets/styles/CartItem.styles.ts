import { makeStyles } from "@material-ui/core"

export const useCartItemStyle = makeStyles(theme => ({
    container : {
        display : 'flex',
        // border :'1px solid rgba(0, 0, 0, .7)',
        // width : '73%',
        // padding: '10px',
        marginBottom : '30px',
        alignItems :'center'
    },
    imageContainer: {
        // background : 'rgba(0, 0, 0, .025)',
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
        // margin : '10px'
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
        // border :'2px solid red',
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

        // border : '2px solid blue'
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
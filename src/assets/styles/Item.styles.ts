import { makeStyles } from "@material-ui/core";

export const useItemStyle = makeStyles(theme => ({
    container : {
        position : 'fixed',
        top : 0,
        left : 0,
        width : '100%',
        height : '100%',
        display: 'flex',
        paddingTop : '73px',
        justifyContent : 'center',
        background : 'rgba(0, 0, 0, .9)',
    },
    cardContainer : {
        position : 'relative',
        // height : '40%',
        width : '100%',
        // width : '50%',
        background : 'white',
        padding : ' 30px 20px',
        alignItems : 'center',
        display : 'flex',
        flexDirection : 'column',
        overflow : 'hidden',
        [theme.breakpoints.up('md')] : {
            borderRadius : '10px',
            flexDirection : 'row',
        }
    },
    infoContainer: {
    },
    closeBtn:{
        position : 'absolute',
        top : '2%',
        left : '2%',
    },
    closeIcon : {
        // color : 'white',
        width : '80px',
        height: '80px',
        fontSize : '3rem'
    },
    price : {
        position : 'absolute',
        top : '40px',
        right : '20px',
        fontSize: '2rem'
    },
    brand : {
        fontSize : '2rem'
    },
    description : {
        fontSize :'1.8rem'
    },
    gender : {
        fontSize : '1.7rem'
    },
    image : {
        width : '200px',
        height :'230px',
        margin : '10px 70px 0 40px',
        [theme.breakpoints.up('sm')]:{
            width : '230px',
            height :'250px',
        },
        // border: '2px solid'
    },
    //container on divs containing inputs
    inputFieldsContainer : {
        display : 'flex',
        margin : '30px 0',
        [theme.breakpoints.up('sm')] : {
            margin : '18% 0',
        },
        '& > *' : {
            marginRight : '30px',
        }
        // border: '2px solid'
    }
}))
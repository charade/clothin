import { makeStyles } from "@material-ui/core";

export const useItemStyle = makeStyles(theme => ({
    container : {
        position : 'fixed',
        bottom : 0,
        left : 0,
        width : '100%',
        height : '100%',
        display: 'flex',
        paddingTop : '73px',
        justifyContent : 'center',
        background : 'rgba(0, 0, 0, .8)',
    },
    cardContainer : {
        width : '100%',
        background : 'white',
        alignItems : 'center',
        display : 'flex',
        flexDirection : 'column',
        [theme.breakpoints.up('md')] : {
            borderRadius : '10px',
        },
    },
    infoContainer: {
        paddingLeft : '10px'
    },
    upperContainer : {
        display : 'flex',
        margin : '20px 0 30px 0',
        padding: '30px',
        width : '100%',
        height : "50px",        
        justifyContent : "space-between",
        alignItems :'center',
        [theme.breakpoints.up('sm')] : {
            marginBottom :'60px'
        }
    },
    mainContainer : {
        display: 'flex',
        width :'100%',
        alignItems : 'center',
        flexDirection : "column",
        [theme.breakpoints.up('md')]: {
            flexDirection :'row',
            justifyContent : 'space-around'
        },
    },
    closeBtn : {
        width :'50px',
        height: '50px',
        "& > *": {
            width :'100%',
            height : "100%"
        }
    },
    closeIcon : {
        minWidth :'100%',
        minHeight : '100%',
    },
    price : {
        fontSize: '2rem'
    },
    brand : {
        fontSize : '2rem',
    },
    description : {
        fontSize :'1.8rem'
    },
    gender : {
        fontSize : '1.7rem'
    },
    image : {
        width : '150px',
        height :'150px',
        [theme.breakpoints.up('sm')]:{
            width : '230px',
            height :'250px',
        },
    },
    //container on divs containing inputs
    selectFieldsContainer : {
        display : 'flex',
        margin : '30px 0',
        [theme.breakpoints.up('sm')] : {
            margin : '18% 0',
        },
        //need to force marge between formControlled select
        '& > *:nth-child(n)' : {
            marginRight : '40px',
        },
    }
}))
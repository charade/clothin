import { makeStyles } from "@material-ui/core";

export const useCaptionStyle = makeStyles(theme => ({
    container : {
        position : 'relative',
        // border : '10px solid',
        height : '50vh',
        margin: '80px 50px 0 50px',
        display : 'flex',
        background : 'rgb(113, 113, 113)'
    },
    text : {
        // position : 'absolute',
        // left : '15%',
        display : 'none',
        marginLeft : '100px',
        fontSize : '4rem',
        fontWeight : 800,
        fontFamily : 'Montserrat Alternates',
        color : 'white' /* 'rgb(211, 85, 80)' */,
        [theme.breakpoints.up('sm')] : {
            display : 'block'
        },
    },
    image : {
        width : '100%',
        [theme.breakpoints.up('sm')] : {
            maxWidth : '50%'
        },
        [theme.breakpoints.up('md')] : {
            maxWidth : '25%'
        }
    }
}))
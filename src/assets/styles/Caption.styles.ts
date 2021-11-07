import { makeStyles } from "@material-ui/core";

export const useCaptionStyle = makeStyles(theme => ({
    container : {
        position : 'relative',
        margin: '80px 50px 0 50px',
        display : 'flex',
        background : 'rgb(113, 113, 113)'
    },
    text : {
        display : 'none',
        marginLeft : '100px',
        fontSize : '4rem',
        fontWeight : 800,
        fontFamily : 'Montserrat Alternates',
        color : 'white',
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
import { makeStyles } from "@material-ui/core";

export const useCaptionStyle = makeStyles(theme => ({
    container : {
        position : 'relative',
        // border : '10px solid',
        height : '50vh',
        margin: '80px 0 40px 50px',
    },
    text : {
        position : 'absolute',
        left : '15%',
        fontSize : '4rem',
        fontWeight : 800,
        fontFamily : 'Montserrat Alternates',
        // color : 'white' /* 'rgb(211, 85, 80)' */,
    },
    image : {
        maxWidth : '20%'
    }
}))
import { makeStyles } from "@material-ui/core";

export const useHeaderStyles  = makeStyles(theme => ({
    root: {
        height : '100vh',
        // margin : '100px 40px',
        display : 'flex',
        alignItems : 'center',
        // border : '2px solid red',
        //hiding scrollbar on firefox
        scrollbarWidth : 'none',
        //hidin on safara/chrome
        '&::-webkit-scrollbar' : {
            display : 'none'
        },
    },
    block : {
        position : 'absolute',
        left : "55%",
        display : 'flex',
        alignitem : 'center',
        flexDirection : 'column',
        justifyContent : 'space-between',
        maxWidth : '50%',
    },
    caption : {
        fontFamily : theme.typography.fontFamily ,
        fontSize : '6rem',
        fontWeight : 800,
        width : '100%',
        overflow : 'hidden',
        lineHeight : '69px',
        // border : '1px solid red',
        // color : 'rgb(229, 158, 55)',
        color : 'white',
        textWrap : 'wrap',
        
    }
}))
import { makeStyles } from "@material-ui/core";

export const useHeaderStyles  = makeStyles(theme => ({
    root: {
        height : '60vh',
        position : 'absolute',
        display : 'flex',
        justifyContent : 'flex-end',
        width : '100%',
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
        left : "15%",
        display : 'flex',
        alignitem : 'center',
        flexDirection : 'column',
        justifyContent : 'space-between',
        maxWidth : '50%',
        height : '250px',
        padding: '20px',
        // background : 'rgb(16, 24, 43)',
        // background : 'white',

        // borderTopLeftRadius :  '500px 500px',
        // borderBottomRightRadius :  '400px 500px',
        // borderTopRightRadius : '500px 500px',
        // borderBottomLeftRadius : '600px 500px',
    },
    caption : {
        // fontFamily : theme.typography.fontFamily?.big,
        // letterSpacing : '-1px',
        fontSize : '7rem',
        fontWeight : 900,
        overflow : 'hidden',
        lineHeight : '72px',
        // border : '1px solid red',
        // color : 'rgb(229, 158, 55)',
        color : 'white',
        // '&::first-letter' : {
        //     color : 'white'
        // }
        '&:not(&:last-child)' : {
            margin : '-8px 0',
        }
    }
}))
import { makeStyles } from "@material-ui/core";

export const useSelectFieldStyle = makeStyles(theme => ({
    inputContainer : {
        borderRadius : '5px',
        border : '1px solid',
        overflow : 'hidden',
        width : '120px',
        height : '40px',
        display : 'flex',
        '& > *' : {
            height : '100%'
        }
    },
    inputEl : {
        border :'none',
        fontSize : '1.8rem',
        width :'80%',
        outline : 'none',
        '&::placeholder':{
            fontSize :'1.4rem',
            fontStyle : 'italic'
        }
    },
    arrowsContainer :{
        width: '20%',
        display :'flex',
        flexDirection : 'column',
        alignItems :'center',
        justifyContent: 'center',
        '& > *' : {
            margin :0,
            width :'40px',
            height: '40px',
            cursor : 'pointer'
        }
    }
}))
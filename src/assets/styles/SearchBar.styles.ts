import { makeStyles } from "@material-ui/core";

export const useSearchBarStyle = makeStyles(theme => ({
    form : {
        position : 'relative',
        height : '30px',
        width : '250px',
        borderRadius : '10px',
        // border :'2px solid blue',
        overflow : 'hidden'
    },
    textField : {
        height : '100%',
        width : '100%',
        outline : 'none',
        border :'none',
        paddingLeft : '10px'
    },
    submitBtn : {
        position : 'absolute',
        top : '50%',
        right: '10px',
        transform :'translateY(-50%)'
    }
}))
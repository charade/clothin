import { makeStyles } from "@material-ui/core/styles";

export const useBrandsStyle = makeStyles(theme => ({
    
    container : {
        background : 'black',
        width : '200px',
        display: 'flex',
        flexWrap : 'wrap'
    },
    item : {
        fontSize : '1.8rem',
        color :'white',
        cursor : 'pointer'
    }
}))
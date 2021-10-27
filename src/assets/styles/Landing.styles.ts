import { makeStyles } from "@material-ui/core";

export const useLandingStyles = makeStyles(theme => ({
    root : {
        position : 'fixed',
        width : '100%',
        height : '100vh',
        overflow : 'hidden',
        zIndex : 10
    }
}))
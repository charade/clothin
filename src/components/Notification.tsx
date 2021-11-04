import { Alert, Snackbar, AlertColor } from '@mui/material';

type NotificationProps = {
    severity : AlertColor,
    message : string,
    open : boolean,
    setOpen : (open : boolean) => void
}

export type NotificationType  = {
    severity : AlertColor,
    message : string,
}

export const NOTIFICATION_DEFAULT_VALUE : NotificationType = {
    severity : "success",
    message : ''
}

export const Notification = (props : NotificationProps) => {

    const handleClose = () => props.setOpen(false)
    return(
        <Snackbar
        //close after 3s
            autoHideDuration = { 3000 }
            open = {props.open}
            onClose = { handleClose }
            anchorOrigin = {{vertical : "bottom", horizontal : "center"}}
        >
            <Alert severity = {props.severity}>
                { props.message }
            </Alert>
        </Snackbar>
    )
}
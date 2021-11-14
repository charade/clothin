import { CircularProgress } from "@material-ui/core";
import { useLoadingStyle } from "../assets/styles/Loading.styles";

export const Loading = () => {
    const classes = useLoadingStyle();

    return(
        <div className = {classes.container}>
            <h2 className = {classes.label}>Loading...</h2>
            <CircularProgress />
        </div>
    )
}
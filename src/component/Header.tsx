import { useHeaderStyles } from "../assets/styles/index.styles"

export const Header = () => {
    const classes = useHeaderStyles();

    return(
        <header className = {classes.root}>
            <h1 className = {classes.caption}> Hello</h1>
        </header>
    )
}
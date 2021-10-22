import React from 'react';
import { useContainerStyle } from "../assets/styles/index.styles"
type ContainerProps = {
    background : string,
    children : React.ReactNode
}

export const Container = ({background, children} : ContainerProps) => {
    const classes = useContainerStyle()
    return(
        <div
            className = { classes.container }
            style = {{background}}
        >
            { children }
        </div>
    )
}
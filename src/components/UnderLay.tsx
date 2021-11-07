import { useUnderlayStyle } from "../assets/styles/index.styles";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as discoverBtnActionCreators  from "../state/actions-creators/discoverButton-action-creators";

//click make transition from Landing to home scene interface
const Button = () => {
    const classes = useUnderlayStyle();
    const dispatch = useDispatch();
    const { setDiscoverClicked } = bindActionCreators(discoverBtnActionCreators, dispatch);

    const handleClick = () => setTimeout(() => setDiscoverClicked(true), 200);

    return(
        <>
            <h4 role = "button" className = {classes.text} onClick = { handleClick }>
                Discover
            </h4>
            <div className = {classes.line}></div>
        </>
    )
}

export const Underlay = () => {
    const classes = useUnderlayStyle();

    return(
        <div className = {classes.root}>
            <div className = {classes.left}></div>
            <div className = {classes.right}>
                <div className = {classes.rightOverlay}></div>
            </div>
            <div className = {classes.link}>
                <Button  />
            </div>
        </div>
    )
}

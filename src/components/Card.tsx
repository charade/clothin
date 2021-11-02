import { useCardStyle } from "../assets/styles/index.styles";

type CardProps = {
    itemKey : number,
    brandsName : string,
    img : string,
    price : string,
}
export const Card = (props : CardProps) => {
    const classes = useCardStyle();

    return(
        <div key = {props.itemKey} className = {classes.cardContainer}>
            <img
                className = {classes.img}
                src ={props.img} 
                alt = {`${props.brandsName}-shoe`}
            />
            {/* infos block */}
            <div className = {classes.infosContainer}>
                <span className = {classes.brand}>{props.brandsName}</span>
                <span role = 'button' className = {classes.btn}>show</span>
            </div>
        </div>
    )
}
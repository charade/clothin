import { useEffect, useRef } from "react";
import { useMainStyle } from "../assets/styles/Main.styles";
import { Caption } from './Caption';
import { lerp } from "../utils/lerp";
import { Suggestions } from "./Suggestions"

export const Main = () => {
    const classes = useMainStyle();
    const mainRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const animateRef = useRef<number>(0);
    //smooth scroll
    useEffect(() => {
        if(containerRef.current){
            document.body.style.height = `${containerRef.current.getBoundingClientRect().height + 50}px`
        }
        let scroll = 0 ;
        const animateScroll = () => {
            if(containerRef.current){
                //slow down scrollY speed for 30%
                scroll = lerp(scroll, window.scrollY, 0.3);
                containerRef.current.style.transform = `translate3d(0, -${scroll}px, 0)`;
            }
            animateRef.current =  requestAnimationFrame(animateScroll);
        }
        animateRef.current =  requestAnimationFrame(animateScroll) ;
        return () => cancelAnimationFrame(animateRef.current)
    },[]); 

    return(
        <div 
            ref = {mainRef}
            className = {classes.container}
        >
            <div ref = {containerRef}>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Suggestions />
            </div>
        </div>
    )
}
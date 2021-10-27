import { useEffect, useRef } from "react";
import { useMainStyle } from "../assets/styles/Main.styles";
import { Caption } from './Caption';
import { lerp } from "../utils/lerp";

export const Main = () => {
    const classes = useMainStyle();
    const mainRef = useRef<HTMLDivElement>(null);
    const currentTop = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(containerRef.current){
            document.body.style.height = `${containerRef.current.getBoundingClientRect().height}px`
        }
        const anim = animateScroll();
        return () => cancelAnimationFrame(anim);

    },[]); 
    
    const animateScroll = () => {
        if(containerRef.current){
            const target = window.scrollY;
            currentTop.current = lerp(currentTop.current, target, 0.01);
            containerRef.current.style.transform = `translate3D(0, -${currentTop.current}px, 0)`
        }
        return requestAnimationFrame(animateScroll);
    }

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
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
                <Caption>
                    <span>Define new codes</span><br/>
                    <span>Define hype</span><br/>
                    <span>Make it trends</span>  
                </Caption>
            </div>
        </div>
    )
}
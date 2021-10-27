export const lerp = (start : number, end : number, factor : number) => 
    start + (end - start) * (1 - Math.pow(1-factor, 4))
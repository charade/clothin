import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import  { useGLTF, OrbitControls, ContactShadows } from '@react-three/drei';
import { Suspense } from "react";
import  { Group, Vector3 } from 'three';
import { useMediaQuery } from "@material-ui/core";

const HALF_SCREEN = window.innerWidth / 2;

const Model = () => {
    const model = useGLTF('/shoes/scene.gltf');
    const modelRef = useRef<Group>(null);

    useFrame(({mouse, clock}) => {
        if(modelRef.current){
            // const time = 0.001 * clock.getElapsedTime() / (clock.getElapsedTime() + 1)
            // modelRef.current.rotation.y += MathUtils.lerp(0, Math.sin(time), 0.2)
            const time = clock.getElapsedTime();
            const x =  -8 *Math.sin(time - Math.PI/2);
            const y =  30 * Math.cos(time + Math.PI/2) * 0.5 + 55;
            const vec = new Vector3(x, y, -13);
            modelRef.current.position.lerp(vec, 0.02);
        }
    });

    return (
        <group ref = {modelRef} rotation = {[0, 0, -.3]}>
            <primitive object = {model.scene}/>
        </group>
    )
}

export const Shoe = () => {
    const isScreenMobile = useMediaQuery('(max-width : 800px)');

    return(
        <Canvas
            shadows 
            dpr={[1, 2]}
            camera = {{
                near: 0.1,
                far: 10000,
                zoom: 3,
                fov : 80,
                position : [0, 0, 40]
            }}
        >
            <directionalLight color = 'rgba(255, 10,10, .3)' intensity = {.8} position = {[-5, 3, 2]}/>
            <directionalLight color = 'blue' intensity = {.8} position = {[5, 3, 2]}/>
            <Suspense fallback = {null}>
                <Model />
                <ContactShadows frames={1} position = {[0, 54.9, 0]} width={1} height={1} blur = {5}/>
            </Suspense>
            <OrbitControls  />
        </Canvas>
    )
}

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import  { useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense } from "react";
import  { Group, MathUtils, Vector3 } from 'three';
import { useMediaQuery } from "@material-ui/core";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useShoeStyle } from "../assets/styles/index.styles"

useLoader.preload(GLTFLoader, '/shoes/scene.gltf');

type ModelPropsT = {
    isBtnClicked : boolean,
    setCanSwicthPage : (canSwitch : boolean) => void
}

const Model = (props : ModelPropsT) => {
    const model = useGLTF('/shoes/scene.gltf');
    const modelRef = useRef<Group>(null);
    const isScreenMobile = useMediaQuery('(max-width : 800px)');
    

    useFrame(({camera, clock}) => {
        const time = clock.getElapsedTime();
        if(modelRef.current){
            const x =  -0.1* Math.sin(time - Math.PI/2) + 18;
            const y =   20 * Math.cos(time + Math.PI/2) + 10 ;
            const vec = new Vector3(x, y, 300);
            modelRef.current.position.lerp(vec, 0.02);
            // camera.rotation.set(x, y, 0);
            // camera.updateProjectionMatrix()
        }
        //animation zoom in camera before page transition
        //move camera on y axis to ajust shoe position
        if(props.isBtnClicked && (camera.zoom < 30)){
            camera.zoom +=  .1 * Math.sqrt(time);
            camera.position.y += .25;
            camera.updateProjectionMatrix();
            //when camera is close enough we can swicth to home scene
            //props.setCanSwicthPage(true)
        }
        if(camera.zoom > 15)
        props.setCanSwicthPage(true)
        
    });

    return (
        <group position = {[0, 0, 500]} ref = {modelRef} rotation = {[0, 0, -.3]}>
            <primitive object = {model.scene}/>
        </group>
    )
}
type ShoePropsT = {
    isBtnClicked : boolean,
    setCanSwicthPage : (canSwitch : boolean) => void
}
export const Shoe = (props: ShoePropsT) => {
    const classes = useShoeStyle();

    return(
        <div className = {classes.root}>

            <Canvas
                camera = {{
                    near: 0.1,
                    far: 10000,
                    fov : 80,
                    position : [0, 0, 40],
                }}
            >
                <directionalLight color = 'rgba(255, 10,10, .3)' intensity = {.8} position = {[-5, 3, 2]}/>
                <directionalLight color = 'blue' intensity = {.8} position = {[5, 3, 2]}/>
                <Suspense fallback = {null}>
                    <Model {...props}/>
                </Suspense>
                <OrbitControls 
                    dispose = {null} 
                    maxDistance = {70}
                    enableRotate = {false}
                />
            </Canvas>
        </div>
    )
}

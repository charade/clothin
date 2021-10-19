import { Suspense, useRef,  useEffect, useLayoutEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useJustDoItSceneStyle } from "../assets/styles/index.styles";
import { useDispatch, useSelector } from 'react-redux';
import { ReducerRootStateType } from "../state/store";
import { bindActionCreators } from "redux";
import * as loadingActionCreators from "../state/actions-creators/loading-action-creator";

type TextVideoProps = {
    isDiscoverBtnClicked : boolean
}
const TextVideo = ({isDiscoverBtnClicked} : TextVideoProps) => {
    const textRef =  useRef<THREE.Group>(null);

    const [video] = useState<HTMLVideoElement>(() => Object.assign(document.createElement('video'),{src : './nike_adds.mp4', crossOrigin : 'Anonymous', loop: true, muted : true}));
    //play video on text when cliked discover button
    useEffect(() => {
        if(isDiscoverBtnClicked){
            setTimeout(() => video.play(), 500);
        }
    },[isDiscoverBtnClicked, video]);
    //intro camera effect when user clicked discover
    useFrame(({camera}) => {
        
        if(textRef.current && isDiscoverBtnClicked){
            const vecPosition = new THREE.Vector3(0, 2, -15);
            textRef.current.position.lerp(vecPosition, 0.008);
            if(textRef.current.rotation.z < Math.PI/2)
            textRef.current.rotation.z += 0.003 //THREE.MathUtils.lerp(Math.PI/2,0, 1);
        }
    })
    
    return(
        <group ref = {textRef} rotation = {[0, 0, 0]} position = {[0, 0, -150]}>
            <Text
                color = 'white' 
                letterSpacing = {-.06} fontSize = {4} 
            >
                Just Do It
                <meshBasicMaterial toneMapped={false} attach = 'material' lightMapIntensity = {2}>
                    <videoTexture attach = "map" args = {[video]} encoding = {THREE.sRGBEncoding}/>
                </meshBasicMaterial>
            </Text>
        </group> 
    )
}


export const JustDoItScene = () => {
    //create a video el width
    const classes = useJustDoItSceneStyle();
    const dispatch = useDispatch();
    const { setLoading } = bindActionCreators(loadingActionCreators, dispatch);
    const isDiscoverBtnClicked = useSelector((store : ReducerRootStateType) => store.discoverBtn);
    
    //when all elements are available make landing discover button available 
    useLayoutEffect(() => {
        setTimeout(() => setLoading(false),100);
    },[]);

    return(
        <div className = {classes.root}>
            <Canvas
                camera = {{
                    position : [0, 0, 20],
                    fov : 90,
                    far: 1000,
                    near : 0.1,
                    zoom : 3
                }}
            >
                <OrbitControls />
                <Suspense fallback = {null}>
                    <TextVideo isDiscoverBtnClicked = {isDiscoverBtnClicked}/>
                </Suspense>
            </Canvas>
        </div>
    )
}
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useJustDoItSceneStyle } from "../assets/styles/index.styles";
import { useDispatch, useSelector } from 'react-redux';
import { ReducerRootStateType } from "../state/store";
import { bindActionCreators } from "redux";
import * as loadingActionCreators from "../state/actions-creators/loading-action-creator";
import * as discoverBtnActionCreators from "../state/actions-creators/discoverButton-action-creators";

export const JustDoItScene = () => {
    //create a video el width
    const [video] = useState<HTMLVideoElement>(() => Object.assign(document.createElement('video'),{src : './nike_adds.mp4', crossOrigin : 'Anonymous', loop: true, muted : true}));
    const classes = useJustDoItSceneStyle();
    const dispatch = useDispatch();
    const { setLoading } = bindActionCreators(loadingActionCreators, dispatch);
    const { setDiscoverClicked } = bindActionCreators(discoverBtnActionCreators, dispatch);
    const isDiscoverBtnClicked = useSelector((store : ReducerRootStateType) => store.discoverBtn);

    //wait all elements are available
    useLayoutEffect(() => {
        setTimeout(() => setLoading(false),5000);
    },[]);

    //when discover btn on landing page is clicked start text video
    useEffect(() => {
        if(isDiscoverBtnClicked){
            setTimeout(() => video.play(), 50);
        }
    },[isDiscoverBtnClicked, video, setDiscoverClicked])

    return(
        <div className = {classes.root}>
            <Canvas
                camera = {{
                    position : [0, 0, 40],
                    fov : 90,
                    far: 1000,
                    near : 0.1,
                    zoom : 2
                }}
            >
                <OrbitControls />
                <Suspense fallback = {null}>
                    <Text position = {[0, 4, -1]} rotation = {[Math.PI/20, 0, 0]} color = 'white' letterSpacing = {-.06} fontSize = {4} >
                        Just Do It
                        <meshBasicMaterial toneMapped={false} attach = 'material' lightMapIntensity = {2}>
                            <videoTexture attach = "map" args = {[video]} encoding = {THREE.sRGBEncoding}/>
                        </meshBasicMaterial>
                    </Text>
                </Suspense>
            </Canvas>
        </div>
    )
}
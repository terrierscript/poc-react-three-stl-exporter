import React, { useRef } from "react"
import { render } from "react-dom"
import { Canvas, useFrame,useThree } from 'react-three-fiber'
import { Camera } from "three"
import { Model } from "./Model"



function Thing() {
  const ref = useRef()
  // @ts-ignore
  // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  const { camera } = useThree();

  // camera.fov = 45;
  // camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  // camera.far = 1000;

  // camera.up.set(0, 0, 1);
  camera.position.set(2,2,5);
  console.log(camera.position)
  return (
    <Model/>
  )
}

const App = () => {
  return <Canvas >
    <Thing></Thing>
  </Canvas>
}

render(<App />, document.querySelector("#root"))

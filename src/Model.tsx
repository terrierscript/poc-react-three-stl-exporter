import { Canvas, useFrame, useThree } from "react-three-fiber"
import React from "react"

export const Model = () => {
  return (
    <mesh>
      <Model1 />
      <Model2 />
    </mesh>
  )
}
const Model1 = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <cylinderBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
      {/* <cylinderGeometry attach="geometry" args={[0.5, 0.5, 0.5]} /> */}
      <meshBasicMaterial attach="material" />
    </mesh>
  )
}
const Model2 = () => {
  return (
    <mesh>
      <mesh position={[0.5, 0.2, 0]}>
        <boxGeometry attach="geometry" args={[1, 0.2, 0.5]} />
        <meshNormalMaterial attach="material" />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        {/* <boxBufferGeometry attach="geometry" args={[1, 0.2, 0.5]} /> */}
        <octahedronGeometry attach="geometry" args={[0.4]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </mesh>
  )
}

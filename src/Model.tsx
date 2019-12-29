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
    <mesh position={[0, 0.1, 0]}>
      <cylinderBufferGeometry attach="geometry" args={[5,5,5]} />
      <meshNormalMaterial attach="material"/>
    </mesh>
  )
}
const Model2 = () => {
  return (
    <mesh>
      <mesh position={[5, 0, 0]}>
        <boxBufferGeometry attach="geometry" args={[10, 2, 5]} />
        <meshNormalMaterial attach="material"/>
      </mesh>
      <mesh position={[0, 5, 0]}>
        <octahedronBufferGeometry attach="geometry" args={[4]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </mesh>
  )
}

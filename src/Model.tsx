import { Canvas, useFrame, useThree } from "react-three-fiber"
import React from "react"

export const Model = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <cylinderGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
      {/* <cylinderGeometry attach="geometry" args={[0.5, 0.5, 0.5]} /> */}
      <meshBasicMaterial attach="material" />
    </mesh>
  )
}
export const Model2 = () => {
  return (
    <mesh position={[0.5, 0.2, 0]}>
      {/* <boxBufferGeometry name="box2" attach="geometry" args={[1, 0.2, 0.5]} /> */}
      <boxGeometry name="box2" attach="geometry" args={[1, 0.2, 0.5]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

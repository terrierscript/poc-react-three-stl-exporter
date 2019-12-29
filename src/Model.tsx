import { Canvas, useFrame, useThree } from "react-three-fiber"
import React from "react"

export const Model = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <cylinderBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  )
}
export const Model2 = () => {
  return (
    <mesh position={[0.5, 0.5, 0]}>
      <boxBufferGeometry name="box2" attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  )
}

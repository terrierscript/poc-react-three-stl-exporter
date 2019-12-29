import { Canvas, useFrame, useThree } from "react-three-fiber"
import React from "react"

export const Model = () => {
  return (
    <mesh name="xx">
      <mesh position={[0, 0, 0]}>
        <boxBufferGeometry name="box" attach="geometry" args={[1, 1, 1]} />
        <meshNormalMaterial attach="material" />
      </mesh>
      <mesh position={[0.5, 0.5, 0]}>
        <boxBufferGeometry name="box2" attach="geometry" args={[1, 1, 1]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </mesh>
  )
}

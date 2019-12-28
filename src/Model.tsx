import { Canvas, useFrame,useThree } from 'react-three-fiber'
import React from 'react'


export const Model = () => {
  return     <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>

}
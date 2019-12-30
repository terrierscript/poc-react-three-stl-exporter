import React, { useRef } from "react"
import { useThree } from "react-three-fiber"
export const Background = () => {
  const ref = useRef()
  const { gl } = useThree()
  gl.setClearColor("#ff99cc")
  return <mesh ref={ref}></mesh>
}

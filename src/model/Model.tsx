import { Canvas, useFrame, useThree } from "react-three-fiber"
import React from "react"
import * as THREE from "three"
import { EllipseCurve, Path, Curve, Vector3 } from "three"

export const Model = () => {
  return (
    <mesh>
      <Base />
      <Sphere />
      <mesh>
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <Torus />
        </mesh>

        <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
          <Torus />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[0, -Math.PI / 3, 0]}>
          <Torus />
        </mesh>
      </mesh>
    </mesh>
  )
}

// https://stackoverflow.com/questions/42934609/extrude-3d-shape-from-three-line-object-in-three-js/42955930
class Ellipse3d extends Curve<Vector3> {
  xRadius: number
  yRadius: number
  constructor(x, y) {
    super()
    this.xRadius = x
    this.yRadius = y
  }
  getPoint(t) {
    var radians = 2 * Math.PI * t

    return new THREE.Vector3(
      this.xRadius * Math.cos(radians),
      this.yRadius * Math.sin(radians),
      0
    )
  }
}

const Torus = () => {
  const curve = new Ellipse3d(
    3,
    6 // ax, aY
  )
  return (
    <mesh position={[0, 3, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <tubeGeometry attach="geometry" args={[curve, 32, 0.5, 32]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

const Base = () => {
  return (
    <mesh position={[0, 1, 0]}>
      <cylinderGeometry attach="geometry" args={[8, 8, 3, 32]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}
function Sphere() {
  return (
    <mesh position={[0, 3, 0]}>
      <sphereGeometry attach="geometry" args={[1.5, 32, 32]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

import { Canvas, useFrame, useThree } from "react-three-fiber"
import React from "react"
import * as THREE from "three"
import { EllipseCurve, Path, Curve, Vector3, Vector2 } from "three"

export const Model = () => {
  return (
    <mesh>
      <Base />
      <BaseRing />
      <mesh position={[0, 0.5, 0]}>
        <Sphere />
        <mesh rotation={[0, 0, 0]}>
          <Ring />
        </mesh>

        <mesh rotation={[0, Math.PI / 3, 0]}>
          <Ring />
        </mesh>
        <mesh rotation={[0, -Math.PI / 3, 0]}>
          <Ring />
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

const Ring = () => {
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

const BaseRing = () => {
  const curve = new Ellipse3d(
    8,
    8 // ax, aY
  )
  return (
    <mesh position={[0, 3, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh>
        <torusGeometry attach="geometry" args={[8.5, 0.5, 6, 32]} />
        <meshNormalMaterial attach="material" />
      </mesh>
      <mesh>
        <torusGeometry attach="geometry" args={[8, 0.5, 6, 32]} />
        <meshNormalMaterial attach="material" />
      </mesh>
      <mesh>
        <torusGeometry attach="geometry" args={[8.25, 0.5, 6, 32]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </mesh>
  )
}

const Base = () => {
  return (
    <mesh>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry attach="geometry" args={[9, 9, 4, 32]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </mesh>
  )
}
function Sphere() {
  return (
    <mesh position={[0, 2, 0]}>
      <sphereGeometry attach="geometry" args={[1.5, 32, 32]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

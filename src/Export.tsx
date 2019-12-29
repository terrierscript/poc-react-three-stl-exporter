import { useEffect } from "react"
import { useThree } from "react-three-fiber"
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter"
import { PLYExporter } from "three/examples/jsm/exporters/PLYExporter"
import { STLExporter } from "three/examples/jsm/exporters/STLExporter"
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter"
import { ColladaExporter } from "three/examples/jsm/exporters/ColladaExporter"
import React from "react"

import { useExporterStore } from "./StoreContext"
import {
  Mesh,
  MeshBasicMaterial,
  Scene,
  Geometry,
  BufferGeometry,
  Object3D,
  BufferAttribute
} from "three"

const isMesh = (obj: Object3D): obj is Mesh => {
  //@ts-ignore
  return obj.isMesh
}
const isBufferGeometry = (obj: Object3D): obj is Mesh => {
  //@ts-ignore
  return obj.isBufferGeometry
}

const toRenderble = (scene: Scene): Scene => {
  const geometry = new Geometry()

  const copyScene = scene.clone()
  copyScene.traverse((obj) => {
    if (!isMesh(obj)) return
    obj.updateMatrix()
    console.log(obj.position)

    // obj.geometry.setAttribute("position", new BufferAttribute([obj.position.x,obj.position.y,obj.position.z],3) )
    if (!obj.geometry) {
      return
    }

    const convertedGeometry = new Geometry().fromBufferGeometry(obj.geometry)
    // // console.log( THREE.MeshBasicMaterial)
    // // console.log(obj, obj.material)
    // obj.geometry = convertedGeometry
    obj.material = new MeshBasicMaterial()
    geometry.mergeMesh(obj)
  })
  // return copyScene
  const outputScene = new Scene()
  const mesh = new Mesh(geometry, new MeshBasicMaterial())
  outputScene.add(mesh)
  return outputScene
}

const exportGltf = (scene, cb) => {
  return new GLTFExporter().parse(
    // new PLYExporter().parse(
    scene,
    (obj) => {
      cb(JSON.stringify(obj, null, 2))
    },
    { trs: true, forceIndices: true }
  )
}

export const Export = () => {
  const { scene } = useThree()

  const { setResult, setStl } = useExporterStore()
  useEffect(() => {
    const copyScene = toRenderble(scene)
    // const stl = new STLExporter().parse(copyScene)
    // setStl(stl)
    // const obj = new OBJExporter().parse(scene)
    // r.setResult(obj)

    // GLTF
    exportGltf(copyScene, setResult)
    // const c = new ColladaExporter().parse(copyScene)
    // console.log(c)
    // setResult(c)
  }, [scene])
  // return <></>
  return <mesh></mesh>
}

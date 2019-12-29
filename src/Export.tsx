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
  Object3D
} from "three"

const isMesh = (obj: Object3D): obj is Mesh => {
  //@ts-ignore
  return obj.isMesh
}

const toRenderble = (scene: Scene): Scene => {
  const geometry = new Geometry()

  const copyScene = scene.clone()
  copyScene.traverse((obj) => {
    if (!isMesh(obj)) return
    obj.updateMatrix()
    const geom = new Geometry().fromBufferGeometry(obj.geometry)

    // console.log( THREE.MeshBasicMaterial)
    // console.log(obj, obj.material)
    // obj.material = new MeshBasicMaterial()
    geometry.merge(geom, obj.matrix)
  })
  const outputScene = new Scene()
  const mesh = new Mesh(geometry, new MeshBasicMaterial())
  outputScene.add(mesh)
  return outputScene
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
    new GLTFExporter().parse(
      // new PLYExporter().parse(
      copyScene,
      (obj) => {
        console.log(obj)
        setResult(JSON.stringify(obj, null, 2))
      },
      { trs: true, forceIndices: true }
    )
    // const c = new ColladaExporter().parse(copyScene)
    // console.log(c)
    // setResult(c)
  }, [scene])
  // return <></>
  return <mesh></mesh>
}

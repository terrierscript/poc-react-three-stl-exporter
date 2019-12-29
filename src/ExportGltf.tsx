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
  BufferAttribute,
  Float32BufferAttribute
} from "three"

const isMesh = (obj: Object3D): obj is Mesh => {
  //@ts-ignore
  return obj.isMesh
}

const isBufferGeometry = (obj: any): obj is BufferGeometry => {
  //@ts-ignore
  return obj.isBufferGeometry
}

const toRenderble = (scene: Scene): Scene => {
  const geometry = new Geometry()

  const copyScene = scene.clone()
  copyScene.traverse((obj) => {
    if (!isMesh(obj)) return

    if (!obj.geometry) {
      return
    }

    obj.material = new MeshBasicMaterial()
    // @ts-ignore
    const geom = obj.geometry.clone()
    if (isBufferGeometry(geom)) {
      geom.addAttribute("position", new Float32BufferAttribute([], 3))

      const convertedGeometry = new Geometry().fromBufferGeometry(geom) //.obj.geometry)
      obj.geometry = convertedGeometry
    }
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

export const ExportGltf = () => {
  const { scene } = useThree()

  const { gltfResult, setGltf } = useExporterStore()
  useEffect(() => {
    const copyScene = toRenderble(scene)
    exportGltf(copyScene, setGltf)
    // const c = new ColladaExporter().parse(copyScene)
    // console.log(c)
    // setResult(c)
  }, [scene])
  // return <></>
  return <mesh></mesh>
}

import { useEffect } from "react"
import { useThree } from "react-three-fiber"
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter"
import { PLYExporter } from "three/examples/jsm/exporters/PLYExporter"
import { STLExporter } from "three/examples/jsm/exporters/STLExporter"
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter"
import { ColladaExporter } from "three/examples/jsm/exporters/ColladaExporter"
import React from "react"

import { useExporterStore } from "../StoreContext"
import { BufferAttribute } from "three"
import { toRenderble } from "./toRenderble"

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
  }, [scene])
  return <mesh></mesh>
}

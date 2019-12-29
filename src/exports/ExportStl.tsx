import { useEffect } from "react"
import { useThree } from "react-three-fiber"
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter"
import { PLYExporter } from "three/examples/jsm/exporters/PLYExporter"
import { STLExporter } from "three/examples/jsm/exporters/STLExporter"
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter"
import { ColladaExporter } from "three/examples/jsm/exporters/ColladaExporter"
import React from "react"

import { useExporterStore } from "../StoreContext"
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
import { toRenderble } from "./toRenderble"

export const ExportStl = () => {
  const { scene } = useThree()

  const { setStl } = useExporterStore()
  useEffect(() => {
    const copyScene = toRenderble(scene)
    const stl = new STLExporter().parse(copyScene)
    setStl(stl)
  }, [scene])
  // return <></>
  return <mesh></mesh>
}

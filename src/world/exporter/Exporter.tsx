import React, { useState } from "react"
import { useEffect } from "react"
import { useThree } from "react-three-fiber"
import { useExporterStore, CONVERT_TYPE } from "../../StoreContext"
import { toRenderble } from "./toRenderble"
import { STLExporter } from "three/examples/jsm/exporters/STLExporter"
import { Scene } from "three"
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter"

const convert = (scene: Scene, convertType: CONVERT_TYPE): Promise<string> => {
  const copyScene = toRenderble(scene)
  return new Promise((res, rej) => {
    switch (convertType) {
      case "STL":
        const stl = new STLExporter().parse(copyScene)
        res(stl)
        return
      case "glTF":
        new GLTFExporter().parse(
          copyScene,
          (obj) => {
            res(JSON.stringify(obj, null, 2))
          },
          { trs: true }
        )
        return
    }
  })
}

const useExporter = () => {
  const { scene } = useThree()
  const { convertType, result, setResult } = useExporterStore()
  useEffect(() => {
    convert(scene, convertType).then((newResult) => {
      // console.log(newResult)
      setResult(newResult)
    })
  }, [scene, convertType])
  return result
}

export const Exporter = () => {
  useExporter()
  return <mesh></mesh>
}

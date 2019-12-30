import React from "react"
import { useEffect } from "react"
import { useThree } from "react-three-fiber"
import { useExporterStore } from "../../StoreContext"
import { convert } from "./convert"

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

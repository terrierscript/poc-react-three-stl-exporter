// // @ts-nocheck
// import React from "react"
// import { useEffect } from "react"
// import { useThree } from "react-three-fiber"
// import { useExporterStore } from "../StoreContext"
// import { toRenderble } from "./toRenderble"
// import { STLExporter } from "three/examples/jsm/exporters/STLExporter"

// export const ExportStl = () => {
//   const { scene } = useThree()
//   const { setStl } = useExporterStore()
//   useEffect(() => {
//     const copyScene = toRenderble(scene)
//     const stl = new STLExporter().parse(copyScene)
//     setStl(stl)
//   }, [scene])
//   return <mesh></mesh>
// }

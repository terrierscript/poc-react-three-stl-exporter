// import { useEffect } from "react"
// import { useThree } from "react-three-fiber"
// import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter"
// import React from "react"
// import { useExporterStore } from "../StoreContext"
// import { toRenderble } from "./toRenderble"

// const exportGltf = (scene, cb) => {
//   return new GLTFExporter().parse(
//     scene,
//     (obj) => {
//       cb(JSON.stringify(obj, null, 2))
//     },
//     { trs: true }
//   )
// }

// export const ExportGltf = () => {
//   const { scene } = useThree()

//   const { setGltf } = useExporterStore()
//   useEffect(() => {
//     const copyScene = toRenderble(scene)
//     exportGltf(copyScene, setGltf)
//   }, [scene])
//   return <mesh></mesh>
// }

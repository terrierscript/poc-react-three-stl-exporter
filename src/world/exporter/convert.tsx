import { CONVERT_TYPE } from "../../StoreContext"
import { toRenderble } from "./toRenderble"
import { Scene } from "three"

import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter"
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter"
import { STLExporter } from "three/examples/jsm/exporters/STLExporter"
// import { ColladaExporter } from "three/examples/jsm/exporters/ColladaExporter"
// import { DRACOExporter } from "three/examples/jsm/exporters/DRACOExporter"
// import { PLYExporter } from "three/examples/jsm/exporters/PLYExporter"
// import { MMDExporter } from "three/examples/jsm/exporters/MMDExporter"
// // @ts-ignore
// import { TypedGeometryExporter } from "three/examples/jsm/exporters/TypedGeometryExporter"

export const convert = (
  scene: Scene,
  convertType: CONVERT_TYPE
): Promise<string> => {
  const copyScene = toRenderble(scene)
  return new Promise((res, rej) => {
    switch (convertType) {
      case "STL":
        const stl = new STLExporter().parse(copyScene)
        res(stl)
        return
      case "OBJ":
        const obj = new OBJExporter().parse(copyScene)
        res(obj)
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
      // case "Collada":
      //   new ColladaExporter().parse(
      //     scene,
      //     (result) => {
      //       res(result)
      //     },
      //     {}
      //   )
      //   return
      // case "DRACO":
      //   new DRACOExporter().parse(scene,{})
      //   return
      // case "MMD":
      //   return
      // case "PLY":
      //   return
      // case "TypedGeometry":
      //   return
    }
  })
}

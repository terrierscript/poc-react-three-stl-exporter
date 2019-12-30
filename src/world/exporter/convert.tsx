import { CONVERT_TYPE } from "../../StoreContext"
import { toRenderble } from "./toRenderble"
import { STLExporter } from "three/examples/jsm/exporters/STLExporter"
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter"
import { Scene } from "three"
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter"

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
    }
  })
}

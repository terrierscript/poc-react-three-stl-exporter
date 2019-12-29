import {
  Mesh,
  MeshBasicMaterial,
  Scene,
  Geometry,
  Float32BufferAttribute,
  BufferGeometry,
  Object3D,
  BufferAttribute
} from "three"
import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils"

export const isMesh = (obj: Object3D): obj is Mesh => {
  //@ts-ignore
  return obj.isMesh
}
export const isBufferGeometry = (obj: any): obj is BufferGeometry => {
  return obj.isBufferGeometry
}
export const isGeometry = (obj: any): obj is Geometry => {
  return obj.isGeometry
}

const toBufferGeometry = (geom: Geometry | BufferGeometry): Geometry | null => {
  console.log(geom)
  if (isGeometry(geom)) {
    return geom
  }
  // const buf = new BufferGeometry().fromGeometry(geom.clone())
  // const c = geom.clone()

  // console.log(geom)
  // console.log(c)
  // c.setAttribute(
  //   "position",
  //   //   new BufferAttribute(new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0]), 3)
  //   [],
  //   3
  // )
  // console.log("===")
  // console.log(c.)
  // c.computeVertexNormals()
  // c.merge
  // const b = new Geometry().fromBufferGeometry(c)
  return null
}

export const toRenderble = (scene: Scene): Scene => {
  let tmpGeometry = new Geometry()
  // let baseMesh = new Mesh()
  const copyScene = scene.clone()

  copyScene.traverse((obj) => {
    if (!isMesh(obj)) return
    const mesh = obj.clone()
    if (!mesh.geometry) {
      return
    }

    mesh.material = new MeshBasicMaterial()
    // @ts-ignore
    const appendGeom = toBufferGeometry(mesh.geometry)
    if (!appendGeom) {
      return null
      // mesh.geometry = appendGeom
    }
    tmpGeometry.mergeMesh(mesh)
  })

  const outputScene = new Scene()
  const mesh = new Mesh(tmpGeometry, new MeshBasicMaterial())
  outputScene.add(mesh)
  return outputScene
}

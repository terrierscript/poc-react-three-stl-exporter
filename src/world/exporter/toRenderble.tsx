import {
  Mesh,
  MeshBasicMaterial,
  Scene,
  Geometry,
  BufferGeometry,
  Object3D
} from "three"

const isMesh = (obj: Object3D): obj is Mesh => {
  //@ts-ignore
  return obj.isMesh
}
// const isBufferGeometry = (obj: any): obj is BufferGeometry => {
//   return obj.isBufferGeometry
// }
const isGeometry = (obj: any): obj is Geometry => {
  return obj.isGeometry
}

const toRenderableGeometry = (
  geom: Geometry | BufferGeometry
): Geometry | null => {
  if (isGeometry(geom)) {
    return geom
  }
  // Try to convert BufferGeometry (not stable...)
  if (geom.index === null && !geom.getAttribute("position")) {
    return null
  }
  try {
    const buf = new Geometry().fromBufferGeometry(geom)
    return buf
  } catch (e) {
    console.warn(`skip: ${geom}`)
    return null
  }
}

export const toRenderble = (scene: Scene): Scene => {
  let tmpGeometry = new Geometry()

  scene.clone().traverse((mesh) => {
    if (!isMesh(mesh)) return
    if (!mesh.geometry) {
      return
    }
    const appendGeom = toRenderableGeometry(mesh.geometry)
    if (!appendGeom) {
      return null
    }
    mesh.geometry = appendGeom
    tmpGeometry.mergeMesh(mesh)
  })

  const outputScene = new Scene()
  const buf = new BufferGeometry().fromGeometry(tmpGeometry)
  const mesh = new Mesh(buf, new MeshBasicMaterial())
  outputScene.add(mesh)
  return outputScene
}

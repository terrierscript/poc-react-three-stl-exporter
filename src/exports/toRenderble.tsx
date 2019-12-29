import {
  Mesh,
  MeshBasicMaterial,
  Scene,
  Geometry,
  Float32BufferAttribute,
  BufferGeometry,
  Object3D
} from "three"

export const isMesh = (obj: Object3D): obj is Mesh => {
  //@ts-ignore
  return obj.isMesh
}
export const isBufferGeometry = (obj: any): obj is BufferGeometry => {
  //@ts-ignore
  return obj.isBufferGeometry
}

export const toRenderble = (scene: Scene): Scene => {
  const geometry = new Geometry()
  const copyScene = scene.clone()

  copyScene.traverse((obj) => {
    if (!isMesh(obj)) return
    const mesh = obj.clone()
    if (!mesh.geometry) {
      return
    }
    mesh.material = new MeshBasicMaterial()
    // @ts-ignore
    const geom = obj.geometry.clone()
    if (isBufferGeometry(geom)) {
      // geom.setAttribute("position", new Float32BufferAttribute([], 3))
      const convertedGeometry = new Geometry().fromBufferGeometry(geom) //.obj.geometry)
      mesh.geometry = convertedGeometry
    }
    mesh.geometry = geom
    geometry.mergeMesh(mesh)
  })

  const outputScene = new Scene()
  const mesh = new Mesh(geometry, new MeshBasicMaterial())
  outputScene.add(mesh)
  return outputScene
}

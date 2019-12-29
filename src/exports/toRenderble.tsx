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
    obj.updateMatrix()
    mesh.material = new MeshBasicMaterial()
    // @ts-ignore
    const geom = obj.geometry.clone()
    if (isBufferGeometry(geom)) {
      console.log(obj.geometry)
      // geom.setAttribute("position", new Float32BufferAttribute([0, 0, 0], 3))
      const convertedGeometry = new Geometry().fromBufferGeometry(geom) //.obj.geometry)
      mesh.geometry = convertedGeometry
    } else {
      mesh.geometry = geom
    }
    geometry.mergeMesh(mesh)
  })

  const outputScene = new Scene()
  const buf = new BufferGeometry().fromGeometry(geometry)
  const mesh = new Mesh(buf, new MeshBasicMaterial())
  outputScene.add(mesh)
  return outputScene
}

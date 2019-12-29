import React, { useRef } from "react"
import { render } from "react-dom"
import {
  Canvas,
  useThree,
  useFrame,
  useRender,
  extend
} from "react-three-fiber"
import { Model } from "./Model"
import {
  ExporterStoreProvider,
  ExportPassProvider,
  useExporterStore
} from "./StoreContext"
import styled from "styled-components"
import { ExportStl } from "./exports/ExportStl"
import { ExportStlResult, ExportGltfResult } from "./ExportResult"
import { ExportGltf } from "./exports/ExportGltf"
import { OrthographicCamera } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const Background = () => {
  const ref = useRef()
  const { gl } = useThree()
  gl.setClearColor("#ff99cc")
  // useFrame(() => {
  //   console.log("f")
  //   // @ts-ignore
  //   if (ref.current === undefined || !ref?.current?.rotation) {
  //     return
  //   }
  //   // @ts-ignore
  //   ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01
  // })
  return <mesh ref={ref}></mesh>
}

extend({ OrbitControls })

const Controls = () => {
  const controls = useRef()
  const { camera, gl } = useThree()
  useFrame(() => controls.current.update())
  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.1}
      rotateSpeed={0.5}
    />
  )
}

const Field = () => {
  const value = useExporterStore()
  // const a = useStore()
  return (
    <Grid>
      <ExportStlResult></ExportStlResult>
      <ExportGltfResult></ExportGltfResult>
      <Canvas camera={{ position: [0, 0, 30] }}>
        <Background />
        <ExportPassProvider value={value}>
          <Model />
          <ExportStl />
          <ExportGltf />
        </ExportPassProvider>
        <Controls />
      </Canvas>
    </Grid>
  )
}

const App = () => {
  return (
    <div>
      <ExporterStoreProvider>
        <Field />
      </ExporterStoreProvider>
    </div>
  )
}

render(<App />, document.querySelector("#root"))

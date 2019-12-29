import React, { useRef } from "react"
import { render } from "react-dom"
import { Canvas, useThree } from "react-three-fiber"
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const Camera = ({ children }) => {
  const ref = useRef()
  const { gl } = useThree()
  gl.setClearColor("#ff99cc")
  // useFrame(() => {
  //   // @ts-ignore
  //   if (ref.current === undefined || !ref?.current?.rotation) {
  //     return
  //   }
  //   // @ts-ignore
  //   ref.current.rotation.x = ref.current.rotation.y += 0.01
  // })
  return <mesh ref={ref}>{children}</mesh>
}

const Field = () => {
  const value = useExporterStore()

  // const a = useStore()
  return (
    <Grid>
      <ExportStlResult></ExportStlResult>
      <ExportGltfResult></ExportGltfResult>
      <Canvas>
        <ExportPassProvider value={value}>
          <Camera>
            <Model />
            <ExportStl />
            <ExportGltf />
          </Camera>
        </ExportPassProvider>
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

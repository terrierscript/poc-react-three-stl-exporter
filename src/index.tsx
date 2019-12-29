import { useRef, createContext } from "react"
import { render } from "react-dom"
import { Canvas, useFrame, useThree } from "react-three-fiber"
import { Model, Model2 } from "./Model"
import React from "react"
import {
  ExporterStoreProvider,
  ExportPassProvider,
  useExporterStore
} from "./StoreContext"
import styled from "styled-components"
import { Export } from "./Export"
import { ExportResult } from "./ExportResult"

const Thing = () => {
  return (
    <mesh>
      <Model />
      <Model2 />
    </mesh>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
      <ExportResult></ExportResult>
      <Canvas>
        <ExportPassProvider value={value}>
          <Camera>
            <Thing />
            <Export />
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

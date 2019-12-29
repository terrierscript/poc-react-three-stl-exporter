import React from "react"
import { render } from "react-dom"
import { Canvas, useRender } from "react-three-fiber"
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
import { Controls } from "./Controls"
import { Background } from "./Background"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const GridCanvasArea = styled.div`
  grid-column: 2;
`

const Field = () => {
  const value = useExporterStore()
  // const a = useStore()
  return (
    <Grid>
      <ExportStlResult></ExportStlResult>
      <ExportGltfResult></ExportGltfResult>
      <GridCanvasArea>
        <Canvas camera={{ position: [0, 0, 30] }}>
          <Background />
          <ExportPassProvider value={value}>
            <Model />
            <ExportStl />
            <ExportGltf />
          </ExportPassProvider>
          <Controls />
        </Canvas>
      </GridCanvasArea>
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

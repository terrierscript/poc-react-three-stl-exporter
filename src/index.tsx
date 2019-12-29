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

const template = `
  "prev r1" 
  "prev r2"
`
const Grid = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-areas: ${template};
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`

const GridCanvasArea = styled.div<{ area: string }>`
  grid-area: ${({ area }) => area};
  max-height: 90vh;
`

const Field = () => {
  const value = useExporterStore()
  // const a = useStore()
  return (
    <Grid>
      <GridCanvasArea area="prev">
        <h3>Preview</h3>
        <Canvas camera={{ position: [0, 0, 30] }}>
          <ExportPassProvider value={value}>
            <Model />
            <ExportStl />
            <ExportGltf />
          </ExportPassProvider>
          <Background />
          <Controls />
        </Canvas>
      </GridCanvasArea>
      <GridCanvasArea area="r1">
        <ExportStlResult></ExportStlResult>
      </GridCanvasArea>
      <GridCanvasArea area="r2">
        <ExportGltfResult></ExportGltfResult>
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

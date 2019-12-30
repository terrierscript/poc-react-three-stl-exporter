import React from "react"
import { ExporterStoreProvider } from "./StoreContext"
import styled from "styled-components"
import { ExportStlResult, ExportGltfResult } from "./ExportResult"
import { World } from "./World"

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
const GridCanvasArea = styled.div<{
  area: string
}>`
  grid-area: ${({ area }) => area};
  max-height: 90vh;
`
const Layout = () => {
  // const a = useStore()
  return (
    <Grid>
      <GridCanvasArea area="prev">
        <h3>Preview</h3>
        <World />
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
export const App = () => {
  return (
    <div>
      <ExporterStoreProvider>
        <Layout />
      </ExporterStoreProvider>
    </div>
  )
}

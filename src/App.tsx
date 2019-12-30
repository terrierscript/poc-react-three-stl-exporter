import React from "react"
import { ExporterStoreProvider } from "./StoreContext"
import styled from "styled-components"
import { World } from "./world/World"
import { ExportResult } from "./result/ExportResult"
import { Box, ThemeProvider, CSSReset } from "@chakra-ui/core"

const Grid = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 1fr 1fr;
`

const GridCanvasArea = styled(Box)<{
  area: string
}>`
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
        <ExportResult />
      </GridCanvasArea>
    </Grid>
  )
}
export const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <ExporterStoreProvider>
        <Layout />
      </ExporterStoreProvider>
    </ThemeProvider>
  )
}

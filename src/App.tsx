import React from "react"
import { ExporterStoreProvider } from "./StoreContext"
import styled from "styled-components"
import { World } from "./world/World"
import { ExportResult } from "./result/ExportResult"
import { Box, ThemeProvider, CSSReset, Grid, Heading } from "@chakra-ui/core"

const Layout = () => {
  // const a = useStore()
  return (
    <Box px={10}>
      <Grid templateColumns="repeat(2,minmax(min-content,40vw))" gap={6}>
        <Box height="80vh">
          <Heading>Preview</Heading>
          <World />
        </Box>
        <Box maxHeight="90vh">
          <ExportResult />
        </Box>
      </Grid>
    </Box>
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

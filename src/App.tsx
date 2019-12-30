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
        <Box maxHeight="90vh">
          <Heading>Preview</Heading>
          <World />
        </Box>
        <Box maxHeight="90vh">
          <ExportResult />
        </Box>
        <Box gridColumn="span 2" background="black" height="10vh"></Box>
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

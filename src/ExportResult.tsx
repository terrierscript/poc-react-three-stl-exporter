import React from "react"
import { useExporterStore } from "./StoreContext"
import styled from "styled-components"
const ScrollContainer = styled.div`
  overflow-y: scroll;
  user-select: all;
  height: 100vh;
`
export const ExportStlResult = () => {
  const { stlResult } = useExporterStore()
  return (
    <ScrollContainer>
      <pre>{stlResult}</pre>
    </ScrollContainer>
  )
}
export const ExportGltfResult = () => {
  const { gltfResult } = useExporterStore()
  return (
    <ScrollContainer>
      <pre>{gltfResult}</pre>
    </ScrollContainer>
  )
}

import React from "react"
import { useExporterStore } from "./StoreContext"
import styled from "styled-components"

const ScrollContainer = styled.div`
  overflow-y: scroll;
  user-select: all;
  height: 40vh;
`

export const ExportStlResult = () => {
  const { stlResult } = useExporterStore()
  return (
    <div>
      <h3>STL Output</h3>
      <ScrollContainer>
        <pre>{stlResult}</pre>
      </ScrollContainer>
    </div>
  )
}
export const ExportGltfResult = () => {
  const { gltfResult } = useExporterStore()
  return (
    <div>
      <h3>glTF Output</h3>

      <ScrollContainer>
        <pre>{gltfResult}</pre>
      </ScrollContainer>
    </div>
  )
}

import React from "react"
import { useExporterStore } from "./StoreContext"
import styled from "styled-components"
const ScrollContainer = styled.div`
  overflow-y: scroll;

  height: 100vh;
`
export const ExportResult = () => {
  const { stlResult, result } = useExporterStore()
  return (
    <ScrollContainer>
      <pre>{result}</pre>
    </ScrollContainer>
  )
}

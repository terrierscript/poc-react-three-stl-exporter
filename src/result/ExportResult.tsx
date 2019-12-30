import React, { FC } from "react"
import { useExporterStore } from "../StoreContext"
import styled from "styled-components"
import { Box, Heading, Code } from "@chakra-ui/core"
import { SelectConvertType } from "./SelectConvertType"

const ScrollContainer = styled(Box)`
  overflow-y: scroll;
  overflow-x: scroll;
  word-wrap: break-word;
  max-height: 300px;
  max-width: 100%;
`

export const ExportResult = () => {
  const { result, convertType } = useExporterStore()
  return (
    <Box>
      <Heading as="h4">{convertType} Output</Heading>
      <SelectConvertType />
      <ScrollContainer>
        <Box whiteSpace="nowrap" maxWidth="40vw">
          <Code whiteSpace="nowrap">
            <Box whiteSpace="pre">{result}</Box>
          </Code>
        </Box>
      </ScrollContainer>
    </Box>
  )
}

// export const ExportStlResult = () => {
//   const { stlResult } = useExporterStore()
//   return (
//     <div>
//       <h3>STL Output</h3>
//       <ScrollContainer>
//         <pre>{stlResult}</pre>
//       </ScrollContainer>
//     </div>
//   )
// }

// export const ExportGltfResult = () => {
//   const { gltfResult } = useExporterStore()
//   return (
//     <div>
//       <h3>glTF Output</h3>

//       <ScrollContainer>
//         <pre>{gltfResult}</pre>
//       </ScrollContainer>
//     </div>
//   )
// }

import React, { FC } from "react"
import { useExporterStore, convertTypes } from "../StoreContext"
import styled from "styled-components"
import { Radio, RadioGroup, Box, Heading, Code } from "@chakra-ui/core"

const ScrollContainer = styled(Box)`
  overflow-y: scroll;
  overflow-x: scroll;
  user-select: all;
  word-wrap: break-word;
  max-height: 90vh;
  max-width: 100%;
`

const SelectConvertType = () => {
  const { convertType, setConvertType } = useExporterStore()
  return (
    <RadioGroup
      // @ts-ignore
      onChange={(_, value) => setConvertType(value)}
      value={convertType}
      isInline
    >
      {convertTypes.map((key) => (
        <Radio key={key} value={key}>
          {key}
        </Radio>
      ))}
    </RadioGroup>
  )
}

export const ExportResult = () => {
  const { result, convertType } = useExporterStore()
  return (
    <Box>
      <SelectConvertType />
      <Heading>{convertType} Output</Heading>
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

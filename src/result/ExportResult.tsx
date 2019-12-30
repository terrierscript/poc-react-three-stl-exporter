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

const Result = () => {
  const { result } = useExporterStore()
  if (!result) {
    return <Box>now exporting...</Box>
  }
  return (
    <Box whiteSpace="nowrap" maxWidth="40vw">
      <Code whiteSpace="nowrap">
        <Box whiteSpace="pre">{result}</Box>
      </Code>
    </Box>
  )
}

export const ExportResult = () => {
  const { convertType } = useExporterStore()
  return (
    <Box>
      <Heading as="h4">{convertType} Output</Heading>
      <SelectConvertType />
      <ScrollContainer>
        <Result />
      </ScrollContainer>
    </Box>
  )
}

import React from "react"
import { useExporterStore, convertTypes } from "../StoreContext"
import { Radio, RadioGroup, Box } from "@chakra-ui/core"
import { Download } from "./Download"
export const SelectConvertType = () => {
  const { convertType, setConvertType } = useExporterStore()
  return (
    <Box>
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
      <Download />
    </Box>
  )
}

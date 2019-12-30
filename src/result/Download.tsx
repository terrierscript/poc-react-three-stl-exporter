import { useExporterStore } from "../StoreContext"
import React from "react"
import { Button } from "@chakra-ui/core"

export const Download = () => {
  const { result, convertType } = useExporterStore()

  return <Button onClick={() => {}}>Download {convertType}</Button>
}

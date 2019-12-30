import { useExporterStore, CONVERT_TYPE } from "../StoreContext"
import React, { useState, useEffect } from "react"
import { Button } from "@chakra-ui/core"

const ext = (convertType: CONVERT_TYPE) => {
  switch (convertType) {
    case "STL":
      return "stl"
    case "glTF":
      return "gltf"
  }
}
export const Download = () => {
  const { result, convertType } = useExporterStore()
  const [data, setData] = useState<string | null>()
  useEffect(() => {
    const blobUrl = URL.createObjectURL(
      new Blob([result], { type: "text.plain" })
    )
    console.log(blobUrl)
    setData(blobUrl)
  }, [result])
  const filename = `out.${ext(convertType)}`
  if (!data) {
    return null
  }
  return (
    <Button
      as="a"
      variantColor="green"
      href={data}
      download={filename}
      onClick={(e) => e.stopPropagation()}
    >
      Download {convertType}
    </Button>
  )
}

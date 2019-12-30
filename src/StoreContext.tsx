import React, { useContext, useState } from "react"

enum ConvertTypeEnum {
  "STL",
  "OBJ",
  "glTF"
  // "Collada",
  // "DRACO",
  // "MMD",
  // "PLY",
  // "TypedGeometry"
}
export type CONVERT_TYPE = keyof typeof ConvertTypeEnum
export const convertTypes = Object.keys(ConvertTypeEnum).filter((k) =>
  isNaN(Number(k))
)

const useExporterStoreInner = () => {
  const [result, setResult] = useState("")
  const [convertType, _setConvertType] = useState<CONVERT_TYPE>("STL")
  const setConvertType = (v: CONVERT_TYPE) => {
    _setConvertType(v)
    setResult("") // reset
  }
  return {
    result,
    setResult,
    convertType,
    setConvertType
  }
}

type StoreType = ReturnType<typeof useExporterStoreInner>

// @ts-ignore
const StoreContext = React.createContext<StoreType>({})

const { Provider } = StoreContext

export const ExporterStoreProvider = ({ children }) => {
  const storeInner = useExporterStoreInner()
  return <Provider value={storeInner}>{children}</Provider>
}

export const useExporterStore = (): StoreType => {
  return useContext(StoreContext)
}

export const ExportPassProvider = ({ value, children }) => {
  return <Provider value={value}>{children}</Provider>
}

import React, { useContext, useState } from "react"

const useExporterStoreInner = () => {
  const [result, setResult] = useState("")
  const [stlResult, setStl] = useState("")
  return {
    stlResult,
    setStl,
    result,
    setResult
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

export const useExporterStore = () => {
  return useContext(StoreContext)
}

export const ExportPassProvider = ({ value, children }) => {
  return <Provider value={value}>{children}</Provider>
}

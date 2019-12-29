import React, { useContext, useState } from "react"

const useExporterStoreInner = () => {
  const [result, setResult] = useState("")
  return {
    result,
    setResult
  }
}

type StoreType = ReturnType<typeof useExporterStoreInner>

const StoreContext = React.createContext<StoreType>({
  result: "",
  setResult: () => {
    throw new Error("")
  }
})

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

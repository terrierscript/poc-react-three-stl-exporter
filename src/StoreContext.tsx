import React, { useContext, useState } from "react"

const StoreContext = React.createContext({})
const { Provider } = StoreContext

const useStoreInner = () => {
  const [result, setResult] = useState("")
  return {
    result,
    setResult
  }
}
export const StoreProvider = ({ children }) => {
  const storeInner = useStoreInner()
  return <Provider value={storeInner}>{children}</Provider>
}

export const useStore = () => {
  return useContext(StoreContext)
}

export const PassProvider = ({ children }) => {
  const value = useContext(StoreContext)
  console.log("va", value)
  return <Provider value={value}>{children}</Provider>
}

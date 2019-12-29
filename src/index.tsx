import { useRef, useEffect, createContext } from "react"
import { render } from "react-dom"
import { Canvas, useFrame, useThree } from "react-three-fiber"
import { Model } from "./Model"
import { STLExporter } from "three/examples/jsm/exporters/STLExporter"
import React from "react"
import { StoreProvider, PassProvider, useStore } from "./StoreContext"

const Thing = () => {
  return <Model />
}

const Export = () => {
  const { scene } = useThree()
  const { setResult } = useStore()
  useEffect(() => {
    const stl = new STLExporter().parse(scene)
    console.log(stl)
    //   setResult(stl)
  }, [scene])
  return <mesh></mesh>
}

const ExportResult = () => {
  const { result } = useStore()
  console.log(result)
  return <pre>{result}</pre>
}
const Field = () => {
  const ref = useRef()
  // useFrame(() => {
  //   if (!ref || !ref.current) return
  //   // if (!ref.current.rotation) return
  //   ref.current.rotation.x = ref.current.rotation.y += 0.01
  // })

  // const a = useStore()
  return (
    <div>
      <Canvas>
        <PassProvider>
          <mesh ref={ref}>
            <Thing />
            <Export />
          </mesh>
        </PassProvider>
      </Canvas>
      <ExportResult></ExportResult>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <StoreProvider>
        <Field />
        {/* <Canvas>
          <Thing />
        </Canvas> */}
      </StoreProvider>
    </div>
  )
}

render(<App />, document.querySelector("#root"))

import { useRef, useEffect, createContext } from "react"
import { render } from "react-dom"
import { Canvas, useFrame, useThree } from "react-three-fiber"
import { Model } from "./Model"
import { STLExporter } from "three/examples/jsm/exporters/STLExporter"
// import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter"
import React from "react"
import {
  ExporterStoreProvider,
  ExportPassProvider,
  useExporterStore
} from "./StoreContext"
import styled from "styled-components"

const Thing = () => {
  return <Model />
}

const Export = () => {
  const { scene } = useThree()
  console.log(scene)
  const r = useExporterStore()
  useEffect(() => {
    const stl = new STLExporter().parse(scene)
    r.setResult(stl)
  }, [scene])
  return <mesh></mesh>
}

const ScrollContainer = styled.div`
  overflow-y: scroll;
  height: 100vh;
`
const ExportResult = () => {
  const { result } = useExporterStore()
  return (
    <ScrollContainer>
      <pre>result:{result}</pre>
    </ScrollContainer>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Field = () => {
  const ref = useRef()
  const value = useExporterStore()
  // useFrame(() => {
  //   if (!ref || !ref.current) return
  //   // if (!ref.current.rotation) return
  //   ref.current.rotation.x = ref.current.rotation.y += 0.01
  // })

  // const a = useStore()
  return (
    <Grid>
      <ExportResult></ExportResult>
      <Canvas>
        <ExportPassProvider value={value}>
          <mesh ref={ref} name="zz">
            <Thing />
            <Export />
          </mesh>
        </ExportPassProvider>
      </Canvas>
    </Grid>
  )
}

const App = () => {
  return (
    <div>
      <ExporterStoreProvider>
        <Field />
      </ExporterStoreProvider>
    </div>
  )
}

render(<App />, document.querySelector("#root"))

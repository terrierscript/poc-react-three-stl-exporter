import { useRef, useEffect, createContext } from "react"
import { render } from "react-dom"
import { Canvas, useFrame, useThree } from "react-three-fiber"
import { Model, Model2 } from "./Model"
import { STLExporter } from "three/examples/jsm/exporters/STLExporter"
// import { STLExporter } from "./stlExporterFork"
// import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter"
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter"
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
    // const stl = new STLExporter().parse(scene)
    // r.setResult(stl)

    const stl = new GLTFExporter().parse(
      scene,
      (obj) => {
        // console.log(obj)
        r.setResult(JSON.stringify(obj, null, 2))
      },
      {}
    )
  }, [scene])
  return <></>
  // return <mesh></mesh>
}

const ScrollContainer = styled.div`
  overflow-y: scroll;
  height: 100vh;
`
const ExportResult = () => {
  const { result } = useExporterStore()
  return (
    <ScrollContainer>
      <pre>{result}</pre>
    </ScrollContainer>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Camera = ({ children }) => {
  const ref = useRef()
  useFrame(() => {
    if (!ref.current || !ref.current.rotation) {
      return
    }
    // @ts-ignore
    ref.current.rotation.x = ref.current.rotation.y += 0.01
  })
  return <mesh ref={ref}>{children}</mesh>
}

const Field = () => {
  const value = useExporterStore()

  // const a = useStore()
  return (
    <Grid>
      <ExportResult></ExportResult>
      <Canvas>
        <ExportPassProvider value={value}>
          <Camera>
            {/* <Thing /> */}
            <mesh>
              <Model />
              <Model2 />
            </mesh>
            <Export />
          </Camera>
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

import React from "react"
import { Canvas } from "react-three-fiber"
import { ExportPassProvider, useExporterStore } from "../StoreContext"
import { Controls } from "./Controls"
import { Background } from "./Background"
import { Exporter } from "./exporter/Exporter"
import { Model } from "../model/Model"
// import { Model } from "../model/ModelBasicExample"

export const World = () => {
  const value = useExporterStore()
  return (
    <Canvas camera={{ position: [20, 20, 30] }}>
      >
      <ExportPassProvider value={value}>
        <Model />
        <Exporter />
      </ExportPassProvider>
      <Background />
      <Controls />
    </Canvas>
  )
}

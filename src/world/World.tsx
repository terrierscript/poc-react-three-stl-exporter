import React from "react"
import { Canvas } from "react-three-fiber"
import { Model } from "../Model"
import { ExportPassProvider, useExporterStore } from "../StoreContext"
import { Controls } from "./Controls"
import { Background } from "./Background"
import { Exporter } from "./exporter/Exporter"

export const World = () => {
  const value = useExporterStore()
  return (
    <Canvas camera={{ position: [0, 0, 30] }}>
      <ExportPassProvider value={value}>
        <Model />
        <Exporter />
      </ExportPassProvider>
      <Background />
      <Controls />
    </Canvas>
  )
}

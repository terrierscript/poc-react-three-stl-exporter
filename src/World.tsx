import React from "react"
import { Canvas } from "react-three-fiber"
import { Model } from "./Model"
import { ExportPassProvider, useExporterStore } from "./StoreContext"
import { ExportStl } from "./exports/ExportStl"
import { ExportGltf } from "./exports/ExportGltf"
import { Controls } from "./Controls"
import { Background } from "./Background"

export const World = () => {
  const value = useExporterStore()
  return (
    <Canvas camera={{ position: [0, 0, 30] }}>
      <ExportPassProvider value={value}>
        <Model />
        <ExportStl />
        <ExportGltf />
      </ExportPassProvider>
      <Background />
      <Controls />
    </Canvas>
  )
}

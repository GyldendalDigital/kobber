"use client"

import React, { useEffect, useRef } from "react"

type Props = {
  fluidTokens: any
}

export const FluidDiagram = ({ fluidTokens }: Props) => {
  const ref = useRef(null)

  const draw = async () => {
    const d = await import("./drawSlope").then((x) => x.drawSlope)
    const ranges = Object.keys(fluidTokens).map((key) => {
      const [min, max] = key.split("-").map((string) => Number(string))
      return [min, max]
    })
    const rangeMax = Math.max(...ranges.flat())
    ranges.forEach(([min, max]) => d(`${min}px`, `${max}px`, min / rangeMax, max / rangeMax))
  }

  useEffect(() => {
    if (ref.current) {
      draw()
    }
  }, [])

  return (
    <canvas ref={ref} id="fluid" width="400" height="400" style={{ maxWidth: "100%" }}></canvas>
  )
}

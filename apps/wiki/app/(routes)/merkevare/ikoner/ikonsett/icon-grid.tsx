"use client"

import React, { useEffect, useState } from "react"
import { Grid } from "@/components/kobber-components"

const lazyLoadIcons = async (): Promise<Record<string, React.ComponentType>> => {
  const { default: _, ...rest } = await import("@gyldendal/kobber-icons/react")
  return rest
}

type Icon = { key: string; component: any }

export const IconGrid = () => {
  const [components, setComponents] = useState<Icon[]>([])

  useEffect(() => {
    lazyLoadIcons().then((components) => {
      setComponents(
        Object.keys(components).map((key) => ({
          key,
          component: components[key as keyof typeof components],
        }))
      )
    })
  }, [])

  return (
    <Grid gridTemplateColumns={"repeat(auto-fill, minmax(100px, 1fr))"}>
      {components.map((x) => IconDisplayer(x))}
    </Grid>
  )
}

const IconDisplayer = ({ key, component: IconComponent }: Icon) => {
  return (
    <div className="flex aspect-square flex-col items-center justify-evenly gap-[10px] rounded-[8px] bg-[#F3ECED] p-[10px] text-center">
      <IconComponent style={{ "--icon-width": "24px" } as React.CSSProperties} />
      {pascalToSpace(key.replace("Icon", ""))}
    </div>
  )
}

const pascalToSpace = (str: string) => {
  return str
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .replace(/^_/, "")
}

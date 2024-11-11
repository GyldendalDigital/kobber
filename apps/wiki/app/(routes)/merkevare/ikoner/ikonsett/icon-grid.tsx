"use client"

import React, { useEffect, useState } from "react"

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
    <div className="grid grid-cols-2 gap-[24px] md:grid-cols-6">
      {components.map((x) => IconDisplayer(x))}
    </div>
  )
}

const IconDisplayer = ({ key, component: IconComponent }: Icon) => {
  return (
    <div
      key={key}
      className="flex aspect-square h-full w-full flex-col items-center justify-center gap-[10px] rounded-[16px] bg-[#F3ECED] p-[10px] text-center"
    >
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

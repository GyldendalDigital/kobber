"use client"

import React, { useEffect, useState } from "react"
import styles from "./icon-grid.module.css"

const lazyLoadIcons = async (): Promise<Record<string, unknown>> => {
  const { default: _, ...rest } = await import("@gyldendal/kobber-icons/react")
  return rest
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  return <div className={styles["icon-grid"]}>{components.map((x) => IconDisplayer(x))}</div>
}

const IconDisplayer = ({ key, component: IconComponent }: Icon) => {
  return (
    <div className="flex aspect-square flex-col items-center justify-evenly gap-[10px] rounded-[8px] bg-[#F3ECED] p-[10px] text-center">
      <IconComponent
        style={{ "--icon-width": "24px", "--icon-height": "24px" } as React.CSSProperties}
      />
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

"use client"

import { FunctionComponent, useEffect } from "react"
import { init as initComponents } from "@gyldendal/kobber-components/init"
import { init as initIcons } from "@gyldendal/kobber-icons/init"

export const InitKobber: FunctionComponent = () => {
  useEffect(() => {
    initComponents()
    initIcons()
  }, [])
  return null
}

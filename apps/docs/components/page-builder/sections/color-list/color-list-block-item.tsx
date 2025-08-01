"use client"

import { useState } from "react"
import { KobberButton, KobberHeading } from "@gyldendal/kobber-components/react"
import { Check } from "@gyldendal/kobber-icons/react-ssr-safe"
import { stegaClean } from "@sanity/client/stega"
import type { PagebuilderType } from "../../page-builder.types"
import styles from "./color-list-block.module.css"

type ItemProps = NonNullable<PagebuilderType<"colorListBlock">["colors"]>[number]

export const ColorListItem = (props: ItemProps) => {
  const { title, hexValue, rgbValue, cmykValue, pmsValue } = props
  const [copiedItems, setCopiedItems] = useState<string[]>([])

  const copyToClipboard = (colorValue: string | undefined) => {
    if (!colorValue) {
      return
    }

    navigator.clipboard.writeText(colorValue).then(() => {
      setCopiedItems([...copiedItems, colorValue])
      setTimeout(() => setCopiedItems([]), 2000)
    })
  }

  return (
    <div className={styles["color-list-item-wrapper"]}>
      <div
        className={styles["color-list-item-image"]}
        style={{
          backgroundColor: stegaClean(hexValue),
        }}
      ></div>
      <div className={styles["color-list-item-content"]}>
        <KobberHeading level="h3" element="title" size="small" color-level="primary">
          {title}
        </KobberHeading>

        <ul>
          {[
            { type: "HEX", value: hexValue },
            { type: "RGB", value: rgbValue },
            { type: "CMYK", value: cmykValue },
            { type: "PMS", value: pmsValue },
          ]
            .filter((color) => color.value !== undefined)
            .map((color) => (
              <li key={color.type}>
                <span>
                  {color.type} {color.value}
                </span>

                {color.value && copiedItems.includes(color.value) ? (
                  <KobberButton
                    style={
                      {
                        "--color": "#03834E",
                        textTransform: "uppercase",
                        height: "1.5rem",
                        paddingInline: "0",
                      } as React.CSSProperties
                    }
                    disabled
                    variant="brand-tertiary-main"
                  >
                    <Check slot="icon" />
                    Kopiert
                  </KobberButton>
                ) : (
                  <KobberButton
                    style={
                      {
                        "--color": "#7155F0",
                        textTransform: "uppercase",
                        height: "1.5rem",
                      } as React.CSSProperties
                    }
                    variant="brand-tertiary-main"
                    onClick={() => copyToClipboard(color.value)}
                  >
                    Kopier
                  </KobberButton>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
